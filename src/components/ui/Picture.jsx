const MIME = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', avif: 'image/avif' }

/**
 * Renderiza a saída "as=picture" do vite-imagetools: AVIF e WebP primeiro,
 * o formato original por último, com largura e altura para não haver salto de layout.
 */
export function Picture({ image, alt, sizes, className, imgClassName, loading = 'lazy', fetchPriority }) {
  return (
    <picture className={className}>
      {Object.entries(image.sources).map(([format, srcSet]) => (
        <source key={format} type={MIME[format] ?? `image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={image.img.src}
        width={image.img.w}
        height={image.img.h}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={imgClassName}
        // Proporção explícita: reserva o espaço antes de a imagem carregar (sem salto de layout).
        style={{ aspectRatio: `${image.img.w} / ${image.img.h}` }}
      />
    </picture>
  )
}
