import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="font-display text-xl tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          Gonen Maatuk
        </Link>
        <nav className="flex items-center gap-8 text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-ink">
            Work
          </Link>
          <a href="mailto:hello@example.com" className="transition-colors hover:text-ink">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
