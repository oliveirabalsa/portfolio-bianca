<script setup lang="ts">
/**
 * The icon set, inlined. Every glyph is drawn on a 24px grid with a 2px
 * round-capped stroke, matching the Figma exactly — and inlining keeps them
 * off the critical path with no icon-font or sprite request.
 */

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "arrow-left"
  | "instagram"
  | "linkedin"
  | "whatsapp"
  | "mail"
  | "copy"
  | "check"
  | "pin"
  | "menu"
  | "close"
  | "user"
  | "users"
  | "lightbulb"
  | "chart"
  | "compass"
  | "palette"
  | "layers"
  | "wand"
  | "alert"
  | "sparkle"
  | "cap";

const props = withDefaults(defineProps<{ name: IconName; size?: number }>(), { size: 20 });

/** Stroked paths. Rendered with fill="none". */
const STROKE: Partial<Record<IconName, string[]>> = {
  "arrow-right": ["M5 12h14", "M13 6l6 6-6 6"],
  "arrow-up-right": ["M7 17 17 7", "M8 7h9v9"],
  "arrow-left": ["M19 12H5", "M11 18l-6-6 6-6"],
  linkedin: [
    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z",
    "M2 9h4v12H2z",
    "M4 2.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z",
  ],
  whatsapp: [
    "M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 3.6 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z",
  ],
  mail: ["M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z", "M22 6l-10 7L2 6"],
  copy: ["M9 9h10v12H9z", "M5 15H3V3h12v2"],
  check: ["M4 13l5 5L20 6"],
  pin: ["M12 22s7-7.6 7-12a7 7 0 1 0-14 0c0 4.4 7 12 7 12z", "M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"],
  menu: ["M4 8h16", "M4 16h16"],
  close: ["M6 6l12 12", "M18 6 6 18"],
  user: ["M12 12.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2z", "M4 21a8 8 0 0 1 16 0"],
  users: [
    "M9 12.1a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2z",
    "M2 21a7 7 0 0 1 14 0",
    "M16 3.1a4 4 0 0 1 0 7.8",
    "M22 21a7 7 0 0 0-5-6.7",
  ],
  lightbulb: ["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"],
  chart: ["M3 3v18h18", "M7 15l4-4 3 3 5-6"],
  compass: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M15.5 8.5l-2 5-5 2 2-5 5-2z"],
  palette: [
    "M12 21a9 9 0 1 1 9-9c0 2.2-1.8 3-3.5 3H16a2 2 0 0 0-1.6 3.2c.5.7.2 1.7-.6 2a4 4 0 0 1-1.8.8z",
    "M7.5 11.5v.01",
    "M10.5 8v.01",
    "M15 8.5v.01",
  ],
  layers: ["M12 3 3 8l9 5 9-5-9-5z", "M3 13l9 5 9-5", "M3 18l9 5 9-5"],
  wand: ["M4 20 18 6", "M15 3l1.2 2.8L19 7l-2.8 1.2L15 11l-1.2-2.8L11 7l2.8-1.2L15 3z", "M6 13l.8 1.9L8.7 16l-1.9.8L6 18.7l-.8-1.9L3.3 16l1.9-.8L6 13z"],
  alert: ["M12 3 2.5 20h19L12 3z", "M12 9v5", "M12 17.2v.01"],
  cap: ["M2 8.5 12 4l10 4.5-10 4.5-10-4.5z", "M6 10.6V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.4", "M21 9.5V15"],
};

/** Glyphs that need a filled shape rather than a stroke. */
const FILLED: Partial<Record<IconName, string[]>> = {
  sparkle: ["M12 2l2.2 7.3L21.5 11.5l-7.3 2.2L12 21l-2.2-7.3L2.5 11.5l7.3-2.2L12 2z"],
};

const isFilled = computed(() => props.name in FILLED);
const paths = computed(() => (isFilled.value ? FILLED[props.name]! : (STROKE[props.name] ?? [])));
</script>

<template>
  <svg
    aria-hidden="true"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="isFilled ? 'currentColor' : 'none'"
    :stroke="isFilled ? 'none' : 'currentColor'"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="shrink-0"
  >
    <!-- Instagram needs a rounded square, which is cleaner as real elements. -->
    <template v-if="name === 'instagram'">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </template>
    <path v-for="(d, i) in paths" v-else :key="i" :d="d" />
  </svg>
</template>
