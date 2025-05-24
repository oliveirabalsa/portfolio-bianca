<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: "Mentor Cycle",
    description:
      "Mentor Cycle - Transformando Mentoria em Experiência Digital. Uma plataforma de mentoria.",
    tags: ["UX Design", "UI Design", "Protótipo"],
    image: "/images/mentor-cycle-project.png",
  },
  {
    id: 2,
    title: "Sou Junior",
    description:
      "Portal de vagas em projeto open source. Portal de cadastramentos e anúncios de vagas.",
    tags: ["Mobile", "E-commerce", "UX Research"],
    image: "/images/sou-junior-project.png",
  },
  {
    id: 3,
    title: "Balsacar",
    description:
      "Venha transformar a venda de carros no Brasil. Lading page dedicada a anúncio e vendas de carros.",
    tags: ["Mobile", "Streaming", "Design System"],
    image: "/images/balsacar-project.png",
  },
  {
    id: 4,
    title: "Paróquia Santo André Apóstolo",
    description:
      "Transformando a fé mais acessível, através da tecnologia. Página dedicada a Paróquia Santo André Apóstolo - SP",
    tags: ["Mobile", "Streaming", "Design System"],
    image: "/images/paroquia-santo-andre-project.png",
  },
];
</script>

<template>
  <div class="relative min-h-screen">
    <div
      class="relative"
      :style="`height: calc(100vh - ${HEADER_HEIGHT}px) bg-[#f3f4f6]`"
    >
      <div class="container px-8 md:px-0 mx-auto py-20 h-full">
        <h1 class="text-4xl md:text-5xl font-bold mb-2 md:mb-8">Projetos</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
            :image="project.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
