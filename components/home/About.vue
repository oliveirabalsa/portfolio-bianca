<script setup lang="ts">
import { about } from "~/lib/content/home";

/**
 * "Sobre mim!" — workspace polaroid beside the yellow bio note.
 *
 * Figma frame "Home — Desktop" › Sobre (1440×923), 64px gutter:
 *   title            x  64  y  40   Caveat 72px
 *   content row      x  64  y 168
 *   workspace photo  x 118  y 168   420×518  (photo window 385×430)
 *   bio note         x 591  y 198   794×574  (52px inner padding, 22px body)
 *   skill chips      x 591  y 788
 *
 * The polaroid sits 54px inside the gutter, so its column is wider than the
 * card and the card is pushed to the column's right edge.
 */
</script>

<template>
  <section id="sobre" class="container-bk pt-10 pb-12 lg:pt-[2.75rem] lg:pb-14">
    <BaseSectionTitle v-reveal class="reveal" :title="about.title" scribble="squiggle" />

    <div
      class="mt-10 grid items-start gap-12 lg:mt-[4.625rem] lg:grid-cols-[29.625rem_minmax(0,1fr)] lg:gap-[3.3125rem]"
    >
      <!-- Workspace polaroid -->
      <div
        v-reveal="{ tilt: 4 }"
        class="reveal-tilt hidden lg:ml-auto lg:block lg:w-[26.25rem] lg:max-w-none"
      >
        <BasePolaroid
          src="/img/workspace.jpg"
          alt="Setup de trabalho de Bianca: notebook, monitor, teclado e microfone"
          :caption="about.photoCaption"
          :tilt="0"
          ratio="385/430"
          tape-tone="sky"
          tape-align="right"
          caption-size="lg"
        />
      </div>

      <!-- Bio note + skills -->
      <div class="flex flex-col gap-9 lg:pt-[1.875rem]">
        <!-- Wrapper carries the reveal: the note sets its own transform inline,
             which would win over a transform coming from a CSS class. -->
        <div v-reveal="{ delay: 120 }" class="reveal">
          <BaseStickyNote tone="butter" :tilt="-1.5" clip="a" pad="roomy">
            <p class="m-0 font-hand text-[2.25rem] leading-none font-bold sm:text-[3rem]">
              {{ about.noteTitle }}
            </p>
            <p
              v-for="(text, i) in about.paragraphs"
              :key="i"
              class="m-0 text-[1.0625rem] leading-[1.55] sm:text-[1.1875rem] lg:text-[1.375rem]"
              :class="i === 0 ? 'mt-4 lg:mt-[1.125rem]' : 'mt-4'"
            >
              {{ text }}
            </p>
          </BaseStickyNote>
        </div>

        <ul class="m-0 flex list-none flex-wrap justify-center gap-3 p-0 sm:gap-3.5 lg:justify-start lg:gap-3">
          <li v-for="(skill, i) in about.skills" :key="skill.label" v-reveal="{ delay: 60 * i }" class="reveal">
            <BaseChip :tone="skill.tone" :tilt="skill.tilt">{{ skill.label }}</BaseChip>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
