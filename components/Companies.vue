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
      <div
        class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 place-items-center"
      >
        <div
          v-for="company in companies"
          :key="company.id"
          :class="`flex items-center justify-center w-max ${
            [3, 5].includes(company.id) ? 'shadow-md' : ''
          }`"
        >
          <img :src="company.image" :alt="company.name" />
        </div>
      </div>
    </div>
  </div>
</template>
