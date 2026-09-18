<script setup lang="ts">
/**
 * The crossed marquee bands. Two over-wide ribbons rotated in opposite
 * directions, each scrolling its text continuously.
 *
 * The track duplicates its content and translates by exactly -50%, so the
 * loop is seamless regardless of text length. `aria-hidden` throughout: the
 * words are decoration and repeating them would spam a screen reader.
 */

const props = withDefaults(
  defineProps<{
    primary: string;
    secondary: string;
    /** Seconds for one full pass. */
    speed?: number;
    separator?: string;
    /** Repetitions per track half — enough to overflow the widest viewport. */
    repeat?: number;
  }>(),
  { speed: 34, separator: "✦", repeat: 6 },
);

const items = (text: string) => Array.from({ length: props.repeat }, () => text);
</script>

<template>
  <section
    aria-hidden="true"
    class="relative isolate my-2 h-[11.25rem] overflow-hidden sm:h-[13rem] lg:h-[16.25rem]"
  >
    <!-- Band 1 — terracotta, tilting up -->
    <div
      class="absolute -inset-x-[12%] top-1/2 flex -translate-y-1/2 rotate-[4deg] bg-terra py-3 lg:rotate-[3deg] text-white shadow-note sm:py-4"
    >
      <div
        class="flex w-max shrink-0 animate-[marquee_var(--speed)_linear_infinite] items-center"
        :style="{ '--speed': `${speed}s` }"
      >
        <span
          v-for="(item, i) in [...items(primary), ...items(primary)]"
          :key="`a-${i}`"
          class="flex items-center gap-6 px-6 font-display text-[1.625rem] font-extrabold tracking-wide whitespace-nowrap sm:text-[2rem] lg:text-[2.75rem]"
        >
          <span>{{ separator }}</span>
          <span>{{ item }}</span>
        </span>
      </div>
    </div>

    <!-- Band 2 — ink, tilting down, travelling the other way -->
    <div
      class="absolute -inset-x-[12%] top-1/2 flex -translate-y-1/2 -rotate-[4deg] bg-ink py-3 lg:-rotate-[3deg] text-paper shadow-note sm:py-4"
    >
      <div
        class="flex w-max shrink-0 animate-[marquee-reverse_var(--speed)_linear_infinite] items-center"
        :style="{ '--speed': `${speed + 6}s` }"
      >
        <span
          v-for="(item, i) in [...items(secondary), ...items(secondary)]"
          :key="`b-${i}`"
          class="flex items-center gap-6 px-6 font-display text-[1.625rem] font-extrabold tracking-wide whitespace-nowrap sm:text-[2rem] lg:text-[2.75rem]"
        >
          <span>{{ item }}</span>
          <span>{{ separator }}</span>
        </span>
      </div>
    </div>
  </section>
</template>
