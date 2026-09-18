<script setup lang="ts">
import { projects, projectsIntro } from "~/lib/content/home";
</script>

<template>
  <section id="projetos" class="container-bk pt-6 pb-16 lg:pt-5 lg:pb-[4.25rem]">
    <!-- Figma stacks the subtitle directly under the heading, left-aligned. -->
    <BaseSectionTitle
      v-reveal
      class="reveal"
      :title="projectsIntro.title"
      :subtitle="projectsIntro.subtitle"
      gap="loose"
    />

    <div class="mt-10 grid items-stretch gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-[3.25rem]">
      <HomeProjectCard
        v-for="(project, i) in projects"
        :key="project.slug"
        v-reveal="{ delay: 100 * i }" class="reveal"
        :project="project"
        :offset="i % 2 === 1"
      />
    </div>
  </section>
</template>
