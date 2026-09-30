import { useEffect, useState } from 'react'

/** Aviso curto no rodapé da tela. Qualquer parte do site chama showToast() (lib/events). */
export function Toaster() {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    let timer
    function onToast(event) {
      setToast({ id: Date.now(), message: event.detail })
      clearTimeout(timer)
      timer = setTimeout(() => setToast(null), 2800)
    }
    addEventListener('portfolio:toast', onToast)
    return () => {
      removeEventListener('portfolio:toast', onToast)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4">
      {toast && (
        <p
          key={toast.id}
          className="rounded-full bg-fg px-4 py-2.5 text-sm font-semibold text-bg shadow-[0_12px_40px_-10px_rgb(0_0_0/0.6)] motion-safe:animate-[toast-in_0.35s_var(--ease-out-quint)]"
        >
          {toast.message}
        </p>
      )}
    </div>
  )
}
