<script setup lang="ts">
import { hero } from "~/lib/content/home";
import { identity } from "~/lib/content/site";

/**
 * Hero collage.
 *
 * Mobile stacks in reading order: greeting → name → photo cluster → pitch.
 * From `lg` it becomes the Figma composition.
 *
 * The `lg:`-only pixel offsets below are transcribed from the Figma frame
 * "Home — Desktop" › Hero (1440×800, 64px gutter), measured relative to the
 * hero's content box:
 *
 *   greeting        x 440   y  24
 *   selection frame x 420   y 110   725×312
 *   tagline         x 448   y 530
 *   CTAs                    y 681
 *   polaroid        x  60   y 190   330×404  (photo window 302×329)
 *   "BK" badge      x 330   y 423    83×63
 *   "UX/UI"         x 1250  y  62   112×66
 *   "+5" circle     x 1105  y 533   162 diameter
 *   cursor          x 1206  y 685
 *
 * Absolute children are placed against `.hero-stage`, an unpadded wrapper
 * INSIDE the container: padding does not inset absolutely positioned
 * elements, so anchoring them to `.container-bk` would push them past the
 * 64px gutter and clip them at the viewport edge.
 */
</script>

<template>
  <section id="topo" class="relative pt-4 pb-14 lg:pt-6 lg:pb-[3.25rem]">
    <div class="container-bk">
      <div class="hero-stage relative">
        <!-- "UX/UI" sticker — Figma x 1250, y 62 -->
        <span
          aria-hidden="true"
          class="pointer-events-none absolute top-[2.375rem] right-[0.875rem] z-20 hidden rotate-[9deg] animate-wiggle rounded-full bg-terra px-[1.375rem] py-3 font-display text-[1.375rem] leading-none font-bold text-white shadow-[4px_4px_0_var(--color-ink)] lg:block"
          style="--wiggle-from: 7deg; --wiggle-to: 12deg"
        >
          {{ hero.stickers.primary }}
        </span>

        <!-- "+5 anos na área" circle + presence cursor — Figma x 1105, y 533 -->
        <div
          aria-hidden="true"
          class="pointer-events-none absolute top-[31.75rem] right-[6.75rem] z-20 hidden lg:block"
        >
          <div
            class="flex size-[10.125rem] rotate-[12deg] flex-col items-center justify-center rounded-full border-2 border-ink bg-blush text-center shadow-note"
          >
            <span class="font-display text-[2.75rem] leading-none font-extrabold">
              {{ hero.years }}
            </span>
            <span class="font-hand text-2xl leading-none">{{ hero.yearsLabel }}</span>
          </div>
          <BaseCursorTag class="-mt-1 ml-24" />
        </div>

        <!-- Three grid items in reading order. Mobile is a single column, so
             the photo naturally lands between the name and the pitch — the
             Figma mobile order. Desktop pins the photo into column 1,
             spanning both rows. -->
        <div
          class="grid items-start gap-9 lg:grid-cols-[20.625rem_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:gap-x-[1.625rem] lg:gap-y-0"
        >
          <!-- Polaroid — Figma desktop y 190. On mobile this cell is the
               "Colagem": the polaroid sits left, the "+5" circle overlaps its
               bottom-right corner and the "BK" sticker its bottom-left. -->
          <div
            v-reveal="{ tilt: -6 }"
            class="reveal-tilt relative order-2 mr-auto w-[17.5rem] max-w-full lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-[10.375rem] lg:mr-0 lg:w-auto"
          >
            <BasePolaroid
              src="/img/bianca-bw.jpg"
              alt="Retrato em preto e branco de Bianca Karoline"
              :caption="hero.photoCaption"
              :tilt="0"
              ratio="226/270"
              ratio-lg="302/329"
              tape-tone="butter"
              caption-size="lg"
            />

            <!-- "BK" chip — mobile: over the caption's left end (Figma −8°).
                 Desktop: clipped to the photo's right edge. -->
            <span
              aria-hidden="true"
              class="absolute -bottom-2 -left-4 z-20 flex h-14 w-[4.5rem] -rotate-[8deg] items-center justify-center rounded-[0.625rem] border-2 border-ink bg-butter font-display text-base font-extrabold shadow-[0_6px_14px_rgb(29_27_24/0.18)] lg:top-auto lg:right-0 lg:bottom-[6.75rem] lg:left-auto lg:h-16 lg:w-[5.25rem] lg:translate-x-3 lg:-rotate-6 lg:rounded-xl lg:border-0 lg:text-2xl"
            >
              {{ identity.initials }}
            </span>

            <!-- "+5 anos na área" — mobile only; desktop has its own copy
                 floating on the hero stage. -->
            <div
              aria-hidden="true"
              class="absolute -right-4 bottom-6 z-10 flex size-[7.25rem] rotate-[12deg] flex-col items-center justify-center rounded-full border-2 border-ink bg-blush text-center shadow-note sm:-right-10 lg:hidden"
            >
              <span class="font-display text-[2.125rem] leading-none font-extrabold">
                {{ hero.years }}
              </span>
              <span class="font-hand text-xl leading-none">{{ hero.yearsLabel }}</span>
            </div>
          </div>

          <!-- HEAD: greeting + selected name -->
          <div class="order-1 flex flex-col lg:col-start-2 lg:row-start-1">
            <!-- Greeting + arrow — Figma y 24 -->
            <div class="flex items-start gap-4 lg:pl-1">
              <p
                v-reveal
                class="reveal m-0 -rotate-3 font-hand text-[2.125rem] leading-none font-bold text-terra sm:text-[2.75rem]"
              >
                {{ hero.greeting }}
              </p>
              <span class="mt-1 hidden lg:block"><BaseScribble variant="arrow" :width="104" /></span>
            </div>

            <!-- Selected name — Figma desktop y 110, h1 140px.
                 Figma mobile: h1 60px / leading 0.9 / tracking −2px, with the
                 "UX/UI" sticker straddling the frame's top-right corner. -->
            <div v-reveal="{ delay: 100 }" class="reveal relative mt-5 self-start lg:mt-[0.6875rem]">
              <BaseSelectionFrame :label="identity.role">
                <h1
                  class="m-0 font-display text-[3.75rem] leading-[0.9] font-extrabold tracking-[-0.033em] uppercase sm:text-[5rem] lg:text-[clamp(5rem,9.7vw,8.75rem)] lg:leading-none"
                >
                  <span class="block">{{ hero.nameLines[0] }}</span>
                  <span class="block">{{ hero.nameLines[1] }}</span>
                </h1>
              </BaseSelectionFrame>

              <span
                aria-hidden="true"
                class="absolute -top-6 right-0 z-20 translate-x-2 rotate-[10deg] rounded-full bg-terra px-3.5 py-2 font-display text-[0.9375rem] leading-none font-bold text-white shadow-[3px_3px_0_var(--color-ink)] lg:hidden"
              >
                {{ hero.stickers.primary }}
              </span>
            </div>
          </div>

          <!-- PITCH: tagline + CTAs -->
          <div class="order-3 flex flex-col lg:col-start-2 lg:row-start-2">
            <p
              v-reveal="{ delay: 180 }"
              class="reveal m-0 max-w-[43.75rem] font-display text-[1.5rem] leading-[1.25] font-semibold tracking-[-0.0125em] sm:text-[1.875rem] lg:mt-[6.75rem] lg:pl-[1.75rem] lg:text-[2.125rem] lg:leading-[1.22]"
            >
              {{ hero.tagline }}
            </p>

            <!-- CTAs — Figma y 681 -->
            <div
              v-reveal="{ delay: 260 }"
              class="reveal mt-7 flex items-center gap-2.5 lg:mt-7 lg:flex-wrap lg:gap-3.5 lg:pl-[1.75rem]"
            >
              <BaseBtn to="/contact" variant="primary" size="lg" arrow class="flex-1 lg:flex-none">Fale comigo</BaseBtn>
              <BaseBtn to="/about" variant="secondary" size="lg" class="flex-1 lg:flex-none">Sobre mim</BaseBtn>
              <span class="hidden text-[0.9375rem] text-ink-faint lg:ml-3 lg:inline">{{ identity.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
