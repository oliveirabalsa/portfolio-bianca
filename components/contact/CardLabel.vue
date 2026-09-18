<script setup lang="ts">
import type { IconName } from "~/components/base/Icon.vue";

/**
 * A contact card's title row.
 *
 * Figma draws it as a 22px (mobile) / 25px (desktop) line icon followed by a
 * handwritten label — Caveat Bold 28px/39px on mobile, 30px/42px on desktop.
 * The label is terracotta on the two white cards and ink on the three
 * coloured notes; the icon stays ink either way.
 *
 * One 24px icon covers both breakpoints rather than two swapped copies: the
 * 3px difference is not worth a second element in the DOM.
 */

withDefaults(
  defineProps<{
    icon: IconName;
    label: string;
    tone?: "terra" | "ink";
    /** "lg" is the e-mail card's slightly larger desktop label. */
    size?: "md" | "lg";
  }>(),
  { tone: "ink", size: "md" },
);

const DESKTOP_SIZE = {
  md: "lg:text-[1.875rem] lg:leading-[2.625rem]",
  lg: "lg:text-[2rem] lg:leading-[2.8125rem]",
} as const;
</script>

<template>
  <p
    class="m-0 flex items-center gap-3 font-hand text-[1.75rem] leading-[2.4375rem] font-bold"
    :class="[tone === 'terra' ? 'text-terra' : 'text-ink', DESKTOP_SIZE[size]]"
  >
    <BaseIcon :name="icon" :size="24" class="text-ink" />
    {{ label }}
  </p>
</template>
