<script setup lang="ts">
import { personalValues } from "~/lib/content/about";
</script>

<template>
  <!-- Figma: desktop 30:2 (y 5256, h 380, pad-top 96), mobile 32:98 (h 629,
       pad-top 80). -->
  <section class="container-bk pt-20 lg:pt-24">
    <BaseSectionTitle v-reveal class="reveal" :title="personalValues.title" />

    <!-- Three 416px columns at x 0/448/896 (30:4), one on mobile. -->
    <ul
      class="m-0 mt-9 grid list-none grid-cols-1 items-start gap-5 p-0 lg:mt-8 lg:grid-cols-3 lg:gap-8"
    >
      <li
        v-for="(item, i) in personalValues.items"
        :key="item.title"
        v-reveal="{ delay: 90 * i }"
        class="reveal"
        :style="{ '--dip': `${item.dip}px` }"
      >
        <BaseStickyNote
          :tone="item.tone"
          :tilt="item.tilt"
          clip="none"
          pad="snug"
          :tape="false"
          class="lg:min-h-[10.4375rem] lg:mt-[var(--dip)]"
        >
          <!-- Desktop only, as with the other post-its on this page. -->
          <BaseTape
            tone="white"
            align="center"
            :tilt="item.tilt > 0 ? 5 : -4"
            :width="91"
            :height="31"
            from="lg"
          />

          <div class="flex flex-col gap-[0.3125rem] lg:gap-2">
            <!-- Bricolage Bold in Figma (30:7), not the handwriting face. -->
            <h3
              class="m-0 font-display text-[1.375rem] leading-[1.4] font-bold lg:text-[1.625rem] lg:leading-[1.3]"
            >
              {{ item.title }}
            </h3>
            <p class="m-0 text-base leading-[1.6] lg:text-[1.0625rem]">{{ item.text }}</p>
          </div>
        </BaseStickyNote>
      </li>
    </ul>
  </section>
</template>
