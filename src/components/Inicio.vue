<template>
  <section id="inicio" class="relative flex flex-col items-center justify-center min-h-screen pt-20 pb-10 text-center overflow-hidden">
    <!-- Background com gradiente animado -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
    
    <!-- Elementos decorativos flutuantes -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-20 w-20 h-20 bg-blue-200/50 dark:bg-blue-800/30 rounded-full blur-2xl animate-float-slow"></div>
      <div class="absolute top-40 right-32 w-16 h-16 bg-purple-200/50 dark:bg-purple-800/30 rounded-full blur-2xl animate-float-slow-reverse"></div>
      <div class="absolute bottom-32 left-1/4 w-24 h-24 bg-pink-200/50 dark:bg-pink-800/30 rounded-full blur-2xl animate-float-slow"></div>
      <div class="absolute bottom-20 right-20 w-12 h-12 bg-yellow-200/50 dark:bg-yellow-800/30 rounded-full blur-2xl animate-float-slow-reverse"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4">
      <!-- Título principal melhorado -->
      <div class="animate-fade-in">
        <div class="mb-6">
          <span class="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700 mb-6">
            👋 Bem-vindo ao meu mundo digital
          </span>
        </div>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Olá, eu sou 
          <span class="relative inline-block">
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Mário Gomes
            </span>
            <div class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30"></div>
          </span>
        </h1>
      </div>

      <!-- Subtítulo com animação -->
      <div class="animate-fade-in delay-200 mb-8">
        <p class="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-4">
          <span class="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Desenvolvedor Full Stack
          </span>
        </p>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Criando experiências digitais incríveis com código limpo e design moderno
        </p>
      </div>

      <!-- Cards de destaque -->
      <div class="animate-fade-in delay-400 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div class="text-3xl mb-3">🚀</div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">Código otimizado e eficiente</p>
        </div>
        
        <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div class="text-3xl mb-3">🎨</div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">Interfaces modernas e intuitivas</p>
        </div>
        
        <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div class="text-3xl mb-3">⚡</div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Agilidade</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">Desenvolvimento rápido e eficaz</p>
        </div>
      </div>

      <!-- Botão de call-to-action -->
      <div class="animate-fade-in delay-600">
        <button 
          @click="scrollToContact"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
          <span class="mr-2">Vamos conversar</span>
          <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>

      <!-- Indicador de scroll -->
      <div class="animate-fade-in delay-800 mt-16">
        <div class="flex flex-col items-center text-gray-500 dark:text-gray-400">
          <span class="text-sm mb-2 font-medium">Role para conhecer mais</span>
          <div class="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-slow-reverse {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(20px) rotate(-180deg); }
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