/** Monograma "MI", o mesmo do favicon: letras brancas num círculo preto. */
export function Monogram({ className = 'size-10 text-sm' }) {
  return (
    <span aria-hidden="true" className={`grid shrink-0 place-items-center rounded-full bg-[#0b0908] font-bold tracking-[-0.04em] text-white ring-1 ring-white/15 ${className}`}>
      MI
    </span>
  )
}
