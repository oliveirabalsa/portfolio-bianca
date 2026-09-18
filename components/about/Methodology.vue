<script setup lang="ts">
import { methodology } from "~/lib/content/about";
</script>

<template>
  <!-- Figma: desktop 28:48 (y 2298, h 928, pad-top 96), mobile 32:2 (h 1687,
       pad-top 80). -->
  <section class="container-bk pt-20 lg:pt-24">
    <BaseSectionTitle v-reveal class="reveal" :title="methodology.title" />

    <!-- Full 760px measure, as 28:50 — wider than the primitive's 34rem cap. -->
    <p
      v-reveal="{ delay: 60 }"
      class="reveal m-0 mt-4 max-w-[47.5rem] text-base leading-[1.63] text-ink-muted lg:text-[1.25rem] lg:leading-[1.6]"
    >
      {{ methodology.subtitle }}
    </p>

    <!-- Two rows of three 416px columns at x 0/448/896 (28:51/28:70), one
         column on mobile. Row gap 48, column gap 32; cards keep their own
         height, so no `h-full`. -->
    <ol
      class="m-0 mt-8 grid list-none grid-cols-1 items-start gap-6 p-0 lg:mt-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
    >
      <li
        v-for="(step, i) in methodology.steps"
        :key="step.number"
        v-reveal="{ delay: 70 * i }"
        class="reveal"
      >
        <BasePaperCard
          :tilt="step.tilt"
          radius="lg"
          depth="md"
          class="p-6 pt-[1.625rem] lg:p-[1.875rem] lg:pt-8"
        >
          <div class="flex flex-col gap-[0.1875rem] lg:gap-1.5">
            <!-- Terracotta Bricolage, not the handwriting face (28:54). -->
            <span
              class="mb-1 font-display text-[1.75rem] leading-none font-extrabold text-terra lg:mb-[0.3125rem] lg:text-[2.25rem]"
            >
              {{ step.number }}
            </span>
            <h3
              class="m-0 font-display text-[1.375rem] leading-[1.38] font-bold lg:text-[1.625rem] lg:leading-[1.43]"
            >
              {{ step.title }}
            </h3>
            <p class="m-0 text-base leading-[1.55] text-ink-soft lg:text-[1.0625rem] lg:leading-[1.65]">
              {{ step.text }}
            </p>
            <!-- Figma draws no rule above the deliverables line. -->
            <p class="m-0 text-[0.9375rem] leading-[1.57] text-ink-faint lg:text-base lg:leading-[1.7]">
              {{ step.deliverables }}
            </p>
          </div>
        </BasePaperCard>
      </li>
    </ol>
  </section>
</template>
