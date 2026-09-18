<script setup lang="ts">
/**
 * Case-study masthead: index, tags, title, subtitle and the fact sheet.
 *
 * Figma geometry (Mentor Cycle `12:20`, 429.5 tall; Velion Bank `20:20`, 469.4):
 * 40px top pad, then a 28px rhythm between the four blocks and no bottom pad —
 * the cover section below supplies its own 72px lead-in.
 */

defineProps<{
  index: string;
  title: string;
  subtitle: string;
  sticker: string;
  tags: readonly { label: string; tone?: "sky" | "sage" }[];
  facts: readonly { label: string; value: string }[];
}>();
</script>

<template>
  <section class="container-bk pt-6 pb-0 lg:pt-10">
    <!-- Index + tags -->
    <div v-reveal class="reveal flex flex-wrap items-center gap-3">
      <span class="font-hand text-[1.5rem] leading-none font-bold text-terra sm:text-[1.75rem]">
        {{ index }}
      </span>
      <ul class="m-0 flex list-none flex-wrap gap-2.5 p-0">
        <li v-for="tag in tags" :key="tag.label">
          <BaseChip :tone="tag.tone ?? 'card'" size="sm">{{ tag.label }}</BaseChip>
        </li>
      </ul>
    </div>

    <!-- Title + sticker. The sticker bottom-aligns with the title's last line
         (Figma sticker y=150 against a title running 106.5→241.5) and is
         dropped below lg — neither mobile frame includes it. -->
    <div
      class="mt-5 flex flex-col gap-6 lg:mt-7 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
    >
      <h1
        v-reveal="{ delay: 80 }"
        class="reveal m-0 font-display text-[clamp(3.5rem,9.2vw,8.25rem)] leading-[1.02] font-extrabold tracking-[-0.03em]"
      >
        {{ title }}
      </h1>
      <span
        v-reveal="{ delay: 160 }"
        aria-hidden="true"
        class="reveal hidden shrink-0 -rotate-3 self-start rounded-full bg-terra px-6 py-3.5 font-hand text-[1.75rem] leading-none font-bold whitespace-nowrap text-white shadow-[5px_5px_0_var(--color-ink)] lg:mb-3 lg:block lg:self-auto"
      >
        {{ sticker }}
      </span>
    </div>

    <p
      v-reveal="{ delay: 200 }"
      class="reveal m-0 mt-5 max-w-[52rem] font-display text-[1.25rem] leading-[1.35] font-bold sm:text-[1.75rem] lg:mt-7"
    >
      {{ subtitle }}
    </p>

    <!-- Fact sheet: 2×2 on the phone (Figma `16:22` puts items at x=0/175),
         four across from lg (Figma `12:31` at x=0/334/668/1002). -->
    <dl
      v-reveal="{ delay: 260 }"
      class="reveal mt-5 grid grid-cols-2 gap-5 border-t-2 border-ink pt-6 lg:mt-7 lg:grid-cols-4 lg:gap-6 lg:pt-[30px]"
    >
      <div v-for="fact in facts" :key="fact.label" class="flex flex-col gap-1.5">
        <dt class="font-hand text-[1.25rem] leading-none font-bold text-terra sm:text-[1.5rem]">
          {{ fact.label }}
        </dt>
        <dd class="m-0 text-base leading-[1.5] font-semibold">{{ fact.value }}</dd>
      </div>
    </dl>
  </section>
</template>
