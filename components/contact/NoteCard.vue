<script setup lang="ts">
import type { Channel } from "~/lib/content/contact";

/**
 * A channel written on a coloured sticky note: WhatsApp (sage), LinkedIn
 * (sky), Instagram (blush).
 *
 * All three are the same size in Figma — 400×203 on desktop, 350×178 on
 * mobile — with flat stock, no keyline and sharp corners. `pad="snug"` is the
 * StickyNote padding step that matches: 24px at 390, 34px at 1440.
 *
 * Figma internals (mobile / desktop), from the note's top-left:
 *   title row   y 26 / 34
 *   value       y 71 / 84   ·  24px / 26px, Bricolage EB
 *   button      y 110 / 127 ·  hug width, ~47px tall
 *
 * `tilt` is not applied here: the resting rotation comes from the caller's
 * `v-reveal="{ tilt }"` so the note can settle into its angle on entrance.
 */

defineProps<{ channel: Channel; clip?: "a" | "b" }>();
</script>

<template>
  <BaseStickyNote :tone="channel.tone" :tilt="0" :clip="clip ?? 'a'" tape-tone="white" tape-from="lg" pad="snug">
    <div class="flex flex-col gap-[0.125rem]">
      <ContactCardLabel :icon="channel.icon" :label="channel.label" />

      <p
        class="m-0 font-display text-[1.5rem] leading-[2.3125rem] font-extrabold break-words lg:text-[1.625rem] lg:leading-[2.5rem]"
      >
        {{ channel.value }}
      </p>

      <BaseBtn
        :to="channel.href"
        variant="primary"
        size="md"
        class="mt-[0.125rem] self-start leading-none"
      >
        {{ channel.cta }}
      </BaseBtn>
    </div>
  </BaseStickyNote>
</template>
