<template>
  <section id="inicio" class="relative flex flex-col items-center justify-center min-h-screen pt-20 pb-10 text-center overflow-hidden">
    <!-- Sem glows locais: fundo 100% uniforme -->

    <div class="relative z-10 max-w-4xl mx-auto px-4">
      <!-- Título principal profissional -->
      <div class="animate-fade-in">        
        <h2  class="text-3xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight whitespace-nowrap">
          {{ t('olaSouMario') }}
        </h2>
      </div>

      <!-- Subtítulo minimalista -->
      <div class="animate-fade-in delay-200 mb-8">
        <p class="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-normal tracking-wide">
          {{ t('desenvolvedorFullStack') }}
        </p>
        <p class="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('graduadoSistemas') }}
        </p>
      </div>

      <!-- Botões de ação -->
      <div class="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button 
          @click="scrollToProjetos"
          class="group px-8 py-3.5 bg-slate-700 dark:bg-slate-600 text-white rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          <span class="flex items-center gap-2">
            {{ t('verProjetos') }}
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </button>
        <button 
          @click="scrollToContact"
          class="group px-8 py-3.5 bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300 border-2 border-slate-300 dark:border-slate-600 rounded-xl font-medium hover:border-slate-500 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          <span class="flex items-center gap-2">
            {{ t('entrarEmContato') }}
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

function scrollToProjetos() {
  const el = document.getElementById('projetos')
  if (el) {
    const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const duration = 1000
      
      if (timeElapsed < duration) {
        const progress = timeElapsed / duration
        const ease = easeInOutCubic(progress)
        window.scrollTo(0, startPosition + distance * ease)
        requestAnimationFrame(animation)
      } else {
        window.scrollTo(0, targetPosition)
      }
    }

    requestAnimationFrame(animation)
  }
}

function scrollToContact() {
  const el = document.getElementById('contato')
  if (el) {
    // Função de scroll suave personalizada
    const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null

    // Função de easing personalizada (ease-in-out)
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const duration = 1000 // 1 segundo de duração
      
      if (timeElapsed < duration) {
        const progress = timeElapsed / duration
        const ease = easeInOutCubic(progress)
        window.scrollTo(0, startPosition + distance * ease)
        requestAnimationFrame(animation)
      } else {
        window.scrollTo(0, targetPosition)
      }
    }

    requestAnimationFrame(animation)
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes float-slow-reverse {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(15px); }
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

.animate-fade-in.delay-800 {
  animation-delay: 0.8s;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-slow-reverse {
  animation: float-slow-reverse 8s ease-in-out infinite;
}

/* Efeito de sombra 3D */
.hover\:shadow-3xl:hover {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style> 