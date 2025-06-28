import {
  Users,
  Paintbrush,
  Layers,
  Smartphone,
  Heart,
  Scale,
  Sprout,
} from "lucide-vue-next";

export const specializations = [
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

export const methodology = [
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

export const personalValues = [
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

export const educationItems = [
  {
    title: "Bacharel em Tecnologia da Informação",
    institution: "Universidade Virtual do Estado de São Paulo",
  },
  {
    title: "Pós Graduação UX Design and Beyond",
    institution: "Pontifícia Universidade Católica do Rio Grande do Sul",
  },
  {
    title: "Certificação UX-PM International",
    institution: "Ux Alliance- MSUX",
  },
];

export const personalPhotos = [
  {
    src: "/images/relationship.jpg",
    alt: "Relacionamento",
    label: "Relacionamento",
  },
  {
    src: "/images/beach.jpg",
    alt: "Praia",
    label: "Praia",
  },
  {
    src: "/images/walk-and-run.jpg",
    alt: "Caminhadas e corridas",
    label: "Caminhadas e corridas",
  },
];
