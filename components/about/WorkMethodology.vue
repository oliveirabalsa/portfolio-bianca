<template>
  <section class="py-8 md:py-16 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ title }}
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MethodologyStep
          v-for="step in methodology"
          :key="step.number"
          :number="step.number"
          :title="step.title"
          :description="step.description"
          :items="step.items"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { methodology } from "~/lib/about-data";
import MethodologyStep from "./MethodologyStep.vue";

interface Props {
  title?: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Metodologia de Trabalho",
  subtitle:
    "Um processo estruturado e flexível para transformar desafios complexos em soluções eficientes",
});
</script>
