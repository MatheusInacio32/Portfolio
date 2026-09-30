import { profile } from '../data/profile'

// Imagem de prévia do link (WhatsApp, LinkedIn etc.), 1200 x 630.
// Vira PNG em "npm run assets" (scripts/generate-assets.js).
export function OgImage() {
  return (
    <div className="dark">
      <main className="relative isolate flex h-[630px] w-[1200px] items-center gap-16 overflow-hidden bg-bg px-20 font-sans text-muted">
        <div className="stars absolute inset-0 -z-10 opacity-80" />
        <div className="absolute -top-72 left-1/3 -z-10 h-[46rem] w-[70rem] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
        <div className="absolute -bottom-[62rem] left-1/2 -z-10 h-[70rem] w-[150rem] -translate-x-1/2 rounded-[50%] border-t border-accent/40 bg-bg shadow-[0_-30px_120px_-20px_var(--glow)]" />

        <img
          src={profile.photo.img.src}
          alt=""
          width="360"
          height="450"
          className="h-[450px] w-[360px] shrink-0 rounded-[36px] border border-line-strong object-cover object-[50%_20%]"
        />

        <div>
          <p className="flex items-center gap-3 text-2xl font-semibold text-fg">
            <span className="grid size-14 place-items-center rounded-full bg-[#0b0908] text-xl font-bold tracking-[-0.04em] text-white ring-1 ring-white/20">
              MI
            </span>
            matheusinacio.com.br
          </p>
          <h1 className="mt-8 text-[78px] leading-[0.92] font-extrabold tracking-[-0.045em] text-fg">
            Matheus
            <br />
            Nunes Inácio<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 text-[34px] font-bold text-accent">{profile.role}</p>
          <p className="mt-3 text-2xl">React · React Native · NestJS · Supabase</p>
        </div>
      </main>
    </div>
  )
}
