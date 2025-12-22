<template>
  <section id="experiencias" class="max-w-4xl mx-auto py-24 px-4 animate-fade-in">
    <h2 class="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
      <Laptop class="w-8 h-8 text-gray-500 dark:text-gray-400" /> Experiências
    </h2>
    <div class="flex flex-col gap-8">
      <div v-for="exp in experiencias" :key="exp.id" 
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 transition-all ring-1 ring-inset ring-gray-100 dark:ring-0 hover:bg-gray-50 dark:hover:bg-gray-800"
        data-aos="fade-up"
      >
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ exp.cargo }}</div>
          <div class="text-gray-500 dark:text-gray-400 text-sm">{{ exp.periodo }}</div>
        </div>
        <div class="text-gray-700 dark:text-gray-100 font-medium">{{ exp.empresa }}</div>
        <div class="text-gray-600 dark:text-gray-300 mt-2">{{ exp.descricao }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Laptop } from 'lucide-vue-next'
const experiencias = [
  {
    id: 1,
    cargo: 'Desenvolvedor Júnior | Suporte Técnico manipulação de dados em banco',
    empresa: 'Intelite Tecnologia',
    periodo: 'Fev 2024 - Atual',
    descricao: 'Atuo como desenvolvedor full stack com foco em aplicações web modernas, utilizando Vue.js no front-end, LoopBack e node no back-end. Também sou responsável por dar suporte técnico aos clientes e realizar manutenções e alterações no banco de dados. Trabalho com tecnologias como VUE, REACT, TAILWIND, HTML5, CSS3, JAVASCRIPT, NODEJS, APIs REST e MongoDB/SQL, conciliando desenvolvimento com atendimento técnico eficiente.'
  },
  {
    id: 2,
    cargo: 'Suporte Técnico',
    empresa: 'Intelite Tecnologia',
    periodo: 'Ago 2022 - Fev 2024',
    descricao: 'Suporte técnico de um software de autoatendimento utilizado por empresas em todo o Brasil. Sou responsável pela instalação, manutenção e otimização do sistema em dispositivos Android TV Box, além da configuração de roteadores para garantir conectividade estável e eficiente.'
  }
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