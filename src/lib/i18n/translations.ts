export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export type TimelineEntry = {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  current?: boolean;
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  gradient: string;
  live?: string;
};

export type SkillItem = {
  title: string;
  description: string;
  icon: string;
};

export type Translation = {
  meta: { description: string };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    contactCta: string;
  };
  hero: {
    greeting: string;
    available: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  about: {
    title: string;
    description: string;
    technologies: string;
    highlights: { label: string; value: string }[];
  };
  experience: {
    title: string;
    subtitle: string;
    work: string;
    education: string;
    current: string;
    inProgress: string;
    linkedinCta: string;
    linkedinFull: string;
    timeline: TimelineEntry[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  skills: {
    title: string;
    subtitle: string;
    items: SkillItem[];
  };
  contact: {
    title: string;
    description: string;
    connect: string;
    emailDirect: string;
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    errorConfig: string;
  };
  footer: { copyright: string };
  developer: {
    name: string;
    role: string;
    tagline: string;
  };
};

export const translations: Record<Locale, Translation> = {
  pt: {
    meta: {
      description:
        "Portfólio de Igor Lira — Desenvolvedor Backend em Java, Spring e tecnologias web.",
    },
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
      contactCta: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      available: "Disponível para novos projetos",
      ctaPrimary: "Ver Projetos",
      ctaSecondary: "Entrar em Contato",
      scroll: "Scroll",
    },
    about: {
      title: "Sobre mim",
      description:
        "Me chamo Igor Nathan Lira, tenho 20 anos e sou de São Paulo - Zona Sul. Concluí o ensino médio no Senac Nações Unidas, integrado ao curso técnico de Multimídia. Atualmente curso Gestão da Tecnologia da Informação no Centro Universitário Senac Santo Amaro e realizo a Carreira Desenvolvedor Backend Java na Alura, onde venho aprimorando meus conhecimentos em Java e aplicando em projetos da formação. Após a graduação, planejo cursar pós-graduação em Engenharia de Software, buscando me aprofundar em Desenvolvimento de Software e DevOps.",
      technologies: "Tecnologias",
      highlights: [
        { label: "Repositórios", value: "12+" },
        { label: "Formação", value: "Alura" },
        { label: "Graduação", value: "Senac" },
      ],
    },
    experience: {
      title: "Experiência",
      subtitle: "Minha trajetória profissional e formação acadêmica.",
      work: "Profissional",
      education: "Formação",
      current: "Atual",
      inProgress: "Em andamento",
      linkedinCta: "Ver perfil no LinkedIn",
      linkedinFull: "Ver perfil completo no LinkedIn",
      timeline: [
        {
          type: "work",
          title: "Young Apprentice - AI Solutions | AI Enterprise Adoption",
          organization: "Grupo QuintoAndar",
          period: "mar de 2026 — o momento · 4 meses",
          location: "São Paulo, Brasil · Remoto",
          description:
            "Apoio ao Program Manager na experimentação de ferramentas de IA e na adoção de soluções internas, impactando produtividade e eficiência. Criação de projeto para automatizar o fluxo de submissão de PoCs internos. Parceria com times de RPA, People Insights, Cybersecurity e engenharia. Gestão de planilhas de despesas, análise de adoção de IA e testes com Gemini Enterprise e Claude Cowork. Liderança de pesquisa com focus group e desenvolvimento de dashboard interativo para o time executivo visualizar uso do Gemini.",
          current: true,
        },
        {
          type: "work",
          title: "Assistente de Loja e HUB",
          organization: "Cia. Hering",
          period: "fev de 2025 — fev de 2026 · 1 ano 1 mês",
          location: "São Paulo, Brasil · Presencial",
          description:
            "Responsável pelas operações de e-commerce, gerenciando todo o ciclo de fulfillment de pedidos online: recebimento e auditoria de solicitações, separação, entrada de dados no sistema, gestão de estoque, coordenação de embalagem e logística de expedição até o despacho para transportadoras.",
          current: false,
        },
        {
          type: "work",
          title: "Jovem Aprendiz",
          organization: "Metrô de São Paulo",
          period: "nov de 2022 — nov de 2024 · 2 anos 1 mês",
          location: "São Paulo, Brasil · Presencial",
          description:
            "Atendimento ao cliente e gestão operacional em ambiente de alto fluxo. Assistência a passageiros com deficiência, orientação aos usuários, coordenação de filas, fechamento de bilheterias, monitoramento de catracas e organização do movimento nas plataformas.",
          current: false,
        },
        {
          type: "education",
          title: "Gestão da Tecnologia da Informação",
          organization: "Centro Universitário Senac Santo Amaro",
          period: "Em andamento",
          description:
            "Graduação em Gestão de TI com foco em desenvolvimento de software, gestão de projetos e infraestrutura tecnológica.",
          current: true,
        },
        {
          type: "education",
          title: "Carreira Desenvolvedor Backend Java",
          organization: "Alura",
          period: "Em andamento",
          description:
            "Formação em Java, Spring Framework, APIs REST e boas práticas de desenvolvimento backend.",
          current: true,
        },
        {
          type: "education",
          title: "Ensino Médio + Técnico em Multimídia",
          organization: "Senac Nações Unidas",
          period: "Concluído",
          description:
            "Formação técnica em multimídia integrada ao ensino médio, com foco em comunicação visual, ferramentas digitais e produção criativa.",
          current: false,
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle: "Uma seleção dos trabalhos que desenvolvi — do conceito ao deploy.",
      items: [
        {
          title: "Sistema de Lanchonete",
          description:
            "Sistema completo para gestão de lanchonete desenvolvido em Java, com lógica de negócio e estrutura orientada a objetos.",
          tags: ["Java", "POO", "Lógica de Programação"],
          github: "https://github.com/lirazn7/Sistema-de-Lanchonete",
          gradient: "from-orange-500/80 to-red-900/80",
        },
        {
          title: "Cadastro de Usuário",
          description:
            "Aplicação de cadastro de usuários em Java, aplicando conceitos de backend e manipulação de dados.",
          tags: ["Java", "Backend"],
          github: "https://github.com/lirazn7/cadastro-usuario",
          gradient: "from-violet-500/80 to-purple-900/80",
        },
        {
          title: "DressCode",
          description:
            "Projeto web em JavaScript com foco em interface e experiência do usuário.",
          tags: ["JavaScript", "Web"],
          github: "https://github.com/lirazn7/DressCode---Atualizado",
          gradient: "from-blue-500/80 to-cyan-900/80",
        },
        {
          title: "Repositório de Aprendizagem",
          description:
            "Repositório com exercícios de Lógica de Programação e POO em Java para consolidar aprendizados.",
          tags: ["Java", "POO", "Algoritmos"],
          github: "https://github.com/lirazn7/Repositorio-de-Aprendizagem",
          gradient: "from-emerald-500/80 to-teal-900/80",
        },
        {
          title: "Igor's Store",
          description:
            "Site de loja virtual com layout e estilização em CSS, demonstrando habilidades em front-end.",
          tags: ["HTML", "CSS", "Web Design"],
          github: "https://github.com/lirazn7/Site-de-Loja-Igor-s-Store",
          gradient: "from-pink-500/80 to-rose-900/80",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle: "Áreas de especialização e domínio técnico.",
      items: [
        {
          title: "Backend Java",
          description:
            "APIs e sistemas com Java, Spring e boas práticas de arquitetura backend.",
          icon: "Server",
        },
        {
          title: "Front-end Web",
          description:
            "Interfaces com HTML, CSS e JavaScript para projetos web e acadêmicos.",
          icon: "Monitor",
        },
        {
          title: "Mobile",
          description:
            "Desenvolvimento com React Native para aplicações multiplataforma.",
          icon: "Smartphone",
        },
        {
          title: "Cloud & Dados",
          description:
            "Experiência com AWS, Supabase, Firebase, Python e versionamento com Git.",
          icon: "Cloud",
        },
      ],
    },
    contact: {
      title: "Vamos trabalhar juntos?",
      description:
        "Estou aberto a novas oportunidades, estágios e projetos na área de backend. Envie uma mensagem ou acesse meu GitHub!",
      connect: "Conecte-se comigo",
      emailDirect: "Ou envie um email direto para",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      messagePlaceholder: "Conte sobre o seu projeto...",
      submit: "Enviar Mensagem",
      submitting: "Enviando...",
      success: "Mensagem enviada com sucesso! Responderei em breve.",
      error: "Não foi possível enviar. Tente novamente ou use o email direto.",
      errorConfig: "Formulário temporariamente indisponível. Use o email direto abaixo.",
    },
    footer: {
      copyright: "© 2026 Igor Lira. Feito com Next.js e GSAP.",
    },
    developer: {
      name: "Igor Lira",
      role: "Desenvolvedor Backend",
      tagline:
        "Construo soluções robustas em Java e Spring, aplicando boas práticas de backend e lógica de programação em projetos acadêmicos e pessoais.",
    },
  },

  en: {
    meta: {
      description:
        "Igor Lira's portfolio — Backend Developer specializing in Java, Spring, and web technologies.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      contactCta: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      available: "Available for new projects",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch",
      scroll: "Scroll",
    },
    about: {
      title: "About me",
      description:
        "My name is Igor Nathan Lira, I'm 20 years old and from São Paulo's South Zone. I completed high school at Senac Nações Unidas, integrated with a Multimedia technical course. I'm currently studying Information Technology Management at Centro Universitário Senac Santo Amaro and pursuing the Java Backend Developer career path at Alura, where I've been strengthening my Java skills through hands-on projects. After graduation, I plan to pursue a postgraduate degree in Software Engineering, focusing on Software Development and DevOps.",
      technologies: "Technologies",
      highlights: [
        { label: "Repositories", value: "12+" },
        { label: "Training", value: "Alura" },
        { label: "Degree", value: "Senac" },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey and academic background.",
      work: "Professional",
      education: "Education",
      current: "Current",
      inProgress: "In progress",
      linkedinCta: "View LinkedIn profile",
      linkedinFull: "View full LinkedIn profile",
      timeline: [
        {
          type: "work",
          title: "Young Apprentice - AI Solutions | AI Enterprise Adoption",
          organization: "Grupo QuintoAndar",
          period: "Mar 2026 — Present · 4 months",
          location: "São Paulo, Brazil · Remote",
          description:
            "Assisting the Program Manager in experimenting with new AI tools and supporting internal AI adoption to improve productivity and efficiency. Built a project to automate the internal Proof of Concept submission flow. Partnered with RPA, People Insights, Cybersecurity, and engineering teams. Managed expense spreadsheets, analyzed AI tool adoption, and tested Gemini Enterprise and Claude Cowork. Led focus group research and built an interactive dashboard for the executive team to visualize Gemini usage.",
          current: true,
        },
        {
          type: "work",
          title: "Store & HUB Assistant",
          organization: "Cia. Hering",
          period: "Feb 2025 — Feb 2026 · 1 yr 1 mo",
          location: "São Paulo, Brazil · On-site",
          description:
            "Dedicated to e-commerce operations, managing the entire online order fulfillment cycle: receiving and auditing requests, order picking, system data entry, inventory management, packing coordination, and outbound shipping logistics up to carrier dispatch.",
          current: false,
        },
        {
          type: "work",
          title: "Young Apprentice",
          organization: "São Paulo Metro",
          period: "Nov 2022 — Nov 2024 · 2 yrs 1 mo",
          location: "São Paulo, Brazil · On-site",
          description:
            "Developed customer service and operational management skills in a high-traffic environment. Assisted passengers with disabilities, guided subway riders, coordinated queue flows, managed ticketing areas, monitored turnstiles, and organized passenger movement on platforms.",
          current: false,
        },
        {
          type: "education",
          title: "Information Technology Management",
          organization: "Centro Universitário Senac Santo Amaro",
          period: "In progress",
          description:
            "Bachelor's degree in IT Management focused on software development, project management, and technology infrastructure.",
          current: true,
        },
        {
          type: "education",
          title: "Java Backend Developer Career Path",
          organization: "Alura",
          period: "In progress",
          description:
            "Training in Java, Spring Framework, REST APIs, and backend development best practices.",
          current: true,
        },
        {
          type: "education",
          title: "High School + Multimedia Technical Course",
          organization: "Senac Nações Unidas",
          period: "Completed",
          description:
            "Technical multimedia training integrated with high school, focused on visual communication, digital tools, and creative production.",
          current: false,
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of work I've built — from concept to deployment.",
      items: [
        {
          title: "Snack Bar System",
          description:
            "Complete snack bar management system built in Java with business logic and object-oriented structure.",
          tags: ["Java", "OOP", "Programming Logic"],
          github: "https://github.com/lirazn7/Sistema-de-Lanchonete",
          gradient: "from-orange-500/80 to-red-900/80",
        },
        {
          title: "User Registration",
          description:
            "Java user registration application applying backend concepts and data handling.",
          tags: ["Java", "Backend"],
          github: "https://github.com/lirazn7/cadastro-usuario",
          gradient: "from-violet-500/80 to-purple-900/80",
        },
        {
          title: "DressCode",
          description:
            "JavaScript web project focused on interface and user experience.",
          tags: ["JavaScript", "Web"],
          github: "https://github.com/lirazn7/DressCode---Atualizado",
          gradient: "from-blue-500/80 to-cyan-900/80",
        },
        {
          title: "Learning Repository",
          description:
            "Repository with Programming Logic and Java OOP exercises to consolidate learning.",
          tags: ["Java", "OOP", "Algorithms"],
          github: "https://github.com/lirazn7/Repositorio-de-Aprendizagem",
          gradient: "from-emerald-500/80 to-teal-900/80",
        },
        {
          title: "Igor's Store",
          description:
            "Online store website with CSS layout and styling, showcasing front-end skills.",
          tags: ["HTML", "CSS", "Web Design"],
          github: "https://github.com/lirazn7/Site-de-Loja-Igor-s-Store",
          gradient: "from-pink-500/80 to-rose-900/80",
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Areas of expertise and technical proficiency.",
      items: [
        {
          title: "Java Backend",
          description:
            "APIs and systems with Java, Spring, and backend architecture best practices.",
          icon: "Server",
        },
        {
          title: "Web Front-end",
          description:
            "Interfaces with HTML, CSS, and JavaScript for web and academic projects.",
          icon: "Monitor",
        },
        {
          title: "Mobile",
          description:
            "React Native development for cross-platform applications.",
          icon: "Smartphone",
        },
        {
          title: "Cloud & Data",
          description:
            "Experience with AWS, Supabase, Firebase, Python, and Git version control.",
          icon: "Cloud",
        },
      ],
    },
    contact: {
      title: "Let's work together?",
      description:
        "I'm open to new opportunities, internships, and backend projects. Send a message or visit my GitHub!",
      connect: "Connect with me",
      emailDirect: "Or send an email directly to",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Message sent successfully! I'll reply soon.",
      error: "Could not send. Please try again or use the direct email.",
      errorConfig: "Form temporarily unavailable. Please use the direct email below.",
    },
    footer: {
      copyright: "© 2026 Igor Lira. Built with Next.js and GSAP.",
    },
    developer: {
      name: "Igor Lira",
      role: "Backend Developer",
      tagline:
        "I build robust solutions with Java and Spring, applying backend best practices and programming logic in academic and personal projects.",
    },
  },

  es: {
    meta: {
      description:
        "Portafolio de Igor Lira — Desarrollador Backend en Java, Spring y tecnologías web.",
    },
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      contactCta: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      available: "Disponible para nuevos proyectos",
      ctaPrimary: "Ver Proyectos",
      ctaSecondary: "Contactar",
      scroll: "Scroll",
    },
    about: {
      title: "Sobre mí",
      description:
        "Me llamo Igor Nathan Lira, tengo 20 años y soy de la Zona Sur de São Paulo. Terminé la escuela secundaria en Senac Nações Unidas, integrada al curso técnico de Multimedia. Actualmente curso Gestión de la Tecnología de la Información en el Centro Universitário Senac Santo Amaro y realizo la Carrera Desarrollador Backend Java en Alura, donde vengo mejorando mis conocimientos en Java y aplicándolos en proyectos. Después de la graduación, planeo cursar una posgrado en Ingeniería de Software, profundizando en Desarrollo de Software y DevOps.",
      technologies: "Tecnologías",
      highlights: [
        { label: "Repositorios", value: "12+" },
        { label: "Formación", value: "Alura" },
        { label: "Graduación", value: "Senac" },
      ],
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional y formación académica.",
      work: "Profesional",
      education: "Formación",
      current: "Actual",
      inProgress: "En curso",
      linkedinCta: "Ver perfil en LinkedIn",
      linkedinFull: "Ver perfil completo en LinkedIn",
      timeline: [
        {
          type: "work",
          title: "Young Apprentice - AI Solutions | AI Enterprise Adoption",
          organization: "Grupo QuintoAndar",
          period: "mar 2026 — actualidad · 4 meses",
          location: "São Paulo, Brasil · Remoto",
          description:
            "Apoyo al Program Manager en la experimentación de herramientas de IA y adopción de soluciones internas para mejorar la productividad. Creación de un proyecto para automatizar el flujo de envío de PoCs internos. Colaboración con equipos de RPA, People Insights, Cybersecurity e ingeniería. Gestión de hojas de gastos, análisis de adopción de IA y pruebas con Gemini Enterprise y Claude Cowork. Liderazgo de investigación con focus group y desarrollo de dashboard interactivo para el equipo ejecutivo.",
          current: true,
        },
        {
          type: "work",
          title: "Asistente de Tienda y HUB",
          organization: "Cia. Hering",
          period: "feb 2025 — feb 2026 · 1 año 1 mes",
          location: "São Paulo, Brasil · Presencial",
          description:
            "Responsable de las operaciones de e-commerce, gestionando todo el ciclo de fulfillment de pedidos online: recepción y auditoría de solicitudes, separación, entrada de datos, gestión de inventario, embalaje y logística de envío hasta el despacho.",
          current: false,
        },
        {
          type: "work",
          title: "Joven Aprendiz",
          organization: "Metro de São Paulo",
          period: "nov 2022 — nov 2024 · 2 años 1 mes",
          location: "São Paulo, Brasil · Presencial",
          description:
            "Atención al cliente y gestión operacional en un entorno de alto tráfico. Asistencia a pasajeros con discapacidad, orientación a usuarios, coordinación de filas, cierre de taquillas, monitoreo de torniquetes y organización del flujo en las plataformas.",
          current: false,
        },
        {
          type: "education",
          title: "Gestión de la Tecnología de la Información",
          organization: "Centro Universitário Senac Santo Amaro",
          period: "En curso",
          description:
            "Graduación en Gestión de TI con enfoque en desarrollo de software, gestión de proyectos e infraestructura tecnológica.",
          current: true,
        },
        {
          type: "education",
          title: "Carrera Desarrollador Backend Java",
          organization: "Alura",
          period: "En curso",
          description:
            "Formación en Java, Spring Framework, APIs REST y buenas prácticas de desarrollo backend.",
          current: true,
        },
        {
          type: "education",
          title: "Bachillerato + Técnico en Multimedia",
          organization: "Senac Nações Unidas",
          period: "Completado",
          description:
            "Formación técnica en multimedia integrada al bachillerato, con enfoque en comunicación visual, herramientas digitales y producción creativa.",
          current: false,
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una selección de trabajos que he desarrollado — del concepto al deploy.",
      items: [
        {
          title: "Sistema de Lanchonete",
          description:
            "Sistema completo de gestión de lanchonete desarrollado en Java, con lógica de negocio y estructura orientada a objetos.",
          tags: ["Java", "POO", "Lógica de Programación"],
          github: "https://github.com/lirazn7/Sistema-de-Lanchonete",
          gradient: "from-orange-500/80 to-red-900/80",
        },
        {
          title: "Registro de Usuario",
          description:
            "Aplicación de registro de usuarios en Java, aplicando conceptos de backend y manejo de datos.",
          tags: ["Java", "Backend"],
          github: "https://github.com/lirazn7/cadastro-usuario",
          gradient: "from-violet-500/80 to-purple-900/80",
        },
        {
          title: "DressCode",
          description:
            "Proyecto web en JavaScript enfocado en interfaz y experiencia de usuario.",
          tags: ["JavaScript", "Web"],
          github: "https://github.com/lirazn7/DressCode---Atualizado",
          gradient: "from-blue-500/80 to-cyan-900/80",
        },
        {
          title: "Repositorio de Aprendizaje",
          description:
            "Repositorio con ejercicios de Lógica de Programación y POO en Java para consolidar aprendizajes.",
          tags: ["Java", "POO", "Algoritmos"],
          github: "https://github.com/lirazn7/Repositorio-de-Aprendizagem",
          gradient: "from-emerald-500/80 to-teal-900/80",
        },
        {
          title: "Igor's Store",
          description:
            "Sitio de tienda virtual con diseño y estilización en CSS, demostrando habilidades en front-end.",
          tags: ["HTML", "CSS", "Web Design"],
          github: "https://github.com/lirazn7/Site-de-Loja-Igor-s-Store",
          gradient: "from-pink-500/80 to-rose-900/80",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle: "Áreas de especialización y dominio técnico.",
      items: [
        {
          title: "Backend Java",
          description:
            "APIs y sistemas con Java, Spring y buenas prácticas de arquitectura backend.",
          icon: "Server",
        },
        {
          title: "Front-end Web",
          description:
            "Interfaces con HTML, CSS y JavaScript para proyectos web y académicos.",
          icon: "Monitor",
        },
        {
          title: "Mobile",
          description:
            "Desarrollo con React Native para aplicaciones multiplataforma.",
          icon: "Smartphone",
        },
        {
          title: "Cloud & Datos",
          description:
            "Experiencia con AWS, Supabase, Firebase, Python y control de versiones con Git.",
          icon: "Cloud",
        },
      ],
    },
    contact: {
      title: "¿Trabajamos juntos?",
      description:
        "Estoy abierto a nuevas oportunidades, pasantías y proyectos de backend. ¡Envía un mensaje o visita mi GitHub!",
      connect: "Conéctate conmigo",
      emailDirect: "O envía un email directamente a",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      submit: "Enviar Mensaje",
      submitting: "Enviando...",
      success: "¡Mensaje enviado con éxito! Responderé pronto.",
      error: "No se pudo enviar. Intenta de nuevo o usa el email directo.",
      errorConfig: "Formulario temporalmente no disponible. Usa el email directo abajo.",
    },
    footer: {
      copyright: "© 2026 Igor Lira. Hecho con Next.js y GSAP.",
    },
    developer: {
      name: "Igor Lira",
      role: "Desarrollador Backend",
      tagline:
        "Construyo soluciones robustas con Java y Spring, aplicando buenas prácticas de backend y lógica de programación en proyectos académicos y personales.",
    },
  },
};

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};
