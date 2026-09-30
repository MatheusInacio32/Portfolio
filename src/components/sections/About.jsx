import { highlights } from '../../data/profile'
import { Mark } from '../ui/Mark'
import { Section } from '../ui/Section'

const Strong = ({ children }) => <strong className="font-semibold text-fg">{children}</strong>

export function About() {
  return (
    <Section
      id="sobre"
      label="Sobre"
      title={
        <>
          Software pensado para quem <Mark>usa</Mark>.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div data-reveal className="space-y-5 text-lg leading-relaxed lg:col-span-7">
          <p>
            Sou desenvolvedor full stack em Maringá (PR). Hoje trabalho remotamente na{' '}
            <Strong>Rei da Abundância Mentoria</Strong>, onde construo o <Strong>Social Sellers</Strong>, um CRM de vendas
            por mensagem direta, e o <Strong>Pulu</Strong>, um app social de experiências, com React, React Native, NestJS e
            Supabase.
          </p>
          <p>
            Combino design e desenvolvimento: aplico design thinking e pesquisa com usuários para chegar a interfaces
            intuitivas e acessíveis. Também passei mais de um ano e meio no suporte e na implantação de sistemas da{' '}
            <Strong>Lode</Strong>, atendendo de perto quem usa o software todos os dias.
          </p>
          <p>
            Fora isso, desenvolvo sites para empreendedores, com foco em conversão e performance, e fui{' '}
            <Strong>2º lugar duas vezes no NASA Space Apps Challenge</Strong> em Maringá, com a equipe Sociotech.
          </p>
        </div>

        <ul className="grid auto-rows-fr grid-cols-2 gap-3 self-start lg:col-span-5">
          {highlights.map((item, index) => (
            <li
              key={item.value}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
              className="rounded-3xl border border-line bg-card p-5 sm:p-6"
            >
              <p className="text-[1.45rem] leading-tight font-extrabold tracking-tight whitespace-nowrap text-fg sm:text-[1.65rem]">{item.value}</p>
              <p className="mt-2 text-sm leading-snug">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
