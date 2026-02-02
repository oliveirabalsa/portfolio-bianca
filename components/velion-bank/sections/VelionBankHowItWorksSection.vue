<template>
  <section class="max-w-[1340px] mx-auto bg-[#FAFAFA] mb-6 font-sans">
    <h2 class="text-xl font-semibold text-[#5B2E3E]">Comparativo -- Manual vs. Figma Make</h2>
    <div class="mt-3 grid gap-6 lg:grid-cols-2">
      <div class="rounded-2xl border border-[#F3B1B8] bg-white p-6 shadow-sm">
        <div class="inline-flex items-center gap-2 rounded-xl bg-[#F9D7DC] px-4 py-2 text-sm font-semibold text-[#B91C1C]">
          <span class="text-base">✕</span>
          Versao Manual (2 dias)
        </div>
        <ul class="mt-6 space-y-3 text-sm text-[#4B5563]">
          <li>• Layout basico e funcional</li>
          <li>• Espacamentos inconsistentes</li>
          <li>• Copy tecnico e pouco humanizado</li>
          <li>• Estados mal definidos</li>
          <li>• Muito tempo em ajustes visuais</li>
          <li>• Retrabalho constante</li>
        </ul>
      </div>

      <div class="rounded-2xl border border-[#BDECC9] bg-white p-6 shadow-sm">
        <div class="inline-flex items-center gap-2 rounded-xl bg-[#E1FAE9] px-4 py-2 text-sm font-semibold text-[#15803D]">
          <span class="text-base">✓</span>
          Com Figma Make (10 min)
        </div>
        <ul class="mt-6 space-y-3 text-sm text-[#4B5563]">
          <li>• Layout moderno e polido</li>
          <li>• Componentes padronizados com Auto Layout</li>
          <li>• Copy clara, direta e humanizada</li>
          <li>• Estados completos (erro, loading, sucesso)</li>
          <li>• Entrega em minutos</li>
          <li>• Base solida para refinamentos</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 text-center shadow-sm">
        <p class="text-xs font-medium text-[#6B7280]">Tempo</p>
        <p class="mt-4 text-sm font-semibold text-[#B91C1C]">2 dias</p>
        <p class="mt-6 text-sm font-semibold text-[#16A34A]">10 min</p>
      </div>
      <div class="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 text-center shadow-sm">
        <p class="text-xs font-medium text-[#6B7280]">Consistencia</p>
        <p class="mt-4 text-sm font-semibold text-[#B91C1C]">Media</p>
        <p class="mt-6 text-sm font-semibold text-[#16A34A]">Alta</p>
      </div>
      <div class="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 text-center shadow-sm">
        <p class="text-xs font-medium text-[#6B7280]">Qualidade</p>
        <p class="mt-4 text-sm font-semibold text-[#B91C1C]">Boa</p>
        <p class="mt-6 text-sm font-semibold text-[#16A34A]">Excelente</p>
      </div>
      <div class="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 text-center shadow-sm">
        <p class="text-xs font-medium text-[#6B7280]">Manutencao</p>
        <p class="mt-4 text-sm font-semibold text-[#B91C1C]">Dificil</p>
        <p class="mt-6 text-sm font-semibold text-[#16A34A]">Facil</p>
      </div>
    </div>
  </section>
</template>
