<script setup lang="ts">
import { intro } from "~/lib/content/contact";

/**
 * "Chamada" — the page opener: handwritten greeting, headline, one paragraph.
 *
 * Figma "Contato — Desktop" › Chamada (1440×427, 64px gutter) and
 * "Contato — Mobile" › Chamada (390×392, 20px gutter), measured from the
 * section's own top edge to each text box:
 *
 *                       desktop                  mobile
 *   kicker          y  50  ·  44px / 55px    y  31  ·  32px / 40px   (−3°)
 *   headline        y 141  ·  82px / 95px    y  97  ·  46px / 49px
 *   paragraph       y 357  ·  22px / 35px    y 311  ·  17px / 27px
 *   section height    427                      392
 *
 * Both frames run the paragraph flush to the section's bottom edge, so there
 * is no trailing padding here — the Mural below opens with its own 41px of
 * clearance.
 *
 * Type sizes were solved from the Figma text-box advances rather than eyeballed:
 * every string in the frame agrees on 82px for the desktop headline and 46px
 * for the mobile one, both at zero tracking (the mobile frame is *not* the
 * tighter 52px/−2px it looks like at a glance).
 *
 * The 1100px desktop headline cap is the Figma text-box width and is what
 * produces the designed break, "…juntos / para criar…". The paragraph's 576px
 * cap plays the same role — Figma breaks it after "criativas." with a hard
 * return, and 576px is the narrowest cap that reproduces that greedily.
 * `text-wrap-style: auto` is needed with it, because the `text-wrap: pretty`
 * base rule for `<p>` would otherwise pull "criativas." onto the second line.
 *
 * The mobile headline steps down to 42px from the frame's own 46px. The mobile
 * frame carries a shorter headline ("Vamos criar algo memorável juntos.") that
 * fits 350px in four lines; the desktop copy, which wins, breaks into five at
 * 46px with "Vamos" and "trabalhar" left as orphans. 42px restores a solid
 * three-line block of the same width.
 */
</script>

<template>
  <section class="container-bk pt-[1.9375rem] lg:pt-[3.125rem]">
    <!-- The kicker rotates about its own centre, so it needs a box that hugs
         the text — hence `self-start` on a flex column rather than a bare
         block, which would rotate the full content width. -->
    <div class="flex flex-col items-start">
      <p
        v-reveal="{ tilt: -3 }"
        class="reveal-tilt m-0 self-start font-hand text-[2rem] leading-[2.5rem] font-bold text-terra lg:text-[2.75rem] lg:leading-[3.4375rem]"
      >
        {{ intro.kicker }}
      </p>

      <h1
        v-reveal="{ delay: 80 }"
        class="reveal m-0 mt-[1.5625rem] max-w-[21.875rem] font-display text-[2.625rem] leading-[3.0625rem] font-extrabold tracking-normal lg:mt-[2.25rem] lg:max-w-[68.75rem] lg:text-[5.125rem] lg:leading-[5.9375rem]"
      >
        {{ intro.title }}
      </h1>

      <p
        v-reveal="{ delay: 160 }"
        class="reveal m-0 mt-[1.125rem] max-w-[21.875rem] text-[1.0625rem] leading-[1.6875rem] text-ink-soft lg:mt-[1.625rem] lg:max-w-[36rem] lg:text-[1.375rem] lg:leading-[2.1875rem] lg:[text-wrap-style:auto]"
      >
        {{ intro.text }}
      </p>
    </div>
  </section>
</template>
