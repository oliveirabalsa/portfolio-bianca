<script setup lang="ts">
import { values } from "~/lib/content/home";
import type { IconName } from "~/components/base/Icon.vue";
</script>

<template>
  <section class="container-bk pt-12 pb-14 lg:pt-5 lg:pb-[7.5rem]">
    <BaseSectionTitle
      v-reveal
      :title="values.title"
      :subtitle="values.subtitle"
      align="center"
      class="reveal mx-auto items-center"
    />

    <ul
      class="m-0 mt-10 grid list-none grid-cols-1 gap-[1.625rem] p-0 sm:grid-cols-2 lg:mt-[4.75rem] lg:-mx-5 lg:grid-cols-4 lg:gap-8"
    >
      <li
        v-for="(value, i) in values.items"
        :key="value.title"
        v-reveal="{ delay: 90 * i }" class="reveal"
        :class="value.offset && 'lg:mt-[1.875rem]'"
      >
        <BaseStickyNote
          :tone="value.tone"
          :tilt="value.tilt"
          :clip="i % 2 === 0 ? 'a' : 'b'"
          tape-tone="white"
          tape-from="lg"
          pad="snug"
          class="h-full"
        >
          <!-- Figma mobile lays the icon beside the text; desktop stacks it. -->
          <div class="flex h-full gap-4 lg:flex-col">
            <BaseIcon :name="value.icon as IconName" :size="32" class="mt-0.5 shrink-0 stroke-[1.8] lg:mt-0 lg:size-[38px]" />
            <div class="flex flex-col gap-3 lg:contents">
            <h3 class="m-0 font-display text-[1.25rem] leading-[1.15] font-extrabold lg:text-[1.5625rem]">
              {{ value.title }}
            </h3>
            <p class="m-0 text-[0.9375rem] leading-[1.5] lg:text-[1.0625rem]">{{ value.text }}</p>
            </div>
          </div>
        </BaseStickyNote>
      </li>
    </ul>
  </section>
</template>
