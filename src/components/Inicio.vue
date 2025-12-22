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
        <div class="w-12 h-0.5 bg-gray-400 dark:bg-gray-600 mx-auto mt-6"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
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