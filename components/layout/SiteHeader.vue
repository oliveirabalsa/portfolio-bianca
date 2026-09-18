<script setup lang="ts">
import { nav, identity, contact } from "~/lib/content/site";

/**
 * Sticky header. Desktop shows the floating nav pill; below `lg` it collapses
 * to a logo, a short status chip and a sheet menu.
 *
 * The header gains a translucent paper backdrop once the page scrolls, so the
 * nav pill stays legible over photography without ever looking like a bar.
 */

const props = withDefaults(defineProps<{ back?: { label: string; to: string } }>(), {
  back: undefined,
});

const route = useRoute();
const open = ref(false);
const scrolled = ref(false);

const isActive = (to: string) => {
  if (to.startsWith("/#")) return false;
  return to === "/" ? route.path === "/" : route.path.startsWith(to);
};

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));

// Close the sheet on navigation.
//
// Deliberately NOT locking page scroll while it is open: setting
// `overflow: hidden` on <body> makes body the scrollport for
// `position: sticky`, so this header would re-anchor to the top of the
// document and vanish whenever the sheet was opened below the fold. The sheet
// is a panel attached to the sticky header rather than a fullscreen modal, so
// letting the page scroll behind it is harmless.
watch(() => route.fullPath, () => (open.value = false));

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && open.value) open.value = false;
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));


</script>

<template>
  <header
    class="sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300"
    :class="scrolled && 'bg-paper/85 shadow-[0_1px_0_rgb(29_27_24/0.08)] backdrop-blur-md'"
  >
    <div class="container-bk flex h-[5.5rem] items-center justify-between gap-4 lg:h-[7.125rem]">
      <!-- Logo -->
      <NuxtLink
        to="/"
        aria-label="Início"
        class="flex size-11 shrink-0 -rotate-6 items-center justify-center rounded-[0.875rem] bg-ink font-display text-lg font-extrabold text-paper transition-transform duration-300 hover:rotate-0 hover:scale-105 lg:size-[3.25rem] lg:rounded-[0.875rem] lg:text-[1.375rem]"
        :style="{ transitionTimingFunction: 'var(--ease-spring)' }"
      >
        {{ identity.initials }}
      </NuxtLink>

      <!-- Desktop nav pill -->
      <nav
        class="hidden items-center gap-1 rounded-full border-2 border-ink bg-card p-1.5 lg:flex"
        aria-label="Navegação principal"
      >
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-[1.375rem] py-3 text-[0.9375rem] transition-colors duration-200"
          :class="
            isActive(item.to)
              ? 'bg-ink font-semibold text-white'
              : 'font-medium text-ink hover:bg-paper-deep'
          "
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Right cluster -->
      <div class="flex items-center gap-2.5">
        <!-- Case pages swap the status pill for a back link. -->
        <BaseBtn v-if="props.back" :to="props.back.to" variant="secondary" size="sm">
          <BaseIcon name="arrow-left" :size="16" />
          {{ props.back.label }}
        </BaseBtn>

        <template v-if="!props.back">
          <span class="hidden xl:block">
            <BaseStatusPill :label="identity.status" />
          </span>
          <span class="block xl:hidden">
            <BaseStatusPill :label="identity.statusShort" compact />
          </span>
        </template>

        <a
          :href="contact.instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="hidden size-12 items-center justify-center rounded-full border-2 border-ink bg-card transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-white lg:flex"
        >
          <BaseIcon name="instagram" />
        </a>
        <a
          :href="contact.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="hidden size-12 items-center justify-center rounded-full border-2 border-ink bg-card transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-white lg:flex"
        >
          <BaseIcon name="linkedin" />
        </a>

        <!-- Mobile menu trigger -->
        <button
          type="button"
          class="flex size-11 items-center justify-center rounded-full border-2 border-ink bg-card transition-colors duration-200 hover:bg-ink hover:text-white lg:hidden"
          :aria-expanded="open"
          aria-controls="menu-mobile"
          :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
          @click="open = !open"
        >
          <BaseIcon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <!-- Mobile sheet -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="open"
        id="menu-mobile"
        class="container-bk pb-5 lg:hidden"
      >
        <BasePaperCard radius="xl" :interactive="false" class="overflow-hidden">
          <nav class="flex flex-col p-3" aria-label="Navegação principal">
            <NuxtLink
              v-for="item in nav"
              :key="item.to"
              :to="item.to"
              class="rounded-2xl px-5 py-4 font-display text-xl font-bold transition-colors duration-200"
              :class="isActive(item.to) ? 'bg-ink text-white' : 'hover:bg-paper-deep'"
            >
              {{ item.label }}
            </NuxtLink>

            <div class="mt-2 flex items-center gap-3 border-t-2 border-ink/10 px-5 pt-4 pb-2">
              <a
                :href="contact.instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="flex size-11 items-center justify-center rounded-full border-2 border-ink"
              >
                <BaseIcon name="instagram" />
              </a>
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="flex size-11 items-center justify-center rounded-full border-2 border-ink"
              >
                <BaseIcon name="linkedin" />
              </a>
            </div>
          </nav>
        </BasePaperCard>
      </div>
    </Transition>
  </header>
</template>
