<template>
  <section id="sobre" class="relative py-24 px-4 overflow-hidden">
    <!-- Background decorativo -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
    <div class="absolute top-0 left-0 w-full h-full opacity-30">
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <!-- Título com design melhorado -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block relative">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
            Sobre mim
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto font-medium">
          Conheça um pouco mais sobre minha jornada e paixão pelo desenvolvimento
        </p>
      </div>

      <!-- Conteúdo principal com layout em grid -->
      <div class="grid lg:grid-cols-1 gap-12 items-center">
        <!-- Conteúdo unificado -->
        <div class="animate-fade-in delay-200">
          <!-- Card único com todo o conteúdo -->
          <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
            <div class="space-y-6">
              <!-- Apresentação -->
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Olá, eu sou Mário!</h3>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Desenvolvedor full stack com foco em tecnologias modernas e apaixonado por criar soluções completas, do backend ao frontend que realmente fazem a diferença no dia a dia das pessoas.
                </p>
              </div>

              <!-- Experiência profissional -->
              <div>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Atualmente trabalho com <span class="font-semibold text-blue-600 dark:text-blue-400">Vue.js, React, Node.js, integrações de APIs</span> desenvolvendo e dando manutenção em sistemas web.
                  Também sou responsável pelo suporte técnico aos clientes, ajudando com melhorias e alterações no banco de dados.
                </p>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção final destacada -->
      <div class="mt-16 text-center animate-fade-in delay-600">
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <h3 class="text-2xl font-bold mb-4">🎯 Minha Filosofia</h3>
          <p class="text-lg leading-relaxed max-w-3xl mx-auto">
            "Gosto de unir desenvolvimento com boa comunicação, e acredito que entender a necessidade do cliente é essencial para entregar um sistema funcional, intuitivo e estável."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica necessária
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
</style> 