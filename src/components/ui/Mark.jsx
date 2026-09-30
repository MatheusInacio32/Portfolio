/**
 * Palavra em destaque, com um rabisco laranja que se desenha embaixo dela
 * quando entra na tela (ver .scribble no CSS).
 */
export function Mark({ children }) {
  return (
    <span className="relative inline-block whitespace-nowrap text-accent">
      {children}
      <svg
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
        className="scribble pointer-events-none absolute -bottom-[0.2em] left-[-2%] h-[0.3em] w-[104%] overflow-visible"
      >
        <path
          d="M3 11.5C48 5.5 104 3 197 6.5C140 7.5 92 10 58 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
        />
      </svg>
    </span>
  )
}
