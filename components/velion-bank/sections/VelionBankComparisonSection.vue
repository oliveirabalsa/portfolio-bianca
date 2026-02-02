<template>
  <section class="velion-bank-comparison">
    <header class="section-header">
      <VelionBankSectionTitle>Comparacao rapida</VelionBankSectionTitle>
      <VelionBankSectionSubtitle>
        Veja como o VelionBank AI supera atendimentos tradicionais e solucoes
        genericas de chatbot.
      </VelionBankSectionSubtitle>
    </header>
    <div class="comparison-grid">
      <VelionBankCard>
        <template #header>
          <h3 class="card-title">Suporte tradicional</h3>
        </template>
        <template #body>
          <ul class="comparison-list">
            <li>⏱ Resposta lenta em horarios de pico</li>
            <li>💸 Custos altos por atendente</li>
            <li>📞 Baixa escalabilidade</li>
            <li>⚠️ Processos manuais</li>
          </ul>
        </template>
      </VelionBankCard>
      <VelionBankCard>
        <template #header>
          <h3 class="card-title">Chatbots genericos</h3>
        </template>
        <template #body>
          <ul class="comparison-list">
            <li>⚡ Respostas rapidas, mas pouco precisas</li>
            <li>🔧 Integracoes limitadas</li>
            <li>🌐 Suporte parcial a idiomas</li>
            <li>🔒 Seguranca nem sempre garantida</li>
          </ul>
        </template>
      </VelionBankCard>
      <VelionBankCard variant="highlight">
        <template #header>
          <h3 class="card-title">VelionBank AI</h3>
        </template>
        <template #body>
          <ul class="comparison-list">
            <li>✅ Atendimento confiavel e preciso</li>
            <li>🔐 Compliance bancario embutido</li>
            <li>🌍 Disponibilidade global 24/7</li>
            <li>📈 Analise continua de desempenho</li>
          </ul>
        </template>
      </VelionBankCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import VelionBankCard from "../ui/VelionBankCard.vue";
import VelionBankSectionSubtitle from "../ui/VelionBankSectionSubtitle.vue";
import VelionBankSectionTitle from "../ui/VelionBankSectionTitle.vue";
</script>

<style scoped>
.velion-bank-comparison {
  padding: 3.5rem 0;
}

.section-header {
  text-align: center;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.card-title {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.comparison-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.6rem;
  color: #475569;
  line-height: 1.5;
}
</style>