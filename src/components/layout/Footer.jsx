import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer id="rodape" className="mx-auto max-w-6xl px-5 pt-6 pb-32 md:px-8">
      <p className="border-t border-line pt-8 text-center text-sm text-faint">
        {/* O ano da build pode diferir do ano de quem visita; o React aceita a diferença aqui. */}©{' '}
        <span suppressHydrationWarning>{new Date().getFullYear()}</span> {profile.name}
      </p>
    </footer>
  )
}
