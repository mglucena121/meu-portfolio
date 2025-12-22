<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="w-full px-8 lg:px-12 flex items-center h-16">
      <!-- <div class="flex items-center gap-2">
        <span class="font-bold text-xl text-gray-900 dark:text-white transition-all duration-300">
          {{ scrolled ? 'Mário Gomes' : 'MeuPortfólio' }}
        </span>
      </div> -->
      <div class="flex-1"></div>
      <div class="hidden md:flex gap-8 mr-4">
        <a v-for="item in navItems" :key="item.id" :href="item.href" @click.prevent="scrollToSection(item.id)"
           class="group relative cursor-pointer px-2 py-1"
           :class="[
             activeSection === item.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300',
             'hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
           ]">
          {{ item.label }}
          <span class="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500"
                :class="{ 'scale-x-100': activeSection === item.id }"></span>
        </a>
      </div>
      <div class="flex items-center gap-2">
        <!-- Botões sociais -->
        <a href="https://github.com/mglucena121" target="_blank" rel="noopener noreferrer" 
           class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors group">
          <Icon icon="mdi:github" class="text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/m%C3%A1rio-gomes-7b59b71b9/" target="_blank" rel="noopener noreferrer" 
           class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors group">
          <Icon icon="mdi:linkedin" class="text-xl text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
        </a>
        <!-- Botão de idioma -->
        <div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
        <button @click="toggleLanguage" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold text-sm">
          {{ lang.toUpperCase() }}
        </button>
        <button @click="menuOpen = !menuOpen" class="md:hidden p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors flex items-center justify-center w-10 h-10">
          <span v-if="!menuOpen" class="block w-6 h-6 relative">
            <span class="absolute left-0 top-1 w-6 h-0.5 bg-black dark:bg-white rounded transition-all"></span>
            <span class="absolute left-0 top-3 w-6 h-0.5 bg-black dark:bg-white rounded transition-all"></span>
            <span class="absolute left-0 top-5 w-6 h-0.5 bg-black dark:bg-white rounded transition-all"></span>
          </span>
          <span v-else class="block w-6 h-6 relative">
            <span class="absolute left-0 top-3 w-6 h-0.5 bg-black dark:bg-white rounded rotate-45"></span>
            <span class="absolute left-0 top-3 w-6 h-0.5 bg-black dark:bg-white rounded -rotate-45"></span>
          </span>
        </button>
      </div>
    </div>
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 pb-4 flex flex-col gap-4">
        <a v-for="item in navItems" :key="item.id" :href="item.href" @click.prevent="scrollToSection(item.id); menuOpen = false"
           class="group relative cursor-pointer px-2 py-1"
           :class="[
             activeSection === item.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300',
             'hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
           ]">
          {{ item.label }}
          <span class="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500"
                :class="{ 'scale-x-100': activeSection === item.id }"></span>
        </a>
        <!-- Links sociais no menu mobile -->
        <div class="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" 
             class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Icon icon="mdi:github" class="text-xl text-gray-700 dark:text-gray-300" />
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" 
             class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Icon icon="mdi:linkedin" class="text-xl text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { lang, t, toggleLanguage } = useLanguage()

const navItems = computed(() => [
  { id: 'inicio', label: t('inicio'), href: '#inicio' },
  { id: 'sobre', label: t('sobre'), href: '#sobre' },
  { id: 'habilidades', label: t('habilidades'), href: '#habilidades' },
  { id: 'projetos', label: t('projetos'), href: '#projetos' },  
  { id: 'contato', label: t('contato'), href: '#contato' },
])

const menuOpen = ref(false)
const activeSection = ref('inicio')
const scrolled = ref(false)

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    // Função de scroll suave personalizada
    const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80 // -80 para compensar a navbar fixa
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
      const duration = 600 // duração mais rápida
      
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

function onScroll() {
  const scrollY = window.scrollY
  
  // Atualiza o estado de scroll (muda o nome quando rolar mais de 50px)
  scrolled.value = scrollY > 300
  
  // Detecta a seção ativa com mais precisão
  const sections = navItems.value.map(item => {
    const el = document.getElementById(item.id)
    if (!el) return { id: item.id, top: Infinity, height: 0 }
    const rect = el.getBoundingClientRect()
    return { id: item.id, top: el.offsetTop, height: el.offsetHeight }
  })
  
  // Encontra a seção que está mais visível na tela
  let current = sections[0].id
  for (const section of sections) {
    if (scrollY + 200 >= section.top) {
      current = section.id
    }
  }
  
  activeSection.value = current
}

onMounted(() => {
  // Dark mode sempre ativo
  document.documentElement.classList.add('dark')
  // Carrega idioma salvo ou usa português como padrão
  const savedLang = localStorage.getItem('language') || 'en'
  // Atualizar o lang através do composable seria via ref, mas como estamos usando computed, vamos forçar aqui
  window.dispatchEvent(new CustomEvent('setLanguage', { detail: { lang: savedLang } }))
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 