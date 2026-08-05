import { useState } from 'react'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import aboutImage from '@assets/about/about_page_gig.png'
import resumePdf from '@assets/cv/Gonen-Maatuk-Senior-AI-Productt-Designer_2026.pdf'
import resumeIcon from '@assets/Icons/Property 1=mark_email_read.svg'
import downloadIcon from '@assets/Icons/Property 1=download.svg'
import linkedinIcon from '@assets/Icons/Property 1=linkedin.svg'
import callMadeIcon from '@assets/Icons/Property 1=call_made.svg'

const STYLE_PROMPT = `Transform the uploaded image into a dreamy, cinematic pastel illustration while preserving the original composition, subject, pose, perspective, framing, lighting, and all important details.

Do not redesign or reinterpret the image. Keep the original photograph immediately recognizable.

STYLE

Create a soft, atmospheric aesthetic inspired by dreamy indie album artwork, vintage photography, and modern editorial illustration.

Use a nearly monochromatic palette built around:

• Periwinkle blue
• Lavender
• Soft indigo
• Dusty violet

Replace green foliage with saturated pastel pink and soft lavender while keeping everything else within the monochromatic blue-purple palette.

Apply a soft luminous bloom around every major element—not just bright areas. Trees, plants, clouds, buildings, people and objects should all have a subtle glowing halo that gently blends into the background.

Use:
• soft atmospheric haze
• analog film grain
• subtle halftone texture
• matte finish
• gentle color gradients
• low contrast
• soft edge transitions
• shallow depth of field
• dreamy cinematic lighting

The glow should feel optical rather than magical, similar to vintage lenses with strong bloom.

Maintain smooth simplified shapes without making the image look cartoonish.

Preserve facial identity, skin texture, typography and important details.

Keep hair natural and only slightly soften curls if present.

FINAL LOOK

The result should resemble a nostalgic dream photographed through a vintage lens with strong bloom, monochromatic pastel color grading, analog grain, soft focus, and glowing edges.

NEGATIVE PROMPT

Do not change the composition.
Do not crop.
Do not move objects.
Do not replace objects.
Do not change facial identity.
Do not change clothing.
Do not change the camera angle.
Do not add new elements.
No anime.
No cartoon.
No watercolor.
No oil painting.
No plastic CGI.
No HDR.
No oversharpening.
No harsh contrast.
No saturated rainbow colors.
No hard outlines.
No heavy blur.
No fantasy effects.`

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

function StylePromptCaption() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(STYLE_PROMPT)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="cursor-pointer text-left text-2xl font-light leading-[1.6] text-primary transition-opacity hover:opacity-70"
    >
      {copied ? 'Copied to clipboard' : 'Copy Style Prompt'}
    </button>
  )
}

export default function About() {
  return (
    <PageShell>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[var(--spacing-section)]">
        <PageHero headingClassName="w-full">
          {`I design × the way I\u00A0play × the way I build`}
        </PageHero>

        <section className="flex w-full flex-col gap-[var(--spacing-element-y)]">
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src={aboutImage}
              alt="Gonen Maatuk — dreamy pastel illustration"
              className="block h-auto w-full"
              loading="eager"
            />
          </div>
          <StylePromptCaption />
        </section>
      </div>

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
