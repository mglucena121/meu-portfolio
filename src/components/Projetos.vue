<template>
  <section id="projetos" class="max-w-6xl mx-auto py-24 px-4 animate-fade-in">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Projetos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="projeto in projetos" :key="projeto.titulo" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300 group cursor-pointer">
        <img :src="projeto.imagem" :alt="projeto.titulo" class="w-full h-48 object-cover group-hover:opacity-90 transition duration-300" />
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ projeto.titulo }}</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">{{ projeto.descricao }}</p>
          <a :href="projeto.link" target="_blank" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Ver projeto</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projetos = [
  {
    titulo: 'Projeto 1',
    descricao: 'Descrição breve do projeto 1.',
    imagem: 'https://source.unsplash.com/random/400x300?sig=1',
    link: '#',
  },
  {
    titulo: 'Projeto 2',
    descricao: 'Descrição breve do projeto 2.',
    imagem: 'https://source.unsplash.com/random/400x300?sig=2',
    link: '#',
  },
  {
    titulo: 'Projeto 3',
    descricao: 'Descrição breve do projeto 3.',
    imagem: 'https://source.unsplash.com/random/400x300?sig=3',
    link: '#',
  },
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