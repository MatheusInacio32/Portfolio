import goshine from '../assets/projects/goshine.png?w=480;800;1200&format=avif;webp;jpg&as=picture'
import douumhelp from '../assets/projects/douumhelp-cover.png?w=480;800;1200&format=avif;webp;jpg&as=picture'
import nasa2025 from '../assets/projects/nasa-2025.jpg?w=480;800&format=avif;webp;jpg&as=picture'
import nasa2024 from '../assets/projects/nasa-2024.jpg?w=480;800;1100&format=avif;webp;jpg&as=picture'
import astro from '../assets/projects/agencia-astro.png?w=480;800;1200&format=avif;webp;jpg&as=picture'

// O primeiro projeto aparece em destaque, ocupando a largura toda.
export const projects = [
  {
    title: 'GoShine Estética Automotiva',
    category: 'Site institucional',
    year: '2026',
    description:
      'Site com identidade visual premium para uma estética automotiva de Florianópolis, pensado para transformar visitas em agendamentos pelo WhatsApp, com carregamento rápido e layout responsivo.',
    tags: ['Landing page', 'Performance', 'Conversão'],
    href: 'https://goshine.vercel.app/',
    image: goshine,
    imageAlt: 'Página inicial do site da GoShine, com o título "Seu carro merece brilhar como novo"',
  },
  {
    title: 'Dou Um Help!',
    category: 'App mobile',
    year: '2025',
    description:
      'Plataforma que conecta quem precisa de serviços domésticos a prestadores locais: app para clientes, painel web para prestadores e landing page. Projeto final da Escola de TI da UniCesumar, com cerca de 1.166 horas de desenvolvimento em equipe. Fiquei com o front-end mobile.',
    tags: ['React Native', 'Expo Router', 'Figma'],
    href: 'https://www.douumhelp.com.br',
    image: douumhelp,
    imageAlt: 'Logo do Dou Um Help! ao lado da tela inicial do app no celular',
  },
  {
    title: 'NASA Space Apps 2025',
    category: 'Hackathon',
    badge: '2º lugar em Maringá',
    year: '2025',
    description:
      'Plataforma que convida pessoas neurodivergentes (autistas, disléxicas ou com TDAH) a colaborar com pesquisas científicas, com recompensas e oportunidades de desenvolvimento profissional e acadêmico. Equipe Sociotech.',
    tags: ['Design inclusivo', 'Crowdsourcing', 'Protótipo'],
    href: 'https://www.spaceappschallenge.org/2025/find-a-team/sociotech/?tab=project',
    links: [
      { label: 'Protótipo', href: 'https://github.com/isaac-arantes-t/dataReport' },
      {
        label: 'Pitch',
        href: 'https://gamma.app/docs/Analise-de-Dados-Cientificos-por-Crowdsourcing-Neurodiverso-jkkucayhl3gzeel?mode=doc',
      },
    ],
    image: nasa2025,
    imageAlt: 'Equipe Sociotech segurando o cheque de 2º lugar do NASA Space Apps 2025',
  },
  {
    title: 'NASA Space Apps 2024',
    category: 'Hackathon',
    badge: '2º lugar em Maringá',
    year: '2024',
    description:
      'Microgravity Motion: jogo que usa a câmera para transformar exercício físico em diversão, pensado para manter astronautas saudáveis em missões longas. Feito em 24 horas no desafio Galactic Games.',
    tags: ['Python', 'OpenCV', 'Visão computacional'],
    href: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/socio-tech/',
    links: [
      {
        label: 'Post',
        href: 'https://www.linkedin.com/posts/matheusnunesinacio_spaceapps-nasa-hackathon-activity-7249222706192076800-Vzaj',
      },
    ],
    image: nasa2024,
    imageAlt: 'Equipe Socio Tech no palco com o cheque de 2º lugar do NASA Space Apps 2024',
  },
  {
    title: 'Agência Astro',
    category: 'Site institucional',
    description:
      'Site da agência de tecnologia onde atuei como desenvolvedor, com design moderno e responsivo para apresentar os serviços de software, sistemas e automação.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    href: 'https://agenciastro.com.br',
    image: astro,
    imageAlt: 'Página inicial da Agência Astro, com o título "Tecnologia sob medida para o crescimento da sua empresa"',
  },
]
