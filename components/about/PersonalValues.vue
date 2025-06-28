<template>
  <section class="py-8 md:py-16 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ title }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div
          v-for="value in personalValues"
          :key="value.title"
          class="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="flex justify-center mb-6">
            <component :is="value.icon" :size="48" :class="value.color" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ value.title }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { personalValues } from "~/lib/about-data";

interface Props {
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Valores Pessoais",
});
</script>
