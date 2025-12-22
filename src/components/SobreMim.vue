<template>
  <section id="sobre" class="relative py-8 md:py-12 px-4 overflow-hidden">
    <!-- Sem glows locais: fundo 100% uniforme -->

    <div class="relative max-w-6xl mx-auto">
      <!-- Título minimalista -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block relative">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
            {{ t('sobreMim') }}
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto font-normal">
          {{ t('sobreDescricao') }}
        </p>
      </div>

      <!-- Conteúdo principal com layout em grid -->
      <div class="grid lg:grid-cols-1 gap-12 items-center">
        <!-- Conteúdo unificado -->
        <div class="animate-fade-in delay-200">
          <!-- Card único com todo o conteúdo -->
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300">
            <div class="space-y-6">
              <!-- Apresentação -->
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t('sobreTexto') }}</h3>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {{ t('sobreDescricao') }}
                </p>
              </div>

              <!-- Experiência profissional -->
              <div>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Atualmente trabalho com <span class="font-semibold text-gray-800 dark:text-gray-200">Vue.js, React, Node.js, integrações de APIs</span> desenvolvendo e dando manutenção em sistemas web.
                  Também sou responsável pelo suporte técnico aos clientes, ajudando com melhorias e alterações no banco de dados.
                </p>
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
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
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