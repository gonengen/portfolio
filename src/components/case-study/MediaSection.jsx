import { Link } from 'react-router-dom'

function formatTags(description, tags) {
  if (Array.isArray(tags) && tags.length > 0) {
    const tagLine = tags.join(' · ')
    return description ? `${description} · ${tagLine}` : tagLine
  }

  if (typeof tags === 'string' && tags.trim()) {
    return description ? `${description} · ${tags}` : tags
  }

  return description || ''
}

function MediaCaption({ text, className = 'mx-auto w-full max-w-[960px]', variant = 'default' }) {
  const baseClass =
    variant === 'robonote'
      ? `${className} text-xl max-md:text-base font-light leading-[1.6] text-primary`
      : `${className} text-2xl font-light leading-[1.6] text-primary`

  if (!text || !text.includes(' × ')) {
    return <p className={baseClass}>{text}</p>
  }

  const segments = text.split(' × ')

  return (
    <p className={baseClass}>
      {segments.map((segment, index) => {
        const separatorIndex = segment.indexOf(' · ')
        if (separatorIndex === -1) {
          return (
            <span key={segment}>
              {index > 0 && <span className="text-secondary"> × </span>}
              {segment}
            </span>
          )
        }

        const label = segment.slice(0, separatorIndex + 3)
        const content = segment.slice(separatorIndex + 3)

        return (
          <span key={segment}>
            {index > 0 && <span className="text-secondary"> × </span>}
            <span className="text-secondary">{label}</span>
            {content}
          </span>
        )
      })}
    </p>
  )
}

export default function MediaSection({
  variant = 'wide',
  images = [],
  title,
  description,
  tags,
  caption,
  link,
  className = '',
  captionVariant = 'default',
}) {
  if (variant === 'showcase') {
    const bodyText = formatTags(description || caption, tags)
    const mockups = images.slice(0, 3)

    return (
      <section className="rounded-3xl bg-[#1a1c1e] p-12 max-md:p-6">
        {mockups.length > 0 && (
          <div className="flex flex-row flex-wrap items-end justify-center gap-12 max-lg:flex-col max-lg:items-center">
            {mockups.map((image) => (
              <div
                key={image.src}
                className="shrink-0 overflow-hidden rounded-[2rem] shadow-[0_26px_27px_rgba(0,0,0,0.16)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto w-[280px] max-w-full object-cover max-md:w-[240px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {(title || bodyText) && (
          <div className="relative mt-12 flex min-h-[5rem] items-end justify-between gap-8 max-md:mt-8">
            <div className="flex max-w-[960px] flex-col gap-3">
              {title && (
                <h3 className="text-2xl font-medium leading-[1.44] tracking-[0.24px] text-[#e1e2e4] max-md:text-xl">
                  {title}
                </h3>
              )}
              {bodyText && (
                <p className="text-2xl font-light leading-[1.6] text-secondary max-md:text-lg">
                  {bodyText}
                </p>
              )}
            </div>

            {link ? (
              <Link
                to={link}
                className="absolute bottom-0 right-0 text-3xl leading-none text-[#e1e2e4] transition-opacity hover:opacity-80"
                aria-label="View case study detail"
              >
                ↗
              </Link>
            ) : (
              <span
                className="absolute bottom-0 right-0 text-3xl leading-none text-[#e1e2e4]"
                aria-hidden="true"
              >
                ↗
              </span>
            )}
          </div>
        )}
      </section>
    )
  }

  if (variant === 'square') {
    const hasPerImageCaptions = images.some((image) => image.caption)
    const isSingle = images.length === 1

    const renderSquareUnit = (image, sectionCaption = null) => (
      <div key={image.src} className="flex w-full flex-col gap-[var(--spacing-element-x)]">
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src={image.src}
            alt={image.alt}
            className="block aspect-square w-full object-cover"
            loading="lazy"
          />
        </div>
        {(image.caption || sectionCaption) && (
          <MediaCaption text={image.caption || sectionCaption} className="w-full" />
        )}
      </div>
    )

    if (isSingle) {
      return (
        <section className={`flex w-full flex-col gap-[var(--spacing-stack)] ${className}`}>
          <div className="mx-auto flex w-full flex-col gap-[var(--spacing-element-x)] max-md:max-w-none md:w-[52%] md:max-w-[528px]">
            {renderSquareUnit(images[0], caption)}
          </div>
        </section>
      )
    }

    return (
      <section className={`flex w-full flex-col gap-[var(--spacing-stack)] ${className}`}>
        <div className="grid w-full grid-cols-2 gap-[var(--spacing-element-x)] max-md:grid-cols-1">
          {images.map((image) => renderSquareUnit(image))}
        </div>
        {caption && !hasPerImageCaptions && <MediaCaption text={caption} />}
      </section>
    )
  }

  return (
    <section className={className}>
      <div
        className={
          captionVariant === 'robonote'
            ? 'flex w-full flex-col gap-4 max-md:gap-2'
            : 'flex w-full flex-col gap-[var(--spacing-stack)]'
        }
      >
        {images.map((image) => (
          <div key={image.src} className="w-full overflow-hidden rounded-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="block w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
        {caption && (
          <MediaCaption
            text={caption}
            variant={captionVariant}
            className={captionVariant === 'robonote' ? 'w-full' : 'mx-auto w-full max-w-[960px]'}
          />
        )}
      </div>
    </section>
  )
}
