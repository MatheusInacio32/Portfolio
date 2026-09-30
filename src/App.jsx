import { useEffect } from 'react'
import { Backdrop, Horizon } from './components/Backdrop'
import { Hero } from './components/hero/Hero'
import { Dock } from './components/layout/Dock'
import { Footer } from './components/layout/Footer'
import { ToTop } from './components/layout/ToTop'
import { TopBar } from './components/layout/TopBar'
import { PaletteHost } from './components/overlays/PaletteHost'
import { Toaster } from './components/overlays/Toaster'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { useReveal } from './hooks/useReveal'
import { listenForNasa } from './lib/rocket'

export default function App() {
  useReveal()
  useEffect(() => listenForNasa(), [])
  useEffect(() => {
    console.log('%c✦ Oi, dev!', 'font: 700 15px system-ui; color: #ff8a3d', '\nTem uma busca escondida: aperte Ctrl K. E tente digitar "nasa" na página.')
  }, [])

  return (
    <>
      <a
        href="#conteudo"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <div className="relative isolate overflow-x-clip">
        <Backdrop />
        <TopBar />
        <main id="conteudo">
          <div className="relative">
            <Hero />
            <Horizon />
          </div>
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

      <Dock />
      <ToTop />
      <Toaster />
      <PaletteHost />
    </>
  )
}
