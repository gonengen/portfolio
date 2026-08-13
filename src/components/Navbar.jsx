import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoDesktop from '@assets/logo/logo_desktop.svg'
import logoMobile from '@assets/logo/logo_mobile.svg'
import aboutIcon from '@assets/Icons/Property 1=face_5.svg'
import contactIcon from '@assets/Icons/Property 1=chat_bubble.svg'
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
      id="site-nav"
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

        <nav className="hidden items-center gap-8 md:flex">
          <Button to="/about">About</Button>
          <Button
            onClick={handleContactClick}
            rightIcon={<img src={contactIcon} alt="" aria-hidden="true" />}
          >
            Contact
          </Button>
        </nav>

        <nav className="flex items-center gap-[var(--spacing-inner)] md:hidden">
          <Button
            to="/about"
            iconOnly
            ariaLabel="About"
            leftIcon={<img src={aboutIcon} alt="" aria-hidden="true" />}
          />
          <Button
            onClick={handleContactClick}
            iconOnly
            ariaLabel="Contact"
            leftIcon={<img src={contactIcon} alt="" aria-hidden="true" />}
          />
        </nav>
      </div>
    </header>
  )
}
