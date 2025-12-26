<template>
  <section id="contato" class="relative py-24 px-4 overflow-hidden">
    <!-- Fundo neutro global; sem gradiente ou glows locais -->

    <div class="relative max-w-4xl mx-auto">
      <!-- Título melhorado -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block relative mb-6">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative z-10">
            {{ t('meContate') }}
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 md:w-36 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 rounded-full"></div>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          {{ t('formulario') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Informações de contato -->
        <div class="animate-fade-in delay-200">
          <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('meContate') }}!</h3>
            
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:netomario.121@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">
                    netomario.121@gmail.com
                  </a>
                </div>
              </div>

              <!-- LinkedIn -->
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/m%C3%A1rio-gomes-7b59b71b9/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">
                    Mário Gomes
                  </a>
                </div>
              </div>

              <!-- GitHub -->
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">GitHub</p>
                  <a href="https://github.com/mglucena121" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">
                    @mglucena121
                  </a>
                </div>
              </div>
            </div>

            <!-- <div class="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                <span class="font-semibold text-blue-600 dark:text-blue-400">💡 Tip:</span> 
                I respond quickly! Usually within 24 hours.
              </p>
            </div> -->
          </div>
        </div>

        <!-- Formulário de contato -->
        <div class="animate-fade-in delay-400">
          <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie uma mensagem</h3>
            
            <!-- Mensagem de sucesso -->
            <div v-if="showSuccess" class="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <p class="text-green-700 dark:text-green-300 font-medium">Mensagem enviada com sucesso! Obrigado pelo contato.</p>
              </div>
            </div>

            <!-- Mensagem de erro -->
            <div v-if="showError" class="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <p class="text-red-700 dark:text-red-300 font-medium">Erro ao enviar mensagem. Tente novamente.</p>
              </div>
            </div>

            <form @submit.prevent="sendEmail" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nome *</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-600 transition-all duration-200"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-600 transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Assunto</label>
                <input 
                  v-model="form.subject"
                  type="text"
                  class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-600 transition-all duration-200"
                  placeholder="Sobre o que você gostaria de falar?"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Mensagem *</label>
                <textarea 
                  v-model="form.message"
                  rows="5" 
                  required
                  class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-600 transition-all duration-200 resize-none"
                  placeholder="Descreva seu projeto, ideia ou como posso ajudá-lo..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isLoading"
                class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span v-if="!isLoading">Enviar Mensagem</span>
                <span v-else>Enviando...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

// Estado do formulário
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Estados de controle
const isLoading = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

// Função para enviar email usando FormSubmit
const sendEmail = async () => {
  isLoading.value = true
  showSuccess.value = false
  showError.value = false

  try {
    // Configuração do FormSubmit
    // IMPORTANTE: Substitua 'seu-email@gmail.com' pelo seu email real
    const FORMSUBMIT_URL = 'https://formsubmit.co/netomario.121@gmail.com'
    
    // Dados do formulário para envio
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('subject', form.subject || 'Contato do Portfolio')
    formData.append('message', form.message)
    
    // Configurações extras do FormSubmit
    formData.append('_subject', `Portfolio - ${form.subject || 'Nova mensagem'}`)
    formData.append('_template', 'table') // Template de email mais bonito
    formData.append('_captcha', 'false') // Desabilita captcha
    formData.append('_next', window.location.href) // Redirect após envio (opcional)

    // Envio do email via FormSubmit
    const response = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      // Resetar formulário
      Object.keys(form).forEach(key => form[key] = '')
      showSuccess.value = true
      
      // Ocultar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    } else {
      throw new Error('Erro no envio')
    }

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    showError.value = true
    
    // Ocultar mensagem de erro após 5 segundos
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isLoading.value = false
  }
}
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

/* Efeitos de foco nos inputs */
input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Animação do botão */
button:hover:not(:disabled) {
  transform: translateY(-2px);
}
</style> 