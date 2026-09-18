/** Copy for the Sobre page, transcribed from the Figma "Sobre — Desktop" frame.
 *
 *  Desktop (`27:2`) is the source of truth for wording: the mobile frame
 *  (`31:2`) is older and trims sentences, shortens school names and repeats the
 *  volunteering line that desktop keeps as chips in the Experiência section.
 */

export const hero = {
  title: "SOBRE MIM",
  kicker: "minha jornada profissional",
  paragraphs: [
    "Olá, me chamo Bianca Karoline! Sou Product Designer com mais de 5 anos de experiência criando soluções intuitivas e funcionais, sempre com foco na experiência do usuário.",
    "Atuei nos mercados financeiro, de adquirência e de previdência, colaborando com Banco Safra, PagSeguro PagBank, Itaú Unibanco, Caixa Vida e Previdência e Caixa Econômica Federal pela Fóton. Hoje sou Product Designer na Mirae Asset Brasil.",
  ],
  photo: {
    src: "/img/bianca-portrait.jpg",
    alt: "Retrato de Bianca Karoline",
    caption: "Oi, sou eu :)",
  },
  /** Terracotta pill laid across the polaroid's lower left — desktop only (27:31). */
  sticker: "Product Designer · São Paulo",
} as const;

export const education = {
  title: "Formação",
  items: [
    {
      course: "Bacharelado em Inteligência Artificial",
      /** Set in smaller type on the same line, as in Figma 27:38. */
      status: "Em andamento",
      school: "Universidade Virtual do Estado de São Paulo",
      tilt: -1.2,
    },
    {
      course: "Pós-graduação UX Design and Beyond",
      school: "Pontifícia Universidade Católica do Rio Grande do Sul",
      tilt: 1,
    },
    {
      course: "Bacharelado em Tecnologia da Informação",
      school: "Universidade Virtual do Estado de São Paulo",
      tilt: -1.2,
    },
    {
      course: "Certificação UX-PM International",
      school: "UX Alliance · MSUX",
      tilt: 0.9,
    },
  ],
} as const;

export const manifesto = {
  title: "No que eu acredito",
  text: "Bom design é aquele que resolve problemas reais de forma elegante e intuitiva. Minha missão é criar interfaces que não apenas pareçam boas, mas que façam as pessoas se sentirem bem ao usá-las.",
} as const;

export const specialties = {
  title: "Especialidades",
  subtitle:
    "Criatividade e metodologia combinadas para entregar experiências digitais em diferentes frentes.",
  items: [
    {
      icon: "user",
      title: "UX Design",
      text: "Experiências intuitivas e eficientes, com foco em usabilidade, empatia e necessidades do usuário.",
      tone: "butter",
      tilt: -2.4,
      offset: false,
    },
    {
      icon: "palette",
      title: "UI Design",
      text: "Interfaces visualmente atraentes e coerentes, com foco em estética, consistência e identidade de marca.",
      tone: "blush",
      tilt: 1.9,
      offset: true,
    },
    {
      icon: "layers",
      title: "Design Systems",
      text: "Sistemas escaláveis e consistentes, que facilitam o trabalho em equipe e a evolução do produto.",
      tone: "sky",
      tilt: -1.4,
      offset: false,
    },
    {
      icon: "wand",
      title: "Prototipagem",
      text: "Protótipos interativos de alta fidelidade que simulam a experiência real para validação e testes.",
      tone: "sage",
      tilt: 2.3,
      offset: true,
    },
  ],
} as const;

export const methodology = {
  title: "Metodologia de trabalho",
  subtitle:
    "Um processo estruturado e flexível para transformar desafios complexos em soluções eficientes.",
  steps: [
    {
      number: "01",
      title: "Descoberta",
      text: "Mergulho profundo no problema, entendendo o contexto, os usuários e os objetivos do negócio.",
      deliverables: "Entrevistas com stakeholders · Pesquisa com usuários · Análise competitiva",
      tilt: -0.9,
    },
    {
      number: "02",
      title: "Definição",
      text: "Síntese das descobertas em insights acionáveis e definição clara do problema a resolver.",
      deliverables: "Personas · Mapeamento de jornada · Definição de requisitos",
      tilt: 1,
    },
    {
      number: "03",
      title: "Ideação",
      text: "Exploração de múltiplas soluções por meio de técnicas criativas e colaborativas.",
      deliverables: "Brainstorming · Workshops colaborativos · Priorização",
      tilt: -0.8,
    },
    {
      number: "04",
      title: "Prototipagem",
      text: "Transformação das ideias em protótipos tangíveis para visualização e validação inicial.",
      deliverables: "Design visual · Protótipos interativos · Handoff",
      tilt: 0.9,
    },
    {
      number: "05",
      title: "Teste",
      text: "Validação das soluções com usuários reais para identificar pontos de melhoria.",
      deliverables: "Testes de usabilidade · Feedback estruturado · Iteração",
      tilt: -1,
    },
    {
      number: "06",
      title: "Implementação",
      text: "Refinamento final e colaboração com o time de desenvolvimento para uma execução fiel.",
      deliverables: "Especificações detalhadas · Colaboração com devs · QA",
      tilt: 0.8,
    },
  ],
} as const;

export const experience = {
  title: "Experiência",
  items: [
    {
      role: "Product Designer Pleno",
      company: "Mirae Asset (Brasil) CCTVM",
      period: "mar 2026 — atual",
    },
    {
      role: "Product Designer",
      company: "Fóton Informática · projetos Caixa",
      period: "out 2023 — fev 2026",
    },
    {
      role: "Product Designer Jr",
      company: "Caixa Vida e Previdência",
      period: "abr 2023 — out 2023",
    },
    {
      role: "Projetos e Processos · Product Designer",
      company: "Itaú Unibanco · estágio",
      period: "dez 2020 — set 2022",
    },
    {
      role: "Analista de Produtos Digitais",
      company: "PagSeguro PagBank",
      period: "out 2019 — nov 2020",
    },
    {
      role: "Analista de Experiência Conversacional",
      company: "Banco Safra",
      period: "mar 2019 — set 2019",
    },
  ],
  /** Figma 29:30 is the outlined chip, 29:32 the sage one. */
  volunteering: [
    { label: "Voluntária na Mentor Cycle", tone: "card", tilt: -1.5 },
    { label: "Voluntária no SouJunior", tone: "sage", tilt: 1.2 },
  ],
} as const;

export const beyond = {
  title: "Além do design",
  paragraphs: [
    "Nascida e criada em São Paulo, acredito no equilíbrio entre trabalho e bem-estar. Quando não estou mergulhada no mundo do design, você pode me encontrar na natação, em caminhadas, curtindo momentos com meu esposo ou na praia.",
    "Sou apaixonada por fotografia, um hobby que me ajuda a desacelerar e apreciar os pequenos momentos. Pode acreditar: meu celular vive cheio de fotos.",
    "Sou casada e meu esposo é desenvolvedor full stack. Aqui em casa rola muito papo sobre tecnologia, todos os dias.",
  ],
  /** Portrait crop beside the text on desktop (29:44); first of the four
   *  stacked polaroids on mobile (32:74). */
  mainPhoto: {
    src: "/img/beyond-rome-bw.jpg",
    caption: "fora do Figma",
    alt: "Bianca em frente ao Coliseu, em Roma",
    tapeTone: "blush" as const,
    tilt: 1.5,
    /** Landscape source — centring is already right. */
    focal: "50% 50%",
  },
  /** Landscape crops — three across on desktop (29:50), stacked on mobile. */
  gallery: [
    {
      src: "/img/beyond-couple.jpg",
      caption: "relacionamento",
      alt: "Bianca e o esposo em viagem",
      tilt: -1.8,
      tapeTone: "butter" as const,
      /** Faces sit at ~60% of the 900×1200 source. */
      focal: "50% 62%",
    },
    {
      src: "/img/beyond-beach.jpg",
      caption: "praia",
      alt: "Bianca em frente ao letreiro da Isla Mujeres",
      tilt: 1.6,
      tapeTone: "sky" as const,
      /** Keeps her head and the letters; a 5:4 well cannot hold the whole
       *  figure of a 675×1200 source. */
      focal: "50% 34%",
    },
    {
      src: "/img/beyond-running.jpg",
      caption: "caminhadas e corridas",
      alt: "Bianca em uma corrida de rua",
      tilt: -1.3,
      tapeTone: "sage" as const,
      /** Her face is at 10–20% of the 800×1200 source, so the default centred
       *  crop started below it entirely. */
      focal: "50% 16%",
    },
  ],
} as const;

export const personalValues = {
  title: "Valores pessoais",
  items: [
    {
      title: "Autenticidade",
      text: "Ser genuína em todas as relações e momentos da vida.",
      tone: "butter",
      tilt: -1.8,
      /** Vertical nudge in px, per Figma 30:6 / 30:11 / 30:16. */
      dip: 14,
    },
    {
      title: "Equilíbrio",
      text: "Harmonia entre vida profissional, pessoal e bem-estar.",
      tone: "sky",
      tilt: 1.4,
      dip: 0,
    },
    {
      title: "Crescimento",
      text: "Sempre em busca de aprendizado e evolução pessoal.",
      tone: "sage",
      tilt: -1.1,
      dip: 9,
    },
  ],
} as const;
