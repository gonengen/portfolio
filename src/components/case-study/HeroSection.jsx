import { CrossTitle } from './splitDotTitle'
import { parseHighlight } from './parseHighlight'

export default function HeroSection({ title, context, heroImage, heroImageAlt }) {
  const { label, body } = parseHighlight(context)

  return (
    <section className="flex w-full flex-col gap-[var(--spacing-stack)]">
      <div className="flex w-full flex-col gap-[var(--spacing-element-x)]">
        <h1 className="w-full">
          <CrossTitle text={title} />
        </h1>

        {context && (
          <p className="max-w-[960px] text-2xl font-light leading-[1.6] text-primary">
            <span className="font-medium text-secondary">{label}</span>
            {body ? ` ${body}` : ''}
          </p>
        )}
      </div>

      {heroImage && (
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src={heroImage}
            alt={heroImageAlt || title}
            className="block w-full h-auto object-cover max-md:max-h-[320px] max-md:object-bottom"
            loading="eager"
          />
        </div>
      )}
    </section>
  )
}
