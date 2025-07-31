<template>
  <section id="projetos" class="relative py-24 px-4 overflow-hidden">
    <!-- Background com gradiente -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
    
    <!-- Elementos decorativos -->
    <div class="absolute inset-0 pointer-events-none opacity-40">
      <div class="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800/30 dark:to-pink-800/30 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-800/30 dark:to-cyan-800/30 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-6xl mx-auto animate-fade-in">
      <!-- Título melhorado -->
      <div class="text-center mb-16">
        <div class="inline-block relative mb-6">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative z-10">
            Meus Projetos
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          Alguns dos trabalhos que desenvolvi com paixão e dedicação
        </p>
      </div>

      <!-- Grid de projetos melhorado -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(projeto, index) in projetos" :key="projeto.titulo" 
             class="project-card group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:scale-105"
             :style="{ animationDelay: `${index * 200}ms` }">
          
          <!-- Background do card com gradiente -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm"></div>
          
          <!-- Borda animada -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full h-full bg-white dark:bg-gray-800 rounded-2xl"></div>
          </div>
          
          <div class="relative z-10 p-0">
            <!-- Imagem com overlay -->
            <div class="relative overflow-hidden rounded-t-2xl">
              <img :src="projeto.imagem" :alt="projeto.titulo" 
                   class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              
              <!-- Overlay com gradiente -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Ícone de link no hover -->
              <div class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>
            </div>
            
            <!-- Conteúdo do card -->
            <div class="p-6">
              <!-- Badge de tecnologia -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in projeto.tecnologias" :key="tech"
                      class="px-3 py-1 text-xs font-semibold rounded-full"
                      :class="getTechBadgeStyle(tech)">
                  {{ tech }}
                </span>
              </div>
              
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {{ projeto.titulo }}
              </h3>
              
              <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {{ projeto.descricao }}
              </p>
              
              <!-- Botões de ação -->
              <div class="flex gap-3">
                <a :href="projeto.link" target="_blank" 
                   class="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  Ver Projeto
                </a>
                
                <a :href="projeto.github" target="_blank" 
                   class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 text-sm">
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
const projetos = [
  {
    titulo: 'E-commerce Moderno',
    descricao: 'Plataforma completa de e-commerce com carrinho, pagamentos e dashboard administrativo.',
    imagem: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    link: '#',
    github: '#',
    tecnologias: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    titulo: 'Dashboard Analytics',
    descricao: 'Interface moderna para análise de dados com gráficos interativos e relatórios em tempo real.',
    imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    link: '#',
    github: '#',
    tecnologias: ['React', 'Chart.js', 'API REST']
  },
  {
    titulo: 'App Mobile Fitness',
    descricao: 'Aplicativo para acompanhamento de exercícios e metas de saúde com sincronização na nuvem.',
    imagem: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    link: '#',
    github: '#',
    tecnologias: ['React Native', 'Firebase', 'TypeScript']
  },
]

function getTechBadgeStyle(tech) {
  const styles = {
    'Vue.js': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'React': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Node.js': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'MongoDB': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Chart.js': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'API REST': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'React Native': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
    'Firebase': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    'TypeScript': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300'
  }
  return styles[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
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
</style> 