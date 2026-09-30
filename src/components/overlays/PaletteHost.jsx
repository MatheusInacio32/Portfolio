import { lazy, Suspense, useEffect, useState } from 'react'

// A busca só é baixada na primeira vez que alguém abre: zero custo no carregamento.
const CommandPalette = lazy(() => import('./CommandPalette'))

export function PaletteHost() {
  const [open, setOpen] = useState(false)
  const [requested, setRequested] = useState(false)

  useEffect(() => {
    function show() {
      setRequested(true)
      setOpen(true)
    }
    function onKeyDown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setRequested(true)
        setOpen((value) => !value)
      }
    }
    addEventListener('portfolio:palette', show)
    addEventListener('keydown', onKeyDown)
    return () => {
      removeEventListener('portfolio:palette', show)
      removeEventListener('keydown', onKeyDown)
    }
  }, [])

  if (!requested) return null
  return (
    <Suspense fallback={null}>
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </Suspense>
  )
}
