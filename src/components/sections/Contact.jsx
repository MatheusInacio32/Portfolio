import { ArrowUpRight, Copy, Mail } from 'lucide-react'
import { siGithub, siWhatsapp } from 'simple-icons'
import { emailUrl, profile, whatsappUrl } from '../../data/profile'
import { copyEmail } from '../../lib/events'
import { primaryButton, secondaryButton } from '../ui/buttons'
import { BrandIcon, LinkedInIcon } from '../ui/icons'
import { Mark } from '../ui/Mark'
import { Section } from '../ui/Section'

const channels = [
  { label: 'E-mail', value: profile.email, href: emailUrl, icon: <Mail aria-hidden="true" className="size-5" /> },
  { label: 'WhatsApp', value: profile.phone, href: whatsappUrl, icon: <BrandIcon icon={siWhatsapp} className="size-5" />, external: true },
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, icon: <LinkedInIcon className="size-5" />, external: true },
  { label: 'GitHub', value: profile.githubLabel, href: profile.github, icon: <BrandIcon icon={siGithub} className="size-5" />, external: true },
]

export function Contact() {
  return (
    <Section
      id="contato"
      label="Contato"
      title={
        <>
          Vamos construir algo <Mark>juntos</Mark>?
        </>
      }
    >
      <div data-reveal className="relative isolate overflow-hidden rounded-4xl border border-line bg-card p-6 sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 -z-10 size-136 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]"
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-lg leading-relaxed sm:text-xl">
              Tem um projeto, uma ideia ou quer saber mais sobre o meu trabalho? Me chame pelo canal que preferir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={primaryButton}>
                <BrandIcon icon={siWhatsapp} className="size-4.5" />
                Chamar no WhatsApp
              </a>
              <button type="button" onClick={() => copyEmail(profile.email)} className={secondaryButton}>
                <Copy aria-hidden="true" className="size-4.5" />
                Copiar e-mail
              </button>
            </div>
            <p className="mt-6 text-sm text-faint">
              {profile.location} · {profile.country} · horário de Brasília
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {channels.map(({ label, value, href, icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface/60 p-5 transition-[border-color,translate] duration-300 ease-out-quint hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="flex items-center justify-between text-muted">
                    <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">{icon}</span>
                    <ArrowUpRight aria-hidden="true" className="size-4 text-faint transition-[translate,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.16em] text-faint uppercase">{label}</span>
                    <span className="mt-1 block font-semibold break-all text-fg">{value}</span>
                  </span>
                  {external && <span className="sr-only"> (abre em nova aba)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
