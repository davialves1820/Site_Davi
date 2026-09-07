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
  aboutHeadline: ['Full Stack, construindo', 'sistemas para o mundo real.'],
  bio: [
    'Atuo em três frentes ao mesmo tempo: desenvolvimento de produtos, pesquisa e liderança técnica. Na CODATA e no LAVID, trabalho com observabilidade e performance de sistemas governamentais da Paraíba — pipelines de métricas, monitoramento em produção e modernização de infraestrutura pública. Como co-fundador da Connecta CI, estruturei do zero um grupo de tecnologia na UFPB, definindo processos de engenharia e formando a equipe inicial.',
    'Minhas áreas de foco são desenvolvimento web, observabilidade, DevOps e programação competitiva — conquistei o 3º lugar na OPI 2025 aplicando raciocínio algorítmico para resolver problemas com eficiência. Gosto de código limpo, sistemas que escalam e soluções que resolvem problemas concretos de pessoas reais.',
    'Tenho 20 anos e curso Ciência da Computação na UFPB desde 2023. Fora do código, equilibro disciplina e criatividade entre esportes, animes e a fé que orienta minha rotina — princípios que levo também para a forma como construo e lidero.',
  ],
  contextPhoto: '/davi-contexto.jpg',
}

export const SKILLS = [
  {
    icon: '⚡',
    title: 'Frontend',
    main: ['React', 'Next.js', 'TypeScript'],
    familiar: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    icon: '🔧',
    title: 'Backend',
    main: ['Python', 'Node.js', 'APIs REST'],
    familiar: ['NestJS', 'Django', 'Express.js', 'C / C++', 'Java'],
  },
  {
    icon: '🗄️',
    title: 'Banco de Dados',
    main: ['PostgreSQL', 'MongoDB'],
    familiar: ['Redis', 'Prisma', 'Sequelize'],
  },
  {
    icon: '🚀',
    title: 'DevOps & Infra',
    main: ['Docker', 'Git / GitHub', 'Grafana'],
    familiar: ['Linux', 'GitHub Actions', 'CI/CD'],
  },
  {
    icon: '📡',
    title: 'IoT & Protocolos',
    main: ['MQTT', 'LoRa'],
    familiar: ['Geolocalização', 'Tempo Real', 'WebSocket'],
  },
  {
    icon: '🤖',
    title: 'Eng. de Software',
    main: ['Clean Code', 'SOLID', 'TDD'],
    familiar: ['Design Patterns', 'Microserviços', 'Jest', 'Postman', 'Scrum', 'Kanban'],
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
      'Monitoro a performance de sistemas governamentais do estado da Paraíba em produção, com foco em observabilidade e disponibilidade.',
      'Construo dashboards e pipelines de métricas no Grafana para dar visibilidade em tempo real ao desempenho da infraestrutura.',
      'Padronizo o versionamento e a documentação técnica dos serviços internos, reduzindo o tempo de troubleshooting da equipe.',
      'Contribuo com a modernização de infraestrutura pública, containerizando serviços legados com Docker.',
      '[MÉTRICA: nº de sistemas monitorados / redução de tempo de resposta a incidentes]',
    ],
  },
  {
    period: 'Mai/2026 — Presente',
    current: true,
    role: 'Desenvolvedor Full Stack',
    company: 'Laboratório LAVID · UFPB',
    stack: ['Python', 'React', 'Docker', 'Grafana'],
    bullets: [
      'Participo de pesquisa aplicada em observabilidade, prototipando novas abordagens de coleta e análise de métricas de sistemas governamentais.',
      'Desenvolvo features full stack (Python + React) para as ferramentas internas do laboratório usadas nesses estudos.',
      'Escrevo relatórios técnicos e documentação de experimentos para publicação e transferência de conhecimento ao setor público.',
      'Automatizo a geração de relatórios de desempenho a partir dos dados coletados em produção.',
      '[MÉTRICA: nº de sistemas públicos modernizados / experimentos conduzidos]',
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

export interface ShowcaseProject {
  slug: string
  name: string
  problem: string
  solution: string
  result: string
  stack: string[]
  mediaType: 'image' | 'video'
  mediaAlt: string
  mediaSrc?: string
  demoUrl?: string
  repoUrl?: string
  credit?: string
  placeholder?: boolean
}

// Projetos em destaque — seção de vitrine (#projects).
// Preencha mediaSrc (arquivo em /public/projects/), demoUrl e repoUrl quando disponíveis.
export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    slug: 'meu-canto-catolico',
    name: 'Meu Canto Católico',
    problem: 'Católicos que buscam viver a fé no dia a dia precisam consultar vários sites diferentes para liturgia, Bíblia, orações, notícias da Igreja e entre outras informações.',
    solution: 'Portal católico completo — Bíblia Sagrada, Liturgia Diária com comentário exegético, Calendário Litúrgico, orações (incluindo o Terço), Santos do Dia, catequese, notícias do Vaticano, tudo e muito mais em um só lugar.',
    result: 'Rotina espiritual diária centralizada para a comunidade católica de língua portuguesa.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'APIs'],
    mediaType: 'image',
    mediaAlt: 'Tela inicial do Meu Canto Católico com a liturgia diária e orações',
    demoUrl: 'https://www.meucantocatolico.com.br/',
    repoUrl: 'https://github.com/davialves1820/Meu-Canto-Catolico',
    // mediaSrc: '/projects/meu-canto-catolico.webp', // TODO: [MÍDIA]
  },
  {
    slug: 'aquario',
    name: 'Aquário',
    problem: 'Estudantes do CI/UFPB sem um lugar central para murais de laboratórios, vagas e eventos.',
    solution: 'Contribuo com o desenvolvimento frontend e UX da plataforma central de informações e oportunidades do CI, colaborando com pipelines de qualidade via GitHub Actions.',
    result: 'Acesso facilitado a oportunidades para centenas de estudantes.',
    stack: ['React', 'Next.js', 'Git', 'GitHub Actions', 'UX'],
    mediaType: 'image',
    mediaAlt: 'Tela inicial da plataforma Aquário, mural de oportunidades do CI/UFPB',
    demoUrl: 'https://www.aquarioufpb.com/',
    repoUrl: 'https://github.com/aquario-ufpb/aquario',
    credit: 'Projeto open source colaborativo',
    // mediaSrc: '/projects/aquario.webp', // TODO: [MÍDIA]
  },
  {
    slug: 'connecta-ci',
    name: 'Connecta CI',
    // Descrição inferida a partir do site (conteúdo dinâmico limitou o fetch) — revise se necessário.
    problem: 'A Connecta CI precisava de uma presença digital profissional para apresentar o estúdio, a equipe e os projetos do grupo à comunidade da UFPB e a possíveis parceiros.',
    solution: 'Site institucional do estúdio de software Connecta CI, apresentando a equipe, os serviços e o portfólio de projetos desenvolvidos pelo grupo.',
    result: 'Presença digital profissional para atrair novos membros e parceiros.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    mediaType: 'image',
    mediaAlt: 'Tela inicial do site institucional da Connecta CI',
    demoUrl: 'https://connectaci.com.br/',
    credit: 'Desenvolvido com Pedro Falconi, Caio Rafael Oliveira e Gabriel Ribeiro',
    // mediaSrc: '/projects/connecta-ci.webp', // TODO: [MÍDIA]
    // repoUrl: '', // TODO: [LINK_REPO]
  },
  {
    slug: 'connecta-hub',
    name: 'Connecta Hub',
    // Descrição inferida a partir do site (conteúdo dinâmico limitou o fetch) — revise se necessário.
    problem: 'Baixo engajamento dos estudantes com atividades acadêmicas e extracurriculares da comunidade.',
    solution: 'Plataforma de gamificação acadêmica da Connecta CI, usando mecânicas de jogo para incentivar a participação dos estudantes.',
    result: 'Maior engajamento dos estudantes com as atividades acadêmicas e extracurriculares da comunidade.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    mediaType: 'image',
    mediaAlt: 'Tela inicial da plataforma Connecta Hub',
    demoUrl: 'https://connectahub.dev.br/',
    credit: 'Desenvolvido com Pedro Falconi, Caio Rafael Oliveira e Gabriel Ribeiro',
    // mediaSrc: '/projects/connecta-hub.webp', // TODO: [MÍDIA]
    // repoUrl: '', // TODO: [LINK_REPO]
  },
  {
    slug: 'dignare',
    name: 'Dignare',
    problem: 'Cuidado paliativo fragmentado — muitos médicos, muitos protocolos e poucas respostas coordenadas para pacientes e famílias.',
    solution: 'Plataforma web para o ecossistema Dignare, apresentando os três pilares da empresa: cuidado ao paciente, capacitação de profissionais de saúde e consultoria institucional em dignidade e cuidados paliativos.',
    result: 'Presença digital unificada para os serviços de cuidado, formação e consultoria da Dignare.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    mediaType: 'image',
    mediaAlt: 'Tela inicial da plataforma Dignare, ecossistema de cuidados paliativos',
    demoUrl: 'https://www.ecossistemadignare.com/',
    credit: 'Desenvolvido em parceria com Pedro Falconi',
    // mediaSrc: '/projects/dignare.webp', // TODO: [MÍDIA]
    // repoUrl: '', // TODO: [LINK_REPO]
  },
]

export const PROJECTS = [
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