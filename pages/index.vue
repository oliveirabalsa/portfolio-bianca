<script setup lang="ts">
import { marquee } from "~/lib/content/home";

useSeoMeta({
  title: "Bianca Karoline · Product Designer UX/UI",
  description:
    "Uma designer de produtos e soluções, transformando ideias em experiências digitais memoráveis. Portfólio de UX/UI com foco em produtos e serviços financeiros.",
});
</script>

<template>
  <NuxtLayout>
    <HomeHero />
    <HomeAbout />
    <BaseMarquee :primary="marquee.primary" :secondary="marquee.secondary" />
    <HomeProjects />
    <HomeCompanies />
    <HomeValues />
    <LayoutContactCta variant="card" />
  </NuxtLayout>
</template>
