<template>
  <section class="max-w-[1340px] mx-auto mt-10 font-sans">
    <div class="mb-6 flex items-center gap-3">
      <span class="inline-flex h-10 w-10 items-center justify-center   text-[#7C3AED]">
        <svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      </span>
      <h2 class="text-lg font-semibold text-[#111827]">Como Utilizei o Figma Make</h2>
    </div>
    <div class="rounded-3xl border border-[#E7E7F6] bg-gradient-to-br from-[#F6F4FF] via-[#F7FAFF] to-[#F8F2FF] px-6 py-10 shadow-sm">
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="space-y-3">
          <span class="inline-flex rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white">Passo 1</span>
          <h3 class="text-lg font-semibold text-[#111827]">Contextualizacao — Primeiro contato</h3>
          <p class="text-sm leading-relaxed text-[#4B5563]">
            Coletei os insights do benchmarking (Itau, PagBank, Nubank) e defini as melhores praticas:
            linguagem humanizada, fluxo guiado e interacoes diretas.
          </p>
        </div>

        <div class="space-y-3">
          <span class="inline-flex rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white">Passo 2</span>
          <h3 class="text-lg font-semibold text-[#111827]">Segunda Versao — Prototipo com IA</h3>
          <p class="text-sm leading-relaxed text-[#4B5563]">
            Criei um prompt detalhado descrevendo o fluxo completo, as etapas da jornada,
            o tom de comunicacao desejado e as referencias visuais.
          </p>
        </div>
      </div>

      <div class="mt-8 rounded-2xl bg-[#121212] px-6 py-6 text-white shadow-lg">
        <p class="text-xs uppercase tracking-widest text-[#A1A1AA]">Prompt utilizado</p>
        <p class="mt-4 text-sm text-[#E5E7EB]">
          "Crie o fluxo completo da jornada de amortizacao de um produto financeiro:
        </p>
        <ul class="mt-4 space-y-1 text-sm text-[#E5E7EB]">
          <li>• Selecao do tipo de amortizacao</li>
          <li>• Insercao de valores</li>
          <li>• Calculo automatico</li>
          <li>• Revisao</li>
          <li>• Confirmacao</li>
        </ul>
        <p class="mt-4 text-sm text-[#E5E7EB]">
          Use linguagem humana e objetiva (referencia: chatbots do Nubank e PagBank). Estruture em
          formato mobile, com componentes, Auto Layout, espacamentos padronizados e estados de
          erro/loading. Organize as telas em fluxo logico e mantenha consistencia visual."
        </p>
      </div>

      <div class="mt-10 grid gap-10 lg:grid-cols-2">
        <div class="space-y-4">
          <span class="inline-flex rounded-full bg-[#16A34A] px-3 py-1 text-xs font-semibold text-white">Passo 3</span>
          <h3 class="text-lg font-semibold text-[#111827]">Resultado do Prompt</h3>
          <p class="text-sm leading-relaxed text-[#4B5563]">
            Em 10 minutos, o Figma Make gerou o fluxo completo com componentes organizados,
            Auto Layout aplicado e variacoes de estados.
          </p>
          <ul class="space-y-2 text-sm text-[#374151]">
            <li class="flex items-center gap-2">
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#16A34A] text-[#16A34A]">✓</span>
              Layout consistente e moderno
            </li>
            <li class="flex items-center gap-2">
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#16A34A] text-[#16A34A]">✓</span>
              Componentes padronizados
            </li>
            <li class="flex items-center gap-2">
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#16A34A] text-[#16A34A]">✓</span>
              Copy humanizada e direta
            </li>
            <li class="flex items-center gap-2">
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#16A34A] text-[#16A34A]">✓</span>
              Estados completos (erro, loading, sucesso)
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <span class="inline-flex rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white">Passo 4</span>
          <h3 class="text-lg font-semibold text-[#111827]">Resultado Geral da Tarefa</h3>
          <p class="text-sm leading-relaxed text-[#4B5563]">
            Ajustes pontuais foram feitos para alinhar 100% com as regras de negocio, mas a base
            estava completa e pronta para uso.
          </p>

          <div class="rounded-2xl border border-[#D9D5FF] bg-white px-5 py-4">
            <div class="flex items-start gap-3">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-[#4F46E5]">💡</span>
              <div>
                <p class="text-sm font-semibold text-[#111827]">Principal insight</p>
                <p class="mt-1 text-sm text-[#4B5563]">
                  A IA nao apenas replicou — ela melhorou. Sugeriu melhores praticas de design
                  e copy que levaria horas para implementar manualmente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <img src="@/assets/images/demo-image.svg" alt="demo image" class="w-full h-full object-cover">
    </div>
  </section>
</template>