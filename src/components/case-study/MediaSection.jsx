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

export default function MediaSection({
  variant = 'wide',
  images = [],
  title,
  description,
  tags,
  caption,
  link,
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
                <p className="text-2xl font-light leading-[1.6] text-[#c7c8ca] max-md:text-lg">
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
    return (
      <section className="flex w-full flex-col gap-[var(--spacing-stack)]">
        <div className="grid w-full grid-cols-2 gap-[var(--spacing-element-x)] max-md:grid-cols-1">
          {images.map((image) => (
            <div key={image.src} className="w-full overflow-hidden rounded-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="block aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {caption && (
          <p className="mx-auto w-full max-w-[960px] text-2xl font-light leading-[1.6] text-primary">
            {caption}
          </p>
        )}
      </section>
    )
  }

  return (
    <section className="flex w-full flex-col gap-[var(--spacing-stack)]">
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
        <p className="mx-auto w-full max-w-[960px] text-2xl font-light leading-[1.6] text-primary">
          {caption}
        </p>
      )}
    </section>
  )
}
