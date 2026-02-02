<template>
  <div class="min-h-screen bg-white">
    <VelionBankHeader />
    <main class="mx-auto w-full">
      <slot />
    </main>
    <VelionBankFooter />
  </div>
</template>

<script setup lang="ts">
import VelionBankFooter from "./VelionBankFooter.vue";
import VelionBankHeader from "./VelionBankHeader.vue";
</script>
