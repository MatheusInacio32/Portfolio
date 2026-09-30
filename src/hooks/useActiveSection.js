import { useEffect, useState } from 'react'

/**
 * Devolve o id da seção que está no meio da tela. Usa IntersectionObserver,
 * então não roda nada a cada pixel de scroll.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    // A última seção é curta e pode nunca cruzar o meio da tela: quando o
    // rodapé aparece, ela passa a ser a ativa.
    const footer = document.getElementById('rodape')
    const footerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(ids[ids.length - 1])
    })
    if (footer) footerObserver.observe(footer)

    return () => {
      observer.disconnect()
      footerObserver.disconnect()
    }
  }, [ids])

  return active
}
