<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    image: string;
    title: string;
    description: string;
    tags: string[];
    variant: "default" | "secondary";
    class?: string;
    expand?: boolean;
  }>(),
  { expand: false, class: undefined }
);

const variants = {
  default: {
    container: "bg-white rounded-lg shadow-md h-full max-h-104 w-full",
    image: "w-full h-60  object-cover rounded-t-lg",
    content: "p-4 flex flex-col h-full",
    title: "text-2xl font-bold my-3",
    description: "text-gray-500",
    tagsContainer:
      "flex flex-wrap items-center gap-2 my-3 min-h-[56px] mt-auto",
  },
  secondary: {
    container: "bg-white rounded-lg shadow-md h-full max-h-104 w-full",
    image: "w-full h-60 object-cover rounded-t-lg",
    content: "p-3 flex flex-col h-full",
    title: "text-2xl font-bold text-gray-900 my-2",
    description: "text-gray-500 text-base",
    tagsContainer:
      "flex flex-wrap items-center gap-1 my-2 min-h-[56px] mt-auto",
  },
};
</script>

<template>
  <div
    :class="[
      variants[props.variant].container,
      props.expand ? 'min-w-0 max-w-none' : 'max-w-96',
      'cursor-pointer flex flex-col',
      props.class,
    ]"
  >
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
      <section
        :class="variants[props.variant].tagsContainer + ' flex flex-wrap gap-2'"
      >
        <Badge v-for="tag in props.tags" :key="tag" variant="secondary">
          {{ tag }}
        </Badge>
      </section>
    </div>
  </div>
</template>
