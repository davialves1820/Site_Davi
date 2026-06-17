// lib/data.ts — Fonte central de dados do portfólio

export const PERSONAL = {
  name: 'Davi Alves Rodrigues',
  firstName: 'Davi',
  lastName: 'Alves',
  role: 'Full Stack Developer',
  location: 'João Pessoa, Paraíba 🇧🇷',
  email: 'davialvesr18@gmail.com',
  github: 'https://github.com/davialves1820',
  linkedin: 'https://www.linkedin.com/in/davi-rodrigues-36750b2a5',
  resume: '/Davi_Alves_CV.pdf',
  bio: [
    'Desenvolvedor Full Stack de 20 anos, católico apostólico romano e graduando em Ciência da Computação na UFPB desde 2023. Busco o desenvolvimento integral através do equilíbrio entre a fé, o intelecto e a saúde, integrando a disciplina dos esportes e a criatividade dos animes à minha rotina.',
    'Apaixonado por criar soluções que impactam a vida real, atuo simultaneamente em pesquisa, liderança e desenvolvimento de produtos. Co-fundei e lidero a Connecta CI, grupo de tecnologia da UFPB, e atuo como desenvolvedor no laboratório LAVID e na CODATA, a Companhia de Processamento de Dados da Paraíba.',
    'Minhas áreas de interesse concentram-se no desenvolvimento web, observabilidade de sistemas, DevOps e programação competitiva. Conquistei o 3º lugar na OPI 2025 e aplico raciocínio lógico e eficiência algorítmica para construir sistemas escaláveis e inteligentes.',
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
    tags: ['Python', 'Node.js', 'NestJS', 'Django', 'Express.js', 'APIs REST', 'C / C++', 'Java'],
  },
  {
    icon: '🗄️',
    title: 'Banco de Dados',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize'],
  },
  {
    icon: '🚀',
    title: 'DevOps & Infra',
    tags: ['Docker', 'Linux', 'Git / GitHub', 'GitHub Actions', 'Grafana', 'CI/CD'],
  },
  {
    icon: '📡',
    title: 'IoT & Protocolos',
    tags: ['MQTT', 'LoRa', 'Geolocalização', 'Tempo Real', 'WebSocket'],
  },
  {
    icon: '🤖',
    title: 'Eng. de Software',
    tags: ['Clean Code', 'SOLID', 'Design Patterns', 'Microserviços', 'TDD', 'Jest', 'Postman', 'Scrum', 'Kanban'],
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
    period: 'Mai/2026 — Presente',
    current: true,
    role: 'Estagiário Full Stack',
    company: 'CODATA — Companhia de Processamento de Dados da Paraíba',
    stack: ['Python', 'Grafana', 'Docker', 'Git'],
    bullets: [
      'Desenvolvimento Full Stack em Python com foco em análise de performance de sistemas governamentais do estado da Paraíba.',
      'Implementação de pipelines de coleta, processamento e visualização de métricas de desempenho em produção.',
      'Aplicação de boas práticas de Engenharia de Software: versionamento semântico, revisão de código e documentação técnica.',
      'Integração de ferramentas de monitoramento e geração de relatórios automatizados para a administração pública estadual.',
      'Colaboração em soluções para modernização de sistemas da administração pública estadual da Paraíba.',
    ],
  },
  {
    period: 'Mai/2026 — Presente',
    current: true,
    role: 'Desenvolvedor Full Stack',
    company: 'Laboratório LAVID · UFPB',
    stack: ['Python', 'React', 'Docker', 'Grafana'],
    bullets: [
      'Desenvolvimento Full Stack em Python com foco em análise de performance de sistemas governamentais.',
      'Implementação de pipelines de coleta, processamento e visualização de métricas de desempenho.',
      'Aplicação de boas práticas de Engenharia de Software: versionamento semântico, revisão de código e documentação técnica.',
      'Integração de ferramentas de monitoramento e geração de relatórios automatizados.',
      'Colaboração em soluções para modernização de sistemas da administração pública estadual.',
    ],
  },
  {
    period: 'Ago/2025 — Presente',
    current: true,
    role: 'Fundador & Vice-Presidente',
    company: 'Connecta CI · UFPB',
    stack: ['Gestão', 'React', 'Node.js', 'Scrum', 'Liderança'],
    bullets: [
      'Co-fundação e estruturação completa da Connecta CI, grupo de tecnologia da UFPB — da definição do modelo até a formação da equipe inicial.',
      'Adoção de metodologias ágeis (Scrum/Kanban) para coordenação de projetos e equipes multidisciplinares.',
      'Definição de processos internos de desenvolvimento, revisão de código e entrega de software com qualidade.',
      'Facilitação da comunicação entre membros, parceiros e instituições; gestão de stakeholders e planejamento estratégico.',
    ],
  },
  {
    period: 'Nov/2024 — Presente',
    current: true,
    role: 'Bolsista',
    company: 'PET Computação · UFPB',
    stack: ['Web Dev', 'Marketing Digital', 'Liderança', 'Podcast'],
    bullets: [
      'Coordenador da área de mídias e responsável pelo podcast "Além do Ponto e Vírgula", voltado à comunidade de computação da UFPB.',
      'Liderança da equipe de marketing; organização e condução de reuniões com atas e planejamento estratégico.',
      'Atuação nos três pilares universitários: ensino, pesquisa e extensão comunitária.',
    ],
  },
  {
    period: 'Nov/2025 — Mar/2026',
    current: false,
    role: 'Desenvolvedor Frontend',
    company: 'Aquário · UFPB',
    stack: ['React', 'Next.js', 'Git', 'GitHub Actions', 'UX'],
    bullets: [
      'Desenvolvimento da plataforma central de informações e oportunidades do Centro de Informática da UFPB, servindo centenas de estudantes.',
      'Otimização de UX, facilitando o acesso a murais de laboratórios, vagas e eventos do CI/UFPB.',
      'Contribuição em projeto open source com boas práticas de desenvolvimento web e colaboração via Git/GitHub.',
      'Implementação de pipelines de revisão de código e controle de qualidade no repositório colaborativo com GitHub Actions.',
    ],
  },
  {
    period: 'Ago/2025 — Mar/2026',
    current: false,
    role: 'Desenvolvedor Full Stack',
    company: 'Buszer · UFPB',
    stack: ['React', 'Node.js', 'MQTT', 'LoRa', 'IoT', 'Mapas'],
    bullets: [
      'Arquitetura e desenvolvimento completo de aplicação full stack para rastreamento em tempo real do ônibus circular da UFPB.',
      'Integração IoT: comunicação entre broker MQTT e front-end via protocolo LoRa para transmissão de dados de geolocalização.',
      'Implementação de interfaces responsivas e mapas interativos com foco em experiência do usuário em tempo real.',
      'Condução de reuniões de sprint com pautas, atas e planejamento de entregas em ciclos ágeis.',
    ],
  },
  {
    period: 'Set/2024 — Nov/2025',
    current: false,
    role: 'Educador em Automação e IA',
    company: 'JPTech · UFPB',
    stack: ['Python', 'IA', 'Make (no-code)', 'Didática'],
    bullets: [
      'Planejamento e ministração de aulas de automação e inteligência artificial para iniciantes sem experiência em programação.',
      'Capacitação na plataforma no-code Make com foco em otimização de processos corporativos e pessoais.',
      'Elaboração de material didático acessível, exercícios práticos e projetos hands-on sobre IA aplicada.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'Central Católica',
    desc: 'Plataforma religiosa completa com Bíblia Sagrada, Liturgia Diária, Calendário Litúrgico, Orações, Santos do Dia e Notícias do Vaticano — feita para católicos que buscam aprofundar a fé no dia a dia.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'APIs'],
    url: 'https://central-catolica.vercel.app/',
    live: true,
  },
  {
    name: 'Algoritmos de Otimização (TSP)',
    desc: 'Solução para o Problema do Caixeiro Viajante aplicada à cidade de João Pessoa. Implementa e compara múltiplos algoritmos heurísticos com visualização de rotas no mapa real.',
    stack: ['Python', 'Algoritmos', 'Grafos'],
    url: 'https://github.com/davialves1820/Algoritmos-de-otimizacao',
    live: false,
  },
  {
    name: 'Backend Node',
    desc: 'API RESTful modular em Node.js com autenticação JWT, CRUD completo, validações e documentação. Base de referência para projetos full stack.',
    stack: ['Node.js', 'JavaScript', 'REST', 'JWT'],
    url: 'https://github.com/davialves1820/BackendNode',
    live: false,
  },
  {
    name: 'LeetCode Answers',
    desc: 'Coleção de soluções para problemas do LeetCode em C++, com foco em complexidade temporal e espacial ótima. Algoritmos clássicos e estruturas de dados.',
    stack: ['C++', 'Algoritmos', 'DSA'],
    url: 'https://github.com/davialves1820/LeetCode-Answers',
    live: false,
  },
  {
    name: 'Jantar dos Filósofos',
    desc: 'Implementação clássica do problema de concorrência em C, com semáforos e mutexes para demonstrar conceitos de sistemas operacionais.',
    stack: ['C', 'Concorrência', 'SO'],
    url: 'https://github.com/davialves1820/Jantar-dos-Filosofos',
    live: false,
  },
  {
    name: 'Algoritmos de Ordenação',
    desc: 'Benchmark comparativo de algoritmos de ordenação — Bubble, Merge, Quick, Heap — com análise de performance em diferentes tipos de entrada.',
    stack: ['C', 'Algoritmos', 'Benchmark'],
    url: 'https://github.com/davialves1820/Algoritmos-de-Ordenacao',
    live: false,
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
    desc: 'Olimpíada Paraibana de Informática — competição estadual de programação competitiva, 2025.',
  },
]

export const ANIMES = [
  {
    title: 'Steins;Gate',
    genre: 'Sci-fi · Thriller',
    quote: '"O homem não pode ganhar algo sem sacrificar algo em troca."',
    emoji: '⏳',
    color: 'rgba(0,198,255,0.15)',
  },
  {
    title: 'Attack on Titan',
    genre: 'Ação · Drama',
    quote: '"Se você não arrisca sua vida, você não pode criar um futuro."',
    emoji: '⚔️',
    color: 'rgba(0,98,255,0.15)',
  },
  {
    title: 'Death Note',
    genre: 'Suspense · Psicológico',
    quote: '"Humanos que não podem ser usados merecem morrer."',
    emoji: '📓',
    color: 'rgba(46,143,255,0.12)',
  },
]

export const FAITH_QUOTE = {
  text: '"A razão é a maior perfeição do homem, e é pela razão que o homem é capaz de encontrar a Deus."',
  author: 'São Tomás de Aquino',
}

export const CURRENT_VIBE = {
  reading: 'Suma Teológica — São Tomás de Aquino',
  grinding: 'LeetCode · Grafos & DP',
  building: 'Central Católica + LAVID + CODATA',
  sport: 'Musculação 🏋️',
}

// Stats for the hero section
export const STATS = [
  { value: '7+', label: 'Projetos Reais' },
  { value: '2+', label: 'Anos Dev' },
  { value: '3°', label: 'OPI 2025' },
  { value: '5+', label: 'Linguagens' },
]