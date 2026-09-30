// Nomes fixos em vez de Intl: o HTML gerado no Node e o do navegador precisam sair iguais.
const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

/** Converte "2026-07" em "jul 2026" e "2019" em "2019". */
export function formatMonth(value) {
  const [year, month] = value.split('-')
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year
}

/**
 * Duração entre dois meses "AAAA-MM", contando o mês de início e o de fim,
 * como o LinkedIn faz: mar 2025 a jul 2026 dá "1 ano e 5 meses".
 */
export function formatDuration(start, end) {
  const [startYear, startMonth] = start.split('-').map(Number)
  const [endYear, endMonth] = end.split('-').map(Number)
  const total = (endYear - startYear) * 12 + (endMonth - startMonth) + 1
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts = []
  if (years) parts.push(`${years} ${years === 1 ? 'ano' : 'anos'}`)
  if (months) parts.push(`${months} ${months === 1 ? 'mês' : 'meses'}`)
  return parts.join(' e ')
}
