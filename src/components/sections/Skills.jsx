import { skillGroups } from '../../data/skills'
import { BrandIcon } from '../ui/icons'
import { Mark } from '../ui/Mark'
import { Section } from '../ui/Section'
import { Star } from '../ui/Star'

/** Cor da marca no hover, exceto as quase pretas, que sumiriam no tema escuro. */
function brandColor(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.12 ? 'currentColor' : `#${hex}`
}

function Chip({ item }) {
  return (
    <li className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-2 text-sm font-medium text-fg transition-colors hover:border-line-strong">
      {item.icon && (
        <BrandIcon
          icon={item.icon}
          className="size-4 text-faint transition-colors duration-300 group-hover:text-(--brand)"
          style={{ '--brand': brandColor(item.icon.hex) }}
        />
      )}
      {item.name}
    </li>
  )
}

export function Skills() {
  const [main, extra] = [skillGroups.slice(0, -1), skillGroups.at(-1)]

  return (
    <Section
      id="habilidades"
      label="Habilidades"
      title={
        <>
          Ferramentas do <Mark>dia a dia</Mark>.
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {main.map((group, index) => (
          <article
            key={group.title}
            data-reveal
            style={{ '--reveal-delay': `${(index % 2) * 90}ms` }}
            className="rounded-[28px] border border-line bg-card p-6 sm:p-8"
          >
            <h3 className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-fg">
              <Star className="size-3.5 text-accent" />
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item.name} item={item} />
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div data-reveal className="mt-6 flex flex-wrap items-center gap-3">
        <h3 className="text-xs font-semibold tracking-[0.18em] text-faint uppercase">{extra.title}</h3>
        <ul className="flex flex-wrap gap-2">
          {extra.items.map((item) => (
            <Chip key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </Section>
  )
}
