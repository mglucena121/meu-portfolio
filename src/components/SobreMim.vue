<template>
  <section id="sobre" class="max-w-4xl mx-auto py-24 px-4 text-center animate-fade-in">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Sobre mim</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      Sou um desenvolvedor apaixonado por tecnologia, com experiência em Vue.js, Tailwind e interfaces modernas. Gosto de criar soluções elegantes e funcionais, focando sempre na experiência do usuário.
    </p>
    <p class="text-lg text-gray-700 dark:text-gray-300">
      Busco sempre aprender novas tecnologias e contribuir em projetos inovadores. Vamos construir algo incrível juntos!
    </p>
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
</style> 