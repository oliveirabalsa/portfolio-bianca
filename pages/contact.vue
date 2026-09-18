<script setup lang="ts">
/**
 * Contato — Figma `36:2` (1440×2039) and `38:2` (390×2516).
 *
 * The two frames differ in section count: desktop runs
 * Nav · Faixas · Chamada · Mural · Footer, while mobile splits the mural in
 * two and lifts the polaroid into a section of its own —
 * Nav · Faixas · Chamada · Polaroid · Cartões · Footer. `ContactPolaroid`
 * therefore only renders below `lg`, and `ContactBoard` carries its own copy
 * of the polaroid from `lg` up.
 */

useSeoMeta({
  title: "Contato · Bianca Karoline",
  description:
    "Disponível para novos projetos e colaborações criativas. Fale comigo por e-mail, WhatsApp, LinkedIn ou Instagram.",
});
</script>

<template>
  <NuxtLayout>
    <ContactFaixas />
    <ContactChamada />
    <ContactPolaroid />
    <ContactBoard />

    <!-- Every other page ends with LayoutContactCta, which carries the
         trailing space above the footer rule. Contato ends on the mural, so
         it supplies that gap itself: Figma's footer here is 138 tall against
         the 98 used elsewhere (`36:100` vs `8:45`). -->
    <div aria-hidden="true" class="h-6 lg:h-[2.125rem]" />
  </NuxtLayout>
</template>
