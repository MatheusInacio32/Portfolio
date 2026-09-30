import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { degree } from './data/education'
import { experience } from './data/experience'
import { photoSizes, profile } from './data/profile'
import { skillGroups } from './data/skills'
import { OgImage } from './print/OgImage'
import { Resume } from './print/Resume'

/** HTML da página, usado por scripts/prerender.js na build. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

/** Currículo em A4 (página /curriculo/ e base do PDF). */
export function renderResume() {
  return renderToString(<Resume />)
}

/** Imagem de prévia do link, 1200 x 630 (só na geração de assets). */
export function renderOgImage() {
  return renderToString(<OgImage />)
}

/**
 * A foto do topo é o maior elemento da tela (LCP). Pré-carregar a versão AVIF
 * no <head> faz o download começar junto com o CSS, e não depois dele.
 */
export function photoPreload() {
  return { type: 'image/avif', srcset: profile.photo.sources.avif, sizes: photoSizes }
}

/** Dados estruturados (schema.org) para o Google entender quem é a pessoa do site. */
export function structuredData() {
  const current = experience[0]
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: profile.site,
    image: new URL('/logo512.png', profile.site).href,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maringá',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    worksFor: { '@type': 'Organization', name: current.company, url: current.url },
    alumniOf: { '@type': 'CollegeOrUniversity', name: degree.institution },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: skillGroups.flatMap((group) => group.items.map((item) => item.name)),
  }
}
