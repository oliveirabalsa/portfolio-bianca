<script setup lang="ts">
/**
 * Page shell. `back` is forwarded to the header so case-study pages can swap
 * the availability pill for a "Voltar" link.
 */

withDefaults(defineProps<{ back?: { label: string; to: string } }>(), { back: undefined });
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#conteudo"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:border-2 focus:border-ink focus:bg-card focus:px-5 focus:py-3 focus:font-semibold"
    >
      Pular para o conteúdo
    </a>

    <LayoutSiteHeader :back="back" />

    <main id="conteudo" class="flex-1">
      <slot />
    </main>

    <LayoutSiteFooter />
  </div>
</template>
