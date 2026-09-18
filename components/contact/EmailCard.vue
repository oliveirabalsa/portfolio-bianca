<script setup lang="ts">
import { emailCard } from "~/lib/content/contact";

/**
 * The e-mail card — the anchor of the board: white stock, 2px keyline, hard
 * offset shadow, a strip of butter tape over its top-left corner.
 *
 * Figma internals, measured from the card's own top-left corner:
 *
 *                         desktop (680×270)      mobile (350×285)
 *   padding            42 / 42 / 43              26 · top 30 · bottom 19
 *   title row          y  42 · 32px label        y  30 · 28px label
 *   address            y 102 · 37px              y  79 · 24px / 30px
 *   buttons            y 176 · side by side      y 145 · stacked, full width
 *
 * The address is sized off the Figma *ink* (553px wide on desktop), not off its
 * text box: the designer left that box at 597px after shrinking the type, so
 * taking it at face value renders the address ~5% too large.
 */

const copyState = ref<"idle" | "copied" | "failed">("idle");
let resetTimer: ReturnType<typeof setTimeout> | undefined;

const copyLabel = computed(() => {
  if (copyState.value === "copied") return emailCard.copiedCta;
  if (copyState.value === "failed") return emailCard.copyFailedCta;
  return emailCard.copyCta;
});

const copyIcon = computed(() => {
  if (copyState.value === "copied") return "check" as const;
  if (copyState.value === "failed") return "alert" as const;
  return "copy" as const;
});

const copyEmail = async () => {
  clearTimeout(resetTimer);
  try {
    // `navigator.clipboard` is undefined on insecure origins and the write
    // rejects when a permissions policy blocks it, so both the missing API
    // and the refusal have to be treated as a failure — never report success
    // the reader cannot act on.
    if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(emailCard.value);
    copyState.value = "copied";
  } catch {
    // The address is on the card in full, so the recovery is to select it by
    // hand — say so instead of failing silently.
    copyState.value = "failed";
  }
  resetTimer = setTimeout(() => (copyState.value = "idle"), 2600);
};

onBeforeUnmount(() => clearTimeout(resetTimer));
</script>

<template>
  <BasePaperCard
    :tilt="0"
    radius="lg"
    depth="md"
    class="px-[1.625rem] pt-[1.875rem] pb-[1.1875rem] lg:rounded-[2rem] lg:px-[2.625rem] lg:pt-[2.625rem] lg:pb-[2.6875rem]"
  >
    <!-- Figma: butter tape 102×37 at x 40 (mobile) / 143×49 at x 60 (desktop). -->
    <BaseTape tone="butter" align="left" :tilt="-8" :width="120" :height="42" />

    <ContactCardLabel icon="mail" :label="emailCard.label" tone="terra" size="lg" />

    <p
      class="m-0 mt-[0.5625rem] font-display text-[1.5rem] leading-[1.875rem] font-extrabold break-words lg:mt-[0.375rem] lg:text-[2.3125rem] lg:leading-[4rem]"
    >
      {{ emailCard.value }}
    </p>

    <div
      class="mt-[0.375rem] flex flex-col gap-[0.375rem] lg:mt-[0.625rem] lg:flex-row lg:gap-[0.8125rem]"
    >
      <BaseBtn
        :to="emailCard.href"
        variant="primary"
        size="lg"
        arrow
        block
        class="leading-tight lg:w-auto"
      >
        {{ emailCard.primaryCta }}
      </BaseBtn>

      <BaseBtn variant="secondary" size="lg" block class="leading-tight lg:w-auto" @click="copyEmail">
        <BaseIcon :name="copyIcon" :size="18" />
        {{ copyLabel }}
      </BaseBtn>
    </div>

    <!-- The button's own label changes, but it is not a live region, so
         announce the outcome separately. -->
    <p aria-live="polite" class="sr-only">
      {{ copyState === "copied" ? emailCard.copiedCta : "" }}
      {{ copyState === "failed" ? emailCard.copyFailedCta : "" }}
    </p>
  </BasePaperCard>
</template>
