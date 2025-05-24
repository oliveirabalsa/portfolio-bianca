<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
  >
    <Icon :name="icon" class="w-6 h-6" />
  </a>
</template>

<script setup lang="ts">
type Props = {
  icon: string;
  href: string;
  label: string;
  color: string;
};

defineProps<Props>();
</script>
