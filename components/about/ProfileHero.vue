<template>
  <section
    class="relative h-[60vh] flex items-center justify-center bg-[95%_-2rem] md:bg-[100%_-2rem]"
    style="
      background-image: url('/images/background-ux.png');
      background-size: cover;
      background-repeat: repeat;
      background-blend-mode: overlay;
    "
  >
    <div class="max-w-6xl mx-auto text-center">
      <div class="mb-8">
        <div
          class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto"
        >
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  imageSrc?: string;
  imageAlt?: string;
}

withDefaults(defineProps<Props>(), {
  imageSrc: "/images/bianca-self-photo.png",
  imageAlt: "Bianca Karoline",
});
</script>
