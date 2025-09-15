<template>
    <section class="text-center w-full py-6 bg-[#F9FAFB]">
        <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 font-roboto leading-tight">
                {{ title }}
            </h2>
            <div class="w-20 h-1 bg-[#4F46E5] mx-auto"></div>
            <div class="w-full px-4 mb-10">
                <p class="text-base px-10 m-auto text-center text-gray-700 font-roboto leading-relaxed whitespace-pre-line">
                    {{ description }}
                </p>
            </div>
            <div class="w-full max-w-[1216px] mx-auto flex flex-col items-center justify-center space-y-6">
                <div class="w-full mx-auto flex items-center justify-center">
                <NuxtImg src="/images/flux-1.png" alt="fluxograma jornada do admin" class="w-full h-full" />

            </div>
            <div class="w-full mx-auto flex items-center justify-center">
                <NuxtImg src="/images/flux-2.png" alt="fluxograma jornada do admin" class="w-full h-full" />
            </div>
            <div class="w-full mx-auto flex items-center justify-center">
                <NuxtImg src="/images/flux-3.png" alt="fluxograma jornada do admin" class="w-full h-full" />
            </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ProjectFlowchart } from '@/lib/projetc-data';

interface Props {
    title?: string;
    description?: string;
}

withDefaults(defineProps<Props>(), {
    title: ProjectFlowchart.title,
    description: ProjectFlowchart.description,
});
</script>