import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      title: "Bianca Karoline · Product Designer UX/UI",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Product Designer com mais de 5 anos de experiência em produtos e serviços financeiros. Portfólio de UX/UI, design systems e prototipação.",
        },
        { name: "theme-color", content: "#F3EFE6" },
        { property: "og:title", content: "Bianca Karoline · Product Designer UX/UI" },
        {
          property: "og:description",
          content:
            "Uma designer de produtos e soluções, transformando ideias em experiências digitais memoráveis.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      script: [
        {
          // Runs synchronously before first paint. Scroll-reveal styles are
          // scoped under `.js-reveal`, so without this class (JS disabled or
          // still loading) every revealed element renders plainly visible.
          innerHTML: "document.documentElement.classList.add('js-reveal')",
          tagPosition: "head",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  components: [{ path: "~/components", pathPrefix: true }],

  // This project is checked out as a git worktree nested inside the parent
  // repo, so the default watch set is large enough to exhaust macOS file
  // descriptors (EMFILE). Keep the watcher off everything generated.
  //
  // NOTE: do not add a `**/.claude/**` glob here. The worktree itself lives
  // under `<repo>/.claude/worktrees/<name>/`, so that pattern matches every
  // file in the project and silently disables hot-reload entirely.
  ignore: [
    "**/node_modules/**",
    "**/.git/**",
    "**/.nuxt/**",
    "**/.output/**",
    "**/dist/**",
  ],

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ["**/node_modules/**", "**/.git/**", "**/.nuxt/**", "**/.output/**"],
      },
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Bricolage+Grotesque": [400, 600, 700, 800],
          "Instrument+Sans": [400, 500, 600, 700],
          Caveat: [500, 600, 700],
        },
        display: "swap",
        download: true,
        inject: true,
        // Portuguese needs latin + latin-ext; without this the module also
        // downloads Cyrillic and Vietnamese subsets for every weight, which
        // is ~1.6MB of woff2 that would never be served.
        subsets: ["latin", "latin-ext"],
      },
    ],
  ],
});
