<script setup lang="ts">
/**
 * The Figma-style presence cursor: an arrow with a name tag.
 *
 * It idles with a gentle float so the page feels like a live multiplayer
 * canvas rather than a screenshot of one.
 */

withDefaults(defineProps<{ label?: string; color?: string; flip?: boolean }>(), {
  label: "Bianca",
  color: "var(--color-terra)",
  flip: false,
});
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none flex animate-float flex-col items-start select-none"
    :class="flip && 'items-end'"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" class="drop-shadow-sm">
      <path
        d="M3 2 L20 11 L12 13 L8 21 Z"
        :fill="color"
        stroke="#FFFFFF"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
    <span
      class="-mt-1 ml-4 rounded-full px-3 py-1 text-[0.8125rem] font-semibold text-white shadow-sm"
      :class="flip && 'mr-4 ml-0'"
      :style="{ background: color }"
    >
      {{ label }}
    </span>
  </div>
</template>
