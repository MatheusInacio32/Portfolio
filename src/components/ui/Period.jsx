import { formatMonth } from '../../lib/dates'

/**
 * "jul 2026 → atual". A seta é só visual; o leitor de tela ouve "até".
 * Se faltar espaço, a linha quebra depois da seta, nunca no meio de uma data.
 */
export function Period({ start, end }) {
  return (
    <>
      <span className="whitespace-nowrap">
        <time dateTime={start}>{formatMonth(start)}</time>
        <span aria-hidden="true"> →</span>
      </span>
      <span className="sr-only"> até</span>{' '}
      <span className="whitespace-nowrap">{end ? <time dateTime={end}>{formatMonth(end)}</time> : 'atual'}</span>
    </>
  )
}
