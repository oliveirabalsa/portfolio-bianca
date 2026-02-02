<template>
  <section class="bg-white py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-6">
        Vamos trabalhar juntos?
      </h2>

      <p class="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        Entre em contato para conversarmos sobre
        <br />
        como posso ajudar a transformar suas ideias em realidade.
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <ContactButton
          icon="logos:whatsapp-icon"
          label="Whatsapp"
          href="https://wa.me/5511954500665"
          variant="whatsapp"
        />

        <ContactButton
          icon="material-symbols:mail"
          label="Email"
          href="mailto:bianca_karoline.2000@hotmail.com"
          variant="email"
        />

        <ContactButton
          icon="logos:linkedin-icon"
          label="Linkedin"
          href="https://www.linkedin.com/in/biancakaroline-uxui"
          variant="linkedin"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
