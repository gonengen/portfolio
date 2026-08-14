import { useState } from 'react'
import mailIcon from '@assets/Icons/Property 1=mail.svg'
import linkedinIcon from '@assets/Icons/Property 1=linkedin.svg'
import githubIcon from '@assets/Icons/Property 1=github.svg'
import adplistIcon from '@assets/Icons/Property 1=adplist.svg'
import mediumIcon from '@assets/Icons/Property 1=medium.svg'
import dribbbleIcon from '@assets/Icons/Property 1=dribbble.svg'
import callMadeIcon from '@assets/Icons/Property 1=call_made.svg'
import Button from './Button'
import Icon from './Icon'

const EMAIL = 'gonengen@gmail.com'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gonen-maatuk-5b2ab8380/',
    icon: linkedinIcon,
  },
  {
    label: 'Github',
    href: 'https://github.com/gonengen',
    icon: githubIcon,
  },
  {
    label: 'ADPlist',
    href: 'https://adplist.org/mentors/gonen-maatuk-clUB',
    icon: adplistIcon,
  },
  {
    label: 'medium',
    href: 'https://medium.com/@darealgoni',
    icon: mediumIcon,
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/gonen-maatuk',
    icon: dribbbleIcon,
  },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <footer
      id="footer"
      className="flex w-full flex-col gap-[var(--spacing-stack)] border-t border-secondary py-[var(--spacing-stack)]"
    >
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start">
        <p className="text-display flex-1 text-[128px] font-thin leading-none tracking-[-2.56px] text-primary max-lg:text-7xl max-md:text-5xl lg:hidden">
          GONEN MAATUK@AI
        </p>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="group hidden w-full max-w-[1040px] cursor-pointer text-left text-display text-[128px] font-thin leading-none tracking-[-2.56px] text-primary lg:block"
          aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
        >
          <span className="grid min-h-[1em] [grid-template-areas:'stack']">
            <span
              className={`[grid-area:stack] transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                copied ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
              }`}
            >
              GONEN MAATUK@AI
            </span>
            <span
              className={`pointer-events-none [grid-area:stack] transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                copied ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
              }`}
              aria-hidden="true"
            >
              COPY EMAIL ADDRESS
            </span>
            <span
              className={`pointer-events-none [grid-area:stack] transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                copied ? 'opacity-100' : 'opacity-0'
              }`}
              aria-live="polite"
              aria-hidden={!copied}
            >
              COPIED!
            </span>
          </span>
        </button>

        <Button
          variant="outline"
          onClick={handleCopyEmail}
          className="w-fit self-start lg:hidden"
          leftIcon={<Icon src={mailIcon} />}
          ariaLabel="Copy email address"
        >
          {copied ? 'Copied!' : 'Copy Email'}
        </Button>
      </div>

      <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:flex-wrap lg:gap-x-8 lg:gap-y-4">
        {socialLinks.map((link) => (
          <Button
            key={link.label}
            href={link.href}
            external
            leftIcon={<Icon src={link.icon} />}
            rightIcon={<Icon src={callMadeIcon} tone="secondary" />}
          >
            {link.label}
          </Button>
        ))}
      </div>
    </footer>
  )
}
