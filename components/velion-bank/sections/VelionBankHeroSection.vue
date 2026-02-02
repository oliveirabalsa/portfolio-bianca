<template>
  <div class="w-full bg-white font-sans antialiased">
    <section class="relative bg-[#0B0000] flex flex-col md:flex-row items-stretch min-h-[480px] overflow-hidden">
      
      <div class="flex-1 flex justify-end items-center py-16 px-6 md:px-12 z-20">
        <div class="w-full max-w-[600px]">
          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="tag in ['Web', 'Benchmarking', 'Figma Make', 'IA', 'Documentação de prompt']" :key="tag" 
                  class="bg-[#5D3FD3] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {{ tag }}
            </span>
          </div>
          <div class="flex flex-col items-start text-left w-[638px] gap-4">
  
  <h1 class="text-white text-6xl font-semibold ">
    Chatbot de ajuda
  </h1>
  
  <p class="text-gray-400 text-lg leading-relaxed  font-medium">
    Case study sobre como o Figma Make acelerou a criação de um chatbot bancário, 
    reduzindo drasticamente o tempo de desenvolvimento sem comp...
  </p>
</div>
       
        </div>
      </div>

      <div class="flex-1 relative w-[540px]">
        <img 
          src="~/assets/images/header-image-1.svg" 
          class="absolute inset-0 w-full h-full object-cover object-left opacity-90" 
        />
        <div 
          class="absolute inset-0 pointer-events-none" 
          style="background: linear-gradient(90deg, #0B0000 0%,rgba(0, 0, 0, 0.5) 20%,rgba(0, 0, 0, 0) 100%);"
        ></div>
      </div>
    </section>

    <div class="w-full max-w-[1440px] mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[24px] -mt-[83px] relative z-30">
        
        <div class="bg-[#FFFFFF] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.08)]" 
             style="height: 166px; border-radius: 14px; padding: 24px; border-top: 2px solid rgba(0, 0, 0, 0.1);">
          <div class="flex items-center gap-[24px]">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span class="text-gray-500 font-bold text-[12px] uppercase tracking-widest leading-none">Tempo de prototipação</span>
          </div>
          <div>
            <div class="text-4xl font-bold text-black mb-2 tracking-tighter leading-none">10 min</div>
            <div class="text-gray-400 text-[11px] font-medium border-t border-gray-100 pt-3 italic">vs. 2 dias manual</div>
          </div>
        </div>

        <div class="bg-[#FFFFFF] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.08)]" 
             style="height: 166px; border-radius: 14px; padding: 24px; border-top: 2px solid rgba(0, 0, 0, 0.1);">
          <div class="flex items-center gap-[24px]">
            <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            <span class="text-gray-500 font-bold text-[12px] uppercase tracking-widest leading-none">Eficiência na entrega</span>
          </div>
          <div>
            <div class="text-4xl font-bold text-black mb-2 tracking-tighter leading-none">99.7%</div>
            <div class="text-gray-400 text-[11px] font-medium border-t border-gray-100 pt-3">mais rápido</div>
          </div>
        </div>

        <div class="bg-[#FFFFFF] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.08)]" 
             style="height: 166px; border-radius: 14px; padding: 24px; border-top: 2px solid rgba(0, 0, 0, 0.1);">
          <div class="flex items-center gap-[24px]">
            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span class="text-gray-500 font-bold text-[12px] uppercase tracking-widest leading-none">Resultado</span>
          </div>
          <div>
            <div class="text-4xl font-bold text-black mb-2 tracking-tighter leading-none">Alta</div>
            <div class="text-gray-400 text-[10px] font-bold uppercase border-t border-gray-100 pt-3 leading-tight tracking-tight">
              qualidade + consistência com PO
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>