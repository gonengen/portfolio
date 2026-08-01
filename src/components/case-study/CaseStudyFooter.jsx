const socialLinks = [
  { label: 'LINKDEIN', href: 'https://linkedin.com' },
  { label: 'Github', href: 'https://github.com' },
  { label: 'ADPlist', href: 'https://adplist.org' },
  { label: 'MEDIUM', href: 'https://medium.com' },
  { label: 'Dribbbel', href: 'https://dribbble.com' },
]

export default function CaseStudyFooter() {
  return (
    <footer className="flex w-full flex-col items-start gap-[var(--spacing-stack)] px-[var(--spacing-element-x)] py-[var(--spacing-element-y)]">
      <p className="text-display max-w-[960px] text-[128px] font-thin leading-none tracking-[-2.56px] text-ink max-lg:text-7xl max-md:text-5xl">
        GONEN MAATUK@AI
      </p>
      <a
        href="mailto:hello@example.com"
        className="rounded-[var(--radius-xl)] px-4 py-3 text-base font-semibold uppercase leading-none text-ink transition-opacity hover:opacity-70"
      >
        Copy Email
      </a>
      <div className="flex w-full flex-wrap items-start justify-between gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[var(--radius-xl)] px-4 py-3 text-base font-semibold uppercase leading-none text-ink transition-opacity hover:opacity-70"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </footer>
  )
}
