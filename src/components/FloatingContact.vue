<template>
  <a href="#contato" class="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center gap-2 transition-colors animate-bounce-in">
    <span class="i-mdi-email text-2xl"></span>
    <span class="hidden sm:inline font-semibold">Contato</span>
  </a>
</template>

<script setup>
// Nenhuma lógica necessária
</script>

<style scoped>
@keyframes bounce-in {
  0% { opacity: 0; transform: scale(0.5) translateY(40px); }
  60% { opacity: 1; transform: scale(1.1) translateY(-10px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-bounce-in {
  animation: bounce-in 0.7s both;
}
</style> 