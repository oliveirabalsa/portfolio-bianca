<template>
  <section class="max-w-[1340px] mt-8 mx-auto bg-[#FAFAFA]  font-sans">
    <div class="mx-auto w-full  ">
      <h2 class="text-3xl font-normal text-black">O Projeto</h2>

      <div class="mt-8 w-full grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-6">
          <div class="space-y-2">
            <h3 class="text-lg font-medium text-black">Desafio</h3>
            <p class="text-sm leading-relaxed text-neutral-700">
              Criar o fluxo conversacional completo para amortização de produtos financeiros,
              incluindo múltiplas telas, estados, validações e uma linguagem clara e humanizada.
            </p>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-medium text-black">Contexto</h3>
            <p class="text-sm leading-relaxed text-neutral-700">
              O processo tradicional de prototipação levava 2 dias completos, envolvendo criação
              manual de telas, ajustes de layout, componentização, escrita de copy e definição de
              estados.
            </p>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-lg font-medium text-black">Abordagem</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
              <div class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                1
              </div>
              <div>
                <p class="text-sm font-semibold text-neutral-900">Benchmarking</p>
                <p class="text-xs text-neutral-500">Análise dos chatbots de Velion Bank, PagBank e Nubank</p>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
              <div class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                2
              </div>
              <div>
                <p class="text-sm font-semibold text-neutral-900">Protótipo Manual</p>
                <p class="text-xs text-neutral-500">Primeira versão criada do zero (2 dias)</p>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
              <div class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                3
              </div>
              <div>
                <p class="text-sm font-semibold text-neutral-900">Figma Make</p>
                <p class="text-xs text-neutral-500">Recriação acelerada com IA (10 minutos)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
        <div class="rounded-2xl border border-neutral-200 bg-white py-4 mt-8 px-6 shadow-sm">
          <div class=" space-y-3">
        <div class="space-y-1">
          <h3 class="text-lg font-semibold text-neutral-900">Benchmarking — Análise Visual dos Concorrentes</h3>
          <p class="text-sm text-neutral-500">Análise detalhada das interfaces e fluxos conversacionais dos principais chatbots bancários do mercado.</p>
        </div>
          <div class="relative w-full overflow-hidden" style="padding-top: 150%;">
            <div class="absolute inset-0 flex items-center  border-x-2 border-gray-200 justify-center">
              <img src="@/assets/images/chatbot-image.svg" alt="chatbot velion banck" class="w-full h-full object-cover">
              
        
            <div class="w-full absolute bottom-0 left-0 right-0 z-10 h-[135px] bg-[#F0F7FF] border border-[#D1E9FF] border-l-4 border-l-[#3B82F6] rounded-lg p-6 flex items-start gap-4 shadow-sm">
    
    <div class="mt-1 text-[#3B82F6] flex-shrink-0 px-2">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>

    <div class="flex flex-col gap-4 w-full">
      <h3 class="text-[15px] font-bold text-[#1E293B] tracking-tight">
        Principais aprendizados aplicados
      </h3>

        <div class="grid grid-cols-2 w-2/4 gap-y-2">
        <div v-for="item in aprendizados" :key="item" 
             class="flex items-center gap-2.5 text-[13.5px] text-[#475569] font-medium leading-tight">
          
          <div class="flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#3B82F6] flex items-center justify-center">
            <svg class="w-2.5 h-2.5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {{ item }}
        </div>
      </div>
    </div>
  </div>
          

            </div>
          </div>

        </div>
      </div>
      <div class="grid gap-3 mt-3 md:grid-cols-3">
          <div class="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-widest text-violet-600">Nubank</div>
            <ul class="mt-2 space-y-1 text-xs text-neutral-600">
              <li>• Linguagem natural e humanizada</li>
              <li>• Mantém contexto com fluidez</li>
              <li>• Design moderno e limpo</li>
            </ul>
          </div>
          <div class="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-widest text-emerald-600">PagBank</div>
            <ul class="mt-2 space-y-1 text-xs text-neutral-600">
              <li>• Comunicação rápida e direta</li>
              <li>• Menus prontos → reduz fricção</li>
              <li>• Boa resolução imediata</li>
            </ul>
          </div>
          <div class="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-widest text-blue-600">Velion Bank</div>
            <ul class="mt-2 space-y-1 text-xs text-neutral-600">
              <li>• Fluxos estruturados e seguros</li>
              <li>• Interface moderna e intuitiva</li>
              <li>• Experiência guiada e clara</li>
            </ul>
          </div>
        </div>
    </div>
  </section>
</template>
<script setup>
const aprendizados = [
  "Interações rápidas e guiadas",
  "Tom humano, sem jargões",
  "Jornada simples e objetiva",
  "Sugestões diretas ao usuário"
]
</script>