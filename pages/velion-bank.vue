<template>
  <VelionBankLayout>
  <VelionBankHeroSection />
  <VelionBankStatsSection />
  <VelionBankDemoSection />
  <VelionBankHowItWorksSection />
  <VelionBankBenefitsSection />
  <VelionBackOthers/>
  </VelionBankLayout>
</template>

<script setup lang="ts">
import VelionBankBenefitsSection from "@/components/velion-bank/sections/VelionBankBenefitsSection.vue";
import VelionBankDemoSection from "@/components/velion-bank/sections/VelionBankDemoSection.vue";
import VelionBankHeroSection from "@/components/velion-bank/sections/VelionBankHeroSection.vue";
import VelionBankHowItWorksSection from "@/components/velion-bank/sections/VelionBankHowItWorksSection.vue";
import VelionBankStatsSection from "@/components/velion-bank/sections/VelionBankStatsSection.vue";
import VelionBankLayout from "@/components/velion-bank/layout/VelionBankLayout.vue";
import VelionBackOthers from "@/components/velion-bank/sections/VelionBankOthers.vue";
</script>
