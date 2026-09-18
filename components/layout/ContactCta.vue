<script setup lang="ts">
import { identity, contact, mailto } from "~/lib/content/site";
import { contactCta } from "~/lib/content/home";

/**
 * "Vamos trabalhar juntos?" — the closing block on Home, Sobre and both
 * case studies. Only the kicker changes between pages, so it is the one prop.
 *
 * `variant="card"` shows the business-card panel (Home); `variant="stack"`
 * shows the three-button column used on the inner pages.
 */

withDefaults(
  defineProps<{ kicker?: string; variant?: "card" | "stack" }>(),
  { kicker: contactCta.kicker, variant: "card" },
);

const channels = [
  { label: "WhatsApp", href: contact.whatsapp, icon: "whatsapp" as const, primary: true },
  { label: "E-mail", href: mailto, icon: "mail" as const, primary: false },
  { label: "LinkedIn", href: contact.linkedin, icon: "linkedin" as const, primary: false },
];
</script>

<template>
  <!-- Figma pads the two variants differently: the Home card block is
       40 top / 120 bottom (`8:2`, 676 tall) while the inner-page button stack
       is 96 / 96 (`30:20` 469 tall, with its footer carrying the other 96).
       `section-y`'s symmetric 112px fits neither. -->
  <section
    id="contato"
    class="container-bk"
    :class="variant === 'card' ? 'pt-12 pb-20 lg:pt-10 lg:pb-[7.5rem]' : 'pt-14 pb-14 lg:pt-24 lg:pb-24'"
  >
    <div class="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
      <!-- Copy -->
      <div class="flex w-full flex-col gap-6 lg:flex-1">
        <p
          v-reveal
          class="reveal m-0 -rotate-3 self-start font-hand text-[2rem] leading-none font-bold text-terra"
          :class="variant === 'card' ? 'lg:text-[3.5rem]' : 'lg:text-[3rem]'"
        >
          {{ kicker }}
        </p>
        <h2
          v-reveal="{ delay: 80 }"
          class="reveal m-0 font-display text-[3.25rem] leading-[0.95] font-extrabold tracking-[-0.029em] sm:text-[4.5rem] lg:leading-[0.92]"
          :class="variant === 'card' ? 'lg:text-[7.25rem]' : 'lg:text-[6.25rem]'"
        >
          {{ contactCta.title }}
        </h2>
        <p
          v-reveal="{ delay: 160 }"
          class="reveal m-0 max-w-[35rem] text-[1.0625rem] leading-[1.5] text-ink-soft sm:text-[1.3125rem]"
        >
          {{ contactCta.text }}
        </p>
      </div>

      <!-- Business card (Home) -->
      <div
        v-if="variant === 'card'"
        v-reveal="{ tilt: 2, delay: 200 }"
        class="reveal-tilt w-full shrink-0 lg:w-[28.375rem]"
      >
        <div class="relative">
          <BasePaperCard radius="xl" depth="lg" class="p-7 sm:p-8">
            <div class="flex flex-col gap-5">
              <div class="flex items-center gap-4">
                <img
                  src="/img/bianca-portrait.jpg"
                  alt="Retrato de Bianca Karoline"
                  loading="lazy"
                  class="size-[4.5rem] shrink-0 rounded-full border-2 border-ink object-cover"
                />
                <div class="min-w-0">
                  <p class="m-0 font-display text-2xl font-extrabold">{{ identity.name }}</p>
                  <p class="m-0 text-[0.9375rem] text-ink-faint">{{ identity.role }}</p>
                </div>
              </div>

              <!-- Desktop-only in the Figma frames. -->
              <p class="m-0 hidden text-base leading-[1.5] text-ink-soft lg:block">
                {{ contactCta.cardText }}
              </p>

              <div class="flex flex-col gap-3">
                <a
                  v-for="channel in channels"
                  :key="channel.label"
                  :href="channel.href"
                  :target="channel.href.startsWith('http') ? '_blank' : undefined"
                  :rel="channel.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                  class="group/row flex items-center justify-between rounded-2xl border-2 px-5 py-4 font-semibold transition-[background-color,color,transform] duration-200"
                  :class="
                    channel.primary
                      ? 'border-ink bg-ink text-white hover:bg-terra hover:border-terra'
                      : 'border-ink bg-card text-ink hover:bg-ink hover:text-white'
                  "
                >
                  <span class="flex items-center gap-3">
                    <BaseIcon :name="channel.icon" />
                    {{ channel.label }}
                  </span>
                  <BaseIcon
                    name="arrow-right"
                    :size="18"
                    class="hidden transition-transform duration-200 group-hover/row:translate-x-1 lg:block"
                  />
                </a>
              </div>
            </div>
          </BasePaperCard>

          <!-- "diga oi!" sticker, pinned to the card's top-right corner -->
          <span
            aria-hidden="true"
            class="absolute -top-[3.75rem] right-1 z-10 flex size-[5.25rem] -rotate-[14deg] animate-wiggle items-center justify-center rounded-full border-2 border-ink bg-butter font-hand text-2xl leading-none font-bold shadow-note sm:-top-10 sm:-right-8 sm:size-[6.875rem] sm:text-[1.75rem]"
            style="--wiggle-from: -16deg; --wiggle-to: -10deg"
          >
            {{ contactCta.badge }}
          </span>
        </div>
      </div>

      <!-- Button stack (inner pages) -->
      <div
        v-else
        v-reveal="{ delay: 200 }"
        class="reveal flex w-full shrink-0 flex-col gap-3 lg:w-[24rem]"
      >
        <a
          v-for="channel in channels"
          :key="channel.label"
          :href="channel.href"
          :target="channel.href.startsWith('http') ? '_blank' : undefined"
          :rel="channel.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="group/row flex items-center justify-between rounded-2xl border-2 border-ink px-5 py-4 font-semibold transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5"
          :class="
            channel.primary
              ? 'bg-ink text-white hover:border-terra hover:bg-terra'
              : 'bg-card text-ink hover:bg-ink hover:text-white'
          "
        >
          <span class="flex items-center gap-3">
            <BaseIcon :name="channel.icon" />
            {{ channel.label }}
          </span>
          <BaseIcon
            name="arrow-right"
            :size="18"
            class="transition-transform duration-200 group-hover/row:translate-x-1"
          />
        </a>
      </div>
    </div>
  </section>
</template>
