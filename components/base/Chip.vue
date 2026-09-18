<script setup lang="ts">
/** A rotated capsule tag. Outlined variants carry the ink keyline; the soft
 *  variant is the flat paper-tinted pill used inside project cards. */

type Tone = "card" | "butter" | "blush" | "sky" | "sage" | "soft" | "ink";

withDefaults(
  defineProps<{
    tone?: Tone;
    tilt?: number;
    size?: "sm" | "md";
    bordered?: boolean;
  }>(),
  { tone: "card", tilt: 0, size: "md", bordered: true },
);

const TONES: Record<Tone, string> = {
  card: "bg-card",
  butter: "bg-butter",
  blush: "bg-blush",
  sky: "bg-sky",
  sage: "bg-sage",
  soft: "bg-paper",
  ink: "bg-ink text-white",
};
</script>

<template>
  <span
    class="chip inline-flex items-center rounded-full font-display font-semibold whitespace-nowrap"
    :class="[
      TONES[tone],
      bordered ? 'border-2 border-ink' : 'border-0',
      size === 'sm'
        ? 'px-3 py-1.5 text-sm'
        : 'px-4 py-2.5 text-[0.9375rem] sm:px-5 sm:text-[1.0625rem]',
    ]"
    :style="{ '--paper-tilt': `${tilt}deg` }"
  >
    <slot />
  </span>
</template>

<style scoped>
.chip {
  rotate: var(--paper-tilt, 0deg);
  transition:
    rotate 300ms var(--ease-paper),
    scale 300ms var(--ease-paper);
}

.chip:hover {
  rotate: 0deg;
  scale: 1.05;
}

@media (prefers-reduced-motion: reduce) {
  .chip {
    transition: none;
  }
  .chip:hover {
    scale: 1;
  }
}
</style>
