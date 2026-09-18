<script setup lang="ts">
import { marquees } from "~/lib/content/contact";

/**
 * "Faixas" — the two crossed ribbons that sit directly under the nav.
 *
 * Transcribed from Figma "Contato — Desktop" › Faixas (1440×240) and
 * "Contato — Mobile" › Faixas (390×180). Each band is an over-wide strip
 * rotated about its own centre; the ink band is painted last so it crosses
 * *over* the terracotta one.
 *
 *              strip     rotation   centre y in the section   type
 *   desktop    1700×82   +3° / −3°  terracotta 165 · ink 136  42px / 50px
 *   mobile      520×55   +4° / −4°  terracotta  86 · ink 119  26px / 31px
 *
 * The two bands swap depth between breakpoints in the Figma file — on desktop
 * the ink band runs above the terracotta one, on mobile below it — so the
 * offsets are listed per band rather than derived from a single mid-line.
 *
 * Only the vertical offsets are transcribed. The strips are wider than any
 * viewport and their content scrolls, so the horizontal phase the designer
 * happened to drag them to is not meaningful: both are simply centred and
 * grown past the edges with `max(<figma width>, 124%)`.
 *
 * `aria-hidden` throughout — the words are decoration, and reading a marquee
 * out loud seven times over helps nobody.
 */

withDefaults(defineProps<{ speed?: number }>(), { speed: 30 });

/** Repetitions per track half. The track duplicates itself and travels
 *  exactly −50%, so each half only has to be wider than the strip: 8×/13×
 *  covers the `124%` growth all the way up to a 2560px viewport. */
const PRIMARY_REPEAT = 8;
const SECONDARY_REPEAT = 13;

const items = (text: string, times: number) => Array.from({ length: times }, () => text);
</script>

<template>
  <section
    aria-hidden="true"
    class="relative isolate h-[11.25rem] overflow-hidden lg:h-[15rem]"
  >
    <!-- Band 1 — terracotta. Figma: strip 520×55 centred at y 86 (mobile),
         1700×82 centred at y 165 (desktop). -->
    <div
      class="absolute top-[3.625rem] left-1/2 flex h-[3.4375rem] w-[max(520px,124%)] -translate-x-1/2 rotate-[4deg] items-center bg-terra text-white shadow-note lg:top-[7.75rem] lg:h-[5.125rem] lg:w-[max(1700px,124%)] lg:rotate-[3deg]"
    >
      <div
        class="flex w-max shrink-0 animate-[marquee_var(--speed)_linear_infinite] items-center"
        :style="{ '--speed': `${speed}s` }"
      >
        <span
          v-for="(item, i) in [
            ...items(marquees.primary, PRIMARY_REPEAT),
            ...items(marquees.primary, PRIMARY_REPEAT),
          ]"
          :key="`a-${i}`"
          class="px-[0.625rem] font-display text-[1.625rem] leading-[1.9375rem] font-extrabold whitespace-nowrap lg:px-[1.25rem] lg:text-[2.625rem] lg:leading-[3.125rem]"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <!-- Band 2 — ink. Figma: centred at y 119 (mobile), y 136 (desktop). -->
    <div
      class="absolute top-[5.75rem] left-1/2 flex h-[3.4375rem] w-[max(520px,124%)] -translate-x-1/2 -rotate-[4deg] items-center bg-ink text-paper shadow-note lg:top-[5.9375rem] lg:h-[5.125rem] lg:w-[max(1700px,124%)] lg:-rotate-[3deg]"
    >
      <div
        class="flex w-max shrink-0 animate-[marquee-reverse_var(--speed)_linear_infinite] items-center"
        :style="{ '--speed': `${speed + 6}s` }"
      >
        <span
          v-for="(item, i) in [
            ...items(marquees.secondary, SECONDARY_REPEAT),
            ...items(marquees.secondary, SECONDARY_REPEAT),
          ]"
          :key="`b-${i}`"
          class="px-[0.625rem] font-display text-[1.625rem] leading-[1.9375rem] font-extrabold whitespace-nowrap lg:px-[1.25rem] lg:text-[2.625rem] lg:leading-[3.125rem]"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>
