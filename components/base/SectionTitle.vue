<script setup lang="ts">
/**
 * Section heading. `hand` is the Caveat marker style used for most sections;
 * `display` is the heavy Bricolage treatment used for page-level titles.
 */

withDefaults(
  defineProps<{
    title: string;
    subtitle?: string;
    kind?: "hand" | "display";
    align?: "left" | "center";
    /** Append a hand-drawn squiggle beside the title. */
    scribble?: false | "squiggle" | "underline";
    /** "md" is the 72px Caveat heading; "sm" the 56px one. */
    size?: "md" | "mid" | "sm";
    /** Space between title and subtitle: 12px ("tight") or 35px ("loose"). */
    gap?: "tight" | "snug" | "loose";
    /** Subtitle measure. Figma runs 720–760px in several sections, wider than
     *  the 34rem default, and the extra line costs ~30px of section height. */
    subtitleWidth?: "default" | "wide" | "full";
    as?: string;
  }>(),
  {
    subtitle: undefined,
    kind: "hand",
    align: "left",
    scribble: false,
    size: "md",
    gap: "tight",
    subtitleWidth: "default",
    as: "h2",
  },
);
</script>

<template>
  <div
    class="flex flex-col"
    :class="[
      gap === 'loose'
        ? 'gap-3 lg:gap-[2.1875rem]'
        : gap === 'snug'
          ? 'gap-3 lg:gap-5'
          : 'gap-3',
      align === 'center' && 'items-center text-center',
    ]"
  >
    <div class="flex items-end gap-3 sm:gap-4">
      <component
        :is="as"
        class="m-0 leading-[0.95]"
        :class="
          kind === 'hand'
            ? size === 'sm'
              ? 'font-hand text-[2.25rem] font-bold sm:text-[2.75rem] lg:text-[3.5rem]'
              : size === 'mid'
                ? 'font-hand text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem]'
                : 'font-hand text-[2.75rem] font-bold sm:text-[3.5rem] lg:text-[4.5rem]'
            : 'font-display text-[2.5rem] font-extrabold tracking-[-0.02em] uppercase sm:text-[3.5rem] lg:text-[4.75rem]'
        "
      >
        {{ title }}
      </component>
      <span v-if="scribble" class="mb-2 hidden sm:block">
        <BaseScribble :variant="scribble" :width="kind === 'hand' ? 84 : 120" />
      </span>
    </div>

    <p
      v-if="subtitle"
      class="m-0 text-base leading-[1.55] text-ink-muted sm:text-[1.1875rem]"
      :class="
        subtitleWidth === 'full'
          ? 'max-w-[56.25rem]'
          : subtitleWidth === 'wide'
            ? 'max-w-[47.5rem]'
            : 'max-w-[34rem]'
      "
    >
      {{ subtitle }}
    </p>
  </div>
</template>
