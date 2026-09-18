# Design notes

The portfolio is a faithful build of the Figma file **Novo portfolio**
(`fileKey: Y2op5WB3co3U0WjLOQMVfk`, page `0:1`).

## Source of truth

| Concern | Source |
| --- | --- |
| Layout, spacing, sizes | Figma — desktop frame at 1440, mobile frame at 390 |
| Copy | **Desktop frames only** (see "Figma inconsistencies") |
| Interaction / motion | Not encoded in Figma; designed here |

### Frames

| Page | Desktop | Mobile |
| --- | --- | --- |
| Home | `3:2` (1440×5099) | `9:2` (390×5850) |
| Sobre | `27:2` (1440×6299) | `31:2` (390×9198) |
| Contato | `36:2` (1440×2039) | `38:2` (390×2516) |
| Case Mentor Cycle | `12:2` (1440×6498) | `16:2` (390×9150) |
| Case Velion Bank | `20:2` (1440×11279) | `24:2` (390×10226) |

### Figma inconsistencies (desktop wins)

The mobile frames are older than the desktop ones and disagree in places.
Copy always comes from the desktop frame:

- Bio: mobile "mais de 4 anos", desktop "mais de 5 anos" — the hero badge says
  `+5` on both, so desktop is right.
- Formação: the mobile frame is missing "Bacharelado em Inteligência
  Artificial — Em andamento"; desktop has all four.
- Contato: mobile shows a `@hotmail` address, desktop `bk.biancakaroline@gmail.com`.
- Mobile trims several sentences (Manifesto, Especialidades, Além do design).

Mobile frames are still authoritative for **layout**: column counts, stacking
order, type scale and which decorative elements are dropped.

## Design system

Tokens live in `assets/css/main.css` under `@theme`.

- **Paper** `#f3efe6` · **ink** `#1d1b18` · **terracotta** `#c4431f` ·
  **cobalt** `#2e5bea` · note stock: butter `#f9de6b`, blush `#f6b8c8`,
  sky `#b9d4f5`, sage `#c5e3b0`
- **Bricolage Grotesque** display · **Instrument Sans** body ·
  **Caveat** handwriting
- Two shadow idioms: hard offset (`8px 8px 0` ink) for cut-out cards, and soft
  drops for photographic objects.

### Primitives (`components/base/`)

`Polaroid` `StickyNote` `PaperCard` `Tape` `Chip` `Btn` `Icon` `Marquee`
`Scribble` `SectionTitle` `SelectionFrame` `StatusPill` `CursorTag`

The Figma frames vary these more than you'd expect, so several carry
breakpoint- or variant-scoped props:

| Primitive | Prop | Why |
| --- | --- | --- |
| `Polaroid` | `ratio`, `ratioLg` | the frames crop the same photo differently per breakpoint |
| `StickyNote` | `pad` (`default`/`roomy`/`snug`/`tight`) | inner padding runs 22–52px |
| `StickyNote` | `tape`, `tapeFrom`, `tapeAlign`, `tapeWidth` | tape is desktop-only on most mobile frames and often off-centre |
| `PaperCard` | `depth` | hard shadow halves below `lg` (Figma: 6px mobile, 10–12 desktop) |
| `SectionTitle` | `size` (`md`/`mid`/`sm`) | 72 / 64 / 56px at `lg` |
| `SectionTitle` | `gap` (`tight`/`snug`/`loose`) | title→subtitle is 12, 20 or 35px |
| `SectionTitle` | `subtitleWidth` (`default`/`wide`/`full`) | measure runs 544 → 900px |
| `Tape` | `from` | `"lg"` drops it below the breakpoint |

`case/Figure` adds `mode` (`fit`/`crop`/`box`): `box` pins the Figma
placeholder's ratio, which is the only way a row of cards stays uniform when
the source screenshots have aspect ratios from 0.94 to 3.7.

## Gotchas worth knowing

1. **Tailwind v4 splits transforms.** `rotate-*`, `scale-*` and `translate-*`
   compile to the individual `rotate` / `scale` / `translate` properties, not
   to `transform`. `transition-transform` will NOT animate them — name the
   properties, or use the `transition-paper` utility.

2. **A component's root `display` beats a caller's `hidden`.** Both are
   display utilities in the same layer, so `<BaseStatusPill class="hidden" />`
   does nothing when the root already has `inline-flex`. Wrap the call site in
   a `<span class="hidden lg:block">` instead.

3. **Padding does not inset absolutely positioned children.** Anchoring a
   sticker to `.container-bk` places it against the container's padding box,
   i.e. past the 64px gutter. Use an unpadded `relative` wrapper inside the
   container (see `.hero-stage`).

4. **Inline `transform`/`rotate` outranks a hover class.** Paper components
   take their resting tilt from a `--paper-tilt` custom property consumed by a
   scoped rule, so `:hover` can still straighten them.

5. **`--tilt` vs `--paper-tilt`.** `.reveal-tilt` uses `--tilt`, which children
   inherit. Components use `--paper-tilt` to avoid picking it up.

6. **Never add a `**/.claude/**` ignore glob to `nuxt.config.ts`.** This
   worktree lives under `<repo>/.claude/worktrees/`, so that pattern matches
   every file and silently disables hot-reload.

7. **Rotated objects overhang by design**, so `html` sets `overflow-x: hidden`.
   Verify real overflow with `scripts/overflow.mjs`, which ignores anything an
   ancestor already clips.

## Verification workflow

The dev server must be running on port 3111.

```bash
# full-page screenshots at both Figma widths
node scripts/shot.mjs <outDir> 1440
node scripts/shot.mjs <outDir> 390

# side-by-side bands: Figma (left) vs implementation (right)
node scripts/compare.mjs <figma.png> <impl.png> <outDir> [bandHeight]

# horizontal overflow audit
node scripts/overflow.mjs / 390
```

```bash
# one-shot fidelity + a11y audit: every page, both breakpoints
node scripts/audit.mjs
```

`shot.mjs` forces `prefers-reduced-motion`, so scroll reveals are captured
settled rather than mid-animation, and it fails the run on console errors.
`audit.mjs` additionally checks page height against the Figma frame, one `h1`
per page, heading-level jumps, and image alt text / load failures.

## Known remaining deltas

Measured by `scripts/audit.mjs` against the Figma frame heights:

| Page | 1440 | 390 |
| --- | --- | --- |
| Home | −0.0% | +1.5% |
| Sobre | −0.5% | +4.2% |
| Contato | +0.0% | −2.4% |
| Mentor Cycle | −2.2% | +1.9% |
| Velion Bank | −1.6% | +2.1% |

The mobile overages are almost entirely the "desktop wins for copy" rule: the
mobile frames trim sentences and drop a Formação card, so rendering the fuller
desktop copy costs height the frame doesn't budget for.

Two glyph gaps worth knowing: Figma uses a window/panel, a 2×2 grid and a cube
for the UI Design / Design Systems / Prototipagem specialties, and the inlined
icon set has no equivalents — `palette`/`layers`/`wand` stand in.
