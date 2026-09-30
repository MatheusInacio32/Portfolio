/**
 * Céu do topo: estrelas, o brilho do sol nascendo e a curva do horizonte.
 * Tudo estático (gradientes do CSS), sem nenhum custo durante o scroll.
 */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-350 overflow-hidden">
      <div className="stars absolute inset-0 mask-[linear-gradient(to_bottom,black_25%,transparent_75%)]" />
      <div className="absolute -top-80 left-1/2 h-200 w-336 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
      <div className="absolute top-32 -right-48 h-128 w-176 rounded-full bg-[radial-gradient(closest-side,var(--glow-2),transparent)]" />
    </div>
  )
}

/**
 * Curva de um planeta iluminada pelo sol, fechando o topo da página. O brilho
 * é um gradiente (barato de pintar), não uma sombra com desfoque grande.
 */
export function Horizon() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-full -z-10 -mt-4 h-120 overflow-hidden">
      <div className="absolute top-0 left-1/2 h-32 w-[110rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_50%_100%,var(--glow),transparent)]" />
      <div className="absolute top-24 left-1/2 h-360 w-[180rem] -translate-x-1/2 rounded-[50%] border-t border-accent/35 bg-bg" />
    </div>
  )
}
