// Gera o HTML final das páginas na build: o conteúdo aparece antes de qualquer
// JavaScript carregar, e o React só "hidrata" o que já está na tela.
// Roda depois de "vite build" (cliente) e "vite build --ssr" (servidor).
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(fileURLToPath(import.meta.url), '../..')
const outDir = join(root, 'build')
const ssrDir = join(root, '.ssr')

const { render, renderResume, renderOgImage, structuredData, photoPreload } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
)

const templatePath = join(outDir, 'index.html')
const template = await readFile(templatePath, 'utf8')
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('build/index.html sem os marcadores <!--app-head--> e <!--app-html-->')
}

// ---------- Página principal ----------

// Pré-carrega só a fonte principal (Bricolage Grotesque, alfabeto latino).
const assets = await readdir(join(outDir, 'assets'))
const font = assets.find((name) => /^bricolage-grotesque-latin-wght-normal-.+\.woff2$/.test(name))
const photo = photoPreload()

const head = [
  `<link rel="preload" as="image" type="${photo.type}" imagesrcset="${photo.srcset}" imagesizes="${photo.sizes}" fetchpriority="high" />`,
  font && `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`,
  `<script type="application/ld+json">${JSON.stringify(structuredData()).replace(/</g, '\\u003c')}</script>`,
]
  .filter(Boolean)
  .join('\n    ')

const html = template.replace('<!--app-head-->', head).replace('<!--app-html-->', render())
await writeFile(templatePath, html)

// ---------- Páginas estáticas, sem JavaScript ----------

const stylesheet = template.match(/<link rel="stylesheet"[^>]*>/)?.[0] ?? ''

async function writeStaticPage(folder, { title, body, extraHead = '' }) {
  const page = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>${title}</title>
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    ${stylesheet}
    ${extraHead}
  </head>
  <body>${body}</body>
</html>
`
  await mkdir(join(outDir, folder), { recursive: true })
  await writeFile(join(outDir, folder, 'index.html'), page)
}

// Versão web do currículo (e base do PDF gerado por "npm run assets").
await writeStaticPage('curriculo', {
  title: 'Currículo | Matheus Nunes Inácio',
  body: renderResume(),
  extraHead: '<style>@page { size: A4; margin: 0 } html, body { background: #fff }</style>',
})

// A página da imagem de prévia só existe durante "npm run assets", nunca no deploy.
if (process.env.WITH_OG === '1') {
  await writeStaticPage('_og', {
    title: 'Prévia',
    body: renderOgImage(),
    extraHead: '<style>html, body { margin: 0; background: #0e0b09 }</style>',
  })
}

await rm(ssrDir, { recursive: true, force: true })

console.log(`prerender: build/index.html com ${(html.length / 1024).toFixed(1)} kB e build/curriculo/`)
