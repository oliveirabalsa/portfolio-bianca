<template>
  <div
    class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:bg-gray-800/70 transition-colors duration-300"
  >
    <div class="flex justify-center mb-6">
      <div
        class="w-16 h-16 bg-white rounded-full flex items-center justify-center"
      >
        <img :src="icon" :alt="title" class="w-8 h-8 object-contain" />
      </div>
    </div>

    <h3 class="text-xl font-semibold text-white mb-4">
      {{ title }}
    </h3>

    <p class="text-gray-300 text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  description: string;
}

defineProps<Props>();
</script>
