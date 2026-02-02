<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Sobre", to: "/about" },
  { name: "Contato", to: "/contact" },
];

const route = useRoute();
const navList = ref(null);
const lineLeft = ref(0);
const lineWidth = ref(0);
const isMenuOpen = ref(false);

const isActive = (to: string) => route.path === to;

function getNavLinks() {
  if (!navList.value) return [];
  return [...(navList.value as unknown as HTMLElement).querySelectorAll("a")];
}

function positionLineToActive() {
  const links = getNavLinks();
  const activeIndex = navItems.findIndex((item) => isActive(item.to));

  if (activeIndex === -1 || !links[activeIndex]) {
    lineWidth.value = 0;
    return;
  }

  const activeLink = links[activeIndex];
  positionLine(activeLink);
}

function positionLine(element: HTMLElement) {
  if (!element || !navList.value) return;

  const rect = element.getBoundingClientRect();
  const navRect = (
    navList.value as unknown as HTMLElement
  ).getBoundingClientRect();

  lineLeft.value = rect.left - navRect.left;
  lineWidth.value = rect.width;
}

function moveLine(element: HTMLElement) {
  positionLine(element);
}

function resetLine() {
  positionLineToActive();
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;

  // If menu is closed, we need to reset the line position
  if (!isMenuOpen.value) {
    setTimeout(() => {
      positionLineToActive();
    }, 300); // Wait for transition to complete
  }
}

function closeMenu() {
  isMenuOpen.value = false;
}

watch(
  () => route.path,
  () => {
    closeMenu();
    positionLineToActive();
  },
);

onMounted(() => {
  setTimeout(() => {
    positionLineToActive();
  }, 50);
});
</script>

<template>
  <header
    class="bg-gray-100 px-8 py-6 flex items-center justify-between font-roboto sticky top-0 left-0 right-0 z-50"
  >
    <div class="font-['Ultra'] text-2xl tracking-wider text-gray-900">BK</div>
    <button
      aria-label="Toggle menu"
      class="lg:hidden relative z-30 focus:outline-none w-10 h-8"
      @click="toggleMenu"
    >
      <div
        class="flex flex-col justify-between w-7 h-5 transform transition-all duration-300 origin-center overflow-hidden"
      >
        <div
          class="h-[3px] w-7 rounded transform transition-all duration-300"
          :class="[
            isMenuOpen ? 'bg-white rotate-45 translate-y-[9px]' : 'bg-gray-900',
          ]"
        />
        <div
          class="h-[3px] w-7 rounded transform transition-all duration-300"
          :class="[isMenuOpen ? 'bg-white opacity-0' : 'bg-gray-900']"
        />
        <div
          class="h-[3px] w-7 rounded transform transition-all duration-300"
          :class="[
            isMenuOpen
              ? 'bg-white -rotate-45 -translate-y-[9px]'
              : 'bg-gray-900',
          ]"
        />
      </div>
    </button>

    <!-- Desktop Navigation -->
    <nav class="relative hidden lg:block">
      <ul ref="navList" class="flex gap-8 relative" @mouseleave="resetLine">
        <li v-for="item in navItems" :key="item.name" class="relative">
          <NuxtLink
            :to="item.to"
            class="pb-1 inline-block transition-colors duration-200"
            :class="{
              'text-black': isActive(item.to),
              'text-gray-600': !isActive(item.to),
            }"
            @mouseover="moveLine($event.currentTarget)"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
        <div
          class="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
          :style="{
            left: `${lineLeft}px`,
            width: `${lineWidth}px`,
            opacity: lineWidth ? 1 : 0,
          }"
        />
      </ul>
    </nav>

    <!-- Mobile Navigation Overlay -->
    <div
      class="fixed inset-0 bg-gray-900/95 z-20 transition-all duration-500 backdrop-blur-sm lg:hidden"
      :class="
        isMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
    >
      <nav class="flex flex-col items-center justify-center h-full">
        <ul class="flex flex-col gap-8 text-center">
          <li
            v-for="(item, index) in navItems"
            :key="item.name"
            class="overflow-hidden"
          >
            <NuxtLink
              :to="item.to"
              :style="{
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(100%)',
                opacity: isMenuOpen ? '1' : '0',
                'transition-delay': `${index * 0.1}s`,
              }"
              :class="{
                'text-gray-300': !isActive(item.to),
                'text-white': isActive(item.to),
              }"
              class="text-2xl font-semibold inline-block transition-all duration-300 relative text-white"
              @click="closeMenu"
            >
              {{ item.name }}
              <span
                v-if="isActive(item.to)"
                class="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-100"
              />
              <span
                v-else
                class="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 origin-left"
                :class="{ 'group-hover:scale-x-100': isMenuOpen }"
              />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
