import { ArrowUpRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

/**
 * Imagem em tela cheia num <dialog> modal (Esc e clique fora fecham).
 * A imagem grande só é baixada quando o lightbox abre.
 */
export function Lightbox({ open, onClose, src, alt }) {
  const dialog = useRef(null)

  useEffect(() => {
    const element = dialog.current
    if (open && !element.open) element.showModal()
    if (!open && element.open) element.close()
  }, [open])

  const close = () => dialog.current?.close()

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && close()}
      aria-label={alt}
      className="pop m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:cursor-zoom-out"
    >
      <div className="relative">
        {open && <img src={src} alt={alt} className="max-h-[86dvh] w-auto max-w-[92vw] rounded-2xl shadow-2xl" />}
        <div className="absolute -top-14 right-0 flex gap-2">
          {open && src && (
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center gap-1.5 rounded-full bg-white/10 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Abrir em nova aba
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          )}
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            autoFocus
            className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </dialog>
  )
}
