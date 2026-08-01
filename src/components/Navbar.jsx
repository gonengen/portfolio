import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoDesktop from '@assets/logo/logo_desktop.svg'
import logoMobile from '@assets/logo/logo_mobile.svg'
import callMadeIcon from '@assets/Icons/Property 1=call_made.svg'
import Button from './Button'

function scrollToFooter() {
  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = () => {
    const hasFooterOnPage = ['/', '/about'].includes(location.pathname)

    if (hasFooterOnPage) {
      scrollToFooter()
      return
    }

    navigate('/#footer')
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-secondary/40 bg-surface-primary/60 backdrop-blur-md'
          : 'border-secondary bg-surface-primary'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-[var(--spacing-element-y)] md:px-8">
        <Link to="/" className="shrink-0 transition-opacity hover:opacity-70">
          <img
            src={logoDesktop}
            alt="Gonen Maatuk"
            className="hidden h-[26px] w-auto md:block"
          />
          <img
            src={logoMobile}
            alt="Gonen Maatuk"
            className="block h-[25px] w-auto md:hidden"
          />
        </Link>
        <nav className="flex items-center gap-8">
          <Button to="/about">About</Button>
          <Button
            onClick={handleContactClick}
            rightIcon={<img src={callMadeIcon} alt="" aria-hidden="true" />}
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  )
}
