<script setup lang="ts">
import { velionBank as c, caseCta } from "~/lib/content/cases";

/**
 * Figma frames: desktop `20:2` (1440×11279), mobile `24:2` (390×10226).
 *
 * The frame is tall because two sections are dominated by a full-bleed
 * document: benchmarking shows a 1296×1910 plate (`21:37`) and the Figma Make
 * write-up a 1305×2792 one (`22:47`). Both are laid out as a fixed box with the
 * asset letterboxed inside, so the page keeps Figma's height without
 * distorting or cropping a document that has to stay readable.
 *
 * Padding is per section (96 top, 0 bottom in the frame) rather than
 * `section-y`, whose symmetric 112px rhythm would add ~1300px overall.
 */

useSeoMeta({
  title: "Velion Bank · Case de chatbot com Figma Make · Bianca Karoline",
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

    <!-- Destaques · Figma `20:50` (264 tall): three ~416px notes, the middle
         one dropped ~11px (`20:58`). -->
    <section class="container-bk pt-10 pb-0 lg:pt-14">
      <ul class="m-0 grid list-none gap-8 p-0 sm:grid-cols-3 lg:gap-8">
        <li
          v-for="(item, i) in c.highlights"
          :key="item.value"
          v-reveal="{ delay: 90 * i }"
          class="reveal"
          :class="item.offset && 'sm:mt-3'"
        >
          <BaseStickyNote
            :tone="item.tone"
            :tilt="item.tilt"
            :clip="i % 2 === 0 ? 'a' : 'b'"
            pad="snug"
            class="h-full"
          >
            <div class="flex flex-col gap-1">
              <span class="font-display text-[2.5rem] leading-none font-extrabold sm:text-[3.5rem]">
                {{ item.value }}
              </span>
              <span class="mt-1 text-base font-bold sm:text-[1.0625rem]">{{ item.label }}</span>
              <span class="text-[0.9375rem] text-ink-soft">{{ item.note }}</span>
            </div>
          </BaseStickyNote>
        </li>
      </ul>
    </section>

    <!-- Capa · Figma `21:2` (488 tall): a 1276×372 plate (3.43) on the chatbot's
         own near-black, so the letterbox bars are invisible. -->
    <section class="container-bk pt-12 pb-0 lg:pt-[72px]">
      <div v-reveal class="reveal">
        <CaseFigure
          :src="c.cover.src"
          :alt="c.cover.alt"
          :tilt="-0.8"
          tape-tone="sky"
          tape-align="left"
          :tape-width="142"
          mode="box"
          :ratio="3.431"
          :ratio-sm="1.131"
          fit="contain"
          :pad="22"
          bg="#1A1A2E"
        />
      </div>
    </section>

    <!-- O projeto · Figma `21:7` (714 tall): two 632px cards, then three
         416px notes. -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <BaseSectionTitle v-reveal class="reveal" :title="c.project.title" />

      <div class="mt-8 grid gap-7 lg:mt-11 lg:grid-cols-2 lg:gap-12">
        <div
          v-for="(card, i) in c.project.cards"
          :key="card.label"
          v-reveal="{ delay: 90 * i }"
          class="reveal"
        >
          <BasePaperCard :tilt="card.tilt" radius="lg" depth="md" class="h-full p-7 sm:p-9">
            <div class="flex flex-col gap-3">
              <span class="font-hand text-[1.75rem] leading-none font-bold text-terra sm:text-[2rem]">
                {{ card.label }}
              </span>
              <p class="m-0 text-[1.0625rem] leading-[1.6] text-ink-soft lg:text-[1.25rem] lg:leading-[1.65]">
                {{ card.text }}
              </p>
            </div>
          </BasePaperCard>
        </div>
      </div>

      <!-- Abordagem: sticky notes, not paper cards (`21:20`/`21:25`/`21:30`). -->
      <ol class="m-0 mt-8 grid list-none gap-7 p-0 sm:grid-cols-3 lg:mt-11 lg:gap-8">
        <li
          v-for="(step, i) in c.project.steps"
          :key="step.number"
          v-reveal="{ delay: 80 * i }"
          class="reveal"
        >
          <BaseStickyNote
            :tone="step.tone"
            :tilt="step.tilt"
            :clip="i % 2 === 0 ? 'a' : 'b'"
            :tape="false"
            pad="snug"
            class="h-full"
          >
            <div class="flex flex-col gap-2">
              <span class="font-display text-[2.25rem] leading-none font-extrabold">
                {{ step.number }}
              </span>
              <h3 class="m-0 font-display text-[1.375rem] leading-[1.25] font-extrabold sm:text-[1.625rem]">
                {{ step.title }}
              </h3>
              <p class="m-0 text-base leading-[1.6] lg:text-[1.25rem]">{{ step.text }}</p>
            </div>
          </BaseStickyNote>
        </li>
      </ol>
    </section>

    <!-- Benchmarking · Figma `21:34` (2600 tall): title, subtitle, a full-bleed
         document plate, the learnings row, then three competitor cards. -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <BaseSectionTitle
        v-reveal
        class="reveal"
        :title="c.benchmarking.title"
        :subtitle="c.benchmarking.subtitle"
        gap="loose"
      />

      <div v-reveal class="reveal mt-10 lg:mt-11">
        <CaseFigure
          :src="c.benchmarking.image.src"
          :alt="c.benchmarking.image.alt"
          :tilt="-0.6"
          tape-tone="butter"
          tape-align="right"
          :tape-width="122"
          mode="box"
          :ratio="0.6784"
          :ratio-sm="0.729"
          fit="contain"
        />
      </div>

      <!-- Label and chips share one row in Figma (`21:41`: label at x=0,
           first chip at x=210), wrapping to their own lines on the phone. -->
      <div v-reveal="{ delay: 100 }" class="reveal mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 lg:mt-5">
        <h3 class="m-0 mr-2 font-hand text-[1.5rem] leading-none font-bold text-terra">
          {{ c.benchmarking.learningsTitle }}
        </h3>
        <ul class="m-0 flex list-none flex-wrap gap-3 p-0">
          <li v-for="(item, i) in c.benchmarking.learnings" :key="item">
            <!-- Figma fills only the third chip (`21:47`); the rest are outlines. -->
            <BaseChip :tone="i === 2 ? 'butter' : 'card'" :tilt="i % 2 === 0 ? -1.5 : 1.5">
              {{ item }}
            </BaseChip>
          </li>
        </ul>
      </div>

      <ul class="m-0 mt-8 grid list-none gap-6 p-0 sm:grid-cols-3 lg:gap-8">
        <li
          v-for="(comp, i) in c.benchmarking.competitors"
          :key="comp.name"
          v-reveal="{ delay: 80 * i }"
          class="reveal"
        >
          <BasePaperCard :tilt="comp.tilt" radius="md" depth="sm" class="h-full p-6 lg:p-[1.875rem]">
            <h4 class="m-0 font-display text-[1.375rem] font-extrabold sm:text-[1.75rem]">
              {{ comp.name }}
            </h4>
            <ul class="m-0 mt-3 flex list-none flex-col gap-2 p-0">
              <li
                v-for="point in comp.points"
                :key="point"
                class="flex items-start gap-2.5 text-[0.9375rem] leading-[1.6] text-ink-soft lg:text-[1.25rem]"
              >
                <BaseIcon name="check" :size="18" class="mt-1 shrink-0 text-forest" />
                {{ point }}
              </li>
            </ul>
          </BasePaperCard>
        </li>
      </ul>
    </section>

    <!-- Como usei o Figma Make · Figma `22:2` (3859 tall): a 620/652 two-column
         block, a full-width insight note, then the full-length write-up. -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <BaseSectionTitle v-reveal class="reveal" :title="c.figmaMake.title" />

      <div
        class="mt-8 grid items-start gap-12 lg:mt-9 lg:grid-cols-[minmax(0,620fr)_minmax(0,652fr)] lg:gap-[52px]"
      >
        <!-- Steps -->
        <ol class="m-0 flex list-none flex-col gap-6 p-0 lg:gap-7">
          <li
            v-for="(step, i) in c.figmaMake.steps"
            :key="step.number"
            v-reveal="{ delay: 70 * i }"
            class="reveal flex gap-5"
          >
            <!-- Solid terracotta disc with a white numeral (`22:7`, 60×60). -->
            <span
              class="flex size-12 shrink-0 items-center justify-center rounded-full bg-terra font-display text-xl font-extrabold text-white lg:size-[60px] lg:text-2xl"
            >
              {{ step.number }}
            </span>
            <div class="flex flex-col gap-1.5">
              <h3 class="m-0 font-display text-[1.25rem] leading-[1.3] font-extrabold lg:text-[1.625rem]">
                {{ step.title }}
              </h3>
              <p class="m-0 text-base leading-[1.55] text-ink-soft lg:text-[1.1875rem]">
                {{ step.text }}
              </p>
            </div>
          </li>
        </ol>

        <!-- Prompt -->
        <div v-reveal="{ delay: 120 }" class="reveal">
          <BasePaperCard :tilt="1.2" radius="lg" depth="md" tone="ink" class="p-7 sm:p-8 lg:p-[2.125rem]">
            <p class="m-0 font-hand text-[1.875rem] leading-none font-bold text-butter sm:text-[2rem]">
              {{ c.figmaMake.prompt.title }}
            </p>
            <p
              v-for="(text, i) in c.figmaMake.prompt.paragraphs"
              :key="i"
              class="m-0 mt-4 text-[0.9375rem] leading-[1.6] text-paper/90 sm:text-base lg:text-[1.3125rem] lg:leading-[1.63]"
            >
              {{ text }}
            </p>
            <ul class="m-0 mt-5 flex list-none flex-wrap gap-2.5 p-0">
              <li v-for="item in c.figmaMake.prompt.results" :key="item">
                <span
                  class="inline-flex items-center gap-2 rounded-full border-2 border-paper/30 px-3.5 py-2 text-sm font-semibold text-paper"
                >
                  <BaseIcon name="check" :size="15" />
                  {{ item }}
                </span>
              </li>
            </ul>
          </BasePaperCard>
        </div>
      </div>

      <!-- Full-width insight note (`22:43`, 1315×216 with tape at x=60). -->
      <div v-reveal class="reveal mt-12 lg:mt-[59px]">
        <!-- Figma tapes this note at x=60 (`22:46`); BaseStickyNote always
             centres its tape, so the offset is not reproduced here. -->
        <BaseStickyNote tone="butter" :tilt="-1" clip="a">
          <p class="m-0 font-hand text-[1.875rem] leading-none font-bold sm:text-[2.25rem]">
            {{ c.figmaMake.insight.title }}
          </p>
          <p class="m-0 mt-4 text-[1.0625rem] leading-[1.6] lg:text-[1.375rem] lg:leading-[1.7]">
            {{ c.figmaMake.insight.text }}
          </p>
        </BaseStickyNote>
      </div>

      <div v-reveal="{ delay: 120 }" class="reveal mt-10 lg:mt-[13px]">
        <CaseFigure
          :src="c.figmaMake.image.src"
          :alt="c.figmaMake.image.alt"
          :tilt="0.4"
          :tape="false"
          mode="box"
          :ratio="0.4674"
          :ratio-sm="0.427"
          fit="contain"
        />
      </div>
    </section>

    <!-- Comparativo · Figma `22:50` (943 tall): two 636px notes, then the
         criteria table. -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <BaseSectionTitle v-reveal class="reveal" :title="c.comparison.title" />

      <div class="mt-8 grid gap-8 lg:mt-9 lg:grid-cols-2 lg:gap-10">
        <div
          v-for="(col, i) in c.comparison.columns"
          :key="col.title"
          v-reveal="{ delay: 90 * i }"
          class="reveal"
        >
          <!-- 32px inner padding in the desktop frame (`22:54`), 24 on the
               phone (`26:4`) — which is what `snug` gives. -->
          <BaseStickyNote
            :tone="col.tone"
            :tilt="col.tilt"
            :clip="i === 0 ? 'a' : 'b'"
            :tape="false"
            pad="snug"
            class="h-full"
          >
            <h3 class="m-0 font-display text-[1.375rem] leading-none font-extrabold sm:text-[1.75rem]">
              {{ col.title }}
            </h3>
            <ul class="m-0 mt-4 flex list-none flex-col gap-2 p-0">
              <li
                v-for="point in col.points"
                :key="point"
                class="text-base leading-[1.6] lg:text-[1.25rem]"
              >
                {{ point }}
              </li>
            </ul>
          </BaseStickyNote>
        </div>
      </div>

      <!-- Table · Figma `22:71`: rows inset 30px, equal thirds. -->
      <div v-reveal="{ delay: 120 }" class="reveal mt-10 lg:mt-9">
        <BasePaperCard :tilt="-0.5" radius="lg" depth="lg" :interactive="false" class="overflow-hidden py-3.5">
          <!-- The mobile frame (`26:18`) still fits all three columns — 95px
               cells inside a 306px row — so the table is sized to fit at 390
               and only scrolls inside its own card below that, rather than
               squashing the columns into unreadable slivers or widening the
               page. The row inset moves to the scroll box on phones so the
               cells can keep Figma's 30px padding from sm up. -->
          <div class="overflow-x-auto px-4 sm:px-0">
            <table class="w-full min-w-[19rem] table-fixed border-collapse text-left">
              <thead>
                <tr class="border-b-2 border-ink">
                  <th
                    v-for="head in c.comparison.table.head"
                    :key="head"
                    scope="col"
                    class="px-1.5 py-[1.125rem] font-hand text-[1.25rem] leading-[1.375] font-bold text-terra sm:px-[1.875rem] sm:text-[1.5rem]"
                  >
                    {{ head }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in c.comparison.table.rows"
                  :key="row[0]"
                  class="border-b border-ink/10 last:border-b-0"
                >
                  <th
                    scope="row"
                    class="px-1.5 py-[1.125rem] text-[0.9375rem] font-bold sm:px-[1.875rem] sm:text-base"
                  >
                    {{ row[0] }}
                  </th>
                  <td
                    class="px-1.5 py-[1.125rem] text-[0.9375rem] text-ink-soft sm:px-[1.875rem] sm:text-base"
                  >
                    {{ row[1] }}
                  </td>
                  <td
                    class="px-1.5 py-[1.125rem] text-[0.9375rem] font-bold sm:px-[1.875rem] sm:text-base"
                  >
                    {{ row[2] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </BasePaperCard>
      </div>
    </section>

    <!-- Resultado · Figma `22:107` (693 tall). -->
    <section class="container-bk pt-20 pb-0 lg:pt-24">
      <BaseSectionTitle v-reveal class="reveal" :title="c.result.title" />
      <!-- The subtitle box is 900px wide in Figma (`22:109`), wider than
           BaseSectionTitle's own 34rem cap, so it is rendered here instead. -->
      <p
        v-reveal="{ delay: 80 }"
        class="reveal m-0 mt-3 max-w-[56.25rem] text-base leading-[1.55] text-ink-muted sm:text-[1.1875rem] lg:mt-9 lg:text-[1.3125rem] lg:leading-[1.67]"
      >
        {{ c.result.subtitle }}
      </p>

      <ul class="m-0 mt-8 grid list-none gap-8 p-0 sm:grid-cols-3 lg:mt-9 lg:gap-8">
        <li
          v-for="(num, i) in c.result.numbers"
          :key="num.value"
          v-reveal="{ delay: 90 * i }"
          class="reveal"
        >
          <!-- Value over label on desktop (`22:113`/`22:114`); side by side on
               the phone frame (`26:58` at x=24, `26:59` at x=168). -->
          <BasePaperCard :tilt="num.tilt" radius="lg" depth="md" class="h-full p-6 lg:p-[1.875rem]">
            <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1 lg:block">
              <p class="m-0 font-display text-[2.75rem] leading-none font-extrabold text-terra sm:text-[3.5rem]">
                {{ num.value }}
              </p>
              <p class="m-0 text-base font-semibold lg:mt-3 lg:text-[1.0625rem]">{{ num.label }}</p>
            </div>
          </BasePaperCard>
        </li>
      </ul>

      <div v-reveal="{ delay: 140 }" class="reveal mt-10 lg:mt-9">
        <BaseStickyNote
          tone="sky"
          :tilt="1.2"
          clip="b"
          tape-from="lg"
          pad="roomy"
        >
          <div class="flex flex-col gap-3">
            <p class="m-0 font-display text-[1.375rem] leading-[1.25] font-extrabold sm:text-[1.875rem]">
              {{ c.result.closing.title }}
            </p>
            <p class="m-0 text-[1.0625rem] leading-[1.55] sm:text-[1.25rem]">
              {{ c.result.closing.text }}
            </p>
          </div>
        </BaseStickyNote>
      </div>
    </section>

    <CaseNextProject :next="c.next" />
    <LayoutContactCta :kicker="caseCta.kicker" variant="stack" />
  </NuxtLayout>
</template>
