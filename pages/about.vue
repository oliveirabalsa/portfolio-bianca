<script setup lang="ts">
import {
  Users,
  Paintbrush,
  Layers,
  Smartphone,
  Check,
  Heart,
  Scale,
  Sprout,
} from "lucide-vue-next";

useHead({
  title: "Sobre - Bianca Karoline",
  meta: [
    {
      name: "description",
      content:
        "Conheça minha jornada profissional como UX/UI Designer, minhas especialidades e metodologia de trabalho.",
    },
  ],
});

const specializations = [
  {
    icon: Users,
    title: "UX Design",
    description:
      "Criação de experiências intuitivas e eficientes, com foco em usabilidade, empatia e necessidades do usuário.",
  },
  {
    icon: Paintbrush,
    title: "UI Design",
    description:
      "Criação de interfaces visualmente atraentes e coerentes, com foco em estética, consistência e identidade de marca.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Desenvolvimento de sistemas de design escaláveis e consistentes, facilitando o trabalho em equipe e a evolução do produto.",
  },
  {
    icon: Smartphone,
    title: "Prototipagem",
    description:
      "Criação de protótipos interativos de alta fidelidade que simulam a experiência real do usuário para validação e testes.",
  },
];

const methodology = [
  {
    number: "1",
    title: "Descoberta",
    description:
      "Mergulho profundo no problema, entendendo o contexto, os usuários e os objetivos do negócio.",
    items: [
      "Entrevistas com stakeholders",
      "Pesquisa com usuários",
      "Análise competitiva",
    ],
  },
  {
    number: "2",
    title: "Definição",
    description:
      "Sintetização das descobertas em insights acionáveis e definição clara do problema a ser resolvido.",
    items: [
      "Criação de personas",
      "Mapeamento de jornada",
      "Definição de requisitos",
    ],
  },
  {
    number: "3",
    title: "Ideação",
    description:
      "Exploração de múltiplas soluções possíveis através de técnicas criativas e colaborativas.",
    items: ["Brainstorming", "Workshops colaborativos", "Priorização"],
  },
  {
    number: "4",
    title: "Prototipagem",
    description:
      "Transformação das ideias em protótipos tangíveis para visualização e validação inicial.",
    items: ["Handoff do protótipo", "Design visual", "Protótipos interativos"],
  },
  {
    number: "5",
    title: "Teste",
    description:
      "Validação das soluções com usuários reais para identificar pontos de melhoria.",
    items: ["Testes de usabilidade", "Feedback estruturado", "Iteração"],
  },
  {
    number: "6",
    title: "Implementação",
    description:
      "Refinamento final e colaboração com desenvolvedores para garantir a execução fiel da visão.",
    items: [
      "Especificações detalhadas",
      "Colaboração com devs",
      "QA e refinamentos",
    ],
  },
];

const personalValues = [
  {
    icon: Heart,
    title: "Autenticidade",
    description:
      "Acredito em ser genuína em todas as relações e momentos da vida",
    color: "text-red-500",
  },
  {
    icon: Scale,
    title: "Equilíbrio",
    description: "Busco harmonia entre vida profissional, pessoal e bem-estar",
    color: "text-blue-500",
  },
  {
    icon: Sprout,
    title: "Crescimento",
    description: "Sempre em busca de aprendizado e evolução pessoal",
    color: "text-green-500",
  },
];
</script>

<template>
  <div class="overflow-x-hidden">
    <Header />

    <!-- Hero Section with UX Pattern Background -->
    <section
      class="relative h-[60vh] flex items-center justify-center bg-[95%_-2rem] md:bg-[100%_-2rem]"
      style="
        background-image: url('/images/background-ux.png');
        background-size: cover;
        background-repeat: repeat;
        background-blend-mode: overlay;
      "
    >
      <div class="max-w-6xl mx-auto text-center">
        <!-- Profile Image -->
        <div class="mb-8">
          <div
            class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto"
          >
            <img
              src="/images/bianca-self-photo.png"
              alt="Bianca Karoline"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Journey Section - Separate White Section -->
    <section class="py-8 md:py-16 px-4 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <!-- Title -->
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8"
        >
          Minha Jornada Profissional
        </h1>

        <!-- Introduction Text -->
        <div
          class="max-w-5xl mx-auto text-gray-700 leading-relaxed text-lg mb-8"
        >
          <p class="mb-6">
            Olá me chamo Bianca Karoline!
            <br />
            Sou Product Designer com mais de 4 anos de experiência criando
            soluções intuitivas e funcionais, sempre com foco na experiência do
            usuário. Atuei em mercados financeiro, adquirentes e previdência,
            colaborando com empresas como Banco Safra, PagSeguro PagBank, Banco
            Itaú, Caixa Vida e Previdência e, atualmente, na Caixa Econômica
            Federal pela Fóton.
          </p>
          <p class="mb-12">
            Além do trabalho corporativo, também já contribui para a comunidade
            de design através de projetos voluntários, como SouJunior e Mentor
            Cycle, reforçando meu compromisso com impacto social.
          </p>
        </div>

        <!-- Education and Philosophy Section -->
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-2 mb-8">
            <!-- Education Section -->
            <div class="text-left">
              <div class="mb-6 flex items-start">
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
                    Bacharel em Tecnologia da Informação
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Universidade Virtual do Estado de São Paulo
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="mr-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L3.09 8.26L12 14L20.91 8.26L12 2ZM18.91 9L20.91 10L12 16L3.09 10L5.09 9L12 13L18.91 9ZM5.09 12L3.09 13L12 19L20.91 13L18.91 12L12 16L5.09 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-lg">
                    Certificação UX-PM International
                  </h3>
                  <p class="text-gray-600 text-sm">Ux Alliance- MSUX</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Quote Section -->
          <div
            class="border-l-4 border-gray-900 rounded-r-lg p-6 bg-white shadow-sm"
          >
            <p class="text-gray-800 italic text-lg leading-relaxed">
              "Acredito que o bom design é aquele que resolve problemas reais de
              forma elegante e intuitiva. Minha missão é criar interfaces que
              não apenas pareçam boas, mas que façam as pessoas se sentirem bem
              ao usá-las."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specializations Section -->
    <section class="py-8 md:py-16 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Especialidades
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Combinando criatividade e metodologia para entregar experiências
            digitais
            <br />
            excepcionais em diversas áreas
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="spec in specializations"
            :key="spec.title"
            class="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 min-h-[280px] flex flex-col"
          >
            <div class="flex justify-center mb-4">
              <div
                class="w-16 h-16 bg-black rounded-full flex items-center justify-center"
              >
                <component :is="spec.icon" :size="24" color="white" />
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ spec.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed flex-grow">
              {{ spec.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology Section -->
    <section class="py-8 md:py-16 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Metodologia de Trabalho
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Um processo estruturado e flexível para transformar desafios
            complexos em soluções eficientes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="step in methodology"
            :key="step.number"
            class="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <!-- Mobile: Number inside card -->
            <div class="md:hidden flex items-center mb-4">
              <div
                class="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-4"
              >
                {{ step.number }}
              </div>
              <h3 class="text-xl font-semibold text-gray-900">
                {{ step.title }}
              </h3>
            </div>

            <!-- Desktop: Number in corner -->
            <div
              class="hidden md:flex absolute -top-5 -left-5 w-12 h-12 bg-gray-900 text-white rounded-full font-bold text-lg z-10"
              style="align-items: center; justify-content: center"
            >
              {{ step.number }}
            </div>

            <h3
              class="hidden md:block text-xl font-semibold text-gray-900 mb-4 pt-2"
            >
              {{ step.title }}
            </h3>

            <p class="text-gray-600 mb-4 text-sm">{{ step.description }}</p>
            <ul class="space-y-3">
              <li
                v-for="item in step.items"
                :key="item"
                class="text-sm text-gray-600 flex items-center"
              >
                <div
                  class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <Check :size="12" color="white" />
                </div>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Beyond Design Section -->
    <section class="py-8 md:py-16 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Além do Design
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Conheça um pouco mais sobre quem sou quando não estou criando
            interfaces
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Personal Side Text -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Meu lado pessoal
            </h3>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Nascida e criada em São Paulo, sou uma entusiasta da vida que
                acredita no equilíbrio entre trabalho e bem-estar. Quando não
                estou mergulhada no mundo do design, você pode me encontrar
                praticando natação, caminhada, momentos livres com meu esposo ou
                na praia, curtindo um pouco.
              </p>
              <p>
                Sou apaixonada por fotografia, um hobby que me ajuda a
                desacelerar e apreciar os pequenos momentos, pode ter certeza
                que meu celular é cheio de fotos rsrsrs.
              </p>
              <p>
                Sou casada e meu esposo é desenvolvedor full stack. Pode
                acreditar: aqui em casa acontece muito papo sobre tecnologia,
                nós respiramos isso todos os dias.
              </p>
            </div>
          </div>

          <!-- Personal Photos -->
          <div class="space-y-4">
            <!-- Main large image -->
            <div class="w-full">
              <img
                src="/images/personal-side.png"
                alt="Meu lado pessoal"
                class="rounded-2xl w-full h-64 md:h-80 object-cover shadow-lg"
              />
            </div>

            <!-- Three smaller images in a row - responsive -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="relative">
                <img
                  src="/images/relationship.jpg"
                  alt="Relacionamento"
                  class="rounded-2xl w-full h-40 sm:h-32 md:h-40 object-cover shadow-lg"
                />
                <div
                  class="absolute bottom-2 left-2 text-white font-medium text-sm sm:text-xs md:text-sm bg-black/50 px-2 py-1 rounded"
                >
                  Relacionamento
                </div>
              </div>

              <div class="relative">
                <img
                  src="/images/beach.jpg"
                  alt="Praia"
                  class="rounded-2xl w-full h-40 sm:h-32 md:h-40 object-cover shadow-lg"
                />
                <div
                  class="absolute bottom-2 left-2 text-white font-medium text-sm sm:text-xs md:text-sm bg-black/50 px-2 py-1 rounded"
                >
                  Praia
                </div>
              </div>

              <div class="relative">
                <img
                  src="/images/walk-and-run.jpg"
                  alt="Caminhadas e corridas"
                  class="rounded-2xl w-full h-40 sm:h-32 md:h-40 object-cover shadow-lg"
                />
                <div
                  class="absolute bottom-2 left-2 text-white font-medium text-sm sm:text-xs md:text-sm bg-black/50 px-2 py-1 rounded"
                >
                  Caminhadas e corridas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Values Section -->
    <section class="py-8 md:py-16 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Valores Pessoais
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div
            v-for="value in personalValues"
            :key="value.title"
            class="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div class="flex justify-center mb-6">
              <component :is="value.icon" :size="48" :class="value.color" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              {{ value.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <ContactSection />
    <Footer />
  </div>
</template>
