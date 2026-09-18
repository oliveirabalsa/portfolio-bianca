<script setup lang="ts">
import { mentorCycle as c, caseCta } from "~/lib/content/cases";

/**
 * Figma frames: desktop `12:2` (1440×6498), mobile `16:2` (390×9150).
 *
 * Every section is 96px-top / 0-bottom in the desktop frame (the header and
 * cover use 40 and 74), so the page sets its padding per section rather than
 * using `section-y`, whose 112px symmetric rhythm would add ~1400px overall.
 */

useSeoMeta({
  title: "Mentor Cycle · Case de UX/UI · Bianca Karoline",
  description: c.subtitle,
});
</script>

<template>
  <NuxtLayout :back="{ label: 'Voltar', to: '/#projetos' }">
    <CaseHeader
      :index="c.index"
      :title="c.title"
      :subtitle="c.subtitle"
      :sticker="c.sticker"
      :tags="c.tags"
      :facts="c.facts"
    />

    <!-- Cover · Figma `12:46` (738 tall): image frame at y=74, placeholder
         1280.5×637.7 → a 2.008 box the screenshot is cropped into. -->
    <section class="container-bk pt-12 pb-0 lg:pt-[74px]">
      <div v-reveal class="reveal">
        <CaseFigure
          :src="c.cover.src"
          :alt="c.cover.alt"
          :tilt="-0.8"
          tape-tone="butter"
          tape-align="left"
          :tape-width="142"
          mode="box"
          :ratio="2.008"
          :ratio-sm="1.215"
          fit="cover"
          :pad="22"
        />
      </div>
    </section>

    <!-- Sobre o projeto · Figma `13:2` (298 tall): the title sits in its own
         360px column with the copy in an 880px column beside it. -->
    <section class="container-bk pt-[72px] pb-0 lg:pt-[88px]">
      <div class="grid gap-6 lg:grid-cols-[minmax(0,360fr)_minmax(0,880fr)] lg:gap-[72px]">
        <BaseSectionTitle v-reveal class="reveal" :title="c.overview.title" size="sm" />
        <p
          v-reveal="{ delay: 100 }"
          class="reveal m-0 text-[1.0625rem] leading-[1.6] text-ink-soft sm:text-[1.1875rem] lg:text-[1.3125rem] lg:leading-[1.67]"
        >
          {{ c.overview.text }}
        </p>
      </div>
    </section>

    <!-- O desafio · Figma `13:5` (937 tall): 660px copy column beside a 595px
         post-it (node `13:11`), then two 627px figures. -->
    <section class="container-bk pt-[72px] pb-0 lg:pt-[88px]">
      <BaseSectionTitle v-reveal class="reveal" :title="c.challenge.title" />

      <div
        class="mt-8 grid items-start gap-10 lg:mt-11 lg:grid-cols-[minmax(0,660fr)_minmax(0,595fr)] lg:gap-[67px]"
      >
        <div v-reveal="{ delay: 100 }" class="reveal flex flex-col gap-5">
          <p
            v-for="(text, i) in c.challenge.paragraphs"
            :key="i"
            class="m-0 text-[1.0625rem] leading-[1.6] text-ink-soft sm:text-[1.1875rem] lg:text-[1.25rem] lg:leading-[1.6]"
          >
            {{ text }}
          </p>
        </div>

        <div v-reveal="{ delay: 180 }" class="reveal">
          <!-- No tape: Figma's post-its carry none on either frame. -->
          <BaseStickyNote
            :tone="c.challenge.note.tone"
            :tilt="-2"
            clip="a"
            :tape="false"
            pad="snug"
          >
            <p class="m-0 font-hand text-[1.875rem] leading-none font-bold">
              {{ c.challenge.note.title }}
            </p>
            <ul class="m-0 mt-5 flex list-none flex-col gap-3 p-0">
              <li
                v-for="item in c.challenge.note.items"
                :key="item"
                class="flex items-start gap-3 text-base leading-[1.5] sm:text-[1.1875rem]"
              >
                <BaseIcon name="alert" :size="22" class="mt-0.5 shrink-0" />
                {{ item }}
              </li>
            </ul>
          </BaseStickyNote>
        </div>
      </div>

      <div class="mt-10 grid gap-10 lg:mt-11 lg:grid-cols-2 lg:gap-12">
        <div
          v-for="(img, i) in c.challenge.images"
          :key="img.src"
          v-reveal="{ delay: 100 * i }"
          class="reveal"
        >
          <!-- 590×370 placeholders (`13:33` / `13:36`); the screenshots are
               2.6:1 so they letterbox inside the box rather than crop. -->
          <CaseFigure
            :src="img.src"
            :alt="img.alt"
            :tilt="i === 0 ? -1.2 : 1.2"
            :tape="false"
            mode="box"
            :ratio="1.595"
            :ratio-sm="1.443"
            fit="contain"
          />
        </div>
      </div>
    </section>

    <!-- Nossa solução · Figma `13:38` (540 tall): 761px copy, 487px post-it. -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <BaseSectionTitle v-reveal class="reveal" :title="c.solution.title" scribble="squiggle" />

      <div
        class="mt-8 grid items-start gap-10 lg:mt-11 lg:grid-cols-[minmax(0,761fr)_minmax(0,487fr)] lg:gap-16"
      >
        <div v-reveal="{ delay: 100 }" class="reveal flex flex-col gap-5">
          <p
            v-for="(text, i) in c.solution.paragraphs"
            :key="i"
            class="m-0 text-[1.0625rem] leading-[1.6] text-ink-soft sm:text-[1.1875rem] lg:text-[1.25rem] lg:leading-[1.6]"
          >
            {{ text }}
          </p>
        </div>

        <div v-reveal="{ delay: 180 }" class="reveal">
          <BaseStickyNote
            :tone="c.solution.note.tone"
            :tilt="2"
            clip="b"
            :tape="false"
            pad="snug"
          >
            <p class="m-0 font-hand text-[1.875rem] leading-none font-bold">
              {{ c.solution.note.title }}
            </p>
            <ul class="m-0 mt-5 flex list-none flex-col gap-3 p-0">
              <li
                v-for="item in c.solution.note.items"
                :key="item"
                class="flex items-start gap-3 text-base leading-[1.5] sm:text-[1.1875rem]"
              >
                <BaseIcon name="check" :size="22" class="mt-0.5 shrink-0" />
                {{ item }}
              </li>
            </ul>
          </BaseStickyNote>
        </div>
      </div>
    </section>

    <!-- Processo de design · Figma `14:2` (783 tall): four 307px notes at
         x=0/335/670/1005; notes 2 and 4 drop ~45px (`14:12` / `14:23`). -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <BaseSectionTitle
        v-reveal
        class="reveal"
        :title="c.process.title"
        :subtitle="c.process.subtitle"
      />

      <ol class="m-0 mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-7">
        <li
          v-for="(step, i) in c.process.steps"
          :key="step.number"
          v-reveal="{ delay: 90 * i }"
          class="reveal"
          :class="step.offset && 'lg:mt-11'"
        >
          <BaseStickyNote
            :tone="step.tone"
            :tilt="step.tilt"
            :clip="i % 2 === 0 ? 'a' : 'b'"
            :tape="false"
            pad="snug"
            class="h-full"
          >
            <div class="flex h-full flex-col gap-3">
              <!-- Figma sets the step number in the display face, not the
                   marker (node `14:8`: 41.7×41.7 at ~36px). -->
              <span class="font-display text-[2.25rem] leading-none font-extrabold">
                {{ step.number }}
              </span>
              <h3 class="m-0 font-display text-[1.375rem] leading-[1.25] font-extrabold sm:text-[1.625rem]">
                {{ step.title }}
              </h3>
              <p
                v-for="(text, j) in step.paragraphs"
                :key="j"
                class="m-0 text-base leading-[1.6] lg:leading-[1.7]"
              >
                {{ text }}
              </p>
            </div>
          </BaseStickyNote>
        </li>
      </ol>
    </section>

    <!-- Insights e solução · Figma `14:27` (804 tall): two 620/628 columns. -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <BaseSectionTitle v-reveal class="reveal" :title="c.insights.title" size="sm" />
          <ul class="m-0 mt-6 flex list-none flex-col gap-6 p-0 lg:gap-9">
            <li
              v-for="(item, i) in c.insights.items"
              :key="item"
              v-reveal="{ delay: 80 * i }"
              class="reveal"
            >
              <BasePaperCard :tilt="i % 2 === 0 ? -1 : 1" radius="md" depth="sm" class="p-6">
                <p class="m-0 flex items-start gap-4 text-base leading-[1.6] sm:text-[1.25rem]">
                  <BaseIcon name="lightbulb" :size="24" class="mt-0.5 shrink-0 text-terra" />
                  {{ item }}
                </p>
              </BasePaperCard>
            </li>
          </ul>

          <!-- 250×223 placeholders (`33:26` / `33:29`). The mobile frame keeps
               them at 287px rather than full-bleed (`33:32` / `33:34`). -->
          <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-4">
            <div
              v-for="(img, i) in c.insights.images"
              :key="img.src"
              v-reveal="{ delay: 90 * i }"
              class="reveal mx-auto w-full max-w-[18rem] sm:max-w-none"
            >
              <CaseFigure
                :src="img.src"
                :alt="img.alt"
                :tilt="i === 0 ? -1.5 : 1.5"
                :tape="false"
                mode="box"
                :ratio="1.12"
                fit="contain"
              />
            </div>
          </div>
        </div>

        <div>
          <BaseSectionTitle v-reveal class="reveal" :title="c.insights.outcome.title" size="sm" />
          <p
            v-reveal="{ delay: 100 }"
            class="reveal m-0 mt-6 text-[1.0625rem] leading-[1.6] text-ink-soft sm:text-[1.1875rem] lg:text-[1.25rem] lg:leading-[1.6]"
          >
            {{ c.insights.outcome.text }}
          </p>
          <!-- Figma centres a 445px portrait plate inside the 628px column
               (`14:43`), so the figure is capped rather than full-bleed. -->
          <div v-reveal="{ delay: 160 }" class="reveal mx-auto mt-8 max-w-[27.875rem]">
            <CaseFigure
              :src="c.insights.outcome.image.src"
              :alt="c.insights.outcome.image.alt"
              :tilt="1"
              :tape="false"
              mode="box"
              :ratio="0.955"
              :ratio-sm="0.572"
              fit="contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Fluxograma · Figma `15:2` (721.8 tall): three identical 416px cards at
         x=0/448/896 whose image boxes are all 392×310, middle one 41px lower. -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <BaseSectionTitle
        v-reveal
        class="reveal"
        :title="c.flowchart.title"
        :subtitle="c.flowchart.subtitle"
      />

      <div class="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-3 lg:gap-8">
        <div
          v-for="(flow, i) in c.flowchart.flows"
          :key="flow.caption"
          v-reveal="{ delay: 90 * i }"
          class="reveal"
          :class="i === 1 && 'lg:mt-[41px]'"
        >
          <CaseFigure
            :src="flow.src"
            :alt="flow.alt"
            :caption="flow.caption"
            caption-align="left"
            :tilt="flow.tilt"
            :tape-tone="flow.tapeTone"
            tape-align="left"
            :tape-width="102"
            tape-from="lg"
            mode="box"
            :ratio="1.2645"
            :ratio-sm="1.506"
            fit="contain"
            :pad="16"
          />
        </div>
      </div>
    </section>

    <CaseNextProject :next="c.next" />
    <LayoutContactCta :kicker="caseCta.kicker" variant="stack" />
  </NuxtLayout>
</template>
