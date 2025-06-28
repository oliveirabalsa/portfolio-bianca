<template>
  <section class="py-8 md:py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ title }}
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SpecializationCard
          v-for="spec in specializations"
          :key="spec.title"
          :icon="spec.icon"
          :title="spec.title"
          :description="spec.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { specializations } from "~/lib/about-data";
import SpecializationCard from "./SpecializationCard.vue";

interface Props {
  title?: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Especialidades",
  subtitle:
    "Combinando criatividade e metodologia para entregar experiências digitais excepcionais em diversas áreas",
});
</script>
