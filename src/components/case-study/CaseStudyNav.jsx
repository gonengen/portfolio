import { Link } from 'react-router-dom'

function NavLink({ href, children, external = false }) {
  const className =
    'rounded-[var(--radius-xl)] px-4 py-3 text-base font-semibold uppercase leading-none text-ink transition-opacity hover:opacity-70'

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

export default function CaseStudyNav() {
  return (
    <nav className="flex w-full items-start justify-between py-[var(--spacing-element-y)]">
      <Link
        to="/"
        className="text-2xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-70"
      >
        Gonen
      </Link>
      <div className="flex items-center gap-8">
        <NavLink href="/">About</NavLink>
        <NavLink href="mailto:hello@example.com">Contact</NavLink>
        <NavLink href="/cv.pdf" external>
          <span className="inline-flex items-center gap-2">
            CV
            <span aria-hidden="true">↗</span>
          </span>
        </NavLink>
      </div>
    </nav>
  )
}
