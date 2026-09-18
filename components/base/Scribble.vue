<script setup lang="ts">
import { useIntersectionObserver, usePreferredReducedMotion } from "@vueuse/core";

/**
 * Hand-drawn marker accents. Self-contained: each scribble watches itself and
 * draws its stroke on once, the first time it scrolls into view.
 */

const props = withDefaults(
  defineProps<{
    variant?: "squiggle" | "arrow" | "underline" | "star";
    color?: string;
    width?: number;
    /** Set false to render fully drawn with no animation. */
    animate?: boolean;
  }>(),
  { variant: "squiggle", color: "var(--color-terra)", width: 90, animate: true },
);

/** viewBox, path data, natural aspect and a dash length that covers the path. */
const SHAPES = {
  squiggle: {
    box: "0 0 90 30",
    ratio: 90 / 30,
    dash: 150,
    paths: ["M2 18 Q 12 4, 22 18 T 42 18 T 62 18 T 88 16"],
  },
  arrow: {
    box: "0 0 120 80",
    ratio: 120 / 80,
    dash: 260,
    paths: ["M4 14 C 40 0, 82 18, 70 42 S 88 70, 112 70", "M100 60 L112 70 L99 76"],
  },
  underline: {
    box: "0 0 200 18",
    ratio: 200 / 18,
    dash: 240,
    paths: ["M3 12 C 46 2, 92 16, 138 8 S 182 4, 197 10"],
  },
  star: {
    box: "0 0 24 24",
    ratio: 1,
    dash: 95,
    paths: ["M12 2 L14.2 9.3 L21.5 11.5 L14.2 13.7 L12 21 L9.8 13.7 L2.5 11.5 L9.8 9.3 Z"],
  },
} as const;

const shape = computed(() => SHAPES[props.variant]);
const height = computed(() => Math.round(props.width / shape.value.ratio));

const root = ref<HTMLElement | null>(null);
const reduced = usePreferredReducedMotion();

/** Server-rendered as drawn, so no-JS and reduced-motion get a static mark. */
const drawn = ref(true);

onMounted(() => {
  if (!props.animate || reduced.value === "reduce") return;

  drawn.value = false;
  const { stop } = useIntersectionObserver(
    root,
    ([entry]) => {
      if (!entry?.isIntersecting) return;
      drawn.value = true;
      stop();
    },
    { threshold: 0.4 },
  );
});
</script>

<template>
  <span ref="root" aria-hidden="true" class="inline-block shrink-0 align-middle leading-none">
    <svg
      :width="width"
      :height="height"
      :viewBox="shape.box"
      fill="none"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="overflow-visible"
    >
      <path
        v-for="(d, i) in shape.paths"
        :key="i"
        :d="d"
        :stroke-dasharray="shape.dash"
        :stroke-dashoffset="drawn ? 0 : shape.dash"
        :style="{
          transition: `stroke-dashoffset 900ms var(--ease-paper) ${i * 180}ms`,
        }"
      />
    </svg>
  </span>
</template>
