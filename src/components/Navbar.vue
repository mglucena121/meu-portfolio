<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 w-full">
      <div class="flex items-center gap-2">
        <span class="font-bold text-xl text-gray-900 dark:text-white">MeuPortfólio</span>
      </div>
      <div class="hidden md:flex gap-8">
        <a v-for="item in navItems" :key="item.id" :href="item.href" @click.prevent="scrollToSection(item.id)" :class="[activeSection === item.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300', 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200']" class="cursor-pointer px-2 py-1">
          {{ item.label }}
        </a>
      </div>
      <div class="flex items-center gap-2">
        <button @click="toggleDark" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <span v-if="isDark" class="i-mdi-white-balance-sunny text-xl"></span>
          <span v-else class="i-mdi-moon-waning-crescent text-xl"></span>
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