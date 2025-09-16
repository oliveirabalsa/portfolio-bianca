<template>
    <section
      class="relative h-[60vh] flex items-center justify-center bg-[95%_-2rem] md:bg-[100%_-2rem]"
    >
      <div class="flex items-center justify-center h-full w-1/2 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 z-10">
        <div class="text-start w-full max-w-[608px] mx-auto space-y-1">
          <div class="flex items-start justify-start gap-3 flex-wrap">
            <Badge variant="destructive" class="text-white font-roboto text-sm font-light w-20 h-7 rounded-full bg-[#AA0000]" v-for="badge in badges" :key="badge">{{ badge }}</Badge>
        </div> 
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-roboto font-bold text-white font-roboto leading-tight">{{ title }}</h1>
        <p class="text-sm sm:text-xl md:text-xl lg:text-xl text-white font-roboto font-bold leading-relaxed">{{ description }}</p>
        </div>
      </div>
      <div class="w-1/2 mx-auto h-full "     
      style="
      background-image: url('/images/mcCapa.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-blend-mode: overlay;"> 
      </div>
      <div class="absolute inset-0 h-[60vh] flex items-center justify-center bg-[95%_-2rem] md:bg-[100%_-2rem] bg-gradient-to-r from-black via-black via-10% to-transparent opacity-90"></div>
    </section>
  </template>

<script setup lang="ts">
import { ProjectHeader } from '@/lib/projetc-data';

interface Props {
  title?: string;
  description?: string;
  badges?: string[];
}

withDefaults(defineProps<Props>(), {
  title: ProjectHeader.title,
  description: ProjectHeader.description, 
  badges: () => ProjectHeader.badges,
});
</script>