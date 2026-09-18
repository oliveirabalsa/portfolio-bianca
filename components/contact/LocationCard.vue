<script setup lang="ts">
import { locationCard } from "~/lib/content/contact";

/**
 * "onde estou" — the one card with no call to action.
 *
 * Figma: 341×171 on desktop, 350×147 on mobile. White stock with a keyline
 * and hard shadow like the e-mail card, but a tighter radius and no tape.
 *
 * Copy is the desktop frame's: "Bertioga - SP, BR" / "Trabalho remoto". The
 * mobile frame still says "São Paulo, BR" / "Trabalho remoto e híbrido".
 */
</script>

<template>
  <BasePaperCard
    :tilt="0"
    radius="lg"
    depth="md"
    class="px-[1.5rem] pt-[1.5rem] pb-[1.125rem] lg:rounded-[1.5rem] lg:px-[2rem] lg:pt-[1.875rem] lg:pb-[1.25rem]"
  >
    <div class="flex flex-col gap-[0.1875rem]">
      <ContactCardLabel icon="pin" :label="locationCard.label" tone="terra" />

      <p
        class="m-0 font-display text-[1.375rem] leading-[2rem] font-extrabold lg:text-[1.625rem] lg:leading-[2.6875rem]"
      >
        {{ locationCard.city }}
      </p>

      <p class="m-0 text-[1rem] leading-[1.5rem] text-ink-faint lg:text-[1.0625rem] lg:leading-[2.0625rem]">
        {{ locationCard.mode }}
      </p>
    </div>
  </BasePaperCard>
</template>
