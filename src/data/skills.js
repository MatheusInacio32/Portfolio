import {
  siCss,
  siExpo,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLinux,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
} from 'simple-icons'

// Faixa que desliza no topo: o que mais uso hoje.
export const stack = [
  { name: 'React', icon: siReact },
  { name: 'React Native', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'NestJS', icon: siNestjs },
  { name: 'Supabase', icon: siSupabase },
  { name: 'Prisma', icon: siPrisma },
  { name: 'Expo', icon: siExpo },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'Figma', icon: siFigma },
]

// Ícones do Simple Icons (CC0). Itens sem "icon" aparecem só com o nome.
export const skillGroups = [
  {
    title: 'Front-end',
    items: [
      { name: 'TypeScript', icon: siTypescript },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'React', icon: siReact },
      { name: 'Next.js', icon: siNextdotjs },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'HTML5', icon: siHtml5 },
      { name: 'CSS', icon: siCss },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'React Native', icon: siReact },
      { name: 'Expo', icon: siExpo },
    ],
  },
  {
    title: 'Back-end e dados',
    items: [
      { name: 'NestJS', icon: siNestjs },
      { name: 'Node.js', icon: siNodedotjs },
      { name: 'Prisma', icon: siPrisma },
      { name: 'Supabase', icon: siSupabase },
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'MySQL', icon: siMysql },
      { name: 'APIs REST' },
    ],
  },
  {
    title: 'Ferramentas e práticas',
    items: [
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
      { name: 'Figma', icon: siFigma },
      { name: 'Vite', icon: siVite },
      { name: 'Linux', icon: siLinux },
      { name: 'AWS' },
      { name: 'Scrum' },
      { name: 'UX/UI Design' },
    ],
  },
  {
    title: 'Também já usei',
    items: [
      { name: 'Python', icon: siPython },
      { name: 'Java', icon: siOpenjdk },
    ],
  },
]
