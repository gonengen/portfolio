import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'gonenmaatuk-theme'

export const ThemeContext = createContext(null)

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
}

export function getStoredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'dark' ? 'dark' : 'bright'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setThemeState((current) => (current === 'bright' ? 'dark' : 'bright'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
