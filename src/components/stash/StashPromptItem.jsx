import { useState } from 'react'
import copyIcon from '@assets/Icons/Property 1=content_copy.svg'

export default function StashPromptItem({ label, description, prompt }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article className="flex w-full flex-col items-start gap-6 border-b border-secondary pb-6 sm:flex-row sm:items-start sm:justify-between">
      <p className="min-w-0 flex-1 text-2xl font-medium leading-[1.44] tracking-[0.24px]">
        <span className="text-secondary">{label}</span>{' '}
        <span className="text-primary">{description}</span>
      </p>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-xl)] bg-container px-4 py-3 text-base font-semibold uppercase leading-none text-primary transition-opacity hover:opacity-80"
        aria-label={copied ? 'Prompt copied to clipboard' : 'Copy prompt to clipboard'}
      >
        <img src={copyIcon} alt="" aria-hidden="true" className="size-6" />
        {copied ? 'COPIED!' : 'Copy prompt'}
      </button>
    </article>
  )
}
