/**
 * `v-reveal` — fades elements up as they scroll into view.
 *
 * The directive owns *behaviour only*. The initial hidden state comes from a
 * `reveal` / `reveal-tilt` class written in the template, because a class
 * added by `getSSRProps` would not exist on the client vnode and Vue would
 * report a hydration mismatch on every revealed element. Keeping the class in
 * the template means server and client markup agree exactly, and the element
 * is already hidden on first paint — so there is no flash before the
 * entrance animation runs.
 *
 * One shared IntersectionObserver serves every instance, and elements
 * unobserve themselves once revealed: this is a one-shot entrance, not a
 * scroll-linked effect that re-triggers on the way back up.
 *
 * Usage (note the paired class):
 *   <div class="reveal" v-reveal />
 *   <div class="reveal" v-reveal="{ delay: 120 }" />
 *   <div class="reveal-tilt" v-reveal="{ tilt: -3 }" />
 */

interface RevealOptions {
  /** Milliseconds to wait before this element animates. */
  delay?: number;
  /** Final rotation in degrees — for paper objects that sit askew. */
  tilt?: number;
}

const REVEALED = "reveal-in";

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null;

  const reduceMotion =
    import.meta.client && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (import.meta.client && !reduceMotion) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add(REVEALED);
          observer?.unobserve(entry.target);
        }
      },
      // Fire slightly before the element is fully on screen so the motion
      // finishes about when the reader's eye arrives.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
  }

  nuxtApp.vueApp.directive<HTMLElement, RevealOptions | undefined>("reveal", {
    mounted(el, binding) {
      const { delay, tilt } = binding.value ?? {};

      if (tilt !== undefined) el.style.setProperty("--tilt", `${tilt}deg`);
      if (delay !== undefined) el.style.setProperty("--reveal-delay", `${delay}ms`);

      if (!observer) {
        // Reduced motion, or no observer support — show it straight away.
        el.classList.add(REVEALED);
        return;
      }

      observer.observe(el);
    },

    unmounted(el) {
      observer?.unobserve(el);
    },
  });
});
