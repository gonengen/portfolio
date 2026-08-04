import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import basketballGif from '@assets/about/about_page_gif_1.gif'
import guitarImage from '@assets/about/about_page_ןmedia.png'
import resumePdf from '@assets/cv/Gonen-Maatuk-Senior-AI-Productt-Designer_2026.pdf'
import resumeIcon from '@assets/Icons/Property 1=mark_email_read.svg'
import downloadIcon from '@assets/Icons/Property 1=download.svg'
import linkedinIcon from '@assets/Icons/Property 1=linkedin.svg'
import callMadeIcon from '@assets/Icons/Property 1=call_made.svg'

const insights = [
  {
    emoji: '🏀',
    text: 'Playing basketball taught me that great decisions happen before the ball arrives. The mix of instinct, strategy, and teamwork naturally found its way into my design work.',
  },
  {
    emoji: '🎸',
    text: 'Making music taught me that the smallest details often have the biggest emotional impact. That obsession with nuance shapes the way I design.',
  },
  {
    emoji: '🙌🏻',
    text: 'Helping other designers through mentoring has become one of the most rewarding parts of my career. Great feedback starts with better questions.',
  },
  {
    emoji: '✏️',
    text: 'Writing on Medium helps me explore ideas beyond design. I usually understand a topic best after I\'ve tried explaining it to someone else.',
  },
]

function InsightRow({ emoji, text }) {
  return (
    <p className="text-2xl font-medium leading-[1.44] tracking-[0.24px] text-primary">
      <span className="text-secondary">{emoji} .</span> {text}
    </p>
  )
}

export default function About() {
  return (
    <PageShell>
      <PageHero headingClassName="max-w-6xl">
        {`I design × the way I\u00A0play × the way I build`}
      </PageHero>

      <section className="flex w-full items-center justify-center gap-[var(--spacing-element-x)] opacity-90 max-md:flex-col">
        <div className="w-[271px] shrink-0 overflow-hidden rounded-xl max-md:w-full">
          <img
            src={basketballGif}
            alt="Gonen playing basketball"
            className="block w-full h-auto object-cover"
            loading="eager"
          />
        </div>
        <div className="w-[538px] shrink-0 overflow-hidden rounded-xl max-md:w-full">
          <img
            src={guitarImage}
            alt="Gonen playing guitar"
            className="block w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[960px] flex-col gap-[var(--spacing-stack)]">
        {insights.map((insight) => (
          <InsightRow key={insight.emoji} {...insight} />
        ))}
      </section>

      <section className="mx-auto flex w-full max-w-[640px] flex-col gap-[var(--spacing-element-x)] sm:flex-row">
        <Button
          variant="split"
          href={resumePdf}
          external
          leftIcon={<img src={resumeIcon} alt="" aria-hidden="true" />}
          rightIcon={<img src={downloadIcon} alt="" aria-hidden="true" />}
          className="flex-1"
        >
          Download resume
        </Button>
        <Button
          variant="split"
          href="https://www.linkedin.com/in/gonen-maatuk-5b2ab8380/"
          external
          leftIcon={<img src={linkedinIcon} alt="" aria-hidden="true" />}
          rightIcon={<img src={callMadeIcon} alt="" aria-hidden="true" />}
          className="flex-1"
        >
          Let&apos;s chat
        </Button>
      </section>
    </PageShell>
  )
}
