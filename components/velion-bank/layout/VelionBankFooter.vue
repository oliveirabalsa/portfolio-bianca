<template>
  <footer class="w-full bg-white font-sans">
    <div
      class="mx-auto flex max-w-[1340px] items-center justify-between px-6 py-6"
    >
      <div>
        <p class="text-lg font-semibold text-gray-900">Bianca Karoline</p>
        <p class="text-xs text-neutral-400">
          Designer UI/UX • {{ currentYear }}
        </p>
      </div>

      <div class="flex items-center gap-3">
        <a
          href="https://instagram.com/ibiancakaroline"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          class="inline-flex items-center justify-center text-black transition hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          <svg
            class="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              ry="5"
              stroke-width="1.8"
            />
            <circle cx="12" cy="12" r="4" stroke-width="1.8" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/biancakaroline-uxui"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          class="inline-flex items-center justify-center text-white rounded-[3px] bg-black transition hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          <svg class="h-7.5 w-7.5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M6.94 6.5a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0ZM4 8.75h2.88V20H4V8.75ZM9.25 8.75h2.76v1.54h.04c.38-.72 1.3-1.48 2.68-1.48 2.86 0 3.39 1.88 3.39 4.33V20h-2.88v-5.48c0-1.31-.03-2.99-1.82-2.99-1.83 0-2.11 1.43-2.11 2.9V20H9.25V8.75Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
