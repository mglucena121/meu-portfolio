<script setup>
import Navbar from './components/Navbar.vue'
import Inicio from './components/Inicio.vue'
import SobreMim from './components/SobreMim.vue'
import Projetos from './components/Projetos.vue'
import Habilidades from './components/Habilidades.vue'
import Contato from './components/Contato.vue'
import FloatingContact from './components/FloatingContact.vue'
import Experiencias from './components/Experiencias.vue'
import SectionDivider from './components/SectionDivider.vue'
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-300
           bg-gray-50 dark:bg-gray-950
           text-gray-900 dark:text-gray-100"
  >
    <Navbar />

    <main class="relative z-10 space-y-16 md:space-y-20">
      <Inicio />
      <SectionDivider />
      <SobreMim />
      <SectionDivider />
      <Habilidades />
      <SectionDivider />
      <!-- <Experiencias />
      <SectionDivider /> -->
      <Projetos />
      <SectionDivider />
      <Contato />
    </main>

    <FloatingContact />
  </div>
</template>

<style scoped>
/* Estilos globais podem ser removidos, pois Tailwind será usado */
</style>
