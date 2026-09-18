<script setup lang="ts">
import { specialties } from "~/lib/content/about";
import type { IconName } from "~/components/base/Icon.vue";
</script>

<template>
  <!-- Figma: desktop 28:7 (y 1651, h 647, pad-top 96), mobile 31:42 (h 986,
       pad-top 80). -->
  <section class="container-bk pt-20 lg:pt-24 lg:pb-4">
    <BaseSectionTitle v-reveal class="reveal" :title="specialties.title" />

    <!-- Rendered here rather than through the primitive's `subtitle` prop: that
         one caps at 34rem, while Figma 28:9 runs the full 760px and keeps the
         line to two rows. -->
    <p
      v-reveal="{ delay: 60 }"
      class="reveal m-0 mt-4 max-w-[47.5rem] text-base leading-[1.63] text-ink-muted lg:text-[1.25rem] lg:leading-[1.6]"
    >
      {{ specialties.subtitle }}
    </p>

    <!-- Four 305.5px columns at x 0/335.5/671/1006.5 (28:10); one on mobile.
         Cards 2 and 4 hang 22px lower, as they do in Figma. -->
    <ul
      class="m-0 mt-10 grid list-none grid-cols-1 items-start gap-5 p-0 lg:mt-16 lg:grid-cols-4 lg:gap-[1.875rem]"
    >
      <li
        v-for="(item, i) in specialties.items"
        :key="item.title"
        v-reveal="{ delay: 90 * i }"
        class="reveal"
        :class="item.offset && 'lg:mt-[1.375rem]'"
      >
        <!-- Plain rotated rectangles in Figma: no border, no rounding and no
             torn edge — the clip would also swallow the tape. Every note is
             held at 300px on desktop, so the shorter ones keep the same block
             of blank paper under the copy. -->
        <BaseStickyNote
          :tone="item.tone"
          :tilt="item.tilt"
          clip="none"
          pad="snug"
          :tape="false"
          class="lg:min-h-[18.8rem]"
        >
          <BaseTape
            tone="white"
            align="center"
            :tilt="item.tilt > 0 ? 5 : -4"
            :width="91"
            :height="30"
            from="lg"
          />

          <!-- Mobile sets the icon BESIDE the text (31:47 at x 22, text at
               x 68); desktop stacks it above the title (28:13). -->
          <div class="flex gap-[0.9375rem] lg:flex-col lg:gap-3">
            <BaseIcon
              :name="item.icon as IconName"
              :size="40"
              class="size-[1.875rem] lg:size-10"
            />
            <div class="flex flex-col lg:gap-2.5">
              <h3
                class="m-0 font-display text-[1.375rem] leading-[1.4] font-bold lg:text-[1.625rem] lg:leading-[1.3]"
              >
                {{ item.title }}
              </h3>
              <p class="m-0 text-base leading-[1.63] lg:text-[1.0625rem] lg:leading-[1.69]">
                {{ item.text }}
              </p>
            </div>
          </div>
        </BaseStickyNote>
      </li>
    </ul>
  </section>
</template>
