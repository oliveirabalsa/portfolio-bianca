<script setup lang="ts">
import { identity, footerLinks } from "~/lib/content/site";

/**
 * Figma desktop footer (98 tall): a 2px ink rule, then the signature inline on
 * the left and four links on the right.
 *
 * Figma mobile footer (198 tall): the same rule, but the signature stacks and
 * only the two social links remain — the in-site links are already reachable
 * from the sheet menu, so repeating them costs a tap target for nothing.
 */

const isExternal = (to: string) => /^https?:/.test(to);
</script>

<template>
  <footer class="container-bk">
    <div
      class="flex flex-col gap-6 border-t-2 border-ink pt-6 pb-8 lg:flex-row lg:items-center lg:justify-between lg:pt-[2.125rem] lg:pb-10"
    >
      <div class="flex flex-col gap-1.5 lg:flex-row lg:items-center lg:gap-4">
        <span class="font-display text-lg font-extrabold lg:text-xl">{{ identity.name }}</span>
        <span class="text-sm text-ink-faint lg:text-[0.9375rem]">{{ identity.copyright }}</span>
      </div>

      <nav class="flex flex-wrap gap-x-5 gap-y-2" aria-label="Links do rodapé">
        <template v-for="link in footerLinks" :key="link.to">
          <a
            v-if="isExternal(link.to)"
            :href="link.to"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold transition-colors duration-200 hover:text-terra lg:text-[0.9375rem]"
          >
            {{ link.label }}
          </a>
          <!-- In-site links are duplicated by the mobile sheet menu. -->
          <NuxtLink
            v-else
            :to="link.to"
            class="hidden text-sm font-semibold transition-colors duration-200 hover:text-terra lg:inline lg:text-[0.9375rem]"
          >
            {{ link.label }}
          </NuxtLink>
        </template>
      </nav>
    </div>
  </footer>
</template>
