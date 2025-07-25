<template>
  <section id="habilidades" class="max-w-4xl mx-auto py-24 px-4 animate-fade-in">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Habilidades</h2>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
      <div v-for="skill in skills" :key="skill.nome" class="flex flex-col items-center group">
        <div class="text-5xl mb-2 group-hover:scale-110 transition-transform duration-200">
          <span :class="skill.icone"></span>
        </div>
        <span class="text-gray-800 dark:text-gray-200 text-sm mt-1">{{ skill.nome }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { nome: 'Vue.js', icone: 'i-logos-vue' },
  { nome: 'JavaScript', icone: 'i-logos-javascript' },
  { nome: 'Tailwind', icone: 'i-logos-tailwindcss-icon' },
  { nome: 'HTML5', icone: 'i-logos-html-5' },
  { nome: 'CSS3', icone: 'i-logos-css-3' },
  { nome: 'Git', icone: 'i-logos-git-icon' },
  { nome: 'Figma', icone: 'i-logos-figma' },
  { nome: 'Vite', icone: 'i-logos-vitejs' },
]
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