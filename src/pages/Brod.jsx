import PageShell from '../components/PageShell'
import HeroSection from '../components/case-study/HeroSection'
import TextSection from '../components/case-study/TextSection'
import Accordion from '../components/case-study/Accordion'
import { parseHighlight } from '../components/case-study/parseHighlight'
import { brodContent } from '../data/brod'

function HighlightParagraph({ text }) {
  const { label, body } = parseHighlight(text)

  return (
    <p className="text-2xl font-semibold leading-[1.44] tracking-[0.24px] text-primary">
      <span className="text-secondary">{label}</span>
      {body ? ` ${body}` : ''}
    </p>
  )
}

export default function Brod() {
  return (
    <PageShell>
      <article className="flex flex-col gap-[var(--spacing-section)]">
        <HeroSection title={brodContent.title} context={brodContent.context} />

        <section className="mx-auto flex w-full max-w-[960px] flex-col gap-[var(--spacing-element-x)]">
          {brodContent.intro.map((paragraph) => (
            <HighlightParagraph key={paragraph.slice(0, 12)} text={paragraph} />
          ))}
        </section>

        <section className="mx-auto w-full max-w-[960px]">
          <Accordion title={brodContent.accordion.title} defaultOpen={false}>
            <p>{brodContent.accordion.placeholder}</p>
          </Accordion>
        </section>

        <TextSection highlight={brodContent.iterations} />

        <section
          className="mx-auto flex w-full max-w-[960px] flex-col items-start"
          aria-label="Campaign"
        >
          <p className="text-xl font-light leading-[1.6] text-secondary">
            Campaign — 47 ads (stacked scroll coming soon)
          </p>
        </section>

        <section className="mx-auto flex w-full max-w-[960px] flex-col gap-[var(--spacing-element-x)]">
          <HighlightParagraph text={brodContent.takeaway} />
          <div className="flex flex-col gap-1 text-2xl font-semibold leading-[1.44] tracking-[0.24px] text-primary">
            {brodContent.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      </article>
    </PageShell>
  )
}
