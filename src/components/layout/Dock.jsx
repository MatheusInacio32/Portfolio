import { BriefcaseBusiness, GraduationCap, House, LayoutGrid, Mail, UserRound, Wrench } from 'lucide-react'
import { sections } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'

const ICONS = {
  inicio: House,
  sobre: UserRound,
  experiencia: BriefcaseBusiness,
  projetos: LayoutGrid,
  formacao: GraduationCap,
  habilidades: Wrench,
  contato: Mail,
}

export const SECTION_IDS = sections.map((section) => section.id)

function Tooltip({ children }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 translate-y-1 rounded-lg bg-fg px-2 py-1 text-xs font-semibold whitespace-nowrap text-bg opacity-0 transition-[opacity,translate] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
    >
      {children}
    </span>
  )
}

/**
 * Navegação flutuante estilo dock. No hover o ícone cresce e os vizinhos
 * acompanham, tudo em CSS (ver .dock-item). No celular é a navegação principal.
 * A busca (Ctrl K) não tem botão aqui de propósito: é um easter egg.
 */
export function Dock() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <nav
      aria-label="Seções da página"
      className="intro pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex justify-center px-3"
    >
      <ul
        data-rise
        style={{ '--i': 6 }}
        className="pointer-events-auto flex items-end gap-1 rounded-2xl border border-line-strong bg-surface/95 p-1.5 shadow-[0_18px_50px_-12px_rgb(0_0_0/0.55)]"
      >
        {sections.map(({ id, label }) => {
          const Icon = ICONS[id]
          const current = active === id
          return (
            <li key={id} className={`dock-item ${id === 'inicio' ? 'max-sm:hidden' : ''}`}>
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={current ? 'location' : undefined}
                className={`group relative grid size-10 place-items-center rounded-xl transition-colors hover:bg-hover hover:text-fg ${current ? 'text-fg' : 'text-muted'}`}
              >
                <Icon aria-hidden="true" className={`size-4.75 ${current ? 'text-accent' : ''}`} strokeWidth={current ? 2.2 : 1.8} />
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 size-1 rounded-full bg-accent transition-[opacity,scale] duration-300 ${current ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                />
                <Tooltip>{label}</Tooltip>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
