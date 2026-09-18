/**
 * Case-study copy, transcribed from the Figma "Case Mentor Cycle — Desktop"
 * and "Case Velion Bank — Desktop" frames.
 *
 * Image slots follow what the Figma placeholders actually render, which is not
 * what the filenames suggest: `vb-prompt-doc.png` is the benchmarking document
 * (node `21:37`) and `vb-benchmarking.png` is the Figma Make write-up
 * (node `22:47`). Likewise the Mentor Cycle cover shows the mentor agenda
 * (`12:48`) while the landing-page pair closes the insights section (`14:43`).
 */

export const mentorCycle = {
  slug: "mentor-cycle",
  index: "Projeto 01",
  title: "Mentor Cycle",
  subtitle: "Transformando mentoria em experiência digital.",
  sticker: "mentoria ✦ carreira",
  // Figma fills one tag per case; the rest are outlines (`12:25` is sky).
  tags: [
    { label: "UX Design" },
    { label: "UI Design", tone: "sky" as const },
    { label: "Protótipo" },
  ],
  facts: [
    { label: "meu papel", value: "UX & UI Design, prototipação" },
    { label: "tipo", value: "Plataforma de mentoria" },
    { label: "formato", value: "Iniciativa voluntária e colaborativa" },
    { label: "entregas", value: "Fluxogramas e protótipo navegável" },
  ],
  cover: {
    src: "/img/mc-mentor-agenda.png",
    alt: "Tela de agenda do mentor na plataforma Mentor Cycle",
  },
  overview: {
    title: "Sobre o projeto",
    text: "A Mentor Cycle surgiu como uma iniciativa colaborativa e voluntária voltada ao desenvolvimento de profissionais iniciantes em UX/UI Design. A ideia era criar um ambiente de troca entre mentores experientes e designers em início de carreira, promovendo aprendizado prático, soft skills e inserção no mercado. Durante a execução, identificamos dificuldades recorrentes entre iniciantes: insegurança técnica, falta de direcionamento e ausência de vivência em times reais.",
  },
  challenge: {
    title: "O desafio",
    paragraphs: [
      "Nas primeiras entrevistas com potenciais mentorados, percebemos que muitos se sentiam perdidos não só tecnicamente, mas emocionalmente: não sabiam por onde começar. A sensação de solidão na jornada e a falta de direcionamento causavam desistências precoces.",
      "Do lado dos mentores, apareciam dificuldades para organizar agendas, acompanhar o progresso dos mentorados e entender o quanto realmente estavam contribuindo com o crescimento deles.",
    ],
    note: {
      title: "principais dores",
      tone: "blush" as const,
      items: [
        "Dificuldade em encontrar mentores compatíveis",
        "Falta de estrutura nas interações",
        "Baixo aproveitamento das sessões",
      ],
    },
    images: [
      { src: "/img/mc-mentor-cards.png", alt: "Cartões de perfil de mentores" },
      {
        src: "/img/mc-screens-board.png",
        alt: "Panorama das telas da plataforma reunidas em um quadro",
      },
    ],
  },
  solution: {
    title: "Nossa solução",
    paragraphs: [
      "Para resolver a dor de orientação e progresso, criamos um sistema de trilha personalizada com marcos de aprendizagem, que ajuda mentor e mentorado a saber onde estão e o que precisam fazer em seguida.",
      "A agenda integrada, com lembretes e acompanhamento dos encontros, deu aos mentores mais controle do tempo investido e manteve o engajamento dos mentorados ao longo do processo.",
      "Além do aprendizado técnico, o projeto ofereceu direcionamento sobre posicionamento no mercado, networking, preparação para entrevistas e definição de metas — impulsionando também a autoconfiança e a clareza de trajetória.",
    ],
    note: {
      title: "o que entregamos",
      tone: "sage" as const,
      items: [
        "Mentoria com profissionais da área",
        "Apoio e desenvolvimento profissional",
        "Foco em evolução de carreira",
      ],
    },
  },
  process: {
    title: "Processo de design",
    subtitle:
      "O processo foi estruturado em etapas iterativas, sempre com foco nas necessidades de quem participa da mentoria.",
    steps: [
      {
        number: "01",
        title: "Empatia",
        paragraphs: [
          "Analisamos plataformas de mentoria existentes para identificar boas práticas: algoritmos de matching, dashboards de progresso e ferramentas que estruturam as interações entre mentor e mentorado.",
        ],
        tone: "butter" as const,
        tilt: -2.5,
        offset: false,
      },
      {
        number: "02",
        title: "Definição",
        paragraphs: [
          "Mentor: profissional experiente disposto a compartilhar conhecimento e acompanhar a evolução do mentorado.",
          "Mentorado: profissional em início de carreira que busca orientação prática e direcionamento para crescer com mais segurança.",
        ],
        tone: "sky" as const,
        tilt: 2,
        offset: true,
      },
      {
        number: "03",
        title: "Prototipação",
        paragraphs: [
          "Protótipos das principais telas, do login à jornada completa de cadastro e agendamento de mentorias, garantindo uma experiência fluida e intuitiva.",
        ],
        tone: "blush" as const,
        tilt: -1.8,
        offset: false,
      },
      {
        number: "04",
        title: "Desenvolvimento e iteração",
        paragraphs: [
          "Implementação da versão final com base nos insights coletados, com lançamento da primeira fase da plataforma.",
        ],
        tone: "sage" as const,
        tilt: 2.4,
        offset: true,
      },
    ],
  },
  insights: {
    title: "Principais insights",
    items: [
      "Criar um painel de acompanhamento com marcos de progresso.",
      "Desenvolver templates para estruturar encontros e registrar feedbacks.",
    ],
    images: [
      { src: "/img/mc-onboarding.png", alt: "Tela de escolha do modelo de usuário" },
      { src: "/img/mc-mentor-profile.png", alt: "Tela de perfil de mentor com mentorias marcadas" },
    ],
    outcome: {
      title: "Solução e resposta",
      text: "Uma plataforma que conecta mentores e mentorados, com trilha de aprendizagem, agenda integrada e registro dos encontros — tudo em um só lugar.",
      image: {
        src: "/img/mc-cover.png",
        alt: "Landing page da Mentor Cycle nas versões clara e escura",
      },
    },
  },
  flowchart: {
    title: "Fluxograma do site",
    subtitle:
      "Desenhamos um fluxograma detalhado da navegação na plataforma, destacando os principais caminhos do usuário.",
    flows: [
      {
        caption: "Jornada do admin",
        src: "/img/mc-flow-admin.png",
        alt: "Fluxograma da jornada do administrador",
        tilt: -1.6,
        tapeTone: "sky" as const,
      },
      {
        caption: "Jornada do mentorado",
        src: "/img/mc-flow-mentee.png",
        alt: "Fluxograma da jornada do mentorado",
        tilt: 1.4,
        tapeTone: "butter" as const,
      },
      {
        caption: "Jornada do mentor",
        src: "/img/mc-flow-mentor.png",
        alt: "Fluxograma da jornada do mentor",
        tilt: -1.2,
        tapeTone: "blush" as const,
      },
    ],
  },
  next: {
    kicker: "próximo projeto",
    index: "Projeto 02",
    title: "Velion Bank",
    text: "Criação de chatbot com auxílio do Figma Make para um grande banco.",
    to: "/velion-bank",
    image: "/img/logo-velion-bank.png",
    imageBg: "#F7F7F9",
  },
} as const;

export const velionBank = {
  slug: "velion-bank",
  index: "Projeto 02",
  title: "Velion Bank",
  subtitle:
    "Chatbot de ajuda: como o Figma Make acelerou a criação de um fluxo conversacional bancário.",
  sticker: "IA ✦ prototipação",
  // `20:25` is sky and `20:29` sage in the desktop frame.
  tags: [
    { label: "Web" },
    { label: "Benchmarking", tone: "sky" as const },
    { label: "Figma Make" },
    { label: "IA", tone: "sage" as const },
    { label: "Documentação de prompt" },
  ],
  facts: [
    { label: "meu papel", value: "UX/UI, benchmarking e prompt" },
    { label: "tipo", value: "Chatbot de amortização" },
    { label: "ferramentas", value: "Figma e Figma Make" },
    { label: "observação", value: "Case anonimizado" },
  ],
  highlights: [
    {
      value: "10 min",
      label: "de prototipação",
      note: "contra 2 dias no processo manual",
      tone: "butter" as const,
      tilt: -2,
      offset: false,
    },
    {
      value: "99,7%",
      label: "mais rápido",
      note: "eficiência na entrega",
      tone: "sky" as const,
      tilt: 1.6,
      offset: true,
    },
    {
      value: "Alta",
      label: "qualidade do resultado",
      note: "consistência validada com a PO",
      tone: "sage" as const,
      tilt: -1.4,
      offset: false,
    },
  ],
  cover: {
    src: "/img/vb-cover.png",
    alt: "Tela do chatbot de ajuda do Velion Bank",
  },
  project: {
    title: "O projeto",
    cards: [
      {
        label: "desafio",
        text: "Criar o fluxo conversacional completo para amortização de produtos financeiros, incluindo múltiplas telas, estados, validações e uma linguagem clara e humanizada.",
        tone: "card" as const,
        tilt: -1.5,
      },
      {
        label: "contexto",
        text: "O processo tradicional de prototipação levava 2 dias completos: criação manual de telas, ajustes de layout, componentização, escrita de copy e definição de estados.",
        tone: "card" as const,
        tilt: 1.5,
      },
    ],
    steps: [
      {
        number: "01",
        title: "Benchmarking",
        text: "Análise dos chatbots do Nubank, do PagBank e do próprio banco.",
        tone: "butter" as const,
        tilt: -1.4,
      },
      {
        number: "02",
        title: "Protótipo manual",
        text: "Primeira versão criada do zero, em 2 dias de trabalho.",
        tone: "blush" as const,
        tilt: 1.2,
      },
      {
        number: "03",
        title: "Figma Make",
        text: "Recriação acelerada com IA, em 10 minutos.",
        tone: "sky" as const,
        tilt: -1.1,
      },
    ],
  },
  benchmarking: {
    title: "Benchmarking",
    subtitle:
      "Análise detalhada das interfaces e dos fluxos conversacionais dos principais chatbots bancários do mercado.",
    image: {
      src: "/img/vb-prompt-doc.png",
      alt: "Documento de benchmarking com a análise dos chatbots do Nubank, do PagBank e do próprio banco",
    },
    learningsTitle: "Aprendizados aplicados",
    learnings: [
      "Interações rápidas e guiadas",
      "Tom humano, sem jargões",
      "Jornada simples e objetiva",
      "Sugestões diretas ao usuário",
    ],
    competitors: [
      {
        name: "Nubank",
        points: [
          "Linguagem natural e humanizada",
          "Mantém contexto com fluidez",
          "Design moderno e limpo",
        ],
        tilt: -1.6,
      },
      {
        name: "PagBank",
        points: [
          "Comunicação rápida e direta",
          "Menus prontos reduzem fricção",
          "Boa resolução imediata",
        ],
        tilt: 1.3,
      },
      {
        name: "Velion Bank",
        points: [
          "Fluxos estruturados e seguros",
          "Interface moderna e intuitiva",
          "Experiência guiada e clara",
        ],
        tilt: -1.1,
      },
    ],
  },
  figmaMake: {
    title: "Como usei o Figma Make",
    steps: [
      {
        number: "1",
        title: "Contextualização",
        text: "Reuni os insights do benchmarking e defini as melhores práticas: linguagem humanizada, fluxo guiado e interações diretas.",
      },
      {
        number: "2",
        title: "Protótipo com IA",
        text: "Escrevi um prompt detalhado descrevendo o fluxo completo, as etapas da jornada, o tom de comunicação desejado e as referências visuais.",
      },
      {
        number: "3",
        title: "Resultado do prompt",
        text: "Em 10 minutos, o Figma Make gerou o fluxo completo com componentes organizados, Auto Layout aplicado e variações de estados.",
      },
      {
        number: "4",
        title: "Ajuste final",
        text: "Ajustes pontuais alinharam o fluxo 100% às regras de negócio, mas a base já estava completa e pronta para uso.",
      },
    ],
    prompt: {
      title: "o prompt que usei",
      paragraphs: [
        "Crie o fluxo completo da jornada de amortização de um produto financeiro: seleção do tipo de amortização, inserção de valores, cálculo automático, revisão e confirmação.",
        "Use linguagem humana e objetiva (referência: chatbots do Nubank e do PagBank). Estruture em formato mobile, com componentes, Auto Layout, espaçamentos padronizados e estados de erro e loading. Organize as telas em fluxo lógico e mantenha consistência visual.",
      ],
      results: [
        "Layout consistente",
        "Componentes padronizados",
        "Copy humanizada",
        "Estados completos",
      ],
    },
    insight: {
      title: "principal insight",
      text: "A IA não apenas replicou: ela melhorou. Sugeriu boas práticas de design e de copy que levariam horas para implementar manualmente.",
    },
    image: {
      src: "/img/vb-benchmarking.png",
      alt: "Documentação do prompt, das versões do protótipo e das telas geradas pelo Figma Make",
    },
  },
  comparison: {
    title: "Manual vs. Figma Make",
    columns: [
      {
        title: "Versão manual · 2 dias",
        tone: "blush" as const,
        tilt: -1.2,
        points: [
          "Layout básico e funcional",
          "Espaçamentos inconsistentes",
          "Copy técnica e pouco humanizada",
          "Estados mal definidos",
          "Muito tempo em ajustes visuais",
          "Retrabalho constante",
        ],
      },
      {
        title: "Com Figma Make · 10 min",
        tone: "sage" as const,
        tilt: 1.2,
        points: [
          "Layout moderno e polido",
          "Componentes padronizados com Auto Layout",
          "Copy clara, direta e humanizada",
          "Estados completos: erro, loading e sucesso",
          "Entrega em minutos",
          "Base sólida para refinamentos",
        ],
      },
    ],
    table: {
      head: ["critério", "manual", "Figma Make"],
      rows: [
        ["Tempo", "2 dias", "10 min"],
        ["Consistência", "Média", "Alta"],
        ["Qualidade", "Boa", "Excelente"],
        ["Manutenção", "Difícil", "Fácil"],
      ],
    },
  },
  result: {
    title: "Resultado",
    subtitle:
      "A combinação entre pesquisa estratégica, processo de UX e aceleração com IA resultou em uma solução de alta qualidade entregue em uma fração do tempo.",
    numbers: [
      { value: "99,7%", label: "mais rápido", tilt: -1.5 },
      { value: "10 min", label: "de tempo total", tilt: 1.2 },
      { value: "100%", label: "funcional", tilt: -1 },
    ],
    closing: {
      title: "O Figma Make não substituiu o trabalho de UX.",
      text: "Ele potencializou, permitindo focar no que realmente importa: estratégia, decisão e experiência do usuário.",
    },
  },
  next: {
    kicker: "próximo projeto",
    index: "Projeto 01",
    title: "Mentor Cycle",
    text: "Transformando mentoria em experiência digital: uma plataforma que conecta mentores e mentorados.",
    to: "/mentor-cycle",
    image: "/img/logo-mentor-cycle.png",
    imageBg: "#000000",
  },
} as const;

export const caseCta = {
  kicker: "gostou do que viu?",
  title: "Vamos trabalhar juntos?",
  text: "Entre em contato para conversarmos sobre como posso ajudar a transformar suas ideias em realidade.",
} as const;
