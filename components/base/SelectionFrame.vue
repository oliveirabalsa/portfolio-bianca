<script setup lang="ts">
/**
 * The Figma "selected layer" frame: a cobalt keyline with four corner handles
 * and a dimension label pinned under the bottom edge.
 *
 * It is the visual joke at the centre of the hero — the designer's own name,
 * selected on the canvas.
 */

withDefaults(defineProps<{ label?: string }>(), { label: undefined });
</script>

<template>
  <div class="relative inline-block border-2 border-cobalt px-5 pt-4 pb-2 sm:px-7 sm:pt-[1.125rem] sm:pb-2.5 lg:px-[1.875rem] lg:pt-5 lg:pb-3">
    <slot />

    <!-- Corner handles -->
    <span
      v-for="pos in [
        'left-[-7px] top-[-7px]',
        'right-[-7px] top-[-7px]',
        'left-[-7px] bottom-[-7px]',
        'right-[-7px] bottom-[-7px]',
      ]"
      :key="pos"
      aria-hidden="true"
      class="absolute size-3 border-2 border-cobalt bg-card"
      :class="pos"
    />

    <!-- Dimension label -->
    <span
      v-if="label"
      aria-hidden="true"
      class="absolute -bottom-[1.375rem] left-1/2 -translate-x-1/2 rounded-md bg-cobalt px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-white sm:-bottom-[1.625rem] sm:px-3 sm:text-sm"
    >
      {{ label }}
    </span>
  </div>
</template>
