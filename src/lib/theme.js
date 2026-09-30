// Chave nova de propósito: o site antigo gravava "theme" = "light" para todo visitante.
const STORAGE_KEY = 'portfolio-theme'
const THEME_COLORS = { light: '#fbf7f1', dark: '#0e0b09' }

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? THEME_COLORS.dark : THEME_COLORS.light)
}

/**
 * Alterna o tema. Onde houver View Transitions, o novo tema entra como um
 * círculo que se expande a partir do botão.
 */
export function toggleTheme(origin) {
  const dark = !document.documentElement.classList.contains('dark')
  const commit = () => {
    applyTheme(dark)
    try {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
    } catch {
      // Sem localStorage (aba anônima restrita): o tema vale só para esta visita.
    }
  }

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduceMotion) {
    commit()
    return
  }

  const x = origin?.x ?? innerWidth / 2
  const y = origin?.y ?? innerHeight / 2
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  document.startViewTransition(commit).ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 600, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
    )
  })
}
