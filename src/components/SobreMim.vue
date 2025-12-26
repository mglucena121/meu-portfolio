<template>
  <section id="sobre" class="relative py-8 md:py-12 px-4 overflow-hidden">
    <!-- Sem glows locais: fundo 100% uniforme -->

    <div class="relative max-w-6xl mx-auto">
      <!-- Título minimalista -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block relative">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
            {{ t('sobreMim') }}
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 md:w-36 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 rounded-full"></div>
        </div>
        <!-- <p class="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto font-normal">
          {{ t('sobreDescricao') }}
        </p> -->
      </div>

      <!-- Conteúdo principal com layout em grid -->
      <div class="grid lg:grid-cols-1 gap-12 items-center">
        <!-- Conteúdo unificado -->
        <div class="animate-fade-in delay-200">
          <!-- Card único com todo o conteúdo -->
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300">
            <div class="space-y-6">
              <!-- Apresentação -->
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t('sobreTexto') }}</h3>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {{ t('sobreDescricao') }}
                </p>
              </div>

              <!-- Experiência profissional -->
              <div>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Tenho Experiências com <span class="font-semibold text-gray-800 dark:text-gray-200">Vue.js, React, Node.js, integrações de APIs, LoopBack, Express, MongoDB, Tailwind CSS</span> desenvolvendo e dando manutenção em sistemas web.
                </p>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Meu objetivo é criar soluções que otimizem processos, aumentem a produtividade e gerem resultados reais para empresas e pessoas, enquanto sigo evoluindo profissionalmente através de novos desafios.
                </p>              
              </div>

              <!-- Experiências dentro do mesmo card -->
              <div class="pt-6 border-t border-gray-200 dark:border-gray-700/50">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">{{ t('minhasExperiencias') }}</h3>
                <div class="flex flex-col gap-6">
                  <div v-for="exp in experiencias" :key="exp.id"
                    class="border-l-4 border-slate-500/60 pl-4"
                  >
                    <div class="flex items-start justify-between gap-4 mb-1">
                      <div class="flex items-center gap-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-slate-500/80"></span>
                        <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ exp.cargo }}</div>
                      </div>
                      <div class="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">{{ exp.periodo }} · {{ formatDuration(exp.inicio, exp.fim) }}</div>
                    </div>
                    <div class="text-slate-600 dark:text-slate-300 font-medium">{{ exp.empresa }}</div>
                    <div class="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{{ exp.descricao }}</div>
                  </div>
                </div>
              </div>

              <!-- Educação dentro do mesmo card -->
              <div class="pt-6 border-t border-gray-200 dark:border-gray-700/50">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Educação</h3>
                <div class="flex flex-col gap-6">
                  <div v-for="edu in educacao" :key="edu.id"
                    class="border-l-4 border-slate-500/60 pl-4"
                  >
                    <div class="flex items-start justify-between gap-4 mb-1">
                      <div class="flex items-center gap-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-slate-500/80"></span>
                        <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ edu.curso }}</div>
                      </div>
                      <div class="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">{{ edu.periodo }}</div>
                    </div>
                    <div class="text-slate-600 dark:text-slate-300 font-medium">{{ edu.instituicao }}</div>
                    <div class="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed space-y-3">
                      <p v-for="(paragrafo, index) in edu.descricao" :key="index">{{ paragrafo }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção final minimalista -->
      <!-- <div class="mt-16 text-center animate-fade-in delay-600">
        <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Minha Filosofia</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            "Gosto de unir desenvolvimento com boa comunicação, e acredito que entender a necessidade do cliente é essencial para entregar um sistema funcional, intuitivo e estável."
          </p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

// Util para calcular duração em anos e meses (pt-BR)
const formatDuration = (inicio, fim) => {
  const parseYm = (s) => {
    if (!s) return null
    const parts = s.split('-')
    const y = Number(parts[0])
    const m = Number(parts[1]) - 1
    return new Date(y, m, 1)
  }
  const start = typeof inicio === 'string' ? parseYm(inicio) : inicio
  const endRaw = typeof fim === 'string' ? parseYm(fim) : fim
  const now = new Date()
  const end = endRaw || new Date(now.getFullYear(), now.getMonth(), 1)
  if (!start || !end) return '—'
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (months < 0) months = 0
  const anos = Math.floor(months / 12)
  const meses = months % 12
  const pAno = anos === 1 ? 'ano' : 'anos'
  const pMes = meses === 1 ? 'mês' : 'meses'
  if (anos > 0 && meses > 0) return `${anos} ${pAno} e ${meses} ${pMes}`
  if (anos > 0) return `${anos} ${pAno}`
  if (meses > 0) return `${meses} ${pMes}`
  return 'menos de 1 mês'
}

const experiencias = [
  {
    id: 1,
    cargo: 'Desenvolvedor Júnior | Suporte Técnico manipulação de dados em banco',
    empresa: 'Intelite Tecnologia',
    periodo: 'Fev 2024 - Atual',
    inicio: '2024-02',
    fim: null,
    descricao: 'Atuo como desenvolvedor full stack com foco em aplicações web modernas, utilizando Vue.js no front-end, LoopBack e node no back-end. Também sou responsável por dar suporte técnico aos clientes e realizar manutenções e alterações no banco de dados. Trabalho com tecnologias como VUE, REACT, TAILWIND, HTML5, CSS3, JAVASCRIPT, NODEJS, APIs REST e MongoDB, conciliando desenvolvimento com atendimento técnico eficiente.'
  },
  {
    id: 2,
    cargo: 'Suporte Técnico',
    empresa: 'Intelite Tecnologia',
    periodo: 'Ago 2022 - Fev 2024',
    inicio: '2022-08',
    fim: '2024-02',
    descricao: 'Suporte técnico de um software de autoatendimento utilizado por empresas em todo o Brasil. Sou responsável pela instalação, manutenção e otimização do sistema em dispositivos Android TV Box, além da configuração de roteadores para garantir conectividade estável e eficiente.'
  }
]

const educacao = [
  {
    id: 1,
    curso: 'Sistemas Para Internet (SPI)',
    instituicao: 'Centro Universitário de João Pessoa (UNIPÊ)',
    periodo: '2022 - 2024',
    descricao: [
      'Formação completa em Sistemas para Internet com foco em desenvolvimento de software e aplicações web modernas.'
    ]
  }
]
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
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

/* Efeito de hover nos cards */
.bg-white\/70:hover {
  transform: translateY(-2px);
}

/* Animação suave nos elementos gradiente */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

.animate-pulse-slow {
  animation: pulse-slow 3s infinite;
}
</style> 