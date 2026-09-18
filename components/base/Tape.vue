<script setup lang="ts">
/**
 * A strip of washi tape. Sits half off the top edge of whatever it holds down,
 * so the parent needs `position: relative` and must not clip overflow.
 */

type Tone = "butter" | "blush" | "sky" | "sage" | "white";

const props = withDefaults(
  defineProps<{
    tone?: Tone;
    /** Horizontal placement along the parent's top edge. */
    align?: "left" | "center" | "right";
    /** Degrees of tilt — a little randomness reads as hand-applied. */
    tilt?: number;
    width?: number;
    height?: number;
    /** "lg" hides the tape below the lg breakpoint (Figma drops it on mobile). */
    from?: "base" | "lg";
  }>(),
  {
    tone: "butter",
    align: "center",
    tilt: -4,
    width: 110,
    height: 30,
    from: "base",
  },
);

const TONES: Record<Tone, string> = {
  butter: "rgb(249 222 107 / 0.88)",
  blush: "rgb(246 184 200 / 0.88)",
  sky: "rgb(185 212 245 / 0.9)",
  sage: "rgb(197 227 176 / 0.9)",
  white: "rgb(255 255 255 / 0.78)",
};

const positionStyle = computed(() => {
  if (props.align === "center") {
    return { left: "50%", transform: `translateX(-50%) rotate(${props.tilt}deg)` };
  }
  const edge = props.align === "left" ? { left: "12%" } : { right: "12%" };
  return { ...edge, transform: `rotate(${props.tilt}deg)` };
});
</script>

<template>
  <span
    aria-hidden="true"
    class="pointer-events-none absolute z-20"
    :class="from === 'lg' ? 'hidden lg:block' : 'block'"
    :style="{
      top: `-${Math.round(height / 2)}px`,
      width: `${width}px`,
      height: `${height}px`,
      background: TONES[tone],
      // Nicked corners + a faint sheen make it read as translucent tape
      // rather than a flat rectangle.
      clipPath: 'polygon(4% 0, 96% 3%, 100% 100%, 0 96%)',
      boxShadow: '0 2px 6px rgb(29 27 24 / 0.12)',
      ...positionStyle,
    }"
  />
</template>
