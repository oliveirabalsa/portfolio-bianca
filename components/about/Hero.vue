<script setup lang="ts">
import { hero } from "~/lib/content/about";
</script>

<template>
  <!-- Figma: desktop 27:18 (y 114, h 805, pad-top 20), mobile 31:14 (h 1092,
       pad-top 40). Like every section on this page it has top padding only. -->
  <section class="container-bk pt-10 pb-7 lg:pt-5 lg:pb-9">
    <!-- Unpadded positioning context: on desktop the kicker is anchored to the
         title's box, and a `container-bk` parent would offset it by the gutter. -->
    <div class="relative">
      <!-- Mobile puts the kicker ABOVE the title (31:15); desktop tucks it into
           the title's lower right at x 762 / y 178 (27:20). -->
      <p
        v-reveal="{ delay: 140 }"
        class="reveal m-0 mb-3.5 -rotate-3 font-hand text-[2rem] leading-[1.25] font-bold text-terra lg:absolute lg:top-[9.875rem] lg:left-[43.7rem] lg:mb-0 lg:-rotate-[4deg] lg:text-[2.5rem]"
      >
        {{ hero.kicker }}
      </p>

      <!-- 78px/0.88 over two lines on mobile, 200px/0.85 on one at 1440. The
           -0.04em tracking resolves to Figma's -3px and -8px respectively. -->
      <h1
        v-reveal
        class="reveal m-0 font-display text-[4.875rem] leading-[0.88] font-extrabold tracking-[-0.04em] uppercase lg:text-[clamp(8.875rem,13.9vw,12.5rem)] lg:leading-[0.85]"
      >
        {{ hero.title }}
      </h1>
    </div>

    <!-- Desktop is a 700px bio column with the polaroid at x 940 (27:21/27:25);
         mobile stacks the polaroid above the bio. -->
    <div
      class="mt-[1.375rem] grid gap-[1.375rem] lg:mt-[4.375rem] lg:grid-cols-[53.354%_1fr] lg:gap-0"
    >
      <div
        class="relative order-1 mx-auto w-[17.5rem] lg:order-2 lg:mx-0 lg:ml-[28.758%] lg:w-[66.503%]"
      >
        <!-- The tilt rides on the wrapper's `--tilt` so it can differ per
             breakpoint (the primitive's `tilt` prop is a single number), and so
             the sticker below stays outside the rotation. -->
        <div v-reveal class="reveal-tilt [--tilt:-4deg] lg:[--tilt:1.5deg]">
          <BasePolaroid
            :src="hero.photo.src"
            :alt="hero.photo.alt"
            :caption="hero.photo.caption"
            :tilt="0"
            ratio="7/8"
            tape-tone="butter"
            caption-size="lg"
          />
        </div>

        <!-- Terracotta pill across the polaroid's lower left — dropped on
             mobile, where Figma has no sticker at all. -->
        <span
          aria-hidden="true"
          class="absolute bottom-12 -left-[45.6%] z-20 hidden -rotate-[5deg] rounded-full bg-terra px-[1.375rem] py-3 text-[1.25rem] leading-[1.25] font-bold whitespace-nowrap text-white shadow-[4px_4px_0_var(--color-ink)] lg:block"
        >
          {{ hero.sticker }}
        </span>
      </div>

      <div
        v-reveal="{ delay: 100 }"
        class="reveal order-2 flex flex-col gap-[1.375rem] lg:order-1 lg:pt-20"
      >
        <p
          v-for="(text, i) in hero.paragraphs"
          :key="i"
          class="m-0 text-base leading-[1.7] text-ink-soft lg:text-[1.25rem]"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>
