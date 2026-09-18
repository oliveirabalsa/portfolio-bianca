<script setup lang="ts">
/** "Disponível para projetos" — outlined pill with a pulsing green dot. */

withDefaults(defineProps<{ label: string; compact?: boolean }>(), { compact: false });
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card font-semibold"
    :class="compact ? 'px-3.5 py-2 text-[0.8125rem]' : 'px-4 py-3 text-sm'"
  >
    <span class="relative flex h-2.5 w-2.5 shrink-0">
      <span class="absolute inset-0 animate-blink rounded-full bg-forest" />
      <span class="relative h-2.5 w-2.5 rounded-full bg-forest" />
    </span>
    {{ label }}
  </span>
</template>
