<template>
  <section id="sobre" ref="elementRef" class="relative py-8 md:py-12 px-4 overflow-hidden" :class="{ 'animate-section-visible': isVisible }">
    <!-- Sem glows locais: fundo 100% uniforme -->

    <div class="relative max-w-6xl mx-auto animate-section-content">
      <!-- Título minimalista -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block relative">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">
            {{ t('sobreMim') }}
          </h2>
          <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 md:w-36 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 rounded-full"></div>
        </div>
        <!-- <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto font-normal">
          {{ t('sobreDescricao') }}
        </p> -->
      </div>

      <!-- Conteúdo principal com layout em grid -->
      <div class="grid gap-6 md:gap-8">
        <!-- Card de Apresentação -->
        <div class="animate-fade-in delay-200">
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('sobreTexto') }}</h3>
            <div class="space-y-4 text-base md:text-lg">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ t('sobreDescricao1') }}
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ t('sobreDescricao2') }}
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ t('sobreDescricao3') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Card de Experiências -->
        <div class="animate-fade-in delay-300">
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('minhasExperiencias') }}</h3>
            <div class="space-y-6 md:space-y-8">
              <div v-for="exp in experiencias" :key="exp.id"
                class="border-l-4 border-slate-500/60 pl-4 md:pl-6"
              >
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                  <div class="flex items-start gap-2">
                    <span class="inline-block w-2 h-2 rounded-full bg-slate-500/80 mt-1.5 flex-shrink-0"></span>
                    <h4 class="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 leading-snug">{{ exp.cargo }}</h4>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 text-xs md:text-sm sm:text-right flex-shrink-0 pl-8 sm:pl-0">
                    <div>{{ exp.periodo }}</div>
                    <div class="text-xs">{{ formatDuration(exp.inicio, exp.fim) }}</div>
                  </div>
                </div>
                <div class="text-slate-600 dark:text-slate-300 font-medium mb-3 text-sm md:text-base pl-4">{{ exp.empresa }}</div>
                <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed pl-4">{{ exp.descricao }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card de Educação -->
        <div class="animate-fade-in delay-400">
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('educacaoTitulo') }}</h3>
            <div class="space-y-6 md:space-y-8">
              <div v-for="edu in educacao" :key="edu.id"
                class="border-l-4 border-slate-500/60 pl-4 md:pl-6"
              >
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                  <div class="flex items-start gap-2">
                    <span class="inline-block w-2 h-2 rounded-full bg-slate-500/80 mt-1.5 flex-shrink-0"></span>
                    <h4 class="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 leading-snug">{{ edu.curso }}</h4>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 text-xs md:text-sm flex-shrink-0 pl-8 sm:pl-0">{{ edu.periodo }}</div>
                </div>
                <div class="text-slate-600 dark:text-slate-300 font-medium mb-3 text-sm md:text-base pl-4">{{ edu.instituicao }}</div>
                <div class="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed space-y-2 pl-4">
                  <p v-for="(paragrafo, index) in edu.descricao" :key="index">{{ paragrafo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção final minimalista -->
      <!-- <div class="mt-16 text-center animate-fade-in delay-600">
        <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Minha Filosofia</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            "Gosto de unir desenvolvimento com boa comunicação, e acredito que entender a necessidade do cliente é essencial para entregar um sistema funcional, intuitivo e estável."
          </p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { t, lang } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 })

const formatDuration = (inicio, fim) => {
  const parseYm = (s) => {
    if (!s) return null
    const [y, m] = s.split('-').map(Number)
    return new Date(y, m - 1, 1)
  }
  const start = typeof inicio === 'string' ? parseYm(inicio) : inicio
  const end = typeof fim === 'string' ? parseYm(fim) : fim || new Date()
  if (!start || !end) return '—'
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (months < 0) months = 0
  const years = Math.floor(months / 12)
  const rem = months % 12
  const isEn = lang.value === 'en'
  const yLabel = years === 1 ? (isEn ? 'year' : 'ano') : (isEn ? 'years' : 'anos')
  const mLabel = rem === 1 ? (isEn ? 'month' : 'mês') : (isEn ? 'months' : 'meses')
  if (years > 0 && rem > 0) return `${years} ${yLabel} ${isEn ? 'and' : 'e'} ${rem} ${mLabel}`
  if (years > 0) return `${years} ${yLabel}`
  if (rem > 0) return `${rem} ${mLabel}`
  return isEn ? 'less than 1 month' : 'menos de 1 mês'
}

const experiencias = computed(() => {
  lang.value // dependência reativa
  return [
    {
      id: 1,
      cargo: t('exp1Cargo'),
      empresa: t('exp1Empresa'),
      periodo: t('exp1Periodo'),
      inicio: '2024-02',
      fim: null,
      descricao: t('exp1Desc')
    },
    {
      id: 2,
      cargo: t('exp2Cargo'),
      empresa: t('exp2Empresa'),
      periodo: t('exp2Periodo'),
      inicio: '2022-08',
      fim: '2024-02',
      descricao: t('exp2Desc')
    }
  ]
})

const educacao = computed(() => {
  lang.value // dependência reativa
  return [
    {
      id: 1,
      curso: t('edu1Curso'),
      instituicao: t('edu1Instituicao'),
      periodo: t('edu1Periodo'),
      descricao: [t('edu1Desc1')]
    }
  ]
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}

.animate-fade-in {
  animation: fade-in 0.8s both;
}

.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}

.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}

.animate-fade-in.delay-600 {
  animation-delay: 0.6s;
}

/* Efeito de hover nos cards */
.bg-white\/70:hover {
  transform: translateY(-2px);
}

/* Animação suave nos elementos gradiente */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

.animate-pulse-slow {
  animation: pulse-slow 3s infinite;
}

/* Animações de scroll */
section {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}

section.animate-section-visible {
  opacity: 1;
}

section .animate-section-content {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

section.animate-section-visible .animate-section-content {
  opacity: 1;
  transform: translateY(0);
}
</style> 