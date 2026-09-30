import { useEffect, useState } from 'react'

/**
 * Troca a palavra em destaque de tempos em tempos. Todas as palavras ocupam a
 * mesma célula do grid, então a largura é a da maior e o texto em volta não
 * se mexe (nada de layout shift). O leitor de tela ouve a lista completa.
 */
export function WordRotator({ words, interval = 2400 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setIndex((current) => (current + 1) % words.length), interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  const previous = (index - 1 + words.length) % words.length

  return (
    // O recorte vertical deixa a troca acontecer dentro da própria linha (efeito de letreiro).
    <span className="-mb-1 inline-grid overflow-hidden pb-1 align-bottom">
      <span className="sr-only">{words.join(', ')}.</span>
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden="true"
          className={`col-start-1 row-start-1 font-semibold whitespace-nowrap text-accent transition-[opacity,translate] duration-500 ease-out-quint ${
            i === index ? 'translate-y-0 opacity-100' : i === previous ? '-translate-y-full opacity-0' : 'translate-y-full opacity-0'
          }`}
        >
          {word}.
        </span>
      ))}
    </span>
  )
}
