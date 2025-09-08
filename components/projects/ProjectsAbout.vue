<template>
    <main>
        <section class="text-center w-full max-w-[1440px] mx-auto py-12 px-4 sm:px-6 lg:px-8 xl:px-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16 font-roboto leading-tight">
                {{ titleAbout }}
            </h2>
            <div class="w-full px-4 ">
                <p class="text-xl text-gray-700 font-roboto leading-relaxed whitespace-pre-line text-justify">
                    {{ descriptionAbout }}
                </p>
            </div>
        </section>
        <section class="text-center w-full max-w-[1440px] mx-auto py-12 px-4 sm:px-6 lg:px-8 xl:px-20 bg">
            <h2 class="text-2xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16 font-roboto leading-tight">
                {{ titleChallenge }}
            </h2>
            <div>

            </div>
        </section>
    </main>
</template>



<script setup lang="ts">
import { ProjectAbout } from '@/lib/projetc-data';

interface Props {
  titleAbout?: string;
  descriptionAbout?: string;
  titleChallenge?: string;
  descriptionChallenge?: string;
  titleObjective?: string;
  descriptionObjective?: string;
  titleSolution?: string;
  descriptionSolution?: string;
}

withDefaults(defineProps<Props>(), {
  titleAbout: ProjectAbout.AboutProject.title,
  descriptionAbout: ProjectAbout.AboutProject.description,
  titleChallenge: ProjectAbout.Challenge.title,
  descriptionChallenge: ProjectAbout.Challenge.challenge.description,
  titleObjective: ProjectAbout.objective.title,
  descriptionObjective: ProjectAbout.objective.descriptionOne,
  titleSolution: ProjectAbout.solution.descriptions[0].description,
  descriptionSolution: ProjectAbout.solution.descriptions[1].description,
});
</script>