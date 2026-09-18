<script setup lang="ts">
/**
 * "próximo projeto" — the cross-link between the two cases.
 *
 * Figma `15:36` / `23:2` (469.7 tall): 96px top pad, kicker, 45px gap, then a
 * card whose logo plate is inset 26px (`15:39` at x=26 y=26, 342×223.5) with
 * the copy starting at x=406 and a bare arrow at x=1242.
 *
 * The mobile frame (`18:30`) stacks plate over copy at a 16px inset and drops
 * the arrow entirely, so it only appears from lg.
 */

defineProps<{
  next: {
    kicker: string;
    index: string;
    title: string;
    text: string;
    to: string;
    image: string;
    imageBg: string;
  };
}>();
</script>

<template>
  <section class="container-bk pt-20 pb-0 lg:pt-24">
    <p
      v-reveal
      class="reveal m-0 -rotate-2 font-hand text-[1.75rem] leading-none font-bold text-terra sm:text-[2.5rem]"
    >
      {{ next.kicker }}
    </p>

    <div v-reveal="{ delay: 100 }" class="reveal mt-8 lg:mt-11">
      <BasePaperCard
        :as="'div'"
        :tilt="-0.8"
        radius="xl"
        depth="lg"
        class="group/next overflow-hidden p-4 lg:p-[1.625rem]"
      >
        <NuxtLink
          :to="next.to"
          class="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center lg:gap-[2.375rem]"
        >
          <!-- 342×223.5 in Figma → a 1.53 plate the logo is contained inside. -->
          <div
            class="flex aspect-[1.53/1] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl sm:w-56 lg:w-[21.375rem]"
            :style="{ background: next.imageBg }"
          >
            <img
              :src="next.image"
              :alt="next.title"
              loading="lazy"
              class="h-full w-full object-contain p-6 transition-transform duration-500 group-hover/next:scale-105"
              :style="{ transitionTimingFunction: 'var(--ease-paper)' }"
            />
          </div>

          <div class="flex flex-1 flex-col gap-2.5">
            <span class="font-hand text-[1.375rem] leading-none font-bold text-terra sm:text-[1.75rem]">
              {{ next.index }}
            </span>
            <h2 class="m-0 font-display text-[1.75rem] leading-none font-extrabold sm:text-[3rem]">
              {{ next.title }}
            </h2>
            <p class="m-0 max-w-[50rem] text-base leading-[1.5] text-ink-soft sm:text-[1.3125rem]">
              {{ next.text }}
            </p>
          </div>

          <span
            aria-hidden="true"
            class="mr-2 hidden shrink-0 self-center transition-[translate] duration-300 group-hover/next:translate-x-1.5 lg:block"
          >
            <BaseIcon name="arrow-right" :size="44" />
          </span>
        </NuxtLink>
      </BasePaperCard>
    </div>
  </section>
</template>
