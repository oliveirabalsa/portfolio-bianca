<script setup lang="ts">
/**
 * The pill button. Three variants matching the Figma: solid ink (primary),
 * outlined white (secondary) and bare terracotta text (ghost).
 *
 * Resolves to <NuxtLink> for internal routes, <a> for external/mailto/tel,
 * and <button> when there is no destination.
 */

const props = withDefaults(
  defineProps<{
    to?: string;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    /** Show a trailing arrow that nudges right on hover. */
    arrow?: boolean;
    block?: boolean;
    type?: "button" | "submit";
  }>(),
  { to: undefined, variant: "primary", size: "md", arrow: false, block: false, type: "button" },
);

const isExternal = computed(
  () => !!props.to && /^(https?:|mailto:|tel:)/.test(props.to),
);

const tag = computed(() => {
  if (!props.to) return "button";
  return isExternal.value ? "a" : resolveComponent("NuxtLink");
});

const linkAttrs = computed(() => {
  if (!props.to) return { type: props.type };
  if (isExternal.value) {
    const external = props.to.startsWith("http");
    return {
      href: props.to,
      ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
    };
  }
  return { to: props.to };
});

const VARIANTS = {
  primary:
    "bg-ink text-white border-2 border-ink hover:bg-terra hover:border-terra active:scale-[0.97]",
  secondary:
    "bg-card text-ink border-2 border-ink hover:bg-ink hover:text-white active:scale-[0.97]",
  ghost: "bg-transparent text-terra border-2 border-transparent hover:border-terra",
} as const;

const SIZES = {
  sm: "px-4 py-2.5 text-sm gap-2",
  md: "px-[1.375rem] py-3.5 text-[0.9375rem] gap-2.5",
  lg: "px-[1.625rem] py-4 text-base gap-2.5",
} as const;
</script>

<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    class="group/btn inline-flex cursor-pointer items-center justify-center rounded-full font-semibold whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200"
    :class="[VARIANTS[variant], SIZES[size], block && 'w-full']"
    :style="{ transitionTimingFunction: 'var(--ease-paper)' }"
  >
    <slot />
    <svg
      v-if="arrow"
      aria-hidden="true"
      :width="size === 'sm' ? 16 : 18"
      :height="size === 'sm' ? 16 : 18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  </component>
</template>
