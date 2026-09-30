import { Moon, Sun } from 'lucide-react'
import { toggleTheme } from '../lib/theme'

/**
 * Os dois ícones (e os dois rótulos) vão no HTML e o CSS mostra o certo:
 * nada muda na hidratação.
 */
export function ThemeToggle({ className = '', withLabel = false }) {
  function handleClick(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
  }

  return (
    <button type="button" onClick={handleClick} aria-label="Alternar entre tema claro e escuro" className={className}>
      <Sun aria-hidden="true" className="hidden size-4.5 dark:block" />
      <Moon aria-hidden="true" className="size-4.5 dark:hidden" />
      {withLabel && (
        <span aria-hidden="true" className="max-sm:hidden">
          <span className="hidden dark:inline">Tema claro</span>
          <span className="dark:hidden">Tema escuro</span>
        </span>
      )}
    </button>
  )
}
