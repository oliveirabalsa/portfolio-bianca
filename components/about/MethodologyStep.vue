<template>
  <div
    class="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div class="md:hidden flex items-center mb-4">
      <div
        class="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-4"
      >
        {{ number }}
      </div>
      <h3 class="text-xl font-semibold text-gray-900">
        {{ title }}
      </h3>
    </div>

    <div
      class="hidden md:flex absolute -top-5 -left-5 w-12 h-12 bg-gray-900 text-white rounded-full font-bold text-lg z-10"
      style="align-items: center; justify-content: center"
    >
      {{ number }}
    </div>

    <h3 class="hidden md:block text-xl font-semibold text-gray-900 mb-4 pt-2">
      {{ title }}
    </h3>

    <p class="text-gray-600 mb-4 text-sm">{{ description }}</p>
    <ul class="space-y-3">
      <li
        v-for="item in items"
        :key="item"
        class="text-sm text-gray-600 flex items-center"
      >
        <div
          class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
        >
          <Check :size="12" color="white" />
        </div>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Check } from "lucide-vue-next";

interface Props {
  number: string;
  title: string;
  description: string;
  items: string[];
}

defineProps<Props>();
</script>
