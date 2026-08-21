import Accordion from './Accordion'
import { parseHighlight } from './parseHighlight'

export default function TextSection({ highlight, body }) {
  const { label, body: highlightBody } = parseHighlight(highlight)

  return (
    <section className="mx-auto flex w-full max-w-[960px] flex-col gap-[var(--spacing-element-x)]">
      <p className="text-2xl font-semibold leading-[1.44] tracking-[0.24px] text-primary">
        <span className="text-secondary">{label}</span>
        {highlightBody ? ` ${highlightBody}` : ''}
      </p>
      {body?.hideAccordion ? (
        <div className="flex flex-col gap-[var(--spacing-element-x)]">
          {body.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-2xl font-light leading-[1.6] text-secondary">
              {paragraph}
            </p>
          ))}
        </div>
      ) : (
        body && (
          <Accordion title={body.title}>
            {body.paragraphs.map((paragraph) => (
              <p key={paragraph} className={paragraph ? 'mb-0' : 'mb-0 min-h-[1.6em]'}>
                {paragraph}
              </p>
            ))}
          </Accordion>
        )
      )}
    </section>
  )
}
