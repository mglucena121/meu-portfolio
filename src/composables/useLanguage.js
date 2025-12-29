import { ref, computed } from 'vue'

const initialLang = (() => {
  try {
    const saved = localStorage.getItem('language')
    return saved || 'pt'
  } catch {
    return 'pt'
  }
})()
const lang = ref(initialLang)

export const useLanguage = () => {
  const translations = {
    pt: {
      // Navbar
      inicio: 'Início',
      sobre: 'Sobre mim',
      projetos: 'Projetos',
      habilidades: 'Habilidades',
      contato: 'Contato',
      
      // Inicio
      olaSouMario: 'Mário Gomes',
      desenvolvedorFullStack: 'Desenvolvedor Web full stack',
      graduadoSistemas: 'Graduado em sistemas para Internet.',
      verProjetos: 'Ver Projetos',
      entrarEmContato: 'Entrar em Contato',
      
      // SobreMim
      sobreMim: 'Sobre Mim',
      sobreTexto: 'Olá! Muito prazer!',
      sobreDescricao: 'Sou desenvolvedor web full stack apaixonado por tecnologia e por resolver problemas através de código. Atuo tanto no front-end quanto no back-end, criando aplicações web modernas, funcionais e bem estruturadas.',
      
      // Habilidades
      minhasHabilidades: 'Minhas Habilidades',
      habilidadesDesc: 'Tecnologias e ferramentas que domino.',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      ferramentas: 'Ferramentas',
      sempreAprendendo: 'Sempre Aprendendo',
      sempreAprendendoDesc: 'Evoluindo continuamente com boas práticas e novas ferramentas.',
      
      // Experiencias
      minhasExperiencias: 'Experiências',
      intelite: 'Intelite Tecnologia',
      desenvolvedorFrontend: 'Desenvolvedor Front-end',
      desenvolvedorBackend: 'Desenvolvedor Back-end',
      periodoAte: 'até',
      
      // Projetos
      meusProjetos: 'Meus Projetos',
      projetosDesc: 'Uma seleção dos meus projetos mais relevantes',
      verMais: 'Ver mais',
      
      // Contato
      meContate: 'Entre em contato',
      formulario: 'Envie uma mensagem',
      nome: 'Seu nome',
      email: 'Seu email',
      mensagem: 'Sua mensagem',
      enviar: 'Enviar',
      enviando: 'Enviando...',
      sucesso: 'Mensagem enviada com sucesso!',
      erro: 'Erro ao enviar mensagem',
    },
    en: {
      // Navbar
      inicio: 'Home',
      sobre: 'About',
      projetos: 'Projects',
      habilidades: 'Skills',
      contato: 'Contact',
      
      // Inicio
      olaSouMario: 'Mário Gomes',
      desenvolvedorFullStack: 'Full Stack Web Developer',
      graduadoSistemas: 'Graduated in Systems for the Internet.',
      verProjetos: 'View Projects',
      entrarEmContato: 'Get in Touch',
      
      // SobreMim
      sobreMim: 'About Me',
      sobreTexto: 'Hi, I\'m Mário!',
      sobreDescricao: 'I\'m a web developer passionate about creating innovative digital solutions. I work with modern technologies like Vue.js, React, Node.js and MongoDB to build fast, scalable and user-friendly applications.',
      
      // Habilidades
      minhasHabilidades: 'My Skills',
      habilidadesDesc: 'Technologies and tools I master to create modern web solutions',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      ferramentas: 'Tools',
      sempreAprendendo: 'Always Learning',
      sempreAprendendoDesc: 'Continuously evolving with best practices and new tools.',
      
      // Experiencias
      minhasExperiencias: 'Experience',
      intelite: 'Intelite Tecnologia',
      desenvolvedorFrontend: 'Frontend Developer',
      desenvolvedorBackend: 'Backend Developer',
      periodoAte: 'to',
      
      // Projetos
      meusProjetos: 'My Projects',
      projetosDesc: 'A selection of my most relevant projects',
      verMais: 'View More',
      
      // Contato
      meContate: 'Contact Me',
      formulario: 'Send me a message',
      nome: 'Your name',
      email: 'Your email',
      mensagem: 'Your message',
      enviar: 'Send',
      enviando: 'Sending...',
      sucesso: 'Message sent successfully!',
      erro: 'Error sending message',
    }
  }
  
  const t = (key) => translations[lang.value][key] || key
  
  const toggleLanguage = () => {
    lang.value = lang.value === 'pt' ? 'en' : 'pt'
    localStorage.setItem('language', lang.value)
  }
  
  return {
    lang: computed(() => lang.value),
    t,
    toggleLanguage
  }
}
