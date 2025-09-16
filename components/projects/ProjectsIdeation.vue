<template>
    <section class="w-full max-w-[1440px] mx-auto py-6 px-4 sm:px-6 lg:px-8 xl:px-20">
        <section class="text-center w-full mb-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-2 md:mb-6 font-roboto leading-tight">
                {{ title }}
            </h2>
            <div class="w-20 h-1 bg-[#4F46E5] mx-auto mb-8"></div>
        </section>
        <section class="w-full max-w-[1216px] mx-auto py-4 flex flex-col gap-6 lg:flex-row lg:gap-0 items-center justify-center bg-[#EEF2FF] rounded-lg">
            <div class="w-full lg:w-1/2 pl-12 space-y-3">
                <div class="w-full space-y-3 text-start">
                    <h2 class="text-2xl font-bold text-gray-900 font-roboto leading-tight">
                        {{ insightsTitle }}
                    </h2>
                    <ul class="list-disc list-inside space-y-3">
                            <li v-for="tips in insightsTips" :key="tips" class="w-full flex items-center justify-start gap-2 text-base text-gray-700 font-roboto leading-relaxed">
                                <NuxtImg :src="iconCheck" alt="icon-check" class="w-4 h-4" />
                                {{ tips }}
                            </li>
                        </ul>
                </div>
                <div class="w-full space-y-3 text-start">
                    <h2 class="text-2xl font-bold text-gray-900 font-roboto leading-tight">
                        {{ solutionTitle }}
                    </h2>
                    <p class="text-base text-gray-700 font-roboto leading-relaxed">
                        {{ solutionDescription }}
                    </p>
                    <ul class="list-disc list-inside space-y-3">
                            <li v-for="tips in solutionTips" :key="tips" class="w-full flex items-center justify-start gap-2 text-base text-gray-700 font-roboto leading-relaxed">
                                <NuxtImg :src="iconCheck" alt="icon-check" class="w-4 h-4" />
                                {{ tips }}
                            </li>
                        </ul>
                </div>
            </div>
            <div class="w-full lg:w-1/2 mx-auto h-[416px]"     
                style="
                    background-image: url('/images/mcCalendar.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-blend-mode: overlay;"> 
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { ProjectIdeation } from '@/lib/projetc-data';
import iconCheck from '/public/images/icon-check-purple.svg'

interface Props {
    title?: string;
    insightsTitle?: string;
    insightsTips?: string[];
    solutionTitle?: string;
    solutionDescription?: string;
    solutionTips?: string[];
}

withDefaults(defineProps<Props>(), {
    title: ProjectIdeation.title,
    insightsTitle: ProjectIdeation.insights.title,
    insightsTips: () => ProjectIdeation.insights.tips,
    solutionTitle: ProjectIdeation.solution.title,
    solutionDescription: ProjectIdeation.solution.description,
    solutionTips: () => ProjectIdeation.solution.tips,
});
</script>