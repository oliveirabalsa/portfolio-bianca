<template>
    <main>
        <section class="text-center w-full max-w-[1440px] mx-auto py-12 px-4 sm:px-6 lg:px-8 xl:px-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-2 md:mb-6 font-roboto leading-tight">
                {{ titleAbout }}
            </h2>
            <div class="w-20 h-1 bg-[#4F46E5] mx-auto mb-8"></div>
            <div class="w-full px-4 ">
                <p class="text-xl text-gray-700 font-roboto leading-relaxed whitespace-pre-line text-justify">
                    {{ descriptionAbout }}
                </p>
            </div>
        </section>
        <section class="text-center w-full pt-6 bg-[#F9FAFB]">
           <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 font-roboto leading-tight">
                {{ titleSection }}
            </h2>
            <div class="w-20 h-1 bg-[#4F46E5] mx-auto mb-8"></div>
            <div class="w-full md:flex gap-16 px-4">
                <div class="md:w-1/2 w-full md:text-start text-center space-y-10">
                    <h2 class="text-2xl font-bold text-gray-900 font-roboto leading-tight">
                        {{ titleChallenge }}
                    </h2>
                    <p class="text-base text-gray-700 text-start font-roboto whitespace-pre-line pr-16 leading-7">
                        {{ descriptionChallenge }}
                    </p>
                    <div class="w-full p-4 bg-[#FEF2F2] rounded-[8px] border-2 border-[#FEE2E2] mb-16">
                        <h2 class="text-base font-medium text-[#991B1B] mb-2 font-roboto leading-tight">
                            {{ titleTips }}
                        </h2>
                        <ul class="list-disc list-inside">
                            <li v-for="description in descriptionTips" :key="description" class="w-full flex items-center justify-start gap-2 text-base text-gray-700 font-roboto leading-relaxed">
                                <NuxtImg :src="iconDanger" alt="icon-danger" class="w-4 h-4" />
                                {{ description }}
                            </li>
                        </ul>
                    </div>
                    <NuxtImg
                        src="/images/mentorCycle.png"
                        alt="mentor-cycle"
                        class="w-full h-[384px] shadow-2xl rounded-[12px] mb-16"
                    />
                </div>
                <div class="md:w-1/2 w-full text-center md:text-start pt-4 space-y-10">
                    <NuxtImg
                    src="/images/img-obj.png"
                    alt="img-objective"
                    class="w-full h-[384px] shadow-2xl rounded-[12px]"
                    />
                    <div class="w-full">
                        <h2 class="text-2xl font-bold text-gray-900 font-roboto leading-tight">
                        {{ titleObjective }}
                    </h2>
                    <p v-for="description in descriptionObjective" :key="description" class="text-base text-gray-700 text-start font-roboto whitespace-pre-line pr-16 leading-7 mb-5">
                        {{ description }}
                    </p>
                    </div>
                    <div class="w-full p-4 bg-[#F0FDF4] rounded-[8px] border-2 border-[#DCFCE7] mb-10">
                        <ul class="list-disc list-inside mb-6">
                            <li v-for="description in descriptionSolution" :key="description" class="w-full flex items-center justify-start gap-2 text-base text-gray-700 font-roboto leading-relaxed">
                                <NuxtImg :src="iconCheck" alt="icon-check" class="w-4 h-4" />
                                {{ description }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           </div>
        </section>
    </main>
</template>



<script setup lang="ts">
import { ProjectAbout, ProjectChallenge, ProjectObjective } from '@/lib/projetc-data';
import iconDanger from '/public/images/icon-danger.svg'
import iconCheck from '/public/images/icon-check.svg'
import mentorCycle from '/public/images/mentorCycle.png'

interface Props {
  titleAbout?: string;
  descriptionAbout?: string;
  titleSection?: string;
  titleChallenge?: string;
  descriptionChallenge?: string;
  titleObjective?: string;
  descriptionObjective?: string[];
  titleSolution?: string;
  descriptionSolution?: string[];
  titleTips?: string;
  descriptionTips?: string[];
}

withDefaults(defineProps<Props>(), {
  titleAbout: ProjectAbout.title,   
  descriptionAbout: ProjectAbout.description,
  titleSection: ProjectChallenge.titleSection,
  titleChallenge: ProjectChallenge.title,
  descriptionChallenge: ProjectChallenge.description,
  titleObjective: ProjectObjective.title,
  descriptionObjective: () => ProjectObjective.descriptions,
  titleSolution: ProjectObjective.title,
  descriptionSolution: () => ProjectObjective.solution,
  titleTips: ProjectChallenge.tips.title,
  descriptionTips: () => ProjectChallenge.tips.descriptions,
});
</script>