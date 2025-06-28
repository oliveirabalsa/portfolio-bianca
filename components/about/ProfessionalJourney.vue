<template>
  <section class="py-8 md:py-16 px-4 bg-gray-100">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
        {{ title }}
      </h1>

      <div class="max-w-5xl mx-auto text-gray-700 leading-relaxed text-lg mb-8">
        <p class="mb-6">
          {{ introText }}
        </p>
        <p class="mb-12">
          {{ descriptionText }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-2 mb-8">
          <div class="text-left">
            <div
              v-for="(item, index) in educationItems"
              :key="index"
              class="flex items-start mb-4"
            >
              <div class="mr-3 mt-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3L1 9L12 15L21 11V16H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-lg">
                  {{ item.title }}
                </h3>
                <p class="text-gray-600 text-sm">
                  {{ item.institution }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="border-l-4 border-gray-900 rounded-r-lg p-6 bg-white shadow-sm"
        >
          <p class="text-gray-800 italic text-lg leading-relaxed">
            {{ quote }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { educationItems } from "~/lib/about-data";

interface Props {
  title?: string;
  introText?: string;
  descriptionText?: string;
  quote?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Minha Jornada Profissional",
  introText:
    "Olá me chamo Bianca Karoline!\nSou Product Designer com mais de 4 anos de experiência criando soluções intuitivas e funcionais, sempre com foco na experiência do usuário. Atuei em mercados financeiro, adquirentes e previdência, colaborando com empresas como Banco Safra, PagSeguro PagBank, Banco Itaú, Caixa Vida e Previdência e, atualmente, na Caixa Econômica Federal pela Fóton.",
  descriptionText:
    "Além do trabalho corporativo, também já contribui para a comunidade de design através de projetos voluntários, como SouJunior e Mentor Cycle, reforçando meu compromisso com impacto social.",
  quote:
    "Acredito que o bom design é aquele que resolve problemas reais de forma elegante e intuitiva. Minha missão é criar interfaces que não apenas pareçam boas, mas que façam as pessoas se sentirem bem ao usá-las.",
});
</script>
