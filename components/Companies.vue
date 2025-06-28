<script setup lang="ts">
const companies = [
  {
    id: 1,
    name: "Safra",
    image: "/images/safra.png",
  },
  {
    id: 2,
    name: "Itau",
    image: "/images/itau.png",
  },
  {
    id: 3,
    name: "Pagseguro",
    image: "/images/pagseguro.png",
  },
  {
    id: 4,
    name: "Caixa Econômica Federal",
    image: "/images/caixa.png",
  },
  {
    id: 5,
    name: "Foton",
    image: "/images/foton.png",
  },
];
</script>

<template>
  <div>
    <div class="container px-8 md:px-0 mx-auto gap-8 flex flex-col mb-20">
      <h1 class="text-4xl md:text-5xl font-bold mb-2 md:mb-8">
        Empresas que atuei
      </h1>

      <!-- Slider container -->
      <div class="overflow-hidden">
        <div class="animate-slide flex items-center space-x-8 md:space-x-12">
          <!-- First set of companies -->
          <div
            v-for="company in companies"
            :key="`first-${company.id}`"
            :class="`flex items-center justify-center flex-shrink-0 ${
              [3, 5].includes(company.id) ? 'shadow-md' : ''
            }`"
          >
            <img
              :src="company.image"
              :alt="company.name"
              class="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <div
            v-for="company in companies"
            :key="`second-${company.id}`"
            :class="`flex items-center justify-center flex-shrink-0 ${
              [3, 5].includes(company.id) ? 'shadow-md' : ''
            }`"
          >
            <img
              :src="company.image"
              :alt="company.name"
              class="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <div
            v-for="company in companies"
            :key="`third-${company.id}`"
            :class="`flex items-center justify-center flex-shrink-0 ${
              [3, 5].includes(company.id) ? 'shadow-md' : ''
            }`"
          >
            <img
              :src="company.image"
              :alt="company.name"
              class="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}

.animate-slide {
  animation: slide 15s linear infinite;
  width: max-content;
}

.animate-slide:hover {
  animation-play-state: paused;
}
</style>
