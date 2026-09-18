<script setup lang="ts">
import { channels, polaroid, signoff } from "~/lib/content/contact";

/**
 * The board — "Mural" on desktop, "Cartões" on mobile.
 *
 * Figma draws two genuinely different compositions, so this is one set of
 * cards under two layouts rather than a grid that degrades:
 *
 *   desktop `36:2` › Mural (1440×1120)  — an absolute scatter, cards pinned
 *                                          at angles, polaroid top-right,
 *                                          presence cursor under it
 *   mobile  `38:2` › Cartões (390×1244) — one 350px column, 26px apart,
 *                                          rotations kept, polaroid promoted
 *                                          to its own section above
 *
 * Desktop coordinates are transcribed from the Mural frame and then rebased
 * on the stage — the unpadded box inside `.container-bk`, which starts at the
 * 64px gutter and is 1312px wide at the Figma frame width. Padding does not
 * inset absolutely positioned children, so they are anchored to that stage
 * rather than to the padded container.
 *
 *                  Figma x/y      stage x/y       size      tilt
 *   e-mail            67 /  822       3 /  41     680×270    −1.5°
 *   polaroid         970 /  802     906 /  20     365×455    +3°
 *   whatsapp          62 / 1187      −2 / 405     400×203    +1.4°
 *   linkedin         523 / 1224     459 / 443     400×204    −1.9°
 *   instagram        855 / 1390     791 / 609     400×203    +2.6°
 *   localização      133 / 1554      69 / 773     341×171    −2.3°
 *   cursor          1000 / 1221     936 / 440      69×53      0°
 *   "até logo! ✦"    636 / 1735     572 / 954     159×53     +3°
 *
 * (Figma y is absolute in the frame; the Mural starts at y 781. The x/y above
 * are the *unrotated* box corners — Figma reports the rotated corner, which is
 * a few pixels off for a tilted card.)
 *
 * Horizontal offsets are expressed as percentages of the stage so the scatter
 * compresses instead of overflowing between `lg` and the 1440px frame width:
 * at 1440 they resolve back to the transcribed pixels exactly. The right-hand
 * objects are the ones that would otherwise run off the edge, so the polaroid,
 * instagram note and cursor are the ones whose percentages matter most.
 *
 * Card tilts are applied by the caller's `v-reveal="{ tilt }"` with the paired
 * `reveal-tilt` class, not by the primitives' own `tilt` prop, so every object
 * straightens up and settles into its angle as it enters.
 */

/** Desktop pins for the three coloured notes, in `channels` order — Figma
 *  stage (−2, 405), (459, 443) and (791, 609). */
const CHANNEL_POSITIONS = [
  "lg:top-[25.3125rem] lg:left-0",
  "lg:top-[27.6875rem] lg:left-[34.99%]",
  "lg:top-[38.0625rem] lg:left-[60.29%]",
] as const;

/** Resting tilts, same order. */
const CHANNEL_TILTS = [1.5, -2, 2] as const;
</script>

<template>
  <section class="container-bk pb-1 lg:pb-0">
    <div
      class="relative flex flex-col items-center gap-9 pt-[3.25rem] lg:block lg:h-[70rem] lg:pt-0"
    >
      <!-- E-mail — Figma stage (3, 41), 680×270 -->
      <div
        v-reveal="{ tilt: -1.5 }"
        class="reveal-tilt w-full max-w-[21.875rem] lg:absolute lg:top-[2.5625rem] lg:left-[0.26%] lg:w-[51.83%] lg:max-w-none"
      >
        <ContactEmailCard />
      </div>

      <!-- Polaroid — Figma stage (906, 20), 365×455. Mobile gets its own
           section (`ContactPolaroid`), so this copy only exists from `lg`.
           The deeper bottom lip is the Figma one: the caption sits high on a
           91px white margin rather than the primitive's default 44px. -->
      <div
        v-reveal="{ tilt: 3, delay: 80 }"
        class="reveal-tilt hidden lg:absolute lg:top-[1.25rem] lg:left-[69.05%] lg:block lg:w-[27.82%]"
      >
        <BasePolaroid
          :src="polaroid.src"
          :alt="polaroid.alt"
          :caption="polaroid.caption"
          :tilt="0"
          ratio="333/348"
          tape-tone="sky"
          class="lg:pb-[2.875rem]"
        />
      </div>

      <!-- WhatsApp · LinkedIn · Instagram — Figma stage (−2, 405),
           (459, 443) and (791, 609); all 400px wide. -->
      <div
        v-for="(channel, i) in channels"
        :key="channel.key"
        v-reveal="{ tilt: CHANNEL_TILTS[i], delay: 140 + i * 60 }"
        class="reveal-tilt w-full max-w-[21.875rem] lg:absolute lg:w-[30.49%] lg:max-w-none"
        :class="CHANNEL_POSITIONS[i]"
      >
        <ContactNoteCard :channel="channel" :clip="i % 2 === 0 ? 'a' : 'b'" />
      </div>

      <!-- Localização — Figma stage (69, 773), 341×171 -->
      <div
        v-reveal="{ tilt: -1.2, delay: 320 }"
        class="reveal-tilt w-full max-w-[21.875rem] lg:absolute lg:top-[48.3125rem] lg:left-[5.26%] lg:w-[25.99%] lg:max-w-none"
      >
        <ContactLocationCard />
      </div>

      <!-- Presence cursor — Figma stage (936, 440). Desktop only: the mobile
           frame drops it. -->
      <div class="hidden lg:absolute lg:top-[27.5rem] lg:left-[71.34%] lg:block">
        <BaseCursorTag />
      </div>

      <!-- Sign-off — Figma stage (572, 954). Its centre lands within 4px of
           the stage's own centre line, so it is simply centred. -->
      <p
        v-reveal="{ tilt: 3, delay: 380 }"
        class="reveal-tilt m-0 flex items-center gap-2.5 font-hand text-[2.125rem] leading-[1.28] font-bold lg:absolute lg:top-[59.625rem] lg:left-1/2 lg:-translate-x-1/2 lg:text-[2.5625rem]"
      >
        {{ signoff }}
        <BaseIcon name="sparkle" :size="24" />
      </p>
    </div>
  </section>
</template>
