export function TagList({ tags, className = '', label = 'Tecnologias' }) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((tag) => (
        <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-ink">
          {tag}
        </li>
      ))}
    </ul>
  )
}
