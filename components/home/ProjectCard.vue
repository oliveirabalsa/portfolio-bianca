<script setup lang="ts">
import type { ProjectCard } from "~/lib/content/home";

defineProps<{ project: ProjectCard; offset?: boolean }>();
</script>

<template>
  <article class="relative h-full" :class="offset && 'lg:mt-[3.75rem]'">
    <BasePaperCard :tilt="project.tilt" radius="lg" depth="lg" class="group/card flex h-full flex-col p-3.5 lg:min-h-[45.625rem] lg:p-[1.375rem]">
      <BaseTape
        :tone="project.tapeTone"
        :align="project.tapeSide"
        :tilt="project.tapeSide === 'left' ? -5 : 6"
      />

      <!-- Cover. Fixed height, as in the Figma frame (600×380) — an aspect
           ratio would grow the card unboundedly with the column width. -->
      <div
        class="relative flex h-[13.75rem] items-center justify-center overflow-hidden rounded-[0.625rem] sm:h-[17rem] lg:h-[24.0625rem] lg:rounded-[0.875rem]"
        :style="{ background: project.imageBg }"
      >
        <img
          :src="project.image"
          :alt="project.imageAlt"
          loading="lazy"
          decoding="async"
          class="h-full w-full transition-transform duration-700 group-hover/card:scale-[1.03]"
          :class="project.imageFit === 'contain' ? 'object-contain p-6 sm:p-9' : 'object-cover'"
          :style="{ transitionTimingFunction: 'var(--ease-paper)' }"
        />
      </div>

      <!-- Body -->
      <div class="flex flex-1 flex-col gap-3 px-2 pt-5 pb-2 lg:gap-3.5 lg:pt-6">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="font-hand text-[1.625rem] leading-none font-bold text-terra sm:text-[1.875rem]">
            {{ project.index }}
          </span>
          <!-- Desktop-only: the Figma mobile card (`10:6`) has no second
               meta line beside the project index. -->
          <span class="hidden text-sm text-ink-faint lg:inline">{{ project.kind }}</span>
        </div>

        <h3
          class="m-0 font-display text-[1.75rem] leading-none font-extrabold tracking-[-0.02em] sm:text-[2.25rem] lg:text-[2.5rem]"
        >
          {{ project.title }}
        </h3>

        <p class="m-0 text-base leading-[1.5] text-ink-soft sm:text-[1.0625rem]">
          {{ project.description }}
        </p>

        <ul class="m-0 flex list-none flex-wrap gap-2 p-0">
          <li v-for="tag in project.tags" :key="tag">
            <BaseChip tone="soft" size="sm" :bordered="false">{{ tag }}</BaseChip>
          </li>
        </ul>

        <BaseBtn :to="project.to" variant="primary" size="md" arrow class="mt-1.5 self-start">
          Ver projeto
        </BaseBtn>
      </div>
    </BasePaperCard>

    <!-- Comment pin — the "case anonimizado" annotation on Velion Bank -->
    <div
      v-if="project.note"
      aria-hidden="true"
      class="absolute top-[4.5rem] -right-2 z-30 hidden items-start gap-2 lg:flex xl:-right-8"
    >
      <span
        class="flex size-10 items-center justify-center rounded-[1.25rem_1.25rem_1.25rem_0.25rem] border-2 border-white bg-terra text-sm font-bold text-white shadow-sm"
      >
        BK
      </span>
      <span
        class="rounded-xl border-2 border-ink bg-card px-3 py-2 text-sm font-semibold whitespace-nowrap"
      >
        {{ project.note }}
      </span>
    </div>
  </article>
</template>
