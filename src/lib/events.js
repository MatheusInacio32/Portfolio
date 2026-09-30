// Eventos globais pequenos, para qualquer componente pedir um aviso ou abrir a busca
// sem precisar de contexto do React.

export function showToast(message) {
  window.dispatchEvent(new CustomEvent('portfolio:toast', { detail: message }))
}

export function openPalette() {
  window.dispatchEvent(new CustomEvent('portfolio:palette'))
}

export async function copyEmail(email) {
  try {
    await navigator.clipboard.writeText(email)
    showToast('E-mail copiado')
  } catch {
    showToast(`Não consegui copiar. O e-mail é ${email}`)
  }
}
