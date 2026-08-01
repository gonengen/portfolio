export default function DesignPrinciplesSection({ intro, principles = [] }) {
  const { label, body } = intro
    ? parseIntro(intro)
    : { label: 'Design Principles.', body: '' }

  return (
    <section className="flex w-full flex-col gap-[var(--spacing-element-x)]">
      {(label || body) && (
        <p className="mx-auto w-full max-w-[960px] text-2xl font-semibold leading-[1.44] tracking-[0.24px] text-primary">
          {label && <span className="text-secondary">{label}</span>}
          {body ? ` ${body}` : ''}
        </p>
      )}

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="flex min-w-0 flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-secondary/25 bg-container p-6 text-center"
          >
            {principle.icon && (
              <div className="flex w-full items-center justify-center">
                <img
                  src={principle.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full max-w-[200px] object-contain"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold leading-[1.44] tracking-[0.24px] text-primary md:text-2xl">
              {principle.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  )
}

function parseIntro(intro) {
  const dotIndex = intro.indexOf('.')
  if (dotIndex === -1) {
    return { label: '', body: intro }
  }

  return {
    label: intro.slice(0, dotIndex + 1),
    body: intro.slice(dotIndex + 1).trim(),
  }
}
