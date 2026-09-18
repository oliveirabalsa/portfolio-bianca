<script setup lang="ts">
import { manifesto } from "~/lib/content/about";
</script>

<template>
  <!-- Figma: desktop 28:2 (y 1266, h 385), mobile 31:38 (h 384). One post-it
       spanning the full content width, text ranged left. -->
  <section class="container-bk pt-[3.875rem] lg:pt-[5.25rem]">
    <!-- Wrapper carries the reveal: the note sets its own transform inline,
         which would win over a transform coming from a CSS class. -->
    <div v-reveal class="reveal">
      <!-- `clip="none"` because Figma's post-it is a plain rotated rectangle —
           and the torn-edge clip-path would also cut off the tape. -->
      <BaseStickyNote tone="butter" :tilt="-0.9" clip="none" pad="roomy" :tape="false">
        <!-- Anchors to the note root (the only positioned ancestor). Figma has
             no tape on the mobile post-it (31:39), only on desktop (28:6). -->
        <BaseTape tone="white" align="center" :tilt="-3" :width="131" :height="38" from="lg" />

        <div class="flex flex-col gap-[0.4375rem] lg:gap-2.5">
          <p class="m-0 font-hand text-[2rem] leading-[1.29] font-bold lg:text-[2.25rem] lg:leading-[1.45]">
            {{ manifesto.title }}
          </p>
          <!-- Bricolage ExtraBold, not the body face: 22px on mobile (31:41),
               32px on desktop (28:5). -->
          <p
            class="m-0 font-display text-[1.375rem] leading-[1.4] font-extrabold lg:text-[2rem]"
          >
            {{ manifesto.text }}
          </p>
        </div>
      </BaseStickyNote>
    </div>
  </section>
</template>
