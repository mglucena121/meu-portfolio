import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-cubic',
})

const app = createApp(App)
app.component('Icon', Icon)
app.mount('#app')
