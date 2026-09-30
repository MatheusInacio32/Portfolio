// Gera o currículo em PDF e a imagem de prévia do link a partir dos dados do site.
// Uso: npm run assets  (rode de novo sempre que mudar experiência, formação ou foto)
//
// Faz a build, serve a pasta build/ localmente e usa o Chrome sem interface para
// imprimir /curriculo/ em PDF e fotografar /_og/ em 1200 x 630.
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { copyFile, mkdtemp, readFile, rm } from 'node:fs/promises'
import { createServer } from 'node:http'
import { tmpdir } from 'node:os'
import { extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(import.meta.url), '../..')
const buildDir = join(root, 'build')
const publicDir = join(root, 'public')
const PDF = 'curriculo-matheus-nunes-inacio.pdf'
const OG = 'og.png'

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.woff2': 'font/woff2',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
}

function run(command, args, options = {}) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', ...options })
    child.on('error', reject)
    child.on('exit', (code) => (code === 0 ? resolvePromise() : reject(new Error(`${command} saiu com código ${code}`))))
  })
}

const chrome = CHROME_CANDIDATES.find((path) => path && existsSync(path))
if (!chrome) throw new Error('Chrome não encontrado. Defina CHROME_PATH com o caminho do executável.')

// 1. Build com a página temporária da prévia.
await run('npm run build', [], { shell: true, cwd: root, env: { ...process.env, WITH_OG: '1' } })

// 2. Servidor local só para esta geração.
const server = createServer(async (request, response) => {
  let path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  if (path.endsWith('/')) path += 'index.html'
  try {
    const data = await readFile(join(buildDir, path))
    response.writeHead(200, { 'Content-Type': MIME[extname(path)] ?? 'application/octet-stream' })
    response.end(data)
  } catch {
    response.writeHead(404)
    response.end()
  }
})
await new Promise((resolvePromise) => server.listen(0, '127.0.0.1', resolvePromise))
const origin = `http://127.0.0.1:${server.address().port}`

// Perfil temporário: não interfere no Chrome que estiver aberto.
const profileDir = await mkdtemp(join(tmpdir(), 'portfolio-chrome-'))
const base = ['--headless=new', '--disable-gpu', '--no-first-run', `--user-data-dir=${profileDir}`, '--virtual-time-budget=6000']

try {
  await run(chrome, [...base, '--no-pdf-header-footer', `--print-to-pdf=${join(buildDir, PDF)}`, `${origin}/curriculo/`])
  await run(chrome, [...base, '--hide-scrollbars', '--window-size=1200,630', `--screenshot=${join(buildDir, OG)}`, `${origin}/_og/`])
} finally {
  server.close()
  await rm(profileDir, { recursive: true, force: true })
  await rm(join(buildDir, '_og'), { recursive: true, force: true })
}

// 3. Os arquivos ficam em public/ para irem junto em toda build (e no commit).
await copyFile(join(buildDir, PDF), join(publicDir, PDF))
await copyFile(join(buildDir, OG), join(publicDir, OG))
console.log(`\nGerados: public/${PDF} e public/${OG}`)
