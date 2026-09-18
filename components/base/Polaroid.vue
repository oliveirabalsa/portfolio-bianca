<script setup lang="ts">
/**
 * A polaroid: white border, photo window, handwritten caption on the wide
 * bottom lip, and a strip of tape holding it to the page.
 *
 * The resting rotation arrives as a custom property rather than an inline
 * `transform`/`rotate`, because an inline value would outrank the hover rule
 * and the photo could never straighten up.
 */

withDefaults(
  defineProps<{
    src: string;
    alt: string;
    caption?: string;
    tilt?: number;
    /** Photo-window aspect ratio, e.g. "4/5". */
    ratio?: string;
    /** Optional override from `lg` up — the Figma mobile and desktop frames
     *  crop the same photo to different proportions. */
    ratioLg?: string;
    tapeTone?: "butter" | "blush" | "sky" | "sage" | "white";
    tapeAlign?: "left" | "center" | "right";
    /** Lift and straighten slightly on hover. */
    interactive?: boolean;
    /** Skip the tape entirely. */
    bare?: boolean;
    captionSize?: "sm" | "md" | "lg";
  }>(),
  {
    caption: undefined,
    ratioLg: undefined,
    tilt: -6,
    ratio: "4/5",
    tapeTone: "butter",
    tapeAlign: "center",
    interactive: true,
    bare: false,
    captionSize: "md",
  },
);

const CAPTION_SIZE = {
  sm: "text-[1.375rem]",
  md: "text-[1.75rem]",
  lg: "text-[2rem]",
} as const;
</script>

<template>
  <figure
    class="polaroid relative m-0 bg-card p-3 shadow-photo sm:p-3.5"
    :class="interactive && 'polaroid--interactive'"
    :style="{ '--paper-tilt': `${tilt}deg` }"
  >
    <BaseTape v-if="!bare" :tone="tapeTone" :align="tapeAlign" :tilt="tilt > 0 ? -5 : 4" />

    <div
      class="photo hatch relative overflow-hidden bg-paper-deep"
      :style="{ '--ph-ratio': ratio, '--ph-ratio-lg': ratioLg ?? ratio }"
    >
      <img
        :src="src"
        :alt="alt"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover"
      />
    </div>

    <figcaption
      v-if="caption"
      class="flex items-center justify-center pt-3 pb-1 font-hand leading-none text-ink"
      :class="CAPTION_SIZE[captionSize]"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
.photo {
  aspect-ratio: var(--ph-ratio);
}

@media (width >= 64rem) {
  .photo {
    aspect-ratio: var(--ph-ratio-lg);
  }
}

.polaroid {
  rotate: var(--paper-tilt, 0deg);
  /* Tailwind v4 animates `rotate`/`translate` as their own properties, so the
     transition has to name them explicitly — `transform` alone does nothing. */
  transition:
    rotate 500ms var(--ease-paper),
    translate 500ms var(--ease-paper),
    box-shadow 500ms var(--ease-paper);
}

/* The lift never raises z-index: the polaroid must stay behind the stickers,
   badges and cursor tags that sit alongside it. */
.polaroid--interactive:hover {
  rotate: 0deg;
  translate: 0 -8px;
  box-shadow: var(--shadow-lift);
}

@media (prefers-reduced-motion: reduce) {
  .polaroid,
  .polaroid--interactive:hover {
    transition: none;
    translate: none;
  }
}
</style>
