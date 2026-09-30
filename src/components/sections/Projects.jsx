import { ArrowUpRight, Trophy } from 'lucide-react'
import { projects } from '../../data/projects'
import { Mark } from '../ui/Mark'
import { Picture } from '../ui/Picture'
import { Section } from '../ui/Section'
import { TagList } from '../ui/TagList'

const pending = new WeakMap()

/**
 * Guarda a posição do cursor no card; o brilho é um gradiente que lê essas
 * variáveis. Atualiza no máximo uma vez por quadro.
 */
function followPointer(event) {
  const card = event.currentTarget
  const { clientX, clientY } = event
  if (pending.has(card)) return
  pending.set(
    card,
    requestAnimationFrame(() => {
      pending.delete(card)
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--x', `${clientX - rect.left}px`)
      card.style.setProperty('--y', `${clientY - rect.top}px`)
    }),
  )
}

function ProjectCard({ project, featured }) {
  return (
    <li data-reveal className={featured ? 'md:col-span-2' : ''}>
      <article
        onPointerMove={followPointer}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-card transition-[border-color,translate] duration-500 ease-out-quint hover:-translate-y-1 hover:border-line-strong motion-reduce:transition-none ${
          featured ? 'md:flex-row' : ''
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(460px_circle_at_var(--x,50%)_var(--y,50%),var(--glow),transparent_65%)]"
        />

        <div className={`relative overflow-hidden bg-surface ${featured ? 'aspect-16/10 md:aspect-auto md:w-[58%] md:shrink-0' : 'aspect-16/10'}`}>
          <Picture
            image={project.image}
            alt={project.imageAlt}
            sizes={featured ? '(min-width: 768px) 640px, 100vw' : '(min-width: 768px) 540px, 100vw'}
            className="block size-full"
            imgClassName="size-full object-cover object-top transition-transform duration-700 ease-out-quint group-hover:scale-[1.04] motion-reduce:transition-none"
          />
          {project.badge && (
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white">
              <Trophy aria-hidden="true" className="size-3.5 text-amber-300" />
              {project.badge}
            </span>
          )}
        </div>

        <div className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? 'md:justify-center md:p-10' : ''}`}>
          <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">
            {project.category}
            {project.year && <> · {project.year}</>}
          </p>
          <h3 className={`mt-2 font-bold tracking-tight text-fg ${featured ? 'text-3xl' : 'text-2xl'}`}>
            <a href={project.href} target="_blank" rel="noreferrer" className="after:absolute after:inset-0 after:z-20">
              {project.title}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </h3>
          <p className="mt-3 leading-relaxed">{project.description}</p>
          <TagList tags={project.tags} className="mt-5" />

          <div className="relative z-30 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-semibold">
            <span aria-hidden="true" className="inline-flex items-center gap-1 text-accent">
              Ver projeto
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            {project.links?.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-1 text-fg">
                <span className="border-b border-line-strong pb-px transition-colors group-hover/link:border-accent">{link.label}</span>
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
                <span className="sr-only"> de {project.title} (abre em nova aba)</span>
              </a>
            ))}
          </div>
        </div>
      </article>
    </li>
  )
}

export function Projects() {
  return (
    <Section
      id="projetos"
      label="Projetos"
      title={
        <>
          Coisas que eu <Mark>construí</Mark>.
        </>
      }
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </ul>
    </Section>
  )
}
