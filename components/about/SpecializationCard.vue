<template>
  <div
    class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 min-h-[280px] flex flex-col"
  >
    <div class="flex justify-center mb-4">
      <div
        class="w-16 h-16 bg-black rounded-full flex items-center justify-center"
      >
        <component :is="icon" :size="24" color="white" />
      </div>
    </div>
    <h3 class="text-xl font-semibold text-gray-900 mb-3">
      {{ title }}
    </h3>
    <p class="text-gray-600 text-sm leading-relaxed flex-grow">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

interface Props {
  icon: Component;
  title: string;
  description: string;
}

defineProps<Props>();
</script>
