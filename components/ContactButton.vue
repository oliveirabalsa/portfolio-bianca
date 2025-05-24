<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="buttonClasses"
    class="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg text-white"
  >
    <Icon :name="icon" class="w-5 h-5" />
    {{ label }}
  </a>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  label: string;
  href: string;
  variant: "whatsapp" | "email" | "linkedin";
}

const props = defineProps<Props>();

const buttonClasses = computed(() => {
  switch (props.variant) {
    case "whatsapp":
      return "bg-green-500 hover:bg-green-600 text-white";
    case "email":
      return "bg-orange-500 hover:bg-orange-600 text-white";
    case "linkedin":
      return "bg-blue-400 hover:bg-blue-500 text-white";
    default:
      return "bg-gray-500 hover:bg-gray-600 text-white";
  }
});
</script>
