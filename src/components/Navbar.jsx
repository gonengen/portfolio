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

  const pillClass = `inline-flex items-center rounded-full transition-all duration-300 ${
    isScrolled
      ? 'border border-secondary/40 bg-container/60 backdrop-blur-md'
      : 'bg-container'
  }`

  return (
    <header id="site-nav" className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-4 py-[var(--spacing-element-y)] md:px-8">
        <nav className={`${pillClass} hidden md:inline-flex`}>
          <Button to="/">Home</Button>
          <Button to="/about">About</Button>
          <Button
            onClick={handleContactClick}
            rightIcon={<img src={contactIcon} alt="" aria-hidden="true" />}
          >
            Contact
          </Button>
          <Button to="/stash">000000</Button>
        </nav>

        <nav className={`${pillClass} inline-flex gap-[var(--spacing-inner)] p-1 md:hidden`}>
          <Button to="/" iconOnly ariaLabel="Home" leftIcon={<img src={homeIcon} alt="" aria-hidden="true" />} />
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
            to="/stash"
            iconOnly
            ariaLabel="000000"
            leftIcon={<img src={stashIcon} alt="" aria-hidden="true" />}
          />
        </nav>
      </div>
    </header>
  )
}
