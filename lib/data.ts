// lib/data.ts — Fonte central de dados do portfólio

export const PERSONAL = {
  name: 'Davi Alves Rodrigues',
  firstName: 'Davi',
  lastName: 'Alves',
  role: 'Full Stack Developer',
  location: 'João Pessoa, Paraíba 🇧🇷',
  email: 'davialvesr18@gmail.com',
  github: 'https://github.com/davialves1820',
  linkedin: 'https://www.linkedin.com/in/davi-rodrigues1820/',
  resume: '/Davi_Alves_CV.pdf',
  bio: [
    'Desenvolvedor Full Stack de 20 anos, católico apostólico romano e graduando em Ciência da Computação na UFPB desde 2023. Busco o desenvolvimento integral através do equilíbrio entre a fé, o intelecto e a saúde, integrando a disciplina dos esportes e a criatividade dos animes à minha rotina.',
    'Apaixonado por criar soluções que impactam a vida real, atuo simultaneamente em pesquisa, liderança e desenvolvimento de produtos. Fundei e lidero a Connecta CI, grupo de tecnologia da UFPB, e sou desenvolvedor no laboratório LAVID. Acredito que o melhor código é aquele que resolve problemas reais para pessoas reais.',
    'Minhas áreas de interesse concentram-se no desenvolvimento web, na inteligência artificial e na programação competitiva. Busco aplicar o raciocínio lógico e a eficiência algorítmica para construir sistemas inteligentes, escaláveis e que resolvam desafios complexos de forma otimizada.',
  ],
}

export const SKILLS = [
  {
    icon: '⚡',
    title: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    icon: '🔧',
    title: 'Backend',
    tags: ['Node.js', 'Python', 'FastAPI', 'Express.js', 'Django', 'APIs REST', 'C / C++', 'Java'],
  },
  {
    icon: '🗄️',
    title: 'Banco de Dados',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize'],
  },
  {
    icon: '🚀',
    title: 'DevOps & Infra',
    tags: ['Docker', 'Git / GitHub', 'Grafana', 'Linux'],
  },
  {
    icon: '📡',
    title: 'IoT & Protocolos',
    tags: ['MQTT', 'LoRa', 'Geolocalização', 'Tempo Real', 'WebSocket'],
  },
  {
    icon: '🤖',
    title: 'IA & Automação',
    tags: ['Chatbots', 'Machine Learning', 'Automação de Processos'],
  },
]



export interface Experience {
  period: string
  current: boolean
  role: string
  company: string
  stack: string[]
  bullets: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    period: 'Fevereiro 2026 — Presente',
    current: true,
    role: 'Desenvolvedor Full Stack',
    company: 'Laboratório LAVID · UFPB',
    stack: ['React', 'Node.js', 'Grafana', 'Docker'],
    bullets: [
      'Desenvolvimento e manutenção de aplicações web de alta disponibilidade utilizando React no frontend e Node.js no backend, com foco em escalabilidade e código limpo.',
      'Participação ativa no ciclo completo de desenvolvimento: levantamento de requisitos, arquitetura de APIs RESTful, implementação, testes e deploy em ambiente contêinerizado com Docker.',
      'Monitoramento contínuo de aplicações em produção com Grafana: criação de dashboards, alertas proativos e análise de métricas de performance para garantir SLA.',
      'Colaboração com equipe multidisciplinar seguindo práticas ágeis — code reviews, pair programming e organização de entregas com Git/GitHub.',
    ],
  },
  {
    period: 'Agosto 2025 — Presente',
    current: true,
    role: 'Fundador & Vice-Presidente',
    company: 'Connecta CI · UFPB',
    stack: ['Gestão', 'React', 'Node.js', 'Liderança'],
    bullets: [
      'Fundação e estruturação completa da empresa júnior de tecnologia da UFPB — da definição do modelo de negócio à formação da equipe inicial de desenvolvedores.',
      'Coordenação de múltiplos projetos simultâneos com clientes reais: planejamento de sprints, alocação de equipe, controle de qualidade e apresentação de resultados.',
      'Desenvolvimento de uma cultura de aprendizado contínuo, organizando workshops, hackathons internos e mentorias técnicas para membros juniores.',
      'Criação de processos e documentação técnica que aumentaram a produtividade da equipe e reduziram o tempo de onboarding de novos membros.',
    ],
  },
  {
    period: 'Novembro 2024 — Presente',
    current: true,
    role: 'Bolsista',
    company: 'PET Computação · UFPB',
    stack: ['Web Dev', 'Marketing Digital', 'Liderança'],
    bullets: [
      'Liderança do núcleo de marketing e mídias digitais: criação de estratégia de conteúdo, gestão de redes sociais e aumento expressivo do engajamento da comunidade.',
      'Organização e moderação de eventos técnicos, seminários e reuniões do grupo de estudos em Computação da UFPB.',
      'Desenvolvimento e manutenção de projetos web internos do PET, aplicando boas práticas de versionamento e colaboração em equipe.',
    ],
  },
  {
    period: 'Novembro 2025 — Março 2026',
    current: false,
    role: 'Desenvolvedor Full Stack',
    company: 'Aquário · UFPB',
    stack: ['React', 'Next.js', 'Git', 'UX'],
    bullets: [
      'Desenvolvimento da plataforma central do Centro de Informática da UFPB com React e Next.js, servindo como ponto único de acesso para alunos, professores e servidores.',
      'Otimização da experiência do usuário (UX): redesign de fluxos críticos, redução de cliques em tarefas frequentes e melhoria na responsividade em dispositivos móveis.',
      'Colaboração em projeto open source com fluxo profissional de desenvolvimento: pull requests, code reviews e integração contínua via GitHub Actions.',
      'Aplicação de Server-Side Rendering (SSR) e Static Generation do Next.js para otimizar performance e SEO da plataforma.',
    ],
  },
  {
    period: 'Agosto 2025 — Março 2026',
    current: false,
    role: 'Desenvolvedor Full Stack',
    company: 'Buszer · UFPB',
    stack: ['React', 'Node.js', 'MQTT', 'LoRa', 'IoT', 'Mapas'],
    bullets: [
      'Arquitetura e desenvolvimento completo de aplicação full stack para rastreamento em tempo real do ônibus circular da UFPB, impactando diretamente o deslocamento de milhares de alunos diariamente.',
      'Integração de dispositivos IoT com protocolo MQTT e tecnologia LoRa: ingestão, tratamento e persistência de dados de geolocalização em pipeline de dados de baixa latência.',
      'Construção de mapas interativos dinâmicos com atualização em tempo real da posição do veículo, estimativa de chegada e histórico de trajetos.',
      'Design e implementação de API backend robusta com Node.js, gerenciando streams de dados GPS, autenticação e notificações push para usuários.',
      'Interfaces responsivas e acessíveis com foco total na experiência do usuário — especialmente em conexões móveis instáveis no campus.',
    ],
  },
  {
    period: 'Setembro 2024 — Novembro 2025',
    current: false,
    role: 'Educador em Automação e IA',
    company: 'JPTECH · UFPB',
    stack: ['Python', 'IA', 'Automação', 'Didática'],
    bullets: [
      'Planejamento e ministração de aulas sobre automação de processos e conceitos fundamentais de inteligência artificial para estudantes de tecnologia da UFPB.',
      'Criação de material didático, exercícios práticos e projetos hands-on que tornaram conceitos complexos de IA acessíveis para iniciantes.',
      'Desenvolvimento de chatbots e scripts de automação como projetos de aula, demonstrando aplicações reais das tecnologias ensinadas.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'Algoritmos de Otimização (TSP)',
    desc: 'Solução para o Problema do Caixeiro Viajante aplicada à cidade de João Pessoa. Implementa e compara múltiplos algoritmos heurísticos com visualização de rotas no mapa real.',
    stack: ['Python', 'Algoritmos', 'Grafos'],
    url: 'https://github.com/davialves1820/Algoritmos-de-otimizacao',
  },
  {
    name: 'CodePay',
    desc: 'Plataforma de pagamento com TypeScript — fluxo completo de transações, autenticação de usuários e integração com gateways de pagamento.',
    stack: ['TypeScript', 'Node.js', 'APIs'],
    url: 'https://github.com/davialves1820/CodePay',
  },
  {
    name: 'Backend Node',
    desc: 'API RESTful modular em Node.js com autenticação JWT, CRUD completo, validações e documentação. Base de referência para projetos full stack.',
    stack: ['Node.js', 'JavaScript', 'REST'],
    url: 'https://github.com/davialves1820/BackendNode',
  },
  {
    name: 'LeetCode Answers',
    desc: 'Coleção de soluções para problemas do LeetCode em C++, com foco em complexidade temporal e espacial ótima. Algoritmos clássicos e estruturas de dados.',
    stack: ['C++', 'Algoritmos', 'DSA'],
    url: 'https://github.com/davialves1820/LeetCode-Answers',
  },
  {
    name: 'Jantar dos Filósofos',
    desc: 'Implementação clássica do problema de concorrência em C, com semáforos e mutexes para demonstrar conceitos de sistemas operacionais.',
    stack: ['C', 'Concorrência', 'SO'],
    url: 'https://github.com/davialves1820/Jantar-dos-Filosofos',
  },
  {
    name: 'Algoritmos de Ordenação',
    desc: 'Benchmark comparativo de algoritmos de ordenação — Bubble, Merge, Quick, Heap — com análise de performance em diferentes tipos de entrada.',
    stack: ['C', 'Algoritmos', 'Benchmark'],
    url: 'https://github.com/davialves1820/Algoritmos-de-Ordenacao',
  },
]

export const EDUCATION = {
  degree: 'Ciência da Computação',
  school: 'Universidade Federal da Paraíba (UFPB)',
  period: '2023 — 2028',
  city: 'João Pessoa, PB',
}

export const AWARDS = [
  {
    medal: '🥉',
    title: '3° Lugar — OPI 2025',
    desc: 'Olimpíada Paraibana de Informática — competição estadual de programação, 2025.',
  }
]


