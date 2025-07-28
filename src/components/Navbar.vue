<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="w-full px-8 lg:px-12 flex items-center h-16">
      <div class="flex items-center gap-2">
        <span class="font-bold text-xl text-gray-900 dark:text-white transition-all duration-300">
          {{ scrolled ? 'Mário Gomes' : 'MeuPortfólio' }}
        </span>
      </div>
      <div class="flex-1"></div>
      <div class="hidden md:flex gap-8 mr-4">
        <a v-for="item in navItems" :key="item.id" :href="item.href" @click.prevent="scrollToSection(item.id)" :class="[activeSection === item.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300', 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200']" class="cursor-pointer px-2 py-1">
          {{ item.label }}
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
          <Icon icon="mdi:linkedin" class="text-xl text-blue-600 group-hover:text-blue-700 transition-colors" />
        </a>
        <!-- Botão de tema -->
        <div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
        <button @click="toggleDark" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <Icon v-if="isDark" icon="mdi:white-balance-sunny" class="text-xl text-yellow-500" />
          <Icon v-else icon="mdi:moon-waning-crescent" class="text-xl text-gray-700 dark:text-gray-300" />
        </button>
        <button @click="menuOpen = !menuOpen" class="md:hidden p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors flex items-center justify-center w-10 h-10">
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
        <a v-for="item in navItems" :key="item.id" :href="item.href" @click.prevent="scrollToSection(item.id); menuOpen = false" :class="[activeSection === item.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300', 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200']" class="cursor-pointer px-2 py-1">
          {{ item.label }}
        </a>
        <!-- Links sociais no menu mobile -->
        <div class="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" 
             class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Icon icon="mdi:github" class="text-xl text-gray-700 dark:text-gray-300" />
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" 
             class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Icon icon="mdi:linkedin" class="text-xl text-blue-600" />
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'inicio', label: 'Início', href: '#inicio' },
  { id: 'sobre', label: 'Sobre mim', href: '#sobre' },
  { id: 'experiencias', label: 'Experiências', href: '#experiencias' },
  { id: 'projetos', label: 'Projetos', href: '#projetos' },
  { id: 'habilidades', label: 'Habilidades', href: '#habilidades' },
  { id: 'contato', label: 'Contato', href: '#contato' },
]

const menuOpen = ref(false)
const isDark = ref(false)
const activeSection = ref('inicio')
const scrolled = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function onScroll() {
  const scrollY = window.scrollY
  
  // Atualiza o estado de scroll (muda o nome quando rolar mais de 50px)
  scrolled.value = scrollY > 300
  
  // Mantém a funcionalidade existente de seção ativa
  const offsets = navItems.map(item => {
    const el = document.getElementById(item.id)
    if (!el) return { id: item.id, top: Infinity }
    return { id: item.id, top: el.getBoundingClientRect().top }
  })
  const visible = offsets.filter(o => o.top <= 80)
  if (visible.length) {
    activeSection.value = visible[visible.length - 1].id
  } else {
    activeSection.value = navItems[0].id
  }
}

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark.value)
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