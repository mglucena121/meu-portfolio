<template>
  <section id="inicio" class="flex flex-col items-center justify-center min-h-screen pt-20 pb-10 text-center bg-white dark:bg-[#0e1524]">
    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">Olá, eu sou <span class="text-blue-600 dark:text-blue-400">Mário Gomes</span></h1>
    <p class="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in delay-200">Desenvolvedor Full Stack</p>
    <!-- <a href="#contato" class="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors animate-fade-in delay-400">Fale comigo</a> -->
  </section>
</template>

<script setup>
// Nenhuma lógica necessária
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}
.animate-fade-in {
  animation: fade-in 0.8s both;
}
.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}
.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}
</style> 