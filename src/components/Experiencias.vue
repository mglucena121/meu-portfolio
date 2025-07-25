<template>
  <section id="experiencias" class="max-w-4xl mx-auto py-24 px-4 animate-fade-in">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Experiências</h2>
    <div class="flex flex-col gap-8">
      <div v-for="exp in experiencias" :key="exp.id" class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div class="text-lg font-semibold text-blue-600 dark:text-blue-400">{{ exp.cargo }}</div>
          <div class="text-gray-500 dark:text-gray-400 text-sm">{{ exp.periodo }}</div>
        </div>
        <div class="text-gray-900 dark:text-white font-medium">{{ exp.empresa }}</div>
        <div class="text-gray-700 dark:text-gray-300 mt-2">{{ exp.descricao }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiencias = [
  {
    id: 1,
    cargo: 'Desenvolvedor Front-end',
    empresa: 'Empresa Exemplo 1',
    periodo: 'Jan 2022 - Atual',
    descricao: 'Atuei no desenvolvimento de interfaces modernas utilizando Vue.js, Tailwind e integrações com APIs.'
  },
  {
    id: 2,
    cargo: 'Estagiário de TI',
    empresa: 'Empresa Exemplo 2',
    periodo: 'Jul 2021 - Dez 2021',
    descricao: 'Auxiliei na manutenção de sistemas internos, suporte técnico e automação de tarefas.'
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