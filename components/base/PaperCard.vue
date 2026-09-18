<script setup lang="ts">
/**
 * The signature card: white stock, a 2px ink keyline and a hard offset shadow
 * that reads as a cut-out glued to the page. On hover it slides into its own
 * shadow — the shadow shrinks by exactly the distance the card travels, so the
 * card appears to be pressed flat against the paper.
 *
 * Depth, travel and the resting rotation all arrive as custom properties
 * consumed by scoped rules, for two reasons:
 *   - an inline `rotate`/`translate` would outrank the `:hover` rule;
 *   - the offsets can then be halved below `lg`, because a 12px shadow that
 *     reads as deliberate on a 630px desktop card is overbearing on a 344px
 *     phone card (Figma uses 6px on mobile, 10–12px on desktop).
 */

const props = withDefaults(
  defineProps<{
    tilt?: number;
    /** Shadow depth. */
    depth?: "sm" | "md" | "lg";
    radius?: "md" | "lg" | "xl" | "pill";
    tone?: "card" | "paper" | "ink";
    interactive?: boolean;
    /** Render as <a>/<NuxtLink> instead of <div>. */
    as?: string;
  }>(),
  {
    tilt: 0,
    depth: "md",
    radius: "lg",
    tone: "card",
    interactive: true,
    as: "div",
  },
);

/** [resting offset, hover offset, travel] in px at `lg` and up. */
const DEPTH = {
  sm: [4, 1, 3],
  md: [8, 3, 5],
  lg: [12, 5, 7],
} as const;

const RADIUS = {
  md: "rounded-xl",
  lg: "rounded-[1.375rem]",
  xl: "rounded-[2rem]",
  pill: "rounded-full",
} as const;

const TONE = {
  card: "bg-card text-ink",
  paper: "bg-paper text-ink",
  ink: "bg-ink text-paper",
} as const;

const vars = computed(() => {
  const [rest, hover, travel] = DEPTH[props.depth];
  return {
    "--paper-tilt": `${props.tilt}deg`,
    "--pc-rest": `${rest}px`,
    "--pc-hover": `${hover}px`,
    "--pc-travel": `${travel}px`,
    // Mobile keeps the same idiom at roughly half the offset.
    "--pc-rest-sm": `${Math.max(3, Math.round(rest / 2))}px`,
    "--pc-hover-sm": `${Math.max(1, Math.round(hover / 2))}px`,
    "--pc-travel-sm": `${Math.max(2, Math.round(travel / 2))}px`,
  };
});
</script>

<template>
  <component
    :is="as"
    class="paper-card border-2 border-ink"
    :class="[TONE[tone], RADIUS[radius], interactive && 'paper-card--interactive']"
    :style="vars"
  >
    <slot />
  </component>
</template>

<style scoped>
.paper-card {
  position: relative;
  rotate: var(--paper-tilt, 0deg);
  box-shadow: var(--pc-rest-sm) var(--pc-rest-sm) 0 var(--color-ink);
  transition:
    translate 300ms var(--ease-paper),
    box-shadow 300ms var(--ease-paper);
}

.paper-card--interactive:hover,
.paper-card--interactive:focus-within {
  translate: var(--pc-travel-sm) var(--pc-travel-sm);
  box-shadow: var(--pc-hover-sm) var(--pc-hover-sm) 0 var(--color-ink);
}

@media (width >= 64rem) {
  .paper-card {
    box-shadow: var(--pc-rest) var(--pc-rest) 0 var(--color-ink);
  }

  .paper-card--interactive:hover,
  .paper-card--interactive:focus-within {
    translate: var(--pc-travel) var(--pc-travel);
    box-shadow: var(--pc-hover) var(--pc-hover) 0 var(--color-ink);
  }
}

@media (prefers-reduced-motion: reduce) {
  .paper-card {
    transition: none;
  }

  .paper-card--interactive:hover,
  .paper-card--interactive:focus-within {
    translate: none;
  }
}
</style>
