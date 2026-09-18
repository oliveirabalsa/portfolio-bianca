<script setup lang="ts">
/**
 * A screenshot glued to the page.
 *
 * Three sizing modes, because the Figma frames treat images three ways and the
 * source assets have wildly different aspect ratios (778×830 up to 2000×542):
 *
 * - `fit`  natural height — the box grows with the image.
 * - `crop` the box is capped and the image is top-anchored, so a long document
 *          shows its head instead of ballooning the page.
 * - `box`  a fixed-ratio box, sized from the Figma placeholder, with the image
 *          either letterboxed (`contain`) or filled and top-anchored (`cover`).
 *
 * `box` is what keeps a row of cards identical. The three Mentor Cycle
 * flowcharts are 778×830, 1424×806 and 1700×783, yet Figma draws all three
 * `Card fluxo` placeholders at 392×310 (nodes 15:8 / 15:14 / 15:20), so only a
 * fixed box reproduces that. They letterbox rather than crop: these are
 * documents and the whole diagram has to stay readable.
 */

withDefaults(
  defineProps<{
    src: string;
    alt: string;
    caption?: string;
    tilt?: number;
    /** Figma draws tape on some figures and not others — see each call site. */
    tape?: boolean;
    tapeTone?: "butter" | "blush" | "sky" | "sage" | "white";
    tapeAlign?: "left" | "center" | "right";
    tapeWidth?: number;
    /** "lg" drops the tape below the lg breakpoint, as the mobile frames do. */
    tapeFrom?: "base" | "lg";
    mode?: "fit" | "crop" | "box";
    /** `box` only: width ÷ height of the Figma placeholder. */
    ratio?: number;
    /** `box` only: the mobile frame's box, which is often a different crop. */
    ratioSm?: number;
    /** `box` only: letterbox the image or fill and crop it. */
    fit?: "contain" | "cover";
    /** `crop` only. */
    maxHeight?: string;
    /** Card padding in px, straight off the Figma placeholder inset. */
    pad?: 12 | 16 | 18 | 22;
    bg?: string;
    captionAlign?: "left" | "center";
  }>(),
  {
    caption: undefined,
    tilt: -1,
    tape: true,
    tapeTone: "butter",
    tapeAlign: "center",
    tapeWidth: 120,
    tapeFrom: "base",
    mode: "fit",
    ratio: 1.6,
    ratioSm: undefined,
    fit: "cover",
    maxHeight: "34rem",
    pad: 18,
    bg: "#FFFFFF",
    captionAlign: "center",
  },
);

/** Figma insets its image placeholders by 16–22px depending on the card size. */
const PADS = { 12: "p-3", 16: "p-4", 18: "p-[1.125rem]", 22: "p-[1.375rem]" } as const;
</script>

<template>
  <figure class="case-figure relative m-0" :style="{ '--paper-tilt': `${tilt}deg` }">
    <BaseTape
      v-if="tape"
      :tone="tapeTone"
      :align="tapeAlign"
      :tilt="tilt > 0 ? -6 : 5"
      :width="tapeWidth"
      :from="tapeFrom"
    />

    <BasePaperCard
      :tilt="0"
      radius="lg"
      depth="md"
      :interactive="false"
      class="overflow-hidden"
      :class="PADS[pad]"
    >
      <div
        class="overflow-hidden rounded-[0.625rem]"
        :class="mode === 'box' && 'fig-box'"
        :style="{
          background: bg,
          ...(mode === 'crop' ? { maxHeight } : {}),
          ...(mode === 'box'
            ? { '--fig-ratio': String(ratio), '--fig-ratio-sm': String(ratioSm ?? ratio) }
            : {}),
        }"
      >
        <img
          :src="src"
          :alt="alt"
          loading="lazy"
          decoding="async"
          class="w-full"
          :class="
            mode === 'box'
              ? ['h-full', fit === 'contain' ? 'object-contain' : 'object-cover object-top']
              : mode === 'crop'
                ? 'h-auto object-cover object-top'
                : 'h-auto'
          "
        />
      </div>
    </BasePaperCard>

    <!-- Figma puts the flow captions at x=16 — flush with the image's left
         edge, not centred (nodes 15:10 / 15:16 / 15:22). -->
    <figcaption
      v-if="caption"
      class="mt-1 font-hand text-[1.5rem] leading-[1.35] font-bold sm:text-[1.75rem]"
      :class="captionAlign === 'left' ? 'px-4 text-left' : 'text-center'"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
.case-figure {
  rotate: var(--paper-tilt, 0deg);
}

/* The mobile frames crop the same asset differently — e.g. the Mentor Cycle
   cover is 1280x638 (2.008) on desktop but 322x265 (1.215) at 390 — so the box
   ratio is a custom property swapped at the lg breakpoint rather than a
   single `aspect-[...]` utility. */
.fig-box {
  aspect-ratio: var(--fig-ratio-sm);
}

@media (width >= 64rem) {
  .fig-box {
    aspect-ratio: var(--fig-ratio);
  }
}
</style>
