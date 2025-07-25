<template>
  <section id="contato" class="max-w-2xl mx-auto py-24 px-4 animate-fade-in">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contato</h2>
    <form class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-4">
      <input type="text" placeholder="Nome" class="px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="email" placeholder="Email" class="px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea placeholder="Mensagem" rows="4" class="px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      <button type="submit" class="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition-colors">Enviar</button>
    </form>
  </section>
</template>

<script setup>
// Nenhuma lógica necessária para envio real neste exemplo
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