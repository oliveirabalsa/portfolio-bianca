<template>
    <section class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <section class="text-center w-full py-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-2 md:mb-6 font-roboto leading-tight">
                {{ titleDesign }}
            </h2>
            <div class="w-20 h-1 bg-[#4F46E5] mx-auto mb-8"></div>
            <div class="w-full px-4">
                <p class="text-base px-10 w-2/3 m-auto text-center text-gray-700 font-roboto leading-relaxed whitespace-pre-line">
                    {{ descriptionDesign }}
                </p>
            </div>
        </section>
        <section class="gap-6 lg:grid grid-cols-[1fr_auto_1fr] px-8">
            <div class="flex flex-col justify-around gap-16">
                <div class="h-44 w-full mx-auto max-w-[537px] lg:max-w-[600px] xl:pr-6 space-y-2 text-end">
                    <h2 class="text-xl font-bold text-gray-900 font-roboto leading-tight">
                        {{ titleEmpathy }}
                    </h2>
                    <p class="text-xs sm:text-sm xl:text-base text-gray-700 font-roboto">
                        {{ descriptionEmpathy }}
                    </p>
                    <ul class="list-disc list-inside w-full">
                        <li v-for="tip in tips" :key="tip" class="text-xs xl:text-base text-gray-700 font-roboto">
                            {{ tip }}
                        </li>
                    </ul>
                </div>
                <div class="h-48 w-full mx-auto max-w-[537px] lg:max-w-[600px] xl:pr-6 flex justify-between gap-2 xl:gap-4">
                    <NuxtImg src="/images/card-black.png" alt="card-black" class="w-1/2 h-48 rounded-lg" />
                    <NuxtImg src="/images/card-red.png" alt="card-red" class="w-1/2 h-48 rounded-lg" />
                </div>
                <div class="h-44 w-full mx-auto max-w-[537px] lg:max-w-[600px] xl:pr-6 pt-12 space-y-3 text-end">
                    <h2 class="text-xl font-bold text-gray-900 font-roboto leading-tight">
                        {{ titlePrototype }}
                    </h2>
                    <p class="text-xs sm:text-sm xl:text-base text-gray-700 font-roboto">
                        {{ descriptionPrototype }}
                    </p>
                </div>
                <div class="h-48 w-full mx-auto max-w-[537px] lg:max-w-[600px] xl:pr-6 shadow">
                    <NuxtImg src="/images/mentorCycleFull.jpg" alt="mentor-cycle-full" class="w-full h-48 rounded-lg" />
                </div>
            </div>
            
            <div class="hidden lg:block w-10 h-screen min-h-[956px] max-h-[956px] relative">
                <div class="h-full w-1 bg-[#E0E7FF] absolute top-0 left-4.5 -z-10" style="width: 4px;">
                </div>
                <div class="h-full mx-auto flex flex-col justify-around z-50">
                    <div v-for="icon in icons" :key="icon" class="flex items-center justify-center">
                        <NuxtImg :src="icon" alt="icon" class="w-10 h-10" />
                </div>
                </div>
            </div>
            <div class="mt-20 lg:mt-0 flex flex-col-reverse lg:flex-col justify-around gap-16">
                <div class="h-48 w-full mx-auto max-w-[537px] lg:max-w-[600px] xl:pl-6">
                    <NuxtImg src="/images/searchMc.jpg" alt="search-mc" class="w-full h-48 rounded-lg shadow" />
                </div>
                <div class="h-44 w-full mx-auto max-w-[537px] lg:max-w-[600px] xl:pl-6 space-y-2 text-start">
                    <h2 class="text-xl font-bold text-gray-900 font-roboto leading-tight">
                        {{ titleDefinition }}
                    </h2>
                    <p class="text-xs sm:text-sm xl:text-base text-gray-700 font-roboto">
                        <span class="font-bold ">Mentor: </span>{{ descriptionMentor }}
                    </p>
                    <p class="text-xs sm:text-sm xl:text-base text-gray-700 font-roboto">
                        <span class="font-bold">Mentorado: </span>{{ descriptionMentee }}
                    </p>
                </div>
                <div class="h-48 w-full mx-auto max-w-[537px] lg:max-w-[600px] xl:pl-6">
                    <NuxtImg src="/images/laptopMc.jpg" alt="laptop-mc" class="w-full h-48 rounded-lg shadow" />
                </div>
                <div class="h-44 w-full mx-auto max-w-[537px] lg:max-w-[600px] xl:pl-6 space-y-3 py-7    text-start">
                    <h2 class="text-xl font-bold text-gray-900 font-roboto leading-tight">
                        {{ titleDevelopment }}
                    </h2>
                    <p class="text-xs sm:text-sm xl:text-base text-gray-700 font-roboto">
                        {{ descriptionDevelopment }}
                    </p>
                </div>
            </div>
        </section>
    </section>
</template> 


<script setup lang="ts">
import { ProjectDesign, ProjectEmpathy, ProjectPrototype, ProjectDefinition, ProjectDevelopment } from '@/lib/projetc-data';
import iconRocket from '/public/images/rocket-icon.svg';
import iconLab from '/public/images/lab-icon.svg';
import iconPencil from '/public/images/pencil-icon.svg';
import iconSearch from '/public/images/search-icon.svg';

interface Props {
  titleDesign?: string;
  descriptionDesign?: string;
  icons?: string[];
  titleEmpathy?: string;
  descriptionEmpathy?: string;
  tips?: string[];
  titlePrototype?: string;
  descriptionPrototype?: string;
  titleDefinition?: string;
  descriptionMentor?: string;
  descriptionMentee?: string;
  titleDevelopment?: string;
  descriptionDevelopment?: string;
}

withDefaults(defineProps<Props>(), {
  titleDesign: ProjectDesign.title,   
  descriptionDesign: ProjectDesign.description,
  icons: () => [iconSearch, iconPencil, iconLab,iconRocket],
  titleEmpathy: ProjectEmpathy.title,
  descriptionEmpathy: ProjectEmpathy.description,
  tips: () => ProjectEmpathy.tips,
  titlePrototype: ProjectPrototype.title,
  descriptionPrototype: ProjectPrototype.description,
  titleDefinition: ProjectDefinition.title,
  descriptionMentor: ProjectDefinition.mentor,
  descriptionMentee: ProjectDefinition.mentee,
  titleDevelopment: ProjectDevelopment.title,
  descriptionDevelopment: ProjectDevelopment.description,
});
</script>