/**
 * Full-page screenshot capture for design-comparison rounds.
 *
 * Renders each route at the two Figma frame widths (1440 desktop, 390 mobile)
 * and writes full-page PNGs. Scroll reveals are disabled so every section is
 * captured in its settled state rather than mid-animation.
 *
 *   node scripts/shot.mjs <outDir> [width] [routes...]
 */

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:3111";
const outDir = process.argv[2] ?? "shots";
const width = Number(process.argv[3] ?? 1440);
const routes =
  process.argv.slice(4).length > 0
    ? process.argv.slice(4)
    : ["/", "/about", "/contact", "/mentor-cycle", "/velion-bank"];

const name = (route) => (route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-"));

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width, height: 1000 },
  deviceScaleFactor: 1,
  // Reveal animations are entrance-only; forcing reduced motion makes the
  // capture deterministic and guarantees nothing is stuck at opacity 0.
  reducedMotion: "reduce",
});

const page = await context.newPage();
const problems = [];

page.on("console", (msg) => {
  if (msg.type() === "error") problems.push(`console: ${msg.text()}`);
});
page.on("pageerror", (err) => problems.push(`pageerror: ${err.message}`));

for (const route of routes) {
  const url = `${BASE}${route}`;
  const response = await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });

  if (!response || !response.ok()) {
    problems.push(`${route} -> HTTP ${response?.status() ?? "no response"}`);
  }

  // Webfonts must be resolved before measuring, or headings reflow after capture.
  await page.evaluate(() => document.fonts.ready);

  // Walk the page so any lazy-loaded image below the fold starts fetching,
  // then settle back at the top for the capture.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => requestAnimationFrame(r));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(350);

  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const file = path.join(outDir, `${name(route)}-${width}.png`);
  await page.screenshot({ path: file, fullPage: true });

  // A horizontal overflow is always a layout bug at these widths.
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );

  console.log(
    `${route.padEnd(16)} ${width}x${height}  ${file}${overflow > 0 ? `  ⚠ overflow +${overflow}px` : ""}`,
  );
}

await browser.close();

if (problems.length) {
  console.log("\nPROBLEMS:");
  for (const p of problems) console.log(`  - ${p}`);
  process.exitCode = 1;
} else {
  console.log("\nNo console errors, no failed routes.");
}
