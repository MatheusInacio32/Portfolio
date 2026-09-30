import photo from '../assets/profile/matheus.jpg?w=400;600;800;1000&format=avif;webp;jpg&as=picture'

export const profile = {
  name: 'Matheus Nunes Inácio',
  firstName: 'Matheus',
  role: 'Desenvolvedor Full Stack',
  location: 'Maringá, PR',
  country: 'Brasil',
  timeZone: 'America/Sao_Paulo',
  email: 'mateusinacio32@gmail.com',
  phone: '(44) 99960-9434',
  whatsapp: '5544999609434',
  whatsappMessage: 'Olá, Matheus! Vi seu portfólio e gostaria de conversar.',
  site: 'https://www.matheusinacio.com.br/',
  cv: '/curriculo-matheus-nunes-inacio.pdf',
  linkedin: 'https://www.linkedin.com/in/matheusnunesinacio',
  linkedinLabel: 'in/matheusnunesinacio',
  github: 'https://github.com/MatheusInacio32',
  githubLabel: '@MatheusInacio32',
  photo,
}

// Largura real do card da foto em cada tela. Usada no <img> e no pré-carregamento da build.
export const photoSizes = '(min-width: 1024px) 380px, (min-width: 640px) 50vw, calc(100vw - 40px)'

// Palavras que giram na frase do topo: "Do banco de dados à interface, construo ___".
export const buildWords = ['produtos web', 'apps mobile', 'APIs', 'CRMs', 'landing pages']

export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`
export const emailUrl = `mailto:${profile.email}`

export const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
]

export const highlights = [
  { value: '2×', label: '2º lugar no NASA Space Apps Challenge em Maringá, em 2024 e 2025' },
  { value: 'Web e mobile', label: 'React, React Native e NestJS, do banco de dados à interface' },
  { value: 'Desde 2024', label: 'entregando sites, sistemas e apps para clientes e produtos reais' },
  { value: 'ADS', label: 'Tecnólogo em Análise e Desenvolvimento de Sistemas pela UniCesumar' },
]
