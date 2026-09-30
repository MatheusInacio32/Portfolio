import { useEffect } from 'react'

/**
 * Revela os elementos com [data-reveal] quando entram na tela.
 * O que já está visível na carga é marcado na hora, sem animação, para não
 * piscar; o resto só some depois que este código roda (ver .js-reveal no CSS).
 */
export function useReveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-revealed', '')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    for (const element of document.querySelectorAll('[data-reveal]')) {
      if (element.getBoundingClientRect().top < innerHeight) element.setAttribute('data-revealed', '')
      else observer.observe(element)
    }
    document.documentElement.classList.add('js-reveal')

    return () => observer.disconnect()
  }, [])
}
