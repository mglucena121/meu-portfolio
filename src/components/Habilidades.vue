<template>
  <section id="habilidades" class="py-24 px-4 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Minhas Habilidades</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar soluções web modernas e eficientes
        </p>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.nome" 
          class="skill-card group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex flex-col items-center text-center">
            <!-- Ícone com background circular -->
            <div class="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Icon :icon="skill.icone" class="text-3xl" />
            </div>
            
            <!-- Nome da habilidade -->
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ skill.nome }}
            </h3>
            
            <!-- Categoria -->
            <span class="inline-block px-3 py-1 text-xs font-medium rounded-full"
                  :class="getCategoryStyle(skill.categoria)">
              {{ skill.categoria }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { 
    nome: 'Vue.js', 
    icone: 'logos:vue', 
    categoria: 'Frontend'
  },
  { 
    nome: 'JavaScript', 
    icone: 'logos:javascript', 
    categoria: 'Linguagem'
  },
  { 
    nome: 'Tailwind CSS', 
    icone: 'logos:tailwindcss-icon', 
    categoria: 'Estilo'
  },
  { 
    nome: 'HTML5', 
    icone: 'logos:html-5', 
    categoria: 'Markup'
  },
  { 
    nome: 'CSS3', 
    icone: 'logos:css-3', 
    categoria: 'Estilo'
  },
  { 
    nome: 'Git', 
    icone: 'logos:git-icon', 
    categoria: 'Ferramenta'
  },
  { 
    nome: 'React', 
    icone: 'logos:react', 
    categoria: 'Frontend'
  },
  { 
    nome: 'Node.js', 
    icone: 'logos:nodejs-icon', 
    categoria: 'Backend'
  },
]

function getCategoryStyle(categoria) {
  const styles = {
    'Frontend': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Backend': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Linguagem': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Estilo': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'Markup': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'Ferramenta': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  }
  return styles[categoria] || styles['Ferramenta']
}
</script>

<style scoped>
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
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%);
}

.dark .skill-card:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
}
</style> 