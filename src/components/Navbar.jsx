import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import homeIcon from '@assets/Icons/Property 1=home.svg'
import aboutIcon from '@assets/Icons/Property 1=face_5.svg'
import contactIcon from '@assets/Icons/Property 1=chat_bubble.svg'
import darkModeIcon from '@assets/Icons/Property 1=partly_cloudy_night.svg'
import brightModeIcon from '@assets/Icons/Property 1=clear_day.svg'
import Button from './Button'
import Icon from './Icon'
import { useTheme } from '../context/ThemeContext'

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
  const { isDark, toggleTheme } = useTheme()
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
  const themeToggleLabel = isDark ? 'FFFFFF' : '000000'
  const themeToggleIcon = isDark ? brightModeIcon : darkModeIcon
  const themeToggleAriaLabel = isDark ? 'Switch to bright mode' : 'Switch to dark mode'

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
            <Button
              fill={!isScrolled}
              type="button"
              onClick={toggleTheme}
              ariaLabel={themeToggleAriaLabel}
            >
              {themeToggleLabel}
            </Button>
          </div>

          <div className="flex items-center gap-[var(--spacing-inner)] p-2 md:hidden">
            <Button to="/" iconOnly ariaLabel="Home" leftIcon={<Icon src={homeIcon} />} />
            <Button
              to="/about"
              iconOnly
              ariaLabel="About"
              leftIcon={<Icon src={aboutIcon} />}
            />
            <Button
              onClick={handleContactClick}
              iconOnly
              ariaLabel="Contact"
              leftIcon={<Icon src={contactIcon} />}
            />
            <Button
              type="button"
              iconOnly
              onClick={toggleTheme}
              ariaLabel={themeToggleAriaLabel}
              leftIcon={<Icon src={themeToggleIcon} />}
            />
          </div>
        </nav>
      </div>
    </header>
  )
}
