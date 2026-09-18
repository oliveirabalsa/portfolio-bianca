<script setup lang="ts">
import { education } from "~/lib/content/about";
</script>

<template>
  <!-- Figma: desktop 27:33 (y 919, h 347, pad-top 40), mobile 31:27 (h 587,
       pad-top 72). The heading is the 56px Caveat cut, not the 72px one. -->
  <section class="container-bk pt-18 lg:pt-10">
    <BaseSectionTitle v-reveal class="reveal" :title="education.title" size="sm" />

    <!-- Four 304px columns at x 0/336/672/1008 on desktop (27:35), one on
         mobile. The cards are not stretched: Figma lets each end at its own
         content, so no `h-full` and the row is top-aligned. -->
    <ul
      class="m-0 mt-8 grid list-none grid-cols-1 items-start gap-5 p-0 lg:grid-cols-4 lg:gap-8"
    >
      <li
        v-for="(item, i) in education.items"
        :key="item.course"
        v-reveal="{ delay: 80 * i }"
        class="reveal"
      >
        <BasePaperCard
          :tilt="item.tilt"
          radius="lg"
          depth="md"
          class="p-6 pt-[1.625rem] lg:p-[1.875rem] lg:pt-8"
        >
          <div class="flex flex-col gap-1">
            <h3
              class="m-0 font-display text-[1.1875rem] leading-[1.48] font-bold [text-wrap:wrap] lg:text-[1.375rem] lg:leading-[1.5]"
            >
              {{ item.course }}<!-- Figma 27:38 sets the status in a smaller run on the
                same line as the course; kept unbreakable so the dash never
                dangles at the end of a line. -->
              <span v-if="item.status" class="text-[0.9375rem] whitespace-nowrap">
                - {{ item.status }}
              </span>
            </h3>
            <p class="m-0 text-base leading-[1.66] text-ink-faint">{{ item.school }}</p>
          </div>
        </BasePaperCard>
      </li>
    </ul>
  </section>
</template>
