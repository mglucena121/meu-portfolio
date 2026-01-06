import { ref, computed } from 'vue'

// Sempre iniciar em pt (não depende do localStorage)
const lang = ref('pt')

export const useLanguage = () => {
  const translations = {
    pt: {
      // Navbar
      inicio: 'Início',
      sobre: 'Sobre mim',
      projetos: 'Projetos',
      habilidades: 'Habilidades',
      contato: 'Contato',
      educacaoTitulo: 'Educação',
      
      // Inicio
      olaSouMario: 'Mário Gomes',
      desenvolvedorFullStack: 'Desenvolvedor Web Full Stack',
      graduadoSistemas: 'Graduado em sistemas para Internet.',
      verProjetos: 'Ver Projetos',
      entrarEmContato: 'Entrar em Contato',
      
      // SobreMim
      sobreMim: 'Sobre Mim',
      sobreTexto: 'Olá! Muito prazer!',
      sobreDescricao: 'Sou desenvolvedor web full stack apaixonado por tecnologia e por resolver problemas através de código. Atuo tanto no front-end quanto no back-end, criando aplicações web modernas, funcionais e bem estruturadas.',
      sobreDescricao1: 'Sou desenvolvedor web full stack apaixonado por tecnologia e por resolver problemas através de código. Atuo tanto no front-end quanto no back-end, criando aplicações web modernas, funcionais e bem estruturadas.',
      sobreDescricao2: 'Tenho experiência com Vue.js, React, Node.js, integrações de APIs, LoopBack, Express, MongoDB, Tailwind CSS desenvolvendo e dando manutenção em sistemas web.',
      sobreDescricao3: 'Meu objetivo é criar soluções que otimizem processos, aumentem a produtividade e gerem resultados reais para empresas e pessoas, enquanto sigo evoluindo profissionalmente através de novos desafios.',
      educacaoTitulo: 'Educação',
      exp1Cargo: 'Desenvolvedor Júnior | Suporte Técnico manipulação de dados em banco',
      exp1Empresa: 'Intelite Tecnologia',
      exp1Periodo: 'Fev 2024 - Atual',
      exp1Desc: 'Atuo como desenvolvedor full stack com foco em aplicações web modernas, utilizando Vue.js no front-end, LoopBack e Node no back-end. Também sou responsável por dar suporte técnico aos clientes e realizar manutenções e alterações no banco de dados. Trabalho com tecnologias como Vue, React, Tailwind, HTML5, CSS3, JavaScript, Node.js, APIs REST e MongoDB, conciliando desenvolvimento com atendimento técnico eficiente.',
      exp2Cargo: 'Suporte Técnico',
      exp2Empresa: 'Intelite Tecnologia',
      exp2Periodo: 'Ago 2022 - Fev 2024',
      exp2Desc: 'Suporte técnico de um software de autoatendimento utilizado por empresas em todo o Brasil. Sou responsável pela instalação, manutenção e otimização do sistema em dispositivos Android TV Box, além da configuração de roteadores para garantir conectividade estável e eficiente.',
      edu1Curso: 'Sistemas Para Internet (SPI)',
      edu1Instituicao: 'Centro Universitário de João Pessoa (UNIPÊ)',
      edu1Periodo: '2022 - 2024',
      edu1Desc1: 'Formação completa em Sistemas para Internet com foco em desenvolvimento de software e aplicações web modernas.',
      
      // Habilidades
      minhasHabilidades: 'Minhas Habilidades',
      habilidadesDesc: 'Tecnologias e ferramentas que domino.',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      ferramentas: 'Ferramentas',
      sempreAprendendo: 'Sempre Aprendendo',
      sempreAprendendoDesc: 'Evoluindo continuamente com boas práticas e novas tecnologias.',
      
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
      verGithub: 'Ver no GitHub',
      verDemo: 'Ver Demo ao Vivo',
      fechar: 'Fechar',
      proj1Titulo: 'Noticiário - M1',
      proj1Desc1: 'Portal de notícias digital desenvolvido como projeto pessoal, com foco em aprendizado prático e aplicação de tecnologias modernas. Possui front-end em React com Tailwind CSS, editor de textos integrado para criação de matérias, gerenciamento de imagens via Firebase Storage e back-end em Node.js com Express, autenticação JWT, documentação da API com Swagger e banco de dados MongoDB Atlas.',
      proj2Titulo: 'Automação de json para excel',
      proj2Desc1: 'A aplicação permite ao usuário informar a URL de uma API REST que retorna dados em formato JSON e escolher o local onde o arquivo Excel será salvo.',
      proj2Desc2: 'A partir disso, o sistema realiza o consumo dos dados via requisição HTTP do tipo GET, processa e normaliza as informações recebidas e converte automaticamente os dados para uma planilha Excel (.xlsx).',
      proj2Desc3: 'Durante todo o processo, a interface exibe uma barra de progresso com feedback em tempo real, garantindo uma melhor experiência ao usuário.',
      
      // Contato
      meContate: 'Entre em contato',
      contactInfo: 'Informações de contato',
      sendMessage: 'Envie uma mensagem',
      successMsg: 'Mensagem enviada com sucesso! Obrigado pelo contato.',
      errorMsg: 'Erro ao enviar mensagem. Tente novamente.',
      nameLabel: 'Nome',
      emailLabel: 'Email',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem',
      namePh: 'Seu nome completo',
      emailPh: 'seu@email.com',
      subjectPh: 'Sobre o que você gostaria de falar?',
      messagePh: 'Descreva seu projeto, ideia ou como posso ajudá-lo...',
      sendBtn: 'Enviar Mensagem',
      sendingBtn: 'Enviando...',
      emailTitle: 'Email',
      linkedinTitle: 'LinkedIn',
      githubTitle: 'GitHub',
      contactSubjectFallback: 'Contato do Portfolio',
      contactSubjectPrefix: 'Portfolio -',
    },
    en: {
      // Navbar
      inicio: 'Home',
      sobre: 'About',
      projetos: 'Projects',
      habilidades: 'Skills',
      contato: 'Contact',
      educacaoTitulo: 'Education',
      
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
      sobreDescricao1: 'I am a full-stack web developer passionate about technology and solving problems through code. I work on both front-end and back-end, creating modern, functional, and well-structured web applications.',
      sobreDescricao2: 'I have experience with Vue.js, React, Node.js, API integrations, LoopBack, Express, MongoDB, and Tailwind CSS, building and maintaining web systems.',
      sobreDescricao3: 'My goal is to create solutions that optimize processes, increase productivity, and generate real results for companies and people while I keep growing through new challenges.',
      educacaoTitulo: 'Education',
      exp1Cargo: 'Junior Developer | Technical Support handling database data',
      exp1Empresa: 'Intelite Tecnologia',
      exp1Periodo: 'Feb 2024 - Present',
      exp1Desc: 'Full-stack developer focused on modern web applications using Vue.js on the front-end and LoopBack/Node on the back-end. Also provide technical support to clients and perform database maintenance and changes. Work with Vue, React, Tailwind, HTML5, CSS3, JavaScript, Node.js, REST APIs, and MongoDB, combining development with efficient technical assistance.',
      exp2Cargo: 'Technical Support',
      exp2Empresa: 'Intelite Tecnologia',
      exp2Periodo: 'Aug 2022 - Feb 2024',
      exp2Desc: 'Technical support for a self-service software used by companies across Brazil. Responsible for installing, maintaining, and optimizing the system on Android TV Box devices, as well as configuring routers to ensure stable and efficient connectivity.',
      edu1Curso: 'Internet Systems (SPI)',
      edu1Instituicao: 'Centro Universitário de João Pessoa (UNIPÊ)',
      edu1Periodo: '2022 - 2024',
      edu1Desc1: 'Comprehensive degree in Internet Systems with a focus on software development and modern web applications.',
      
      // Habilidades
      minhasHabilidades: 'My Skills',
      habilidadesDesc: 'Technologies and tools I master to create modern web solutions',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      ferramentas: 'Tools',
      sempreAprendendo: 'Always Learning',
      sempreAprendendoDesc: 'Continuously evolving with best practices and new technologies.',
      
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
      verGithub: 'View on GitHub',
      verDemo: 'View Live Demo',
      fechar: 'Close',
      proj1Titulo: 'News Portal - M1',
      proj1Desc1: 'Digital news portal built as a personal project focused on hands-on learning with modern technologies. Front-end in React with Tailwind CSS, rich text editor for creating articles, image management via Firebase Storage, and back-end in Node.js with Express, JWT auth, Swagger API docs, and MongoDB Atlas database.',
      proj2Titulo: 'JSON to Excel automation',
      proj2Desc1: 'The app lets the user input a REST API URL that returns JSON and choose where the Excel file will be saved.',
      proj2Desc2: 'It performs a GET request, processes and normalizes the data, and automatically converts it to an Excel (.xlsx) spreadsheet.',
      proj2Desc3: 'Throughout the process, the UI shows a progress bar with real-time feedback to ensure a better user experience.',
      
      // Contato
      meContate: 'Contact Me',
      contactInfo: 'Contact information',
      sendMessage: 'Send a message',
      successMsg: 'Message sent successfully! Thanks for reaching out.',
      errorMsg: 'Error sending message. Please try again.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      namePh: 'Your full name',
      emailPh: 'your@email.com',
      subjectPh: 'What would you like to talk about?',
      messagePh: 'Describe your project, idea, or how I can help...',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      emailTitle: 'Email',
      linkedinTitle: 'LinkedIn',
      githubTitle: 'GitHub',
      contactSubjectFallback: 'Portfolio contact',
      contactSubjectPrefix: 'Portfolio -',
    }
  }
  
  const t = (key) => translations[lang.value]?.[key] || key

  const setLanguage = (value) => {
    lang.value = value === 'en' ? 'en' : 'pt'
    try {
      localStorage.setItem('language', lang.value)
    } catch {
      /* ignore storage issues */
    }
  }
  
  const toggleLanguage = () => {
    setLanguage(lang.value === 'pt' ? 'en' : 'pt')
  }
  
  return {
    lang: computed(() => lang.value),
    t,
    toggleLanguage,
    setLanguage
  }
}
