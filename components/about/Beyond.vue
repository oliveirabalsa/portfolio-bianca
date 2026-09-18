<script setup lang="ts">
import { beyond } from "~/lib/content/about";
</script>

<template>
  <!-- Figma: desktop 29:34 (y 4171, h 1085, pad-top 96), mobile 32:68 (h 1969,
       pad-top 80). The title doodle is desktop-only, which the primitive
       already handles by hiding the scribble below `sm`. -->
  <section class="container-bk pt-20 lg:pt-24">
    <BaseSectionTitle v-reveal class="reveal" :title="beyond.title" scribble="squiggle" />

    <!-- Desktop: an 891px text column with the portrait at x 955 (29:39).
         Mobile: the text, then the portrait as the first of four polaroids. -->
    <div
      class="mt-[1.375rem] grid items-start gap-8 lg:mt-10 lg:grid-cols-[67.912%_1fr] lg:gap-[4.878%]"
    >
      <div v-reveal="{ delay: 100 }" class="reveal flex flex-col gap-[1.375rem]">
        <p
          v-for="(text, i) in beyond.paragraphs"
          :key="i"
          class="m-0 text-base leading-[1.7] text-ink-soft lg:text-[1.25rem]"
        >
          {{ text }}
        </p>
      </div>

      <div v-reveal="{ tilt: beyond.mainPhoto.tilt }" class="reveal-tilt lg:mt-[1.125rem]">
        <BasePolaroid
          :src="beyond.mainPhoto.src"
          :alt="beyond.mainPhoto.alt"
          :caption="beyond.mainPhoto.caption"
          :tilt="0"
          ratio="5/4"
          ratio-lg="7/8"
          :focal="beyond.mainPhoto.focal"
          :tape-tone="beyond.mainPhoto.tapeTone"
          tape-align="right"
        />
      </div>
    </div>

    <!-- Figma lays out three 410.67px columns at x 0/450.67/901.33 (29:50).
         With the running shot dropped, the row keeps that 31.3% photo width
         and centres instead of stretching: two photos spread across the full
         1312px column would be half again as tall as the design and push the
         rest of the page down. -->
    <ul
      class="m-0 mt-8 flex list-none flex-col gap-8 p-0 lg:mt-10 lg:flex-row lg:justify-center lg:gap-10"
    >
      <li
        v-for="(photo, i) in beyond.gallery"
        :key="photo.caption"
        v-reveal="{ tilt: photo.tilt, delay: 90 * i }"
        class="reveal-tilt lg:w-[31.3%]"
      >
        <BasePolaroid
          :src="photo.src"
          :alt="photo.alt"
          :caption="photo.caption"
          :tilt="0"
          ratio="5/4"
          :focal="photo.focal"
          :tape-tone="photo.tapeTone"
          tape-align="left"
        />
      </li>
    </ul>
  </section>
</template>
