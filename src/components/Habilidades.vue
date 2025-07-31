<template>
  <section id="habilidades" class="relative py-24 px-4 overflow-hidden">
    <!-- Background com gradiente -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900"></div>
    
    <!-- Elementos decorativos -->
    <div class="absolute inset-0 pointer-events-none opacity-30">
      <div class="absolute top-32 left-16 w-24 h-24 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800/30 dark:to-purple-800/30 rounded-full blur-2xl animate-pulse-slow"></div>
      <div class="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800/30 dark:to-blue-800/30 rounded-full blur-2xl animate-pulse-slow-reverse"></div>
      <div class="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-pink-200 to-orange-200 dark:from-pink-800/30 dark:to-orange-800/30 rounded-full blur-2xl animate-float"></div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <!-- Título melhorado -->
      <div class="text-center mb-20">
        <div class="inline-block relative mb-6">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative z-10">
            Minhas Habilidades
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          Tecnologias e ferramentas que domino para criar soluções web modernas, eficientes e escaláveis
        </p>
      </div>
      
      <!-- Categorias de habilidades -->
      <div class="space-y-16">
        <!-- Frontend -->
        <div class="animate-fade-in">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
              <span class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                🎨
              </span>
              Frontend Development
            </h3>
            <p class="text-gray-600 dark:text-gray-400">Criando interfaces incríveis e responsivas</p>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="skill in frontendSkills" :key="skill.nome" 
                 class="skill-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-white/50 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-3 hover:scale-105">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-blue-100 dark:border-blue-800/50">
                  <Icon :icon="skill.icone" class="text-3xl" />
                </div>
                <h4 class="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ skill.nome }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="animate-fade-in delay-200">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
              <span class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                ⚙️
              </span>
              Backend Development
            </h3>
            <p class="text-gray-600 dark:text-gray-400">Construindo APIs robustas e escaláveis</p>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="skill in backendSkills" :key="skill.nome" 
                 class="skill-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-white/50 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-3 hover:scale-105">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-green-100 dark:border-green-800/50">
                  <Icon :icon="skill.icone" class="text-3xl" />
                </div>
                <h4 class="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {{ skill.nome }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Ferramentas -->
        <div class="animate-fade-in delay-400">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
              <span class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                🛠️
              </span>
              Ferramentas
            </h3>
            <p class="text-gray-600 dark:text-gray-400">Ferramentas essenciais do meu dia a dia</p>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="skill in toolsSkills" :key="skill.nome" 
                 class="skill-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-white/50 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-3 hover:scale-105">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-orange-100 dark:border-orange-800/50">
                  <Icon :icon="skill.icone" class="text-3xl" />
                </div>
                <h4 class="font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {{ skill.nome }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção de certificações ou cursos -->
      <div class="mt-20 text-center animate-fade-in delay-600">
        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <h3 class="text-2xl font-bold mb-4">🎯 Sempre Aprendendo</h3>
          <p class="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Mantenho-me sempre atualizado com as últimas tecnologias e melhores práticas do mercado
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const frontendSkills = [
  { nome: 'Vue.js', icone: 'logos:vue' },
  { nome: 'React', icone: 'logos:react' },
  { nome: 'JavaScript', icone: 'logos:javascript' },
  { nome: 'HTML5', icone: 'logos:html-5' },
  { nome: 'CSS3', icone: 'logos:css-3' },
  { nome: 'Tailwind CSS', icone: 'logos:tailwindcss-icon' },
]

const backendSkills = [
  { nome: 'Node.js', icone: 'logos:nodejs-icon' },
  { nome: 'Express', icone: 'simple-icons:express' },
  { nome: 'LoopBack', icone: 'simple-icons:loopback' },
  { nome: 'MongoDB', icone: 'logos:mongodb-icon' },
  { nome: 'APIs REST', icone: 'material-symbols:api' },
]

const toolsSkills = [
  { nome: 'Git', icone: 'logos:git-icon' },
  { nome: 'Postman', icone: 'logos:postman-icon' },
]
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

@keyframes pulse-slow-reverse {
  0%, 100% { opacity: 0.6; transform: scale(1.1); }
  50% { opacity: 0.3; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
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

.animate-pulse-slow {
  animation: pulse-slow 4s infinite;
}

.animate-pulse-slow-reverse {
  animation: pulse-slow-reverse 5s infinite;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(243, 244, 246, 0.9) 100%);
}

.dark .skill-card:hover {
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.9) 0%, rgba(75, 85, 99, 0.9) 100%);
}
</style> 