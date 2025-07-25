<template>
  <section id="sobre" class="max-w-4xl mx-auto py-24 px-4 text-center animate-fade-in">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Sobre mim</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      Olá! Me chamo Mário Gomes, sou desenvolvedor web com foco em tecnologias modernas e apaixonado por criar soluções que realmente fazem a diferença no dia a dia das pessoas.
    </p>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      Atualmente, atuo como desenvolvedor web júnior, trabalhando com Vue.js no front-end e LoopBack no back-end, onde desenvolvo e dou manutenção em sistemas web. Além disso, também sou responsável pelo suporte técnico aos clientes, ajudando a resolver problemas, implementar melhorias e realizar alterações diretamente no banco de dados quando necessário.
    </p>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      Tenho experiência prática com VUE, REACT, HTML5, CSS3, TAILWIND JavaScript, APIs REST e manipulação de dados em MongoDB. Estou sempre buscando evoluir como profissional, estudando novas ferramentas, boas práticas e aprimorando minha forma de escrever código limpo e eficiente.
    </p>
    <p class="text-lg text-gray-700 dark:text-gray-300">
      Gosto de unir desenvolvimento com boa comunicação, e acredito que entender a necessidade do cliente é essencial para entregar um sistema funcional, intuitivo e estável.
    </p>
  </section>
</template>

<script setup>
// Nenhuma lógica necessária
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}
.animate-fade-in {
  animation: fade-in 0.8s both;
}
</style> 