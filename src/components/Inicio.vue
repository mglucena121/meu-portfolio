<template>
  <section id="inicio" class="relative flex flex-col items-center justify-center min-h-screen py-20 text-center overflow-hidden">
    <!-- Sem glows locais: fundo 100% uniforme -->

    <div class="relative z-10 max-w-4xl mx-auto px-4">
      <!-- Nome como título principal -->
      <div class="animate-fade-in mb-8">        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">
          Mário Gomes
        </h1>
      </div>

      <!-- Cargo/Especialização -->
      <div class="animate-fade-in delay-200 mb-12">
        <h2 class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold tracking-wide mb-6">
          {{ t('desenvolvedorFullStack') }}
        </h2>
        <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {{ t('graduadoSistemas') }}
        </p>
      </div>

      <!-- Botões de ação -->
      <div class="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button 
          @click="scrollToProjetos"
          class="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 min-w-[200px]"
        >
          <span class="flex items-center justify-center gap-2">
            {{ t('verProjetos') }}
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </button>
        <button 
          @click="scrollToContact"
          class="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 active:translate-y-0 min-w-[200px]"
        >
          <span class="flex items-center justify-center gap-2">
            {{ t('entrarEmContato') }}
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      const duration = 800
      
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
      const duration = 800
      
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