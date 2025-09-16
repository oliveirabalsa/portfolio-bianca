<template>
    <section class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <section class="text-center w-full mb-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-2 md:mb-6 font-roboto leading-tight">
                Prototipação
            </h2>
            <div class="w-20 h-1 bg-[#4F46E5] mx-auto mb-8"></div>
        </section>
        <section class="w-full max-w-[592px] mx-auto h-60 rounded-lg relative" style="
                    background-image: url('/images/mcLogo.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-blend-mode: overlay;"> >
            <div class="w-full max-w-[592px] mx-auto h-60 rounded-lg absolute bottom-0 left-0 inset-0" style="background: linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(17, 24, 39, 1) 60%, rgba(17, 24, 39, 1) 80%, #111827 100%);"></div>
            <div class="w-full h-full p-6 relative z-10 py-32 space-y-3">
                <NuxtLink href="#" target="_blank" class="text-white font-roboto text-base font-normal leading-6 flex items-center gap-2 hover:underline">
                    <span><ArrowLeftIcon /></span>VER PROTIPAÇÃO NO FIGMA
                </NuxtLink>
                <p class="text-white font-roboto text-xl font-semibold leading-6">
                    Mentor Cycle - Plataforma de mentoria
                </p>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from 'lucide-vue-next';
</script>