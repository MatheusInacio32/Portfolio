import jonaskaz from '../assets/logos/jonaskaz.png?w=48;96&format=avif;webp;png&as=picture'
import lode from '../assets/logos/lode.png?w=48;96&format=avif;webp;png&as=picture'
import astro from '../assets/logos/astro.png?w=48;96&format=avif;webp;png&as=picture'
import douumhelp from '../assets/logos/douumhelp.png?w=48;96&format=avif;webp;png&as=picture'

// Fonte: LinkedIn (setembro de 2026). A ordem é do mais recente para o mais antigo.
// Datas no formato AAAA-MM. Sem "end" significa que o cargo é o atual.
export const experience = [
  {
    company: 'Rei da Abundância Mentoria',
    url: 'https://jonaskaz.com.br/',
    logo: jonaskaz,
    location: 'Remoto',
    roles: [
      {
        title: 'Desenvolvedor Full Stack',
        type: 'Temporário',
        start: '2026-07',
        summary:
          'Desenvolvo os produtos digitais da empresa: o Social Sellers, CRM de vendas por mensagem direta, e o Pulu, app social de experiências. Atuo do banco de dados à interface, na web e no mobile.',
        tags: ['TypeScript', 'React', 'React Native', 'Expo', 'NestJS', 'Prisma', 'Supabase'],
      },
    ],
  },
  {
    company: 'Lode',
    companyDetail: 'We Love Code',
    logo: lode,
    location: 'Maringá, PR · Presencial',
    roles: [
      {
        title: 'Analista de Suporte',
        type: 'Tempo integral',
        start: '2025-03',
        end: '2026-07',
        highlights: [
          {
            label: 'Encaminhamento de chamados',
            text: 'registro e classificação dos atendimentos por telefone, direcionando cada um ao setor responsável.',
          },
          { label: 'Configuração de exames', text: 'ajustes para garantir a precisão dos exames.' },
          { label: 'Envio de lotes', text: 'apoio aos clientes no envio de lotes para a equipe de Apoio.' },
          { label: 'Interface dos equipamentos', text: 'resolução de problemas para um uso eficiente.' },
          {
            label: 'Impressoras de etiquetas',
            text: 'ajuste e calibração conforme a necessidade de cada cliente.',
          },
        ],
        tags: ['Suporte técnico', 'Sistemas em nuvem', 'Atendimento ao cliente'],
        // Versão corrida para o currículo em PDF, que precisa caber em uma página.
        cvSummary:
          'Registro e encaminhamento de chamados, configuração de exames, apoio aos clientes no envio de lotes, resolução de problemas na interface dos equipamentos e calibração de impressoras de etiquetas.',
      },
      {
        title: 'Estagiário de Implantação e Suporte em TI',
        type: 'Estágio',
        start: '2025-01',
        end: '2025-03',
        summary: 'Implantação de sistemas e suporte ao cliente, com modelagem e desenvolvimento de exames.',
        tags: ['PostgreSQL', 'Linux', 'AWS', 'Java SE', 'Apache Tomcat'],
      },
    ],
  },
  {
    company: 'Agência Astro',
    url: 'https://agenciastro.com.br',
    logo: astro,
    location: 'Maringá, PR · Remoto',
    roles: [
      {
        title: 'Desenvolvedor Front-End',
        type: 'Freelance',
        start: '2024-01',
        end: '2026-01',
        summary:
          'Sites e sistemas para empreendedores, com foco em presença digital e resultado de negócio. Responsável pelo front-end e pelo back-end, com otimização contínua de performance e experiência do usuário.',
        tags: ['React', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap', 'MySQL'],
      },
    ],
  },
  {
    company: 'Dou Um Help!',
    url: 'https://www.douumhelp.com.br',
    logo: douumhelp,
    location: 'Maringá, PR · Híbrido',
    roles: [
      {
        title: 'Desenvolvedor Front-End Mobile',
        type: 'Terceirizado',
        start: '2024-07',
        end: '2025-04',
        summary: 'App de intermediação de serviços domésticos, com foco em impacto social e inclusão digital.',
        highlights: [
          { label: 'React Native', text: 'telas e fluxos com performance e experiência nativa no Android.' },
          { label: 'Navegação', text: 'rotas com Expo Router e estado entre stacks, tabs e modais.' },
          { label: 'Figma', text: 'protótipos interativos para validar a usabilidade antes do código.' },
          { label: 'Atomic Design', text: 'componentes reutilizáveis e consistência visual.' },
          { label: 'Time', text: 'rituais Scrum com UI/UX e back-end, versionamento e code review no GitHub.' },
        ],
        tags: ['React Native', 'Expo Router', 'Figma', 'Scrum', 'GitHub'],
        cvSummary:
          'App de intermediação de serviços domésticos. Telas e fluxos em React Native no Android, rotas com Expo Router, protótipos no Figma, Atomic Design e rituais Scrum com code review no GitHub.',
      },
    ],
  },
]

// Experiências anteriores à tecnologia, mostradas de forma compacta.
export const earlierExperience = [
  {
    title: 'Atendimento ao cliente',
    company: "Koxitta's Salgados",
    detail: 'Meio período · Astorga, PR',
    start: '2020-02',
    end: '2024-10',
  },
  {
    title: 'Apoio administrativo',
    company: 'Nunes & Clemente Consultorias',
    detail: 'Setor agropecuário',
    start: '2019',
    end: '2020',
  },
]
