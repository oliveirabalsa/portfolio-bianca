<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-vue-next";
import Header from "./Header.vue";

const HEADER_HEIGHT = 80;
</script>

<template>
  <div class="relative min-h-screen">
    <Header />
    <div class="relative" :style="`height: calc(100vh - ${HEADER_HEIGHT}px)`">
      <div class="absolute inset-0 z-0">
        <img
          src="~/assets/images/photo-bianca-home.png"
          alt="Bianca Karoline"
          class="w-full h-full object-cover filter brightness-70"
        />
        <div class="absolute inset-0 bg-black/40" />
      </div>
      <div class="relative z-10 container mx-auto py-20 h-full text-white">
        <h1 class="text-5xl md:text-7xl font-bold mb-2 md:mb-4">
          Olá, <br />
          sou Bianca Karoline,
        </h1>
        <h2 class="text-3xl font-light md:text-5xl mb-4 md:mb-6">
          uma designer de produtos e soluções
        </h2>
        <p class="text-lg md:text-2xl max-w-2xl mb-8">
          Com mais de 3 anos atuando na área, transformando ideias <br />
          em experiências digitais memoráveis.
        </p>

        <!-- Shadcn Button component with custom white styling -->
        <Button variant="secondary" size="lg" class="w-fit" as-child>
          <NuxtLink to="/about" class="flex items-center">
            Sobre mim
            <ChevronRight class="ml-1 h-5 w-5" />
          </NuxtLink>
        </Button>
      </div>
    </div>
  </div>
</template>
