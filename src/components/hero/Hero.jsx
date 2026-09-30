import { Download, Trophy } from 'lucide-react'
import { siGithub, siWhatsapp } from 'simple-icons'
import { experience } from '../../data/experience'
import { buildWords, photoSizes, profile, whatsappUrl } from '../../data/profile'
import { primaryButton, secondaryButton } from '../ui/buttons'
import { BrandIcon, LinkedInIcon } from '../ui/icons'
import { Logo } from '../ui/Logo'
import { Picture } from '../ui/Picture'
import { Star } from '../ui/Star'
import { LocalTime } from './LocalTime'
import { StackMarquee } from './StackMarquee'
import { WordRotator } from './WordRotator'

const card = 'relative overflow-hidden rounded-[28px] border border-line bg-card'
const current = experience[0]

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: <LinkedInIcon className="size-4.5" /> },
  { label: 'GitHub', href: profile.github, icon: <BrandIcon icon={siGithub} className="size-4.5" /> },
  { label: 'WhatsApp', href: whatsappUrl, icon: <BrandIcon icon={siWhatsapp} className="size-4.5" /> },
]

function IntroCard({ className }) {
  return (
    // Nome e foto só deslizam na entrada, sem sumir: são o maior elemento da tela (LCP).
    <div data-rise="soft" style={{ '--i': 0 }} className={`${card} p-6 sm:p-9 lg:p-11 ${className}`}>
      <Star className="pointer-events-none absolute -top-10 -right-10 size-44 text-accent opacity-[0.07]" />
      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-muted">
        <Star className="size-3 text-accent" />
        {profile.role} · {profile.location}
      </p>
      <h1
        id="nome"
        className="mt-7 text-[clamp(2.75rem,8vw,5.6rem)] leading-[0.92] font-extrabold tracking-[-0.045em] text-fg"
      >
        Matheus
        <br />
        Nunes Inácio<span className="text-accent">.</span>
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed sm:text-xl">
        Do banco de dados à interface, construo <WordRotator words={buildWords} />
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a href={profile.cv} download className={primaryButton}>
          <Download aria-hidden="true" className="size-4.5" />
          Baixar currículo
        </a>
        <a href="#contato" className={secondaryButton}>
          Fale comigo
        </a>
        <ul className="flex items-center gap-1 sm:ml-2" aria-label="Redes">
          {socials.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} (abre em nova aba)`}
                title={label}
                className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-hover hover:text-fg"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function PhotoCard({ className }) {
  return (
    <figure data-rise="soft" style={{ '--i': 1 }} className={`${card} bg-surface ${className}`}>
      <Picture
        image={profile.photo}
        alt={`Foto de ${profile.name}`}
        sizes={photoSizes}
        loading="eager"
        fetchPriority="high"
        className="block size-full"
        imgClassName="size-full object-cover object-[50%_25%] sm:object-[50%_20%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-bg/70 to-transparent sm:h-1/2 sm:from-black/70 sm:via-black/25"
      />
      <LocalTime className="absolute top-3 right-3 sm:inset-x-4 sm:top-auto sm:right-4 sm:bottom-4" />
    </figure>
  )
}

function NowCard({ className }) {
  return (
    <article data-rise style={{ '--i': 2 }} className={`${card} flex flex-col p-6 ${className}`}>
      <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
        <span className="relative flex size-2">
          {/* Pulsa algumas vezes e para: animação infinita mantém o navegador desenhando quadros à toa. */}
          <span className="absolute inline-flex size-full rounded-full bg-accent motion-safe:animate-[pulse-dot_2.2s_ease-out_1s_4]" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        Agora
      </p>
      <div className="mt-4 flex items-center gap-3.5">
        <Logo image={current.logo} />
        <div>
          <p className="leading-tight font-semibold text-fg">{current.roles[0].title}</p>
          <p className="mt-0.5 text-sm">
            na{' '}
            <a href={current.url} target="_blank" rel="noreferrer" className="font-medium text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent">
              {current.company}
            </a>
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed">Construindo os produtos da empresa, na web e no mobile:</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-4 text-sm">
        {[
          ['Social Sellers', 'CRM de vendas por DM'],
          ['Pulu', 'app social de experiências'],
        ].map(([name, detail]) => (
          <li key={name} className="rounded-2xl border border-line bg-surface/70 px-3.5 py-2">
            <span className="font-semibold text-fg">{name}</span> <span className="text-faint">· {detail}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function NasaCard({ className }) {
  return (
    <article data-rise style={{ '--i': 3 }} className={`${card} p-6 ${className}`}>
      <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
        <Trophy aria-hidden="true" className="size-5" />
      </span>
      <p className="mt-4 text-5xl leading-none font-extrabold tracking-tight text-fg">2×</p>
      <p className="mt-3 text-sm leading-snug">
        2º lugar no <strong className="font-semibold text-fg">NASA Space Apps Challenge</strong> em Maringá, 2024 e 2025.
      </p>
    </article>
  )
}

function StackCard({ className }) {
  return (
    <article data-rise style={{ '--i': 4 }} className={`${card} flex flex-col justify-between gap-5 p-6 ${className}`}>
      <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Stack do dia a dia</p>
      <StackMarquee />
    </article>
  )
}

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="nome" className="intro relative mx-auto max-w-6xl scroll-mt-24 px-5 pt-6 pb-10 md:px-8 lg:pt-10">
      {/*
        No HTML o nome vem primeiro (leitor de tela). No celular a foto sobe e vira o
        topo do mesmo cartão da apresentação; no desktop ela fica à esquerda.
      */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
        <IntroCard className="max-sm:-mt-3 max-sm:rounded-t-none max-sm:border-t-0 sm:col-span-2 lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1" />
        <PhotoCard className="aspect-square max-sm:order-first max-sm:rounded-b-none max-sm:border-b-0 sm:row-span-2 sm:aspect-auto lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-1" />
        <NowCard className="lg:col-span-5" />
        <NasaCard className="lg:col-span-3" />
        <StackCard className="sm:col-span-2 lg:col-span-4" />
      </div>
    </section>
  )
}
