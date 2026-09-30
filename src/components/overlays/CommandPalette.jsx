import {
  ArrowRight,
  BriefcaseBusiness,
  Copy,
  CornerDownLeft,
  Download,
  GraduationCap,
  House,
  LayoutGrid,
  Mail,
  Moon,
  Rocket,
  Search,
  UserRound,
  Wrench,
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { siGithub, siWhatsapp } from 'simple-icons'
import { emailUrl, profile, sections, whatsappUrl } from '../../data/profile'
import { copyEmail } from '../../lib/events'
import { launchRocket } from '../../lib/rocket'
import { toggleTheme } from '../../lib/theme'
import { BrandIcon, LinkedInIcon } from '../ui/icons'

const SECTION_ICONS = {
  inicio: House,
  sobre: UserRound,
  experiencia: BriefcaseBusiness,
  projetos: LayoutGrid,
  formacao: GraduationCap,
  habilidades: Wrench,
  contato: Mail,
}

const normalize = (text) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const openLink = (href) => window.open(href, '_blank', 'noopener')

function buildCommands() {
  const goTo = sections.map(({ id, label }) => {
    const Icon = SECTION_ICONS[id]
    return {
      group: 'Navegação',
      label: `Ir para ${label}`,
      icon: <Icon className="size-4" />,
      run: () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
    }
  })

  return [
    ...goTo,
    {
      group: 'Ações',
      label: 'Baixar currículo em PDF',
      keywords: 'cv curriculo resume',
      icon: <Download className="size-4" />,
      run: () => {
        const link = document.createElement('a')
        link.href = profile.cv
        link.download = ''
        link.click()
      },
    },
    { group: 'Ações', label: 'Copiar e-mail', keywords: 'email', icon: <Copy className="size-4" />, run: () => copyEmail(profile.email) },
    { group: 'Ações', label: 'Alternar tema claro e escuro', keywords: 'dark light modo', icon: <Moon className="size-4" />, run: () => toggleTheme() },
    { group: 'Ações', label: 'Lançar foguete', keywords: 'nasa espaco easter egg', icon: <Rocket className="size-4" />, run: launchRocket },
    { group: 'Contato', label: 'Conversar no WhatsApp', icon: <BrandIcon icon={siWhatsapp} className="size-4" />, run: () => openLink(whatsappUrl) },
    { group: 'Contato', label: 'Enviar e-mail', icon: <Mail className="size-4" />, run: () => (location.href = emailUrl) },
    { group: 'Contato', label: 'Abrir LinkedIn', icon: <LinkedInIcon className="size-4" />, run: () => openLink(profile.linkedin) },
    { group: 'Contato', label: 'Abrir GitHub', icon: <BrandIcon icon={siGithub} className="size-4" />, run: () => openLink(profile.github) },
  ]
}

export default function CommandPalette({ open, onClose }) {
  const dialog = useRef(null)
  const list = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const commands = useMemo(buildCommands, [])

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean)
    if (!terms.length) return commands
    return commands.filter((command) => {
      const haystack = normalize(`${command.label} ${command.group} ${command.keywords ?? ''}`)
      return terms.every((term) => haystack.includes(term))
    })
  }, [commands, query])

  useEffect(() => {
    const element = dialog.current
    if (open && !element.open) {
      setQuery('')
      setActive(0)
      element.showModal()
    }
    if (!open && element.open) element.close()
  }, [open])

  useEffect(() => setActive(0), [query])

  useEffect(() => {
    list.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [active])

  function run(command) {
    dialog.current.close()
    // Roda depois de o diálogo devolver o foco, para o scroll não ser desfeito.
    requestAnimationFrame(() => command.run())
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index) => (index + 1) % Math.max(results.length, 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => (index - 1 + results.length) % Math.max(results.length, 1))
    } else if (event.key === 'Enter' && results[active]) {
      event.preventDefault()
      run(results[active])
    }
  }

  let lastGroup = null

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && dialog.current.close()}
      aria-label="Busca e atalhos"
      className="pop mx-auto mt-[12vh] w-[min(92vw,36rem)] overflow-hidden rounded-3xl border border-line-strong bg-surface p-0 text-muted shadow-[0_30px_90px_-20px_rgb(0_0_0/0.7)]"
    >
      <div className="flex items-center gap-3 border-b border-line px-5">
        <Search aria-hidden="true" className="size-5 shrink-0 text-faint" />
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Busque uma seção ou ação..."
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[active] ? `palette-item-${active}` : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          spellCheck="false"
          className="h-14 w-full bg-transparent text-base text-fg outline-none placeholder:text-faint"
        />
        <kbd className="rounded-md border border-line px-1.5 py-0.5 font-sans text-[11px] font-semibold text-faint">Esc</kbd>
      </div>

      <ul ref={list} id="palette-list" role="listbox" aria-label="Resultados" className="max-h-[min(60vh,26rem)] overflow-y-auto p-2">
        {results.length === 0 && <li className="px-3 py-8 text-center text-sm">Nada encontrado para “{query}”.</li>}
        {results.map((command, index) => {
          const showGroup = command.group !== lastGroup
          lastGroup = command.group
          const isActive = index === active
          return (
            <li key={command.label} role="presentation">
              {showGroup && <p className="px-3 pt-3 pb-1.5 text-[11px] font-semibold tracking-[0.16em] text-faint uppercase">{command.group}</p>}
              <div
                id={`palette-item-${index}`}
                role="option"
                aria-selected={isActive}
                data-active={isActive}
                onMouseMove={() => setActive(index)}
                onClick={() => run(command)}
                className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${isActive ? 'bg-accent-soft text-fg' : 'text-muted'}`}
              >
                <span className={isActive ? 'text-accent' : 'text-faint'}>{command.icon}</span>
                <span className="flex-1 font-medium">{command.label}</span>
                {isActive && <ArrowRight aria-hidden="true" className="size-4 text-accent" />}
              </div>
            </li>
          )
        })}
      </ul>

      <p className="flex items-center gap-4 border-t border-line px-5 py-3 text-xs text-faint">
        <span className="flex items-center gap-1.5">
          <kbd className="rounded border border-line px-1 font-sans">↑</kbd>
          <kbd className="rounded border border-line px-1 font-sans">↓</kbd> navegar
        </span>
        <span className="flex items-center gap-1.5">
          <CornerDownLeft aria-hidden="true" className="size-3.5" /> abrir
        </span>
        <span className="ml-auto">Dica: digite “nasa” fora da busca</span>
      </p>
    </dialog>
  )
}
