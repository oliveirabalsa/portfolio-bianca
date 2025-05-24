<template>
  <div
    class="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50"
  >
    <div class="text-center px-4">
      <div class="mb-8">
        <svg
          class="w-64 h-64 mx-auto"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        Em construção
      </h1>
      <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Estamos trabalhando para trazer algo incrível para você. Por favor,
        volte em breve para ver as novidades!
      </p>
      <div class="mt-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Voltar para Home
          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
