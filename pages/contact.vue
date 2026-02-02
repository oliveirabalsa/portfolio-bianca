<script setup lang="ts">
import {
  Mail,
  Linkedin,
  ArrowUpRight,
  Copy,
  Check,
  Globe,
  Instagram,
  MessageSquare,
} from "lucide-vue-next";
import { ref } from "vue";

const email = "bianca_karoline.2000@hotmail.com";
const copied = ref(false);

const copyEmail = () => {
  navigator.clipboard.writeText(email);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
};

const socialTags = [
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/ibiancakaroline",
  },
];
</script>

<template>
  <main
    class="min-h-screen bg-white text-[#1a1a1a] antialiased selection:bg-black selection:text-white"
  >
    <section
      class="pt-16 pb-12 md:pt-24 md:pb-16 flex flex-col items-center text-center px-6"
    >
      <div class="relative mb-8">
        <div
          class="w-44 h-44 md:w-60 md:h-60 rounded-full bg-[#f5f5f7] p-1.5 shadow-xl border border-white overflow-hidden transition-transform duration-500 hover:scale-[1.03]"
        >
          <img
            src="~/assets/images/photo-2.svg"
            alt="Bianca Karoline"
            class="w-full h-full object-cover grayscale"
          />
        </div>
        <div
          class="absolute bottom-5 right-2 bg-white p-2.5 rounded-full shadow-md border border-gray-50"
        >
          <MessageSquare class="w-5 h-5 text-black" />
        </div>
      </div>

      <div class="max-w-[700px]">
        <h2
          class="text-[12px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4 italic"
        >
          Contato
        </h2>
        <h1
          class="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4"
        >
          Vamos trabalhar juntos para criar <br class="hidden md:block" />
          <span class="text-gray-400 font-medium italic">algo memorável.</span>
        </h1>
        <p
          class="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-[500px] mx-auto"
        >
          Disponível para novos projetos e colaborações criativas. Sinta-se à
          vontade para entrar em contato.
        </p>
      </div>
    </section>

    <section class="max-w-[1000px] mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div
          class="md:col-span-8 group bg-[#f5f5f7] rounded-[32px] p-10 flex flex-col justify-between min-h-[280px] transition-all hover:bg-[#efeff1]"
        >
          <div class="flex justify-between items-start">
            <div class="p-3.5 bg-white rounded-2xl shadow-sm">
              <Mail class="w-6 h-6" />
            </div>
            <button
              @click="copyEmail"
              class="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:bg-black hover:text-white transition-all active:scale-95"
            >
              <component :is="copied ? Check : Copy" class="w-3.5 h-3.5" />
              {{ copied ? "Copiado" : "Copiar E-mail" }}
            </button>
          </div>

          <div>
            <span
              class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block mb-2"
              >E-mail Profissional</span
            >
            <h3 class="text-2xl md:text-3xl font-bold tracking-tight">
              {{ email }}
            </h3>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/biancakaroline-uxui"
          target="_blank"
          class="md:col-span-4 bg-[#1a1a1a] text-white rounded-[32px] p-10 flex flex-col justify-between group hover:scale-[1.02] transition-all"
        >
          <div class="flex justify-between items-start">
            <div class="p-3.5 bg-white/10 rounded-2xl backdrop-blur-md">
              <Linkedin class="w-6 h-6" />
            </div>
            <ArrowUpRight
              class="w-5 h-5 text-gray-600 group-hover:text-white"
            />
          </div>
          <div>
            <p
              class="text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-1"
            >
              Rede
            </p>
            <h3 class="text-xl font-bold italic tracking-tight">LinkedIn</h3>
          </div>
        </a>

        <div
          class="md:col-span-7 bg-[#f5f5f7] rounded-[32px] p-10 flex flex-col justify-center"
        >
          <p
            class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6"
          >
            Social
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="tag in socialTags"
              :key="tag.name"
              :href="tag.link"
              target="_blank"
              class="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div
                class="p-2 bg-[#f5f5f7] rounded-xl group-hover:bg-black group-hover:text-white transition-colors"
              >
                <component :is="tag.icon" class="w-4 h-4" />
              </div>
              <span class="font-bold text-base tracking-tight">{{
                tag.name
              }}</span>
              <ArrowUpRight
                class="w-3 h-3 text-gray-300 group-hover:text-black"
              />
            </a>
          </div>
        </div>

        <div
          class="md:col-span-5 bg-[#f5f5f7] rounded-[32px] p-10 flex items-center gap-6 group"
        >
          <div
            class="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-black group-hover:text-white transition-colors"
          >
            <Globe class="w-6 h-6" />
          </div>
          <div>
            <p
              class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1"
            >
              Localização
            </p>
            <h3 class="text-xl font-bold tracking-tight">São Paulo, BR</h3>
          </div>
        </div>
      </div>

      <footer
        class="mt-24 pt-10 border-t border-gray-100 flex justify-between items-center"
      >
        <p class="text-gray-400 text-xs font-bold uppercase tracking-widest">
          Bianca Karoline © {{ new Date().getFullYear() }}
        </p>
        <div
          class="text-5xl font-black text-[#f5f5f7] select-none tracking-tighter"
        >
          HI.
        </div>
      </footer>
    </section>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

h1,
h2,
h3,
p,
span {
  font-family: "Inter", sans-serif;
}
</style>
