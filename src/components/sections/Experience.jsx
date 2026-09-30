import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { earlierExperience, experience } from '../../data/experience'
import { profile } from '../../data/profile'
import { formatDuration } from '../../lib/dates'
import { Logo } from '../ui/Logo'
import { Mark } from '../ui/Mark'
import { Period } from '../ui/Period'
import { Section } from '../ui/Section'
import { TagList } from '../ui/TagList'

function Highlights({ items }) {
  return (
    <ul className="mt-4 space-y-2 leading-relaxed">
      {items.map((item) => (
        <li key={item.label} className="relative pl-5">
          <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
          <strong className="font-semibold text-fg">{item.label}:</strong> {item.text}
        </li>
      ))}
    </ul>
  )
}

function RoleDetails({ role }) {
  return (
    <>
      {role.summary && <p className="leading-relaxed">{role.summary}</p>}
      {role.highlights && <Highlights items={role.highlights} />}
      <TagList tags={role.tags} className="mt-5" />
    </>
  )
}

function ExperienceItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const [role, ...previousRoles] = item.roles
  const isCurrent = !role.end

  return (
    <li
      data-reveal
      className={`rounded-[28px] border transition-colors duration-300 ${open ? 'border-line-strong bg-card' : 'border-line hover:border-line-strong hover:bg-card'}`}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-4 rounded-[28px] p-5 text-left sm:gap-5 sm:p-6"
        >
          <Logo image={item.logo} />
          <span className="min-w-0 flex-1">
            <span className="block text-lg leading-snug font-bold tracking-tight text-fg">{role.title}</span>
            <span className="mt-0.5 block text-sm">
              {item.company} · {item.location}
            </span>
            <span className="mt-1 block text-sm text-faint sm:hidden">
              <Period start={role.start} end={role.end} />
            </span>
          </span>
          <span className="hidden shrink-0 text-right text-sm sm:block">
            <span className="block font-medium text-fg">
              <Period start={role.start} end={role.end} />
            </span>
            {isCurrent ? (
              <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent-ink">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                Atual
              </span>
            ) : (
              <span className="mt-0.5 block text-faint">{formatDuration(role.start, role.end)}</span>
            )}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`size-5 shrink-0 text-faint transition-transform duration-500 ease-out-quint ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-out-quint motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-7 sm:pr-8 sm:pb-8 sm:pl-23">
            <p className="mb-4 text-sm text-faint">
              {item.companyDetail && <>{item.companyDetail} · </>}
              {role.type}
              {item.url && (
                <>
                  {' · '}
                  <a href={item.url} target="_blank" rel="noreferrer" className="font-medium text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent">
                    site da empresa
                    <ArrowUpRight aria-hidden="true" className="ml-0.5 inline size-3.5" />
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </>
              )}
            </p>
            <RoleDetails role={role} />

            {previousRoles.map((previous) => (
              <div key={previous.title} className="mt-7 rounded-2xl border border-line p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">Cargo anterior na {item.company}</p>
                <p className="mt-2 font-semibold text-fg">{previous.title}</p>
                <p className="mt-0.5 mb-3 text-sm text-faint">
                  {previous.type} · <Period start={previous.start} end={previous.end} /> ·{' '}
                  {formatDuration(previous.start, previous.end)}
                </p>
                <RoleDetails role={previous} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}

export function Experience() {
  return (
    <Section
      id="experiencia"
      label="Experiência"
      title={
        <>
          Por onde eu <Mark>passei</Mark>.
        </>
      }
      intro="Do mais recente para o mais antigo. Clique em um cargo para ver os detalhes."
    >
      <ol className="space-y-3">
        {experience.map((item, index) => (
          <ExperienceItem key={item.company} item={item} defaultOpen={index === 0} />
        ))}
      </ol>

      <div data-reveal className="mt-12 grid gap-6 md:grid-cols-[14rem_1fr]">
        <h3 className="text-xs font-semibold tracking-[0.18em] text-faint uppercase md:pt-4">Antes da tecnologia</h3>
        <ul className="divide-y divide-line border-y border-line">
          {earlierExperience.map((item) => (
            <li key={item.company} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
              <span>
                <span className="font-semibold text-fg">{item.title}</span> · {item.company}
              </span>
              <span className="text-sm text-faint">
                {item.detail} · <Period start={item.start} end={item.end} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group mt-10 inline-flex items-center gap-1.5 font-semibold text-fg"
      >
        <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-accent">Ver perfil completo no LinkedIn</span>
        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    </Section>
  )
}
