<template>
  <section class="py-8 md:py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ title }}
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            {{ sectionTitle }}
          </h3>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p v-for="(paragraph, index) in paragraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="w-full">
            <img
              :src="mainImageSrc"
              :alt="mainImageAlt"
              class="rounded-2xl w-full h-64 md:h-80 object-cover shadow-lg"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              v-for="photo in personalPhotos"
              :key="photo.src"
              class="relative"
            >
              <img
                :src="photo.src"
                :alt="photo.alt"
                class="rounded-2xl w-full h-40 sm:h-32 md:h-40 object-cover shadow-lg"
              />
              <div
                class="absolute bottom-2 left-2 text-white font-medium text-sm sm:text-xs md:text-sm bg-black/50 px-2 py-1 rounded"
              >
                {{ photo.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { personalPhotos } from "~/lib/about-data";

interface Props {
  title?: string;
  subtitle?: string;
  sectionTitle?: string;
  mainImageSrc?: string;
  mainImageAlt?: string;
  paragraphs?: string[];
}

withDefaults(defineProps<Props>(), {
  title: "Além do Design",
  subtitle:
    "Conheça um pouco mais sobre quem sou quando não estou criando interfaces",
  sectionTitle: "Meu lado pessoal",
  mainImageSrc: "/images/personal-side.png",
  mainImageAlt: "Meu lado pessoal",
  paragraphs: () => [
    "Nascida e criada em São Paulo, sou uma entusiasta da vida que acredita no equilíbrio entre trabalho e bem-estar. Quando não estou mergulhada no mundo do design, você pode me encontrar praticando natação, caminhada, momentos livres com meu esposo ou na praia, curtindo um pouco.",
    "Sou apaixonada por fotografia, um hobby que me ajuda a desacelerar e apreciar os pequenos momentos, pode ter certeza que meu celular é cheio de fotos rsrsrs.",
    "Sou casada e meu esposo é desenvolvedor full stack. Pode acreditar: aqui em casa acontece muito papo sobre tecnologia, nós respiramos isso todos os dias.",
  ],
});
</script>
