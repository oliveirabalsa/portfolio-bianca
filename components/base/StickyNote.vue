<script setup lang="ts">
/**
 * A sticky note. Flat coloured paper, no border, a soft drop shadow and a
 * hand-cut bottom edge via `note-clip`. Used for bios, values, insights and
 * process steps across every page.
 */

type Tone = "butter" | "blush" | "sky" | "sage" | "card" | "terra" | "ink";

withDefaults(
  defineProps<{
    tone?: Tone;
    tilt?: number;
    tape?: boolean;
    /** "lg" shows the tape only from the lg breakpoint up. */
    tapeFrom?: "base" | "lg";
    tapeAlign?: "left" | "center" | "right";
    tapeWidth?: number;
    tapeTone?: "butter" | "blush" | "sky" | "sage" | "white";
    /** Alternate the torn edge so a row of notes doesn't look stamped. */
    clip?: "a" | "b" | "none";
    interactive?: boolean;
    /** "roomy" matches the Figma bio note (52px inner padding). */
    pad?: "default" | "roomy" | "snug" | "tight";
  }>(),
  {
    tone: "butter",
    tilt: -1.5,
    tape: true,
    tapeFrom: "base",
    tapeAlign: "center",
    tapeWidth: 92,
    tapeTone: "white",
    clip: "a",
    interactive: true,
    pad: "default",
  },
);

const TONES: Record<Tone, string> = {
  butter: "bg-butter text-ink",
  blush: "bg-blush text-ink",
  sky: "bg-sky text-ink",
  sage: "bg-sage text-ink",
  card: "bg-card text-ink",
  terra: "bg-terra text-white",
  ink: "bg-ink text-paper",
};

const CLIPS = { a: "note-clip", b: "note-clip-alt", none: "" } as const;

const PADS = {
  default: "p-7 sm:p-8 lg:p-10",
  roomy: "p-7 sm:p-9 lg:p-[3.25rem]",
  snug: "p-6 sm:p-7 lg:p-[2.125rem]",
  /** Figma's case/specialty notes: 22px mobile, 28px desktop. */
  tight: "p-[1.375rem] sm:p-6 lg:p-7",
} as const;
</script>

<template>
  <!-- The torn edge lives on an inner wrapper: applied to the root it also
       clips the tape, which overhangs the top edge by design. -->
  <div
    class="note relative shadow-note"
    :class="[TONES[tone], interactive && 'note--interactive']"
    :style="{ '--paper-tilt': `${tilt}deg` }"
  >
    <BaseTape
      v-if="tape"
      :tone="tapeTone"
      :align="tapeAlign"
      :tilt="tilt > 0 ? 5 : -4"
      :width="tapeWidth"
      :height="28"
      :from="tapeFrom"
    />
    <div :class="[PADS[pad], CLIPS[clip]]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.note {
  rotate: var(--paper-tilt, 0deg);
  transition:
    translate 450ms var(--ease-paper),
    box-shadow 450ms var(--ease-paper);
}

/* Lifts without changing stacking order, so a note never covers the tape or
   stickers of the card next to it. */
.note--interactive:hover {
  translate: 0 -6px;
  box-shadow: var(--shadow-lift);
}

@media (prefers-reduced-motion: reduce) {
  .note,
  .note--interactive:hover {
    transition: none;
    translate: none;
  }
}
</style>
