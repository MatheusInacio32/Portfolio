import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'

/**
 * Hora atual em Maringá, com sol ou lua conforme o horário. Só é calculada no
 * navegador, depois de carregar: o HTML da build mostra "--:--" e não conflita.
 * No celular vira um selo pequeno de uma linha, para nunca cobrir o rosto.
 */
export function LocalTime({ className = '' }) {
  const [now, setNow] = useState(null)

  useEffect(() => {
    const tick = () => setNow(new Date())
    tick()
    const timer = setInterval(tick, 20_000)
    return () => clearInterval(timer)
  }, [])

  const zone = { timeZone: profile.timeZone }
  const time = now ? new Intl.DateTimeFormat('pt-BR', { ...zone, hour: '2-digit', minute: '2-digit' }).format(now) : '--:--'
  const hour = now ? Number(new Intl.DateTimeFormat('en-US', { ...zone, hour: 'numeric', hourCycle: 'h23' }).format(now)) : 12
  const isDay = hour >= 6 && hour < 18
  const Icon = isDay ? Sun : Moon
  const icon = <Icon aria-hidden="true" className={`size-3.5 sm:size-4 ${isDay ? 'text-amber-300' : 'text-amber-200'}`} />

  return (
    <div className={`rounded-full border border-white/15 bg-black/60 text-white sm:rounded-2xl ${className}`}>
      {/* Celular: uma linha curta. */}
      <p className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium sm:hidden">
        {icon}
        <span className="font-semibold tabular-nums">{time}</span>
        <span className="text-white/70">em Maringá</span>
      </p>
      {/* Tablet e computador: versão completa. */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 max-sm:hidden">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-white/70 uppercase">Agora em {profile.location}</p>
          <p className="mt-0.5 text-lg font-semibold tabular-nums">
            {time} <span className="text-sm font-normal text-white/70">UTC−3</span>
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-sm text-white/80">
          {icon}
          {isDay ? 'dia' : 'noite'}
        </span>
      </div>
    </div>
  )
}
