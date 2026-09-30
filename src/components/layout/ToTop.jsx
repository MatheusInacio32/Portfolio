import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

/**
 * Botão de voltar ao topo. Aparece quando o topo sai da tela (IntersectionObserver,
 * sem escutar o scroll). O anel laranja mostra o quanto da página já foi lido e é
 * animado pelo próprio CSS atrelado à rolagem (ver .to-top-ring).
 */
export function ToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting))
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-4 bottom-24 z-40 grid size-12 place-items-center rounded-full border border-line-strong bg-surface/95 text-fg shadow-[0_14px_40px_-12px_rgb(0_0_0/0.55)] transition-[opacity,translate] duration-300 ease-out-quint sm:right-6 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true" className="absolute -inset-px -rotate-90">
        <circle cx="24" cy="24" r="22.5" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" pathLength="1" className="to-top-ring" />
      </svg>
      <ArrowUp aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </a>
  )
}
