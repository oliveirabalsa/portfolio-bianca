<script setup lang="ts">
useSeoMeta({
  title: "Sobre mim · Bianca Karoline",
  description:
    "Product Designer com mais de 5 anos de experiência nos mercados financeiro, de adquirência e de previdência. Formação, metodologia de trabalho e trajetória.",
});
</script>

<template>
  <NuxtLayout>
    <AboutHero />
    <AboutEducation />
    <AboutManifesto />
    <AboutSpecialties />
    <AboutMethodology />
    <AboutExperience />
    <AboutBeyond />
    <AboutPersonalValues />
    <LayoutContactCta kicker="vamos conversar?" variant="stack" />
  </NuxtLayout>
</template>
