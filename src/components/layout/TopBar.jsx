import { profile } from '../../data/profile'
import { ThemeToggle } from '../ThemeToggle'
import { Monogram } from '../ui/Monogram'

export function TopBar() {
  return (
    <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 pt-5 md:px-8 md:pt-7">
      <a href="#inicio" className="group flex items-center gap-3 text-fg" aria-label={`${profile.name}, voltar ao início`}>
        <Monogram className="size-11 text-[15px] transition-transform duration-500 ease-out-quint group-hover:scale-105 motion-reduce:transition-none" />
        <span className="text-[15px] leading-tight font-semibold tracking-tight">
          Matheus Inácio
          <span className="block text-xs font-medium text-faint">{profile.role}</span>
        </span>
      </a>

      <ThemeToggle
        withLabel
        className="flex h-11 items-center gap-2 rounded-full border border-line-strong bg-card px-4 text-sm font-semibold text-fg transition-colors hover:bg-hover"
      />
    </header>
  )
}
