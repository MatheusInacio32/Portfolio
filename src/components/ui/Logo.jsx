import { Picture } from './Picture'

/** Logo de empresa ou instituição no formato dele mesmo, sem moldura. */
export function Logo({ image, className = 'size-12' }) {
  return (
    <Picture
      image={image}
      alt=""
      sizes="48px"
      className={`block shrink-0 overflow-hidden rounded-2xl ${className}`}
      imgClassName="size-full object-contain"
    />
  )
}
