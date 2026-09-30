const base =
  'inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-[translate,scale,background-color,border-color,box-shadow] duration-300 ease-out-quint active:scale-[0.97] motion-reduce:transition-none'

export const primaryButton = `${base} bg-accent text-on-accent shadow-[0_8px_30px_-8px_var(--glow)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_var(--glow)]`
export const secondaryButton = `${base} border border-line-strong text-fg hover:-translate-y-0.5 hover:bg-hover`
export const iconButton =
  'grid size-12 place-items-center rounded-full border border-line-strong text-fg transition-[translate,background-color] duration-300 ease-out-quint hover:-translate-y-0.5 hover:bg-hover motion-reduce:transition-none'
