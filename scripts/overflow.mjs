import { chromium } from "playwright";
const route = process.argv[2] ?? "/";
const width = Number(process.argv[3] ?? 390);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
await p.goto(`http://localhost:3111${route}`, { waitUntil: "networkidle" });
await p.evaluate(() => document.fonts.ready);
console.log(JSON.stringify(await p.evaluate((vw) => {
  // Ignore anything an ancestor already clips — full-bleed marquees are
  // meant to extend past the viewport inside an overflow-hidden section.
  const clipped = (el) => {
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const o = getComputedStyle(p);
      if (o.overflow !== "visible" || o.overflowX !== "visible") return true;
    }
    return false;
  };
  const bad = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (getComputedStyle(el).position === "fixed") continue;
    if (clipped(el)) continue;
    if (r.right > vw + 0.5 || r.left < -0.5) {
      bad.push({ tag: el.tagName.toLowerCase(), cls: (el.className||"").toString().slice(0,90),
                 left: Math.round(r.left), right: Math.round(r.right) });
    }
  }
  return { scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, count: bad.length, worst: bad.slice(0, 10) };
}, width), null, 1));
await b.close();
