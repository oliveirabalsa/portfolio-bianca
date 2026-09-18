/** Copy for the Home page, transcribed from the Figma "Home — Desktop" frame. */

export const hero = {
  greeting: "olá! meu nome é",
  nameLines: ["Bianca", "Karoline"],
  tagline:
    "Uma designer de produtos e soluções, transformando ideias em experiências digitais memoráveis.",
  photoCaption: "eu, oi :)",
  years: "+5",
  yearsLabel: "anos na área",
  stickers: { primary: "UX/UI", secondary: "Fintech" },
} as const;

export const about = {
  title: "Sobre mim!",
  photoCaption: "meu cantinho · 2026",
  noteTitle: "E aí, tudo bem?",
  paragraphs: [
    "Sou Product Designer com mais de 5 anos de experiência na área, com atuação voltada principalmente para produtos e serviços financeiros. Ao longo da minha trajetória, passei por empresas como Safra, Itaú, PagSeguro, Caixa e Fóton, desenvolvendo soluções com foco em experiência do usuário, produtos digitais e design.",
    "Bacharel em Tecnologia da Informação pela UNIVESP e pós-graduada em UX Design pela PUCRS. Atualmente, estou cursando uma segunda graduação em Inteligência Artificial pela UNIVESP, ampliando minha atuação na interseção entre Design, Tecnologia e IA.",
  ],
  skills: [
    { label: "UX Design", tone: "card", tilt: -2 },
    { label: "UI Design", tone: "card", tilt: 1.5 },
    { label: "Prototipação", tone: "blush", tilt: -1 },
    { label: "Design System", tone: "card", tilt: 2 },
    { label: "IA & Figma Make", tone: "sky", tilt: -2 },
  ],
} as const;

export interface ProjectCard {
  slug: string;
  to: string;
  index: string;
  kind: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  imageBg: string;
  tapeTone: "butter" | "blush";
  tapeSide: "left" | "right";
  tilt: number;
  note?: string;
}

export const projects: ProjectCard[] = [
  {
    slug: "mentor-cycle",
    to: "/mentor-cycle",
    index: "Projeto 01",
    kind: "Plataforma de mentoria",
    title: "Mentor Cycle",
    description:
      "Transformando mentoria em experiência digital: uma plataforma que conecta mentores e mentorados.",
    tags: ["UX Design", "UI Design", "Protótipo"],
    image: "/img/logo-mentor-cycle.png",
    imageAlt: "Logotipo da plataforma Mentor Cycle",
    imageFit: "contain",
    imageBg: "#000000",
    tapeTone: "butter",
    tapeSide: "left",
    tilt: -1.2,
  },
  {
    slug: "velion-bank",
    to: "/velion-bank",
    index: "Projeto 02",
    kind: "Chatbot bancário",
    title: "Velion Bank",
    description: "Criação de chatbot com auxílio do Figma Make para um grande banco.",
    tags: ["Web", "Benchmarking", "Figma Make", "IA", "Documentação de prompt"],
    image: "/img/logo-velion-bank.png",
    imageAlt: "Logotipo do Velion Bank",
    imageFit: "contain",
    imageBg: "#F7F7F9",
    tapeTone: "blush",
    tapeSide: "right",
    tilt: 1.5,
    note: "case anonimizado",
  },
];

export const projectsIntro = {
  title: "Explore meu trabalho!",
  subtitle: "Produtos digitais que ajudei a tornar mais simples, claros e confiáveis.",
} as const;

export const companies = {
  title: "Empresas por onde passei",
  items: [
    { name: "Safra", logo: "/img/co-safra.png", tilt: -3 },
    { name: "Itaú", logo: "/img/co-itau.png", tilt: 2 },
    { name: "PagSeguro", logo: "/img/co-pagseguro.png", tilt: -1 },
    { name: "Caixa", logo: "/img/co-caixa.png", tilt: 3 },
    { name: "Fóton", logo: "/img/co-foton.png", tilt: -2 },
    { name: "Mirae Asset", logo: "/img/co-mirae.png", tilt: 1.5 },
  ],
} as const;

export const values = {
  title: "valores profissionais",
  subtitle: "Princípios que guiam minha abordagem e compromisso com cada projeto.",
  items: [
    {
      icon: "user",
      title: "Design Centrado no Usuário",
      text: "Coloco as necessidades, objetivos e contextos dos usuários no centro de cada decisão de design.",
      tone: "butter",
      tilt: -3,
      offset: false,
    },
    {
      icon: "lightbulb",
      title: "Inovação com Propósito",
      text: "Busco soluções inovadoras que não apenas impressionam, mas efetivamente resolvem problemas reais.",
      tone: "blush",
      tilt: 2,
      offset: true,
    },
    {
      icon: "chart",
      title: "Design Baseado em Dados",
      text: "Utilizo pesquisa e análise de dados para fundamentar decisões de design e medir resultados.",
      tone: "sky",
      tilt: -2,
      offset: false,
    },
    {
      icon: "users",
      title: "Colaboração e Transparência",
      text: "Acredito no poder do trabalho em equipe e na comunicação aberta durante todo o processo de design.",
      tone: "sage",
      tilt: 3,
      offset: true,
    },
  ],
} as const;

export const contactCta = {
  kicker: "tem um projeto em mente?",
  title: "Vamos trabalhar juntos?",
  text: "Entre em contato para conversarmos sobre como posso ajudar a transformar suas ideias em realidade.",
  cardText: "Aberta a novos projetos, freelas e boas conversas sobre produtos digitais.",
  badge: "diga oi!",
} as const;

export const marquee = {
  primary: "PROJETOS EM DESTAQUE",
  secondary: "PROJETOS EM DESTAQUE",
} as const;
