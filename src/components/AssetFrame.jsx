const fitClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
}

export default function AssetFrame({
  src,
  alt,
  variant = 'aspect',
  aspectClass = 'aspect-[1280/753]',
  fit = 'cover',
  position = '',
  className = '',
  imageClassName = '',
  loading = 'lazy',
}) {
  if (variant === 'intrinsic') {
    return (
      <div className={`overflow-hidden rounded-[var(--radius-lg)] ${className}`.trim()}>
        <img
          src={src}
          alt={alt}
          className={`block w-full h-auto ${fitClasses[fit]} ${position} ${imageClassName}`.trim()}
          loading={loading}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[var(--radius-lg)] ${aspectClass} ${className}`.trim()}
    >
      <img
        src={src}
        alt={alt}
        className={`size-full ${fitClasses[fit]} ${position} ${imageClassName}`.trim()}
        loading={loading}
      />
    </div>
  )
}
