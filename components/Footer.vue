<template>
  <footer class="bg-white border-t border-gray-200 py-8 px-4">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
    >
      <div class="mb-4 md:mb-0">
        <h3 class="text-xl font-bold text-gray-900">Bianca Karoline</h3>
        <p class="text-gray-600">Designer UI/UX • {{ currentYear }}</p>
      </div>

      <div class="flex items-center gap-4">
        <SocialLink
          icon="logos:instagram-icon"
          href="https://instagram.com/bianca.karoline"
          label="Instagram"
          color="gray-600"
        />

        <SocialLink
          icon="logos:linkedin-icon"
          href="https://linkedin.com/in/bianca-karoline"
          label="LinkedIn"
          color="gray-600"
        />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
