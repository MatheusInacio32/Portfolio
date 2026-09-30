import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { stack } from '../../data/skills'
import { BrandIcon } from '../ui/icons'

const half = Math.ceil(stack.length / 2)
const ROWS = [stack.slice(0, half), stack.slice(half)]

function Items({ items, hidden }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-2 pr-2">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-2 text-sm font-medium whitespace-nowrap text-fg"
        >
          <BrandIcon icon={item.icon} className="size-4 text-accent" />
          {item.name}
        </li>
      ))}
    </ul>
  )
}

/**
 * Duas faixas de tecnologias em loop, em sentidos opostos. Cada lista vai
 * duplicada e desliza meia largura. Tem botão de pausa porque conteúdo que se
 * mexe por mais de 5 s precisa de um (WCAG 2.2.2).
 */
export function StackMarquee() {
  const [paused, setPaused] = useState(false)
  const [onScreen, setOnScreen] = useState(true)
  const marquee = useRef(null)

  // Fora da tela a faixa para de animar: nada de quadros desenhados sem ninguém ver.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting))
    observer.observe(marquee.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <p className="sr-only">Tecnologias que mais uso: {stack.map((item) => item.name).join(', ')}.</p>
      <div
        ref={marquee}
        aria-hidden="true"
        data-paused={paused || !onScreen || undefined}
        className="marquee -mx-6 flex flex-col gap-2 overflow-hidden mask-[linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]"
      >
        {ROWS.map((row, index) => (
          <div key={index} className={`marquee-track flex w-max ${index === 1 ? 'marquee-reverse' : ''}`}>
            <Items items={row} />
            <Items items={row} hidden />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        aria-label={paused ? 'Retomar a faixa de tecnologias' : 'Pausar a faixa de tecnologias'}
        className="absolute top-4 right-4 grid size-8 place-items-center rounded-full text-faint transition-colors hover:bg-hover hover:text-fg motion-reduce:hidden"
      >
        {paused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
      </button>
    </>
  )
}
