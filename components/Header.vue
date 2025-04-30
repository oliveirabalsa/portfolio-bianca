<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Sobre", to: "/about" },
  { name: "Projetos", to: "/projects" },
  { name: "Contato", to: "/contact" },
];

const route = useRoute();
const navList = ref(null);
const lineLeft = ref(0);
const lineWidth = ref(0);

const isActive = (to) => route.path === to;

function getNavLinks() {
  if (!navList.value) return [];
  return [...navList.value.querySelectorAll("a")];
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

function positionLine(element) {
  if (!element || !navList.value) return;

  const rect = element.getBoundingClientRect();
  const navRect = navList.value.getBoundingClientRect();

  lineLeft.value = rect.left - navRect.left;
  lineWidth.value = rect.width;
}

function moveLine(element) {
  positionLine(element);
}

function resetLine() {
  positionLineToActive();
}

watch(
  () => route.path,
  () => {
    positionLineToActive();
  }
);
onMounted(() => {
  setTimeout(() => {
    positionLineToActive();
  }, 50);
});
</script>

<template>
  <header
    class="bg-gray-100 px-8 py-6 flex items-center justify-between font-roboto relative"
  >
    <div class="font-['Ultra'] text-2xl tracking-wider text-[#181e29]">BK</div>
    <nav class="relative">
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
  </header>
</template>
