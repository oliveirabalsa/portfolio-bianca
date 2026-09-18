<script setup lang="ts">
import { experience } from "~/lib/content/about";
</script>

<template>
  <!-- Figma: desktop 29:2 (y 3226, h 945, pad-top 96), mobile 32:36 (h 1010,
       pad-top 80). -->
  <section class="container-bk pt-20 lg:pt-24">
    <BaseSectionTitle v-reveal class="reveal" :title="experience.title" />

    <!-- A ruled table, not a timeline: role / company / date in three columns
         at x 0 (w 584), 608 (w 420) and 1052 (w 260) on desktop (29:5), fully
         stacked on mobile (32:39). The list opens on a 2px ink rule and every
         row is separated by a hairline. -->
    <ol
      class="m-0 mt-[1.375rem] list-none border-b border-ink/20 p-0 lg:mt-9"
    >
      <li
        v-for="(item, i) in experience.items"
        :key="`${item.company}-${item.period}`"
        v-reveal="{ delay: 60 * i }"
        class="reveal border-t border-ink/20 pt-[1.375rem] pb-5 first:border-t-2 first:border-ink lg:grid lg:grid-cols-[44.512%_32.012%_19.817%] lg:items-center lg:gap-x-[1.8293%] lg:py-[1.6875rem]"
      >
        <h3
          class="m-0 font-display text-[1.375rem] leading-[1.2] font-extrabold [text-wrap:wrap] lg:text-[2rem] lg:leading-[1.28]"
        >
          {{ item.role }}
        </h3>
        <p
          class="m-0 mt-1 font-display text-base leading-[1.25] font-semibold lg:mt-0 lg:text-[1.0625rem] lg:leading-[1.4]"
        >
          {{ item.company }}
        </p>
        <p
          class="m-0 mt-1 text-[0.9375rem] leading-[1.2] text-ink-faint lg:mt-0 lg:text-right lg:text-base lg:leading-[1.375]"
        >
          {{ item.period }}
        </p>
      </li>
    </ol>

    <!-- Stacked on mobile (32:64/32:66), side by side on desktop; the first
         chip is the outlined white one, the second sage. -->
    <ul
      v-reveal
      class="reveal m-0 mt-[1.375rem] flex list-none flex-col items-start gap-1 p-0 lg:mt-9 lg:flex-row lg:gap-4"
    >
      <li v-for="item in experience.volunteering" :key="item.label">
        <BaseChip :tone="item.tone" :tilt="item.tilt">{{ item.label }}</BaseChip>
      </li>
    </ul>
  </section>
</template>
