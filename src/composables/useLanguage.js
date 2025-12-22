import { ref, computed } from 'vue'

const lang = ref('en')

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
      olaSouMario: 'Olá, sou Mário Gomes',
      desenvolvedorFullStack: 'Desenvolvedor Web full stack',
      graduadoSistemas: 'Graduado em sistemas para Internet.',
      
      // SobreMim
      sobreMim: 'Sobre Mim',
      sobreTexto: 'Olá, eu sou Mário!',
      sobreDescricao: 'Sou um desenvolvedor web apaixonado por criar soluções digitais inovadoras. Trabalho com tecnologias modernas como Vue.js, React, Node.js e MongoDB para construir aplicações rápidas, escaláveis e user-friendly.',
      
      // Habilidades
      minhasHabilidades: 'Minhas Habilidades',
      habilidadesDesc: 'Tecnologias e ferramentas que domino para criar soluções web modernas, eficientes e escaláveis',
      frontend: 'Frontend Development',
      frontendDesc: 'Criando interfaces responsivas e acessíveis',
      backend: 'Backend Development',
      backendDesc: 'Construindo APIs robustas e escaláveis',
      ferramentas: 'Ferramentas',
      ferramentasDesc: 'Ferramentas essenciais do meu dia a dia',
      sempreAprendendo: 'Sempre Aprendendo',
      sempreAprendendoDesc: 'Evoluindo continuamente com boas práticas e novas ferramentas.',
      
      // Experiencias
      minhasExperiencias: 'Minhas Experiências',
      intelite: 'Intelite Tecnologia',
      desenvolvedorFrontend: 'Desenvolvedor Front-end',
      desenvolvedorBackend: 'Desenvolvedor Back-end',
      periodoAte: 'até',
      
      // Projetos
      meusProjetos: 'Meus Projetos',
      projetosDesc: 'Uma seleção dos meus projetos mais relevantes',
      verMais: 'Ver mais',
      
      // Contato
      meContate: 'Me Contate',
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
      olaSouMario: 'Hello, I\'m Mário Gomes',
      desenvolvedorFullStack: 'Full Stack Web Developer',
      graduadoSistemas: 'Graduated in Systems for the Internet.',
      
      // SobreMim
      sobreMim: 'About Me',
      sobreTexto: 'Hi, I\'m Mário!',
      sobreDescricao: 'I\'m a web developer passionate about creating innovative digital solutions. I work with modern technologies like Vue.js, React, Node.js and MongoDB to build fast, scalable and user-friendly applications.',
      
      // Habilidades
      minhasHabilidades: 'My Skills',
      habilidadesDesc: 'Technologies and tools I master to create modern, efficient and scalable web solutions',
      frontend: 'Frontend Development',
      frontendDesc: 'Creating responsive and accessible interfaces',
      backend: 'Backend Development',
      backendDesc: 'Building robust and scalable APIs',
      ferramentas: 'Tools',
      ferramentasDesc: 'Essential tools in my daily work',
      sempreAprendendo: 'Always Learning',
      sempreAprendendoDesc: 'Continuously evolving with best practices and new tools.',
      
      // Experiencias
      minhasExperiencias: 'My Experience',
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
