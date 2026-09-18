/**
 * One-shot fidelity audit across every page and both Figma breakpoints.
 *
 * Reports, per route and width: page height vs the Figma frame, horizontal
 * overflow, console errors, heading structure and any image missing alt text
 * or failing to load.
 *
 *   node scripts/audit.mjs
 */

import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3111";

/** Figma frame heights, desktop 1440 / mobile 390. */
const ROUTES = [
  { path: "/", name: "Home", figma: { 1440: 5099, 390: 5850 } },
  { path: "/about", name: "Sobre", figma: { 1440: 6299, 390: 9198 } },
  { path: "/contact", name: "Contato", figma: { 1440: 2039, 390: 2516 } },
  { path: "/mentor-cycle", name: "Mentor Cycle", figma: { 1440: 6498, 390: 9150 } },
  { path: "/velion-bank", name: "Velion Bank", figma: { 1440: 11279, 390: 10226 } },
];

const WIDTHS = [1440, 390];

const browser = await chromium.launch();
const rows = [];
const issues = [];

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  for (const route of ROUTES) {
    const errors = [];
    page.removeAllListeners("console");
    page.removeAllListeners("pageerror");
    page.on("console", (m) => m.type() === "error" && errors.push(m.text().slice(0, 120)));
    page.on("pageerror", (e) => errors.push(e.message.slice(0, 120)));

    const res = await page.goto(`${BASE}${route.path}`, {
      waitUntil: "networkidle",
      timeout: 60_000,
    });
    await page.evaluate(() => document.fonts.ready);

    // Trigger lazy images, then settle back at the top.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
        window.scrollTo(0, y);
        await new Promise((r) => requestAnimationFrame(r));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");

    const data = await page.evaluate((vw) => {
      const clipped = (el) => {
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          const o = getComputedStyle(p);
          if (o.overflow !== "visible" || o.overflowX !== "visible") return true;
        }
        return false;
      };

      let overflow = 0;
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (!r.width && !r.height) continue;
        if (getComputedStyle(el).position === "fixed") continue;
        if (el.closest(".sr-only") || el.classList.contains("sr-only")) continue;
        if (clipped(el)) continue;
        overflow = Math.max(overflow, Math.round(r.right - vw));
      }

      const imgs = [...document.querySelectorAll("img")];
      return {
        height: document.documentElement.scrollHeight,
        overflow: Math.max(0, overflow),
        h1: document.querySelectorAll("h1").length,
        headings: [...document.querySelectorAll("h1,h2,h3,h4")].map((h) =>
          Number(h.tagName[1]),
        ),
        imgTotal: imgs.length,
        imgNoAlt: imgs.filter((i) => !i.getAttribute("alt")).length,
        imgBroken: imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
      };
    }, width);

    const figma = route.figma[width];
    const delta = data.height - figma;
    const pct = ((delta / figma) * 100).toFixed(1);

    rows.push({
      width,
      page: route.name,
      height: data.height,
      figma,
      delta,
      pct: `${delta >= 0 ? "+" : ""}${pct}%`,
      overflow: data.overflow,
      h1: data.h1,
      imgs: `${data.imgTotal - data.imgNoAlt - data.imgBroken}/${data.imgTotal}`,
      errors: errors.length,
    });

    if (!res?.ok()) issues.push(`${width} ${route.path}: HTTP ${res?.status()}`);
    if (data.overflow > 0) issues.push(`${width} ${route.path}: overflows +${data.overflow}px`);
    if (data.h1 !== 1) issues.push(`${width} ${route.path}: ${data.h1} <h1> (expected 1)`);
    if (data.imgNoAlt) issues.push(`${width} ${route.path}: ${data.imgNoAlt} img without alt`);
    if (data.imgBroken) issues.push(`${width} ${route.path}: ${data.imgBroken} broken img`);
    for (const e of errors) issues.push(`${width} ${route.path}: ${e}`);

    // A heading level must never jump by more than one.
    for (let i = 1; i < data.headings.length; i++) {
      if (data.headings[i] - data.headings[i - 1] > 1) {
        issues.push(
          `${width} ${route.path}: heading jump h${data.headings[i - 1]} → h${data.headings[i]}`,
        );
        break;
      }
    }
  }

  await context.close();
}

await browser.close();

console.table(rows);

if (issues.length) {
  console.log(`\n${issues.length} ISSUE(S):`);
  for (const i of issues) console.log(`  - ${i}`);
  process.exitCode = 1;
} else {
  console.log("\nClean: no overflow, no console errors, one h1 per page, all images alt'd.");
}
