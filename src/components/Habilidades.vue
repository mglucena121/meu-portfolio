<template>
  <section id="habilidades" ref="elementRef" class="relative py-24 px-4 overflow-hidden" :class="{ 'animate-section-visible': isVisible }">
    <!-- Sem fundos próprios; usa o fundo global -->

    <div class="relative max-w-6xl mx-auto animate-section-content">
      <!-- Título melhorado -->
      <div class="text-center mb-20">
        <div class="inline-block relative mb-6">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative z-10">
            {{ t('minhasHabilidades') }}
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 md:w-36 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 rounded-full"></div>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          {{ t('habilidadesDesc') }}
        </p>
      </div>
      
      <!-- Categorias de habilidades -->
      <div class="space-y-16">
        <!-- Frontend -->
        <div class="animate-fade-in">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {{ t('frontend') }}
            </h3>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="skill in frontendSkills" :key="skill.nome" 
                 class="skill-card group bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200/70 dark:border-gray-700/60 transition-all duration-300 hover:-translate-y-2 hover:ring-1 hover:ring-blue-400/25">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 mb-4 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 border border-gray-200 dark:border-gray-600 group-hover:border-blue-300/70 dark:group-hover:border-blue-400/60">
                  <Icon :icon="skill.icone" class="text-3xl text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                </div>
                <h4 class="font-bold text-gray-900 dark:text-white">
                  {{ skill.nome }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="animate-fade-in delay-200">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {{ t('backend') }}
            </h3>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="skill in backendSkills" :key="skill.nome" 
                 class="skill-card group bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200/70 dark:border-gray-700/60 transition-all duration-300 hover:-translate-y-2 hover:ring-1 hover:ring-blue-400/25">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 mb-4 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 border border-gray-200 dark:border-gray-600 group-hover:border-blue-300/70 dark:group-hover:border-blue-400/60">
                  <Icon :icon="skill.icone" class="text-3xl text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                </div>
                <h4 class="font-bold text-gray-900 dark:text-white">
                  {{ skill.nome }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Ferramentas -->
        <div class="animate-fade-in delay-400">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {{ t('ferramentas') }}
            </h3>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="skill in toolsSkills" :key="skill.nome" 
                 class="skill-card group bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200/70 dark:border-gray-700/60 transition-all duration-300 hover:-translate-y-2 hover:ring-1 hover:ring-blue-400/25">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 mb-4 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 border border-gray-200 dark:border-gray-600 group-hover:border-blue-300/70 dark:group-hover:border-blue-400/60">
                  <Icon :icon="skill.icone" class="text-3xl text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                </div>
                <h4 class="font-bold text-gray-900 dark:text-white">
                  {{ skill.nome }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção final opcional neutra -->
      <div class="mt-20 text-center animate-fade-in delay-600">
        <div class="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 text-gray-900 dark:text-gray-100 shadow-lg border border-gray-200/60 dark:border-gray-700/50">
          <h3 class="text-2xl font-bold mb-4">{{ t('sempreAprendendo') }}</h3>
          <p class="text-lg mb-2 opacity-90 max-w-2xl mx-auto">
            {{ t('sempreAprendendoDesc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { t } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const frontendSkills = [
  { nome: 'Vue.js', icone: 'logos:vue' },
  { nome: 'React', icone: 'logos:react' },
  { nome: 'JavaScript', icone: 'logos:javascript' },
  { nome: 'HTML5', icone: 'logos:html-5' },
  { nome: 'CSS3', icone: 'logos:css-3' },
  { nome: 'Tailwind CSS', icone: 'logos:tailwindcss-icon' },
]

const backendSkills = [
  { nome: 'Node.js', icone: 'logos:nodejs-icon' },
  { nome: 'Express', icone: 'simple-icons:express' },
  { nome: 'LoopBack', icone: 'simple-icons:loopback' },
  { nome: 'MongoDB', icone: 'logos:mongodb-icon' },
  { nome: 'APIs REST', icone: 'material-symbols:api' },
]

const toolsSkills = [
  { nome: 'Git', icone: 'logos:git-icon' },
  { nome: 'Postman', icone: 'logos:postman-icon' },
  { nome: 'Swagger', icone: 'logos:swagger' },
]
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

@keyframes pulse-slow-reverse {
  0%, 100% { opacity: 0.6; transform: scale(1.1); }
  50% { opacity: 0.3; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
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

.animate-pulse-slow {
  animation: pulse-slow 4s infinite;
}

.animate-pulse-slow-reverse {
  animation: pulse-slow-reverse 5s infinite;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.skill-card {
  animation: fadeInUp 0.6s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito de hover personalizado */
.skill-card:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(243, 244, 246, 0.9) 100%);
}

.dark .skill-card:hover {
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.9) 0%, rgba(75, 85, 99, 0.9) 100%);
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