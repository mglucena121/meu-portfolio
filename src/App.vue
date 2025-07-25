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
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Navbar será inserida aqui -->
    <Navbar />
    <main>
      <Inicio />
      <SobreMim />
      <Experiencias />
      <Projetos />
      <Habilidades />
      <Contato />
    </main>
    <!-- Botão flutuante de contato -->
    <FloatingContact />
  </div>
</template>

<style scoped>
/* Estilos globais podem ser removidos, pois Tailwind será usado */
</style>
