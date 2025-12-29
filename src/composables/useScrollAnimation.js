import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollAnimation = (options = {}) => {
  const isVisible = ref(false)
  const elementRef = ref(null)
  let observer = null

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options
  }

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // Opcional: parar de observar após a primeira animação
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          isVisible.value = false
        }
      })
    }, defaultOptions)

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
  })

  return {
    elementRef,
    isVisible
  }
}
