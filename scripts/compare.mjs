/**
 * Side-by-side comparison slices: Figma frame (left) vs implementation (right).
 *
 * Both images are normalised to the same width, then cut into horizontal
 * bands so each pair can be inspected at readable resolution instead of
 * squinting at a 5000px-tall page.
 *
 *   node scripts/compare.mjs <figma.png> <impl.png> <outDir> [bandHeight]
 */

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";

const [figmaPath, implPath, outDir, bandArg] = process.argv.slice(2);
const band = Number(bandArg ?? 1200);

if (!figmaPath || !implPath || !outDir) {
  console.error("usage: node scripts/compare.mjs <figma.png> <impl.png> <outDir> [bandHeight]");
  process.exit(1);
}

await mkdir(outDir, { recursive: true });

// Delegate the pixel work to Python/PIL, which is already available here and
// handles large PNGs without pulling in an image dependency.
const py = `
import sys
from PIL import Image, ImageDraw

figma = Image.open(${JSON.stringify(figmaPath)}).convert("RGB")
impl  = Image.open(${JSON.stringify(implPath)}).convert("RGB")
band  = ${band}
outdir = ${JSON.stringify(outDir)}

# Normalise both to the same width.
W = min(figma.width, impl.width)
def norm(im):
    if im.width != W:
        h = round(im.height * W / im.width)
        im = im.resize((W, h), Image.LANCZOS)
    return im
figma, impl = norm(figma), norm(impl)

H = max(figma.height, impl.height)
LABEL = 26
n = (H + band - 1) // band
print(f"width={W} figma_h={figma.height} impl_h={impl.height} bands={n}")

for i in range(n):
    top, bot = i * band, min((i + 1) * band, H)
    bh = bot - top

    def slice_of(im):
        canvas = Image.new("RGB", (W, bh), "white")
        if top < im.height:
            canvas.paste(im.crop((0, top, W, min(bot, im.height))), (0, 0))
        return canvas

    sheet = Image.new("RGB", (W * 2 + 12, bh + LABEL), "white")
    sheet.paste(slice_of(figma), (0, LABEL))
    sheet.paste(slice_of(impl), (W + 12, LABEL))
    d = ImageDraw.Draw(sheet)
    d.text((6, 7), f"FIGMA  y={top}-{bot}", fill="black")
    d.text((W + 18, 7), f"IMPLEMENTATION  y={top}-{bot}", fill="black")
    # Divider so the seam between the two is unambiguous.
    d.rectangle([W + 4, 0, W + 7, sheet.height], fill="red")

    # Scale down so a pair fits comfortably in a single review image.
    target_w = 1500
    if sheet.width > target_w:
        sheet = sheet.resize((target_w, round(sheet.height * target_w / sheet.width)), Image.LANCZOS)
    p = f"{outdir}/band-{i:02d}.png"
    sheet.save(p)
    print(p, sheet.size)
`;

execFileSync("python3", ["-c", py], { stdio: "inherit" });
