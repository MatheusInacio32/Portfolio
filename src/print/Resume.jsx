import { certificates, courses, degree } from '../data/education'
import { earlierExperience, experience } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { formatDuration, formatMonth } from '../lib/dates'

// Currículo em A4, gerado na build com os mesmos dados do site.
// O PDF sai de "npm run assets" (scripts/generate-assets.js).

const period = (start, end) => `${formatMonth(start)} → ${end ? formatMonth(end) : 'atual'}`

// A menor versão em JPG basta para a foto de 18 mm e deixa o PDF leve.
const jpegSources = profile.photo.sources.jpeg ?? profile.photo.sources.jpg
const smallPhoto = jpegSources?.split(',')[0].trim().split(' ')[0] ?? profile.photo.img.src

function Heading({ children }) {
  return (
    <h2 className="mb-2.5 flex items-center gap-2 text-[9.5pt] font-bold tracking-[0.14em] text-[#c2410c] uppercase">
      {children}
      <span className="h-px flex-1 bg-[#eae1d6]" />
    </h2>
  )
}

function Role({ role, company, location, first }) {
  return (
    <div className={first ? '' : 'mt-2'}>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[10pt] font-bold text-[#1c1612]">
          {role.title} <span className="font-medium text-[#5b5048]">· {company}</span>
        </p>
        <p className="shrink-0 text-[8.5pt] font-semibold text-[#5b5048]">{period(role.start, role.end)}</p>
      </div>
      <p className="text-[8.5pt] text-[#776b61]">
        {[location, role.type, role.end && formatDuration(role.start, role.end)].filter(Boolean).join(' · ')}
      </p>
      <p className="mt-0.5 text-[8.8pt] leading-snug">{role.cvSummary ?? role.summary}</p>
      <p className="mt-0.5 text-[8.3pt] text-[#776b61]">{role.tags.join(' · ')}</p>
    </div>
  )
}

export function Resume() {
  return (
    <main className="mx-auto flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-white px-[13mm] py-[10mm] font-sans text-[#3d342d]">
      <header className="flex items-center gap-5 border-b border-[#eae1d6] pb-4">
        <img src={smallPhoto} alt="" width="72" height="72" className="size-[18mm] rounded-2xl object-cover object-[50%_20%]" />
        <div className="flex-1">
          <h1 className="text-[22pt] leading-none font-extrabold tracking-[-0.03em] text-[#1c1612]">
            {profile.name}
            <span className="text-[#c2410c]">.</span>
          </h1>
          <p className="mt-1.5 text-[12pt] font-semibold text-[#c2410c]">{profile.role}</p>
          <p className="mt-2 text-[8.5pt] leading-relaxed text-[#5b5048]">
            <a href={`mailto:${profile.email}`}>{profile.email}</a> · WhatsApp {profile.phone} ·{' '}
            <a href={profile.linkedin}>linkedin.com/{profile.linkedinLabel}</a> · <a href={profile.github}>github.com/MatheusInacio32</a> ·{' '}
            <a href={profile.site}>matheusinacio.com.br</a> · {profile.location}
          </p>
        </div>
      </header>

      <section className="mt-3.5">
        <Heading>Resumo</Heading>
        <p className="text-[9pt] leading-snug">
          Desenvolvedor full stack: construo produtos web e mobile do banco de dados à interface, com React, React Native,
          NestJS e Supabase. Hoje desenvolvo o Social Sellers e o Pulu. Combino design e código, com mais de um ano e meio
          de suporte perto de quem usa o software. Tecnólogo em ADS pela UniCesumar e 2º lugar duas vezes no NASA Space
          Apps Challenge em Maringá.
        </p>
      </section>

      <div className="mt-3.5 grid flex-1 grid-cols-[1fr_58mm] gap-7">
        <div>
          <section>
            <Heading>Experiência</Heading>
            {experience.map((item, index) =>
              item.roles.map((role, roleIndex) => (
                <Role
                  key={`${item.company}-${role.title}`}
                  role={role}
                  company={item.company}
                  location={item.location}
                  first={index === 0 && roleIndex === 0}
                />
              )),
            )}
            <p className="mt-2.5 text-[8.5pt] text-[#776b61]">
              Antes da tecnologia:{' '}
              {earlierExperience.map((item) => `${item.title}, ${item.company} (${period(item.start, item.end)})`).join('; ')}.
            </p>
          </section>
        </div>

        <aside className="space-y-4">
          <section>
            <Heading>Projetos</Heading>
            <ul className="space-y-1.5 text-[8.5pt] leading-snug">
              {projects.map((project) => (
                <li key={project.title}>
                  <a href={project.href} className="font-bold text-[#1c1612]">
                    {project.title}
                  </a>
                  {project.badge && <span className="text-[#c2410c]"> · {project.badge}</span>}
                  <span className="block text-[#776b61]">
                    {project.category}
                    {project.year && ` · ${project.year}`}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Formação</Heading>
            <p className="text-[9pt] leading-snug font-bold text-[#1c1612]">{degree.title}</p>
            <p className="text-[8.5pt] text-[#776b61]">
              {degree.institution} · {period(degree.start, degree.end)}
            </p>
          </section>

          <section>
            <Heading>Certificados</Heading>
            <ul className="space-y-1.5 text-[8.5pt] leading-snug">
              {[...certificates, ...courses].map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#1c1612]">{item.title}</span>
                  <span className="block text-[#776b61]">
                    {item.issuer} · {formatMonth(item.date)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Habilidades</Heading>
            <div className="space-y-1.5 text-[8.5pt] leading-snug">
              {skillGroups.map((group) => (
                <p key={group.title}>
                  <span className="font-semibold text-[#1c1612]">{group.title}:</span>{' '}
                  {group.items.map((item) => item.name).join(', ')}
                </p>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  )
}
