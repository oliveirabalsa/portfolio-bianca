<script setup lang="ts">
import { companies } from "~/lib/content/home";

/**
 * "Empresas por onde passei".
 *
 * Figma frame "Home — Desktop" › Empresas (1440×396):
 *   title  y   0  Caveat 56px, centred
 *   logos  y  96  1312×200 — five chips on row one, Mirae Asset alone on row two
 *   chips      ~88 tall, 209–309 wide
 *
 * The chips carry the logo mark only, so their width is fixed rather than
 * driven by content: at 232px, five fit on the first row inside the 1312px
 * column and the sixth wraps, reproducing the Figma 5 + 1 arrangement.
 *
 * Every mark is trimmed of its baked-in white padding — without that they
 * render at a fraction of the box they are given — and capped on BOTH axes:
 * the set mixes square crests (Safra, Itaú, Caixa) with 3:1–5:1 wordmarks
 * (Mirae, PagSeguro, Fóton), and capping height alone lets a wordmark span the
 * whole chip and out-shout the crests beside it.
 *
 * 48px is the tallest the 80×80 crests take without upscaling on a 2x display;
 * the wordmarks have headroom to spare. Replacement sources live in
 * `public/img/logos-novos/`.
 */
</script>

<template>
  <section class="container-bk pt-10 pb-16 lg:pt-0 lg:pb-[6.25rem]">
    <!-- Figma left-aligns this heading on mobile and centres it from lg. -->
    <BaseSectionTitle
      v-reveal
      size="sm"
      class="reveal lg:mx-auto lg:items-center lg:text-center"
      :title="companies.title"
    />

    <ul
      class="m-0 mt-8 flex list-none flex-wrap items-center gap-3 p-0 sm:gap-4 lg:mt-10 lg:justify-center lg:gap-x-7 lg:gap-y-6"
    >
      <li
        v-for="(company, i) in companies.items"
        :key="company.name"
        v-reveal="{ delay: 60 * i }"
        class="reveal"
      >
        <BasePaperCard
          :tilt="company.tilt"
          radius="md"
          depth="sm"
          class="flex h-[3.625rem] w-[7.5rem] items-center justify-center px-4 sm:h-[4.75rem] sm:w-[10rem] sm:px-6 lg:h-[5.5rem] lg:w-[14.5rem] lg:px-8"
        >
          <img
            v-if="company.logo"
            :src="company.logo"
            :alt="`Logo ${company.name}`"
            loading="lazy"
            class="h-7 w-auto max-w-[5.5rem] object-contain sm:h-9 sm:max-w-[7rem] lg:h-12 lg:max-w-[10.5rem]"
          />
          <span
            v-else
            class="font-display text-[1.0625rem] font-bold whitespace-nowrap sm:text-xl lg:text-[1.75rem]"
          >
            {{ company.name }}
          </span>
        </BasePaperCard>
      </li>
    </ul>
  </section>
</template>
