<script setup lang="ts">
const props = defineProps<{
  image: string;
  title: string;
  description: string;
  tags: string[];
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md min-h-96">
    <nuxt-img
      :src="props.image"
      :alt="props.title"
      class="w-full h-60 object-cover rounded-t-lg"
      loading="lazy"
      provider="ipx"
    />
    <div class="p-4">
      <h2 class="text-2xl font-bold my-3">{{ props.title }}</h2>
      <p class="text-gray-500">
        {{ props.description }}
      </p>
      <section class="flex items-center gap-2 my-3">
        <Badge v-for="tag in props.tags" :key="tag" variant="secondary">
          {{ tag }}
        </Badge>
      </section>
    </div>
  </div>
</template>
