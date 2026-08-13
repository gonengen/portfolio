import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import homeIcon from '@assets/Icons/Property 1=home.svg'
import aboutIcon from '@assets/Icons/Property 1=face_5.svg'
import contactIcon from '@assets/Icons/Property 1=chat_bubble.svg'
import stashIcon from '@assets/Icons/Property 1=partly_cloudy_night.svg'
import Button from './Button'

function scrollToFooter() {
  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
}

const navFrameClass = (isScrolled) =>
  `inline-flex items-center rounded-full transition-all duration-300 ${
    isScrolled ? 'bg-container/60 backdrop-blur-md' : 'bg-container'
  }`

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

  const pillClass = navFrameClass(isScrolled)

  return (
    <header id="site-nav" className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-4 py-[var(--spacing-element-y)] md:px-8">
        <nav className={pillClass}>
          <div className="hidden items-center gap-[var(--spacing-inner)] p-[var(--spacing-tight-x)] md:flex">
            <Button fill={!isScrolled} to="/">
              Home
            </Button>
            <Button fill={!isScrolled} to="/about">
              About
            </Button>
            <Button fill={!isScrolled} onClick={handleContactClick}>
              Contact
            </Button>
            <Button fill={!isScrolled} type="button">
              000000
            </Button>
          </div>

          <div className="flex items-center gap-[var(--spacing-inner)] p-2 md:hidden">
            <Button
              to="/"
              iconOnly
              ariaLabel="Home"
              leftIcon={<img src={homeIcon} alt="" aria-hidden="true" />}
            />
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
            <Button
              type="button"
              iconOnly
              ariaLabel="000000"
              leftIcon={<img src={stashIcon} alt="" aria-hidden="true" />}
            />
          </div>
        </nav>
      </div>
    </header>
  )
}
