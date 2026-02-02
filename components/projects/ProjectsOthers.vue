<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Projects } from "@/lib/projetc-data";
import ProjectCard from "@/components/ProjectCard.vue";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    to: string;
}

interface Props {
    projects?: Project[];
}
const props = withDefaults(defineProps<Props>(), {
    projects: () => Projects.projects,
});

const route = useRoute();
const visibleProjects = computed(() => {
    const currentPath = route.path.replace(/^\/+|\/+$/g, "");
    if (!currentPath) return props.projects;
    return props.projects.filter(
        (project) => project.to.replace(/^\/+|\/+$/g, "") !== currentPath,
    );
});
</script>

<template>
    <section class="w-full py-6 bg-[#F9FAFB]">
        <section class="w-full max-w-[1440px] mx-auto pt-20 px-4 sm:px-6 lg:px-8 xl:px-20">
        <section class="text-center w-full mb-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-2 md:mb-6 font-roboto leading-tight ">
                Projetos
            </h2>
            <div class="w-20 h-1 bg-[#4F46E5] mx-auto mb-20"></div>
        </section>
        <section class="w-full max-w-[1216px] mx-auto py-4 flex flex-col gap-6 xl:flex-row items-center justify-center">
            <NuxtLink v-for="project in visibleProjects" :key="project.id" :to="project.to" class="hover:translate-y-[-10px] transition-all duration-300">
                <ProjectCard
                :key="project.id"
                :title="project.title"
                :description="project.description"
                :tags="project.tags"
                :image="project.image"
                variant="secondary"
            />
            </NuxtLink>
        </section>
    </section>
    </section>
</template>

