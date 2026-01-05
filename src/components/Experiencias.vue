<template>
  <section id="experiencias" class="max-w-4xl mx-auto py-24 px-4 animate-fade-in">
    <h2 class="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
      <Laptop class="w-8 h-8 text-gray-500 dark:text-gray-400" /> {{ t('minhasExperiencias') }}
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
import { computed } from 'vue'
import { Laptop } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t, lang } = useLanguage()

const experiencias = computed(() => {
  lang.value // reactive dependency
  return [
    {
      id: 1,
      cargo: t('exp1Cargo'),
      empresa: t('exp1Empresa'),
      periodo: t('exp1Periodo'),
      descricao: t('exp1Desc')
    },
    {
      id: 2,
      cargo: t('exp2Cargo'),
      empresa: t('exp2Empresa'),
      periodo: t('exp2Periodo'),
      descricao: t('exp2Desc')
    }
  ]
})
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