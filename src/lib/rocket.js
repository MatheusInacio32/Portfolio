import { showToast } from './events'

const MESSAGE = '2º lugar no NASA Space Apps, em 2024 e em 2025.'

/** Easter egg: um foguete cruza a tela. Nada é carregado até alguém pedir. */
export function launchRocket() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showToast(`🚀 ${MESSAGE}`)
    return
  }

  const rocket = document.createElement('div')
  rocket.setAttribute('aria-hidden', 'true')
  rocket.textContent = '🚀'
  rocket.style.cssText =
    'position:fixed;left:0;top:0;z-index:60;font-size:clamp(48px,7vw,84px);pointer-events:none;will-change:translate;animation:rocket 1.9s cubic-bezier(0.55,0,0.25,1) forwards'
  document.body.append(rocket)
  rocket.addEventListener('animationend', () => rocket.remove())
  showToast(`🚀 ${MESSAGE}`)
}

/** Dispara o foguete quando alguém digita "nasa" fora de um campo de texto. */
export function listenForNasa() {
  let typed = ''
  function onKeyDown(event) {
    if (event.ctrlKey || event.metaKey || event.altKey) return
    if (event.target.closest?.('input, textarea, [contenteditable="true"]')) return
    typed = (typed + event.key.toLowerCase()).slice(-4)
    if (typed === 'nasa') {
      typed = ''
      launchRocket()
    }
  }
  addEventListener('keydown', onKeyDown)
  return () => removeEventListener('keydown', onKeyDown)
}
