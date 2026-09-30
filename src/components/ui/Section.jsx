import { Star } from './Star'

/** Seção com o cabeçalho padrão: um selo "✦ Experiência" e um título grande. */
export function Section({ id, label, title, intro, children }) {
  const titleId = `${id}-titulo`
  return (
    <section id={id} aria-labelledby={titleId} className="relative mx-auto max-w-6xl scroll-mt-6 px-5 py-16 md:px-8 md:py-24">
      <header data-reveal className="mb-10 md:mb-14">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
          <Star className="size-3 text-accent" />
          {label}
        </p>
        <h2 id={titleId} className="mt-5 max-w-3xl text-4xl leading-[1.04] font-bold tracking-[-0.03em] text-balance text-fg sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed">{intro}</p>}
      </header>
      {children}
    </section>
  )
}
