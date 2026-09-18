<script setup lang="ts">
import { polaroid } from "~/lib/content/contact";

/**
 * The polaroid, mobile only.
 *
 * The Figma mobile frame promotes it out of the board into a section of its
 * own — "Contato — Mobile" › Polaroid (390×418) — centred between the Chamada
 * and the card stack. Desktop keeps it pinned inside the Mural instead, so
 * `ContactBoard` renders its own copy from `lg` up and this one hides.
 *
 * Figma: 280×368 at +3°, photo window 252×300, caption "bora conversar?" in
 * Caveat Bold 28px, sky-blue tape. Laid out at y 43 inside the section, which
 * with the 20px gutter puts the polaroid's left edge on x 55 — dead centre.
 */
</script>

<template>
  <section class="container-bk pt-[2.6875rem] pb-[0.4375rem] lg:hidden">
    <div v-reveal="{ tilt: 3 }" class="reveal-tilt mx-auto w-[17.5rem] max-w-full">
      <BasePolaroid
        :src="polaroid.src"
        :alt="polaroid.alt"
        :caption="polaroid.caption"
        :tilt="0"
        ratio="252/300"
        tape-tone="sky"
      />
    </div>
  </section>
</template>
