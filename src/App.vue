<script setup>
import Navbar from './components/Navbar.vue'
import Inicio from './components/Inicio.vue'
import SobreMim from './components/SobreMim.vue'
import Projetos from './components/Projetos.vue'
import Habilidades from './components/Habilidades.vue'
import Contato from './components/Contato.vue'
import FloatingContact from './components/FloatingContact.vue'
import Experiencias from './components/Experiencias.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300 relative overflow-x-hidden">
    <!-- Elementos decorativos de background -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-pink-100/40 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-100/30 to-orange-100/30 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    
    <!-- Navbar será inserida aqui -->
    <Navbar />
    <main class="relative z-10">
      <Inicio />
      <SobreMim />
      <Habilidades />
      <!-- <Experiencias /> -->
      <Projetos />  
      <Contato />
    </main>
    <!-- Botão flutuante de contato -->
    <FloatingContact />
  </div>
</template>

<style scoped>
/* Estilos globais podem ser removidos, pois Tailwind será usado */
</style>
