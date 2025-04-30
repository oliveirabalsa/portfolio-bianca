export default defineNuxtPlugin(() => {
  // Force light mode
  if (import.meta.client) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
});
