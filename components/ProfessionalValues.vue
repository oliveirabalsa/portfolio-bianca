<template>
  <section class="py-16 px-4" style="background-color: #111827">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">
          Valores Profissionais
        </h2>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto">
          Princípios que guiam minha abordagem e compromisso com cada projeto
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ValueCard
          v-for="value in professionalValues"
          :key="value.id"
          :icon="value.icon"
          :title="value.title"
          :description="value.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProfessionalValue {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const professionalValues: ProfessionalValue[] = [
  {
    id: "user-centered",
    icon: "/images/person.svg",
    title: "Design Centrado no Usuário",
    description:
      "Coloco as necessidades, objetivos e contextos dos usuários no centro de cada decisão de design.",
  },
  {
    id: "purposeful-innovation",
    icon: "/images/light.svg",
    title: "Inovação com Propósito",
    description:
      "Busco soluções inovadoras que não apenas impressionam, mas efetivamente resolvem problemas reais.",
  },
  {
    id: "data-driven",
    icon: "/images/insight.svg",
    title: "Design Baseado em Dados",
    description:
      "Utilizo pesquisa e análise de dados para fundamentar decisões de design e medir resultados.",
  },
  {
    id: "collaboration",
    icon: "/images/handshake.svg",
    title: "Colaboração e Transparência",
    description:
      "Acredito no poder do trabalho em equipe e na comunicação aberta durante todo o processo de design.",
  },
];
</script>
