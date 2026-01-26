<script setup lang="ts">
const props = defineProps<{
  image: string;
  title: string;
  description: string;
  tags: string[];
  variant: "default" | "secondary";
}>();

const variants = {
  default: {
    container: "bg-white rounded-lg shadow-md min-h-96",
    image: "w-full h-60 object-cover rounded-t-lg",
    content: "p-4",
    title: "text-2xl font-bold my-3",
    description: "text-gray-500",
    tagsContainer: "flex items-center gap-2 my-3",
  },
  secondary: {
    container: "bg-white rounded-lg shadow-md min-h-[444px] max-w-96",
    image: "w-full h-64 object-cover rounded-t-lg",
    content: "p-3 space-y-4",
    title: "text-2xl font-bold text-gray-900 my-2",
    description: "text-gray-500 text-base",
    tagsContainer: "flex items-center gap-1 my-2",
  },
};
</script>

<template>
  <div :class="variants[props.variant].container + ' cursor-pointer'">
    <nuxt-img
      :src="props.image"
      :alt="props.title"
      :class="variants[props.variant].image"
      loading="lazy"
    />
    <div :class="variants[props.variant].content">
      <h2 :class="variants[props.variant].title">{{ props.title }}</h2>
      <p :class="variants[props.variant].description">
        {{ props.description }}
      </p>
      <section :class="variants[props.variant].tagsContainer">
        <Badge v-for="tag in props.tags" :key="tag" variant="secondary">
          {{ tag }}
        </Badge>
      </section>
    </div>
  </div>
</template>
