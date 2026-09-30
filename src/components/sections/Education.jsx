import { GraduationCap, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { certificates, courses, degree } from '../../data/education'
import { formatMonth } from '../../lib/dates'
import { Lightbox } from '../overlays/Lightbox'
import { secondaryButton } from '../ui/buttons'
import { Logo } from '../ui/Logo'
import { Mark } from '../ui/Mark'
import { Period } from '../ui/Period'
import { Picture } from '../ui/Picture'
import { Section } from '../ui/Section'

function DegreeCard({ onOpen }) {
  const open = () => onOpen({ src: degree.diplomaFull, alt: degree.diplomaAlt })

  return (
    <article data-reveal className="grid overflow-hidden rounded-[28px] border border-line bg-card lg:grid-cols-[1fr_1.45fr]">
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-3">
          <Logo image={degree.logo} />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-ink">
            <GraduationCap aria-hidden="true" className="size-3.5" />
            Formação superior
          </span>
        </div>
        <h3 className="mt-6 text-2xl leading-snug font-bold tracking-tight text-balance text-fg sm:text-3xl">{degree.title}</h3>
        <p className="mt-3">
          {degree.institution} · {degree.location}
        </p>
        <p className="mt-1 font-medium text-fg">
          <Period start={degree.start} end={degree.end} />
        </p>
        <p className="mt-4 text-sm text-faint">{degree.note}</p>
        <button type="button" onClick={open} className={`${secondaryButton} mt-8 self-start`}>
          <Maximize2 aria-hidden="true" className="size-4" />
          Ver diploma em tela cheia
        </button>
      </div>

      {/* O diploma em destaque, como um quadro na parede. */}
      <button
        type="button"
        onClick={open}
        aria-label="Abrir o diploma em tela cheia"
        className="group relative isolate grid cursor-zoom-in place-items-center overflow-hidden border-t border-line bg-surface p-5 sm:p-8 lg:border-t-0 lg:border-l lg:p-10"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_45%,var(--glow),transparent_70%)] opacity-70"
        />
        <Picture
          image={degree.diploma}
          alt={degree.diplomaAlt}
          sizes="(min-width: 1024px) 620px, 92vw"
          className="block w-full overflow-hidden rounded-xl shadow-[0_30px_70px_-24px_rgb(0_0_0/0.65)] ring-1 ring-black/10 transition-[rotate,scale] duration-700 ease-out-quint group-hover:scale-[1.02] group-hover:-rotate-1 motion-reduce:transition-none"
          imgClassName="w-full"
        />
      </button>
    </article>
  )
}

function CertificateCard({ item, index, onOpen }) {
  return (
    <li data-reveal style={{ '--reveal-delay': `${index * 90}ms` }}>
      <button
        type="button"
        onClick={() => onOpen({ src: item.imageFull, alt: item.alt })}
        className="group flex h-full w-full cursor-zoom-in flex-col overflow-hidden rounded-3xl border border-line bg-card text-left transition-[border-color,translate] duration-500 ease-out-quint hover:-translate-y-1 hover:border-line-strong motion-reduce:transition-none"
      >
        <span className="relative block aspect-4/3 overflow-hidden bg-surface">
          <Picture
            image={item.image}
            alt={item.alt}
            sizes="(min-width: 768px) 540px, 92vw"
            className="block size-full"
            imgClassName="size-full object-cover transition-transform duration-700 ease-out-quint group-hover:scale-[1.04] motion-reduce:transition-none"
          />
          <span className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 aria-hidden="true" className="size-4" />
          </span>
        </span>
        <span className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <span>
            <span className="block leading-snug font-semibold text-fg">{item.title}</span>
            <span className="mt-1 block text-sm">
              {item.issuer}
              {item.detail && <> · {item.detail}</>}
            </span>
          </span>
          <span className="mt-auto flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-faint">
            <time dateTime={item.date} className="tracking-[0.12em] uppercase">
              {formatMonth(item.date)}
            </time>
            <span>Credencial {item.credential}</span>
          </span>
        </span>
        <span className="sr-only"> (abre a imagem do certificado em tela cheia)</span>
      </button>
    </li>
  )
}

export function Education() {
  const [preview, setPreview] = useState(null)

  return (
    <Section
      id="formacao"
      label="Formação"
      title={
        <>
          Onde eu <Mark>aprendi</Mark>.
        </>
      }
    >
      <DegreeCard onOpen={setPreview} />

      <h3 data-reveal className="mt-14 text-xs font-semibold tracking-[0.18em] text-faint uppercase">
        Certificados
      </h3>
      <ul className="mt-5 grid gap-4 md:grid-cols-2">
        {certificates.map((item, index) => (
          <CertificateCard key={item.title} item={item} index={index} onOpen={setPreview} />
        ))}
      </ul>

      <div data-reveal className="mt-12 grid gap-6 md:grid-cols-[14rem_1fr]">
        <h3 className="text-xs font-semibold tracking-[0.18em] text-faint uppercase md:pt-4">Outros cursos</h3>
        <ul className="divide-y divide-line border-y border-line">
          {courses.map((item) => (
            <li key={item.title} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
              <span>
                <span className="font-semibold text-fg">{item.title}</span> · {item.issuer}
              </span>
              <time dateTime={item.date} className="text-sm text-faint">
                {formatMonth(item.date)}
              </time>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox open={Boolean(preview)} onClose={() => setPreview(null)} src={preview?.src} alt={preview?.alt ?? ''} />
    </Section>
  )
}
