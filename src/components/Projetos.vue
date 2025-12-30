<template>
  <section id="projetos" ref="elementRef" class="relative py-24 px-4 overflow-hidden" :class="{ 'animate-section-visible': isVisible }">
    
    <!-- Modal de detalhes do projeto -->
    <Transition name="modal">
      <div v-if="projetoSelecionado" @click="fecharModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div @click.stop class="relative bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl">
          <!-- Botão fechar melhorado -->
          <button @click="fecharModal" class="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 shadow-lg transition-all hover:scale-110">
            <svg class="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Container com scroll -->
          <div class="overflow-y-auto max-h-[85vh] custom-scrollbar">
            <!-- Carrossel de imagens -->
            <div class="relative w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center cursor-zoom-in group" style="max-height: 45vh;" @click="toggleImagemAmpliada">
              <!-- Imagem atual -->
              <Transition name="fade" mode="out-in">
                <img :key="imagemAtualIndex" :src="imagemAtual()" :alt="projetoSelecionado.titulo"
                     class="max-h-[45vh] w-auto h-auto transition-transform duration-300"
                     :class="modalImageFit === 'contain' ? 'object-contain' : 'object-cover'" />
              </Transition>
              
              <!-- Ícone de zoom que aparece no hover -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div class="bg-white/90 dark:bg-gray-900/90 rounded-full p-3 shadow-lg">
                  <svg class="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                  </svg>
                </div>
              </div>

              <!-- Botões de navegação (aparecem se tem múltiplas imagens) -->
              <template v-if="temMultiplasImagens(projetoSelecionado)">
                <!-- Botão anterior -->
                <button @click.stop="imagemAnterior" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 shadow-lg transition-all hover:scale-110 z-10">
                  <svg class="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>

                <!-- Botão próximo -->
                <button @click.stop="proximaImagem" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 shadow-lg transition-all hover:scale-110 z-10">
                  <svg class="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>

                <!-- Indicadores de posição (dots) -->
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  <button v-for="(img, index) in projetoSelecionado.imagem" :key="index"
                          @click.stop="irParaImagem(index)"
                          class="w-2 h-2 rounded-full transition-all duration-300"
                          :class="index === imagemAtualIndex 
                            ? 'bg-white w-6' 
                            : 'bg-white/50 hover:bg-white/75'">
                  </button>
                </div>

                <!-- Contador de imagens -->
                <div class="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 text-white text-sm font-semibold">
                  {{ imagemAtualIndex + 1 }} / {{ projetoSelecionado.imagem.length }}
                </div>
              </template>
            </div>

            <!-- Conteúdo separado -->
            <div class="p-6 md:p-8 lg:p-10">
              <!-- Título -->
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {{ projetoSelecionado.titulo }}
              </h2>

              <!-- Tecnologias -->
              <div class="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <span v-for="tech in projetoSelecionado.tecnologias" :key="tech"
                      class="px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  {{ tech }}
                </span>
              </div>

              <!-- Descrição completa em parágrafos -->
              <div class="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                <p v-for="(paragrafo, index) in projetoSelecionado.descricao" :key="index" class="text-base md:text-lg">
                  {{ paragrafo }}
                </p>
              </div>

              <!-- Botões de ação -->
              <div class="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a :href="projetoSelecionado.github" target="_blank" 
                   class="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:shadow-lg hover:-translate-y-0.5">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Ver no GitHub
                </a>
                <a v-if="projetoSelecionado.link && projetoSelecionado.link !== '#'" :href="projetoSelecionado.link" target="_blank"
                   class="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Ver Demo ao Vivo
                </a>
                <button @click="fecharModal"
                   class="sm:w-auto px-6 py-3.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Lightbox para imagem ampliada (com navegação) -->
    <Transition name="lightbox">
      <div v-if="imagemAmpliada && projetoSelecionado" @click="toggleImagemAmpliada" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm cursor-zoom-out">
        <button @click.stop="toggleImagemAmpliada" class="absolute top-4 right-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 shadow-lg transition-all hover:scale-110">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <!-- Navegação no lightbox -->
        <template v-if="temMultiplasImagens(projetoSelecionado)">
          <button @click.stop="imagemAnterior" class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 shadow-lg transition-all hover:scale-110 z-20">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button @click.stop="proximaImagem" class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 shadow-lg transition-all hover:scale-110 z-20">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </template>
        
        <Transition name="fade" mode="out-in">
          <img @click.stop :key="imagemAtualIndex" :src="imagemAtual()" :alt="projetoSelecionado.titulo"
               class="max-w-[95vw] max-h-[95vh] object-contain shadow-2xl" />
        </Transition>
      </div>
    </Transition>

    <!-- Sem fundos próprios; usa o fundo global -->

    <div class="relative max-w-6xl mx-auto animate-section-content">
      <!-- Título melhorado -->
      <div class="text-center mb-16">
        <div class="inline-block relative mb-6">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative z-10">
            {{ t('meusProjetos') }}
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 md:w-36 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 rounded-full"></div>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          {{ t('projetosDesc') }}
        </p>
      </div>

      <!-- Grid de projetos melhorado -->
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(projeto, index) in projetos"
          :key="projeto.titulo"
          class="project-card group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:ring-1 hover:ring-blue-400/25 w-full max-w-sm min-h-[520px] flex flex-col"
          :style="{ animationDelay: `${index * 200}ms` }"
        >

          <!-- Fundo neutro do card -->
          <div class="absolute inset-0 bg-white/85 dark:bg-gray-800/85 backdrop-blur-sm rounded-2xl border border-gray-200/60 dark:border-gray-700/50"></div>

          <div class="relative z-10 p-0 flex flex-col h-full">
            <!-- Imagem do card (primeira imagem se for array) -->
            <div class="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" style="aspect-ratio: 16/9;">
              <img :src="primeiraImagem(projeto)" :alt="projeto.titulo"
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

              <!-- Badge de múltiplas imagens -->
              <div v-if="temMultiplasImagens(projeto)" class="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 text-white text-xs font-semibold flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ projeto.imagem.length }}
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Conteúdo do card -->
            <div class="p-6 flex flex-col flex-1">
              <!-- Badge de tecnologia -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in projeto.tecnologias" :key="tech"
                      class="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">
                  {{ tech }}
                </span>
              </div>

              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {{ projeto.titulo }}
              </h3>

              <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                {{ Array.isArray(projeto.descricao) ? projeto.descricao.join(' ') : projeto.descricao }}
              </p>

              <!-- Botões de ação -->
              <div class="flex gap-3 mt-auto">
                <button @click="abrirModal(projeto)"
                   class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-200 text-sm">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  {{ t('verMais') }}
                </button>

                 <a :href="projeto.github" target="_blank" 
                   class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { t } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

const projetoSelecionado = ref(null)
const modalAspectRatio = ref(null)
const modalImageFit = ref('contain') // define se usa object-contain ou object-cover
const imagemAmpliada = ref(false) // Controla o zoom da imagem
const imagemAtualIndex = ref(0) // Índice da imagem atual no carrossel
const autoPlayInterval = ref(null) // Intervalo para autoplay

const abrirModal = (projeto) => {
  projetoSelecionado.value = projeto
  imagemAmpliada.value = false
  imagemAtualIndex.value = 0 // Começa na primeira imagem
  document.body.style.overflow = 'hidden'
  
  // Inicia autoplay
  iniciarAutoPlay()

  // Calcular o aspect ratio da imagem para evitar cortes (sem zoom)
  modalAspectRatio.value = null
  modalImageFit.value = 'contain'
  const img = new Image()
  img.src = Array.isArray(projeto.imagem) ? projeto.imagem[0] : projeto.imagem
  img.onload = () => {
    // Define o aspect-ratio do container como Largura/Altura da imagem
    modalAspectRatio.value = `${img.naturalWidth} / ${img.naturalHeight}`
    modalImageFit.value = img.naturalHeight > img.naturalWidth ? 'contain' : 'cover'
  }
}

const fecharModal = () => {
  projetoSelecionado.value = null
  imagemAmpliada.value = false
  imagemAtualIndex.value = 0
  pararAutoPlay()
  document.body.style.overflow = ''
}

const toggleImagemAmpliada = () => {
  imagemAmpliada.value = !imagemAmpliada.value
}

// Navegação do carrossel
const proximaImagem = () => {
  if (projetoSelecionado.value && Array.isArray(projetoSelecionado.value.imagem)) {
    imagemAtualIndex.value = (imagemAtualIndex.value + 1) % projetoSelecionado.value.imagem.length
    reiniciarAutoPlay()
  }
}

const imagemAnterior = () => {
  if (projetoSelecionado.value && Array.isArray(projetoSelecionado.value.imagem)) {
    imagemAtualIndex.value = imagemAtualIndex.value === 0 
      ? projetoSelecionado.value.imagem.length - 1 
      : imagemAtualIndex.value - 1
    reiniciarAutoPlay()
  }
}

const irParaImagem = (index) => {
  imagemAtualIndex.value = index
  reiniciarAutoPlay()
}

// AutoPlay
const iniciarAutoPlay = () => {
  if (projetoSelecionado.value && Array.isArray(projetoSelecionado.value.imagem) && projetoSelecionado.value.imagem.length > 1) {
    autoPlayInterval.value = setInterval(() => {
      proximaImagem()
    }, 4000) // Muda a cada 4 segundos
  }
}

const pararAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

const reiniciarAutoPlay = () => {
  pararAutoPlay()
  iniciarAutoPlay()
}

// Obter imagem atual
const imagemAtual = () => {
  if (!projetoSelecionado.value) return ''
  if (Array.isArray(projetoSelecionado.value.imagem)) {
    return projetoSelecionado.value.imagem[imagemAtualIndex.value]
  }
  return projetoSelecionado.value.imagem
}

// Obter primeira imagem para o card
const primeiraImagem = (projeto) => {
  if (Array.isArray(projeto.imagem)) {
    return projeto.imagem[0]
  }
  return projeto.imagem
}

// Verificar se tem múltiplas imagens
const temMultiplasImagens = (projeto) => {
  return Array.isArray(projeto.imagem) && projeto.imagem.length > 1
}

// Fechar modal com tecla ESC
const handleKeydown = (e) => {
  if (projetoSelecionado.value) {
    if (e.key === 'Escape') {
      if (imagemAmpliada.value) {
        imagemAmpliada.value = false
      } else {
        fecharModal()
      }
    } else if (e.key === 'ArrowRight') {
      proximaImagem()
    } else if (e.key === 'ArrowLeft') {
      imagemAnterior()
    }
  }
}

// Adicionar/remover listener de teclado
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

// Helper para montar URL de imagens em public/images respeitando BASE_URL
const publicImage = (file) => `${import.meta.env.BASE_URL}images/${file}`

const projetos = [
  {
    titulo: 'E-commerce Moderno',
    descricao: [
      'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamentos integrado e dashboard administrativo.',
      'Sistema desenvolvido com foco em performance e experiência do usuário, incluindo filtros avançados de produtos, sistema de avaliações e controle de estoque em tempo real.',
      'Painel administrativo completo para gerenciamento de produtos, pedidos, clientes e relatórios de vendas.'
    ],
    imagem: [
      publicImage('projeto_m1.png'),
      publicImage('projeto_m1.png'),
      publicImage('projeto_m1.png'),
    ],
    link: '#',
    github: '#',
    tecnologias: ['React', 'Node.js', 'MongoDB Atlas', "Express", "Tailwind CSS", "Swagger"]
  },
  {
    titulo: 'Automação de json para excel',
    descricao: [
      'A aplicação permite ao usuário informar a URL de uma API REST que retorna dados em formato JSON e escolher o local onde o arquivo Excel será salvo.',
      'A partir disso, o sistema realiza o consumo dos dados via requisição HTTP do tipo GET, processa e normaliza as informações recebidas e converte automaticamente os dados para uma planilha Excel (.xlsx).',
      'Durante todo o processo, a interface exibe uma barra de progresso com feedback em tempo real, garantindo uma melhor experiência ao usuário.'
    ],
    imagem: publicImage('Captura de tela 2025-12-29 145009.png'),
    link: '#',
    github: '#',
    tecnologias: ['Python', 'PySide 6', 'API REST', 'Pandas']
  },
  // {
  //   titulo: 'App Mobile Fitness',
  //   descricao: [
  //     'Aplicativo mobile para acompanhamento de exercícios e metas de saúde com sincronização em tempo real na nuvem.',
  //     'Inclui recursos de rastreamento de atividades, definição de metas personalizadas, gráficos de progresso e integração com dispositivos wearables.',
  //     'Sistema de notificações para lembrar usuários de seus treinos e celebrar conquistas alcançadas.'
  //   ],
  //   imagem: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  //   link: '#',
  //   github: '#',
  //   tecnologias: ['React Native', 'Firebase', 'TypeScript']
  // },
]

// Badges neutros; mapeamento de cores removido

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
/* Custom scrollbar para o modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.5);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.7);
}

/* Dark mode scrollbar */
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.5);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(75, 85, 99, 0.7);
}

/* Truncamento de texto com ellipsis */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animações do modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9);
}

/* Animações do lightbox */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-active img,
.lightbox-leave-active img {
  transition: transform 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from img,
.lightbox-leave-to img {
  transform: scale(0.8);
}

/* Cursor customizado */
.cursor-zoom-in {
  cursor: zoom-in;
}

.cursor-zoom-out {
  cursor: zoom-out;
}

/* Animação de fade para transição de imagens */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}

.animate-fade-in {
  animation: fade-in 0.8s both;
}

.animate-fade-in.delay-600 {
  animation-delay: 0.6s;
}

.project-card {
  animation: fadeInUp 0.6s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito de sombra 3D */
.hover\:shadow-3xl:hover {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Animação de bordas gradiente */
@keyframes gradient-border {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.project-card:hover .gradient-border {
  animation: gradient-border 3s ease infinite;
  background-size: 400% 400%;
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