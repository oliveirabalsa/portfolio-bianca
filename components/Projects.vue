<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const projects = [
  {
    id: 1,
    title: "Mentor Cycle",
    description:
      "Mentor Cycle - Transformando Mentoria em Experiência Digital. Uma plataforma de mentoria.",
    tags: ["UX Design", "UI Design", "Protótipo"],
    image: "/images/mentor-cycle-project.png",
    onClick: () => {
      router.push("mentor-cycle");
    },
  },
  {
    id: 2,
    title: "Velion Bank",
    description:
      "Criação de chatbot, com auxilio de Figma Make para uma grande banco financeiro. (Case anonimizado)",
    tags: ["Web", "Benchmarking", "Figma Make", "IA", "Documentação de prompt"],
    image: "/images/velion-bank.svg",
    onClick: () => {
      router.push("velion-bank");
    },
  },
];
</script>

<template>
  <div class="relative min-h-screen">
    <div class="relative" :style="`height: calc(100vh - 80px); bg-[#f3f4f6]`">
      <div class="container px-8 md:px-0 mx-auto py-20 h-full">
        <h1 class="text-4xl md:text-5xl font-bold mb-2 md:mb-8">Projetos</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
            :image="project.image"
            variant="default"
            @click="project.onClick ? project.onClick() : null"
          />
        </div>
      </div>
    </div>
  </div>
</template>
