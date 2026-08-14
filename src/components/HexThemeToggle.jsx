import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const BRIGHT_INVITE_HEX = '000000'
const DARK_INVITE_HEX = 'FFFFFF'
const DELETE_STEP_MS = 35
const TYPE_STEP_MS = 45

const THEME_PREVIEW = {
  bright: {
    surface: '#f8f6f1',
    content: '#292929',
  },
  dark: {
    surface: '#292929',
    content: '#f8f6f1',
  },
}

function inviteHexForTheme(isDark) {
  return isDark ? DARK_INVITE_HEX : BRIGHT_INVITE_HEX
}

function delay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* Custom hex-toggle hover + typewriter interaction — scoped to this button only. Do not refactor into global button/hover styles. */
/* Hover previews the opposite mode: surface-primary + content-main on this button only. */
export default function HexThemeToggle({ filled = false }) {
  const { isDark, toggleTheme } = useTheme()
  const inviteHex = inviteHexForTheme(isDark)
  const previewTheme = isDark ? THEME_PREVIEW.bright : THEME_PREVIEW.dark
  const [displayText, setDisplayText] = useState(inviteHex)
  const [showCursor, setShowCursor] = useState(false)
  const isAnimatingRef = useRef(false)
  const runIdRef = useRef(0)

  useEffect(() => {
    if (isAnimatingRef.current) return
    setDisplayText(inviteHex)
  }, [inviteHex])

  useEffect(
    () => () => {
      runIdRef.current += 1
    },
    [],
  )

  const handleClick = async () => {
    if (isAnimatingRef.current) return

    if (prefersReducedMotion()) {
      toggleTheme()
      return
    }

    isAnimatingRef.current = true
    const runId = ++runIdRef.current
    const fromHex = displayText
    const nextHex = inviteHexForTheme(!isDark)

    setShowCursor(true)

    for (let index = fromHex.length; index >= 0; index -= 1) {
      if (runId !== runIdRef.current) {
        isAnimatingRef.current = false
        setShowCursor(false)
        return
      }
      setDisplayText(fromHex.slice(0, index))
      await delay(DELETE_STEP_MS)
    }

    toggleTheme()

    for (let index = 1; index <= nextHex.length; index += 1) {
      if (runId !== runIdRef.current) {
        isAnimatingRef.current = false
        setShowCursor(false)
        return
      }
      setDisplayText(nextHex.slice(0, index))
      await delay(TYPE_STEP_MS)
    }

    if (runId !== runIdRef.current) {
      isAnimatingRef.current = false
      setShowCursor(false)
      return
    }

    setShowCursor(false)
    isAnimatingRef.current = false
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? 'Switch to bright mode' : 'Switch to dark mode'}
      style={{
        '--hex-preview-surface': previewTheme.surface,
        '--hex-preview-content': previewTheme.content,
      }}
      className={`hex-theme-toggle inline-flex min-w-[7ch] items-center justify-center rounded-[var(--radius-xl)] px-4 py-3 font-mono text-sm font-medium leading-none text-primary transition-[background-color,color] duration-200 ease-out motion-reduce:transition-none hover:bg-[var(--hex-preview-surface)] hover:text-[var(--hex-preview-content)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        filled ? 'bg-container' : 'bg-transparent'
      }`.trim()}
    >
      <span aria-hidden="true" className="tabular-nums tracking-tight">
        {displayText}
        {showCursor ? '|' : ''}
      </span>
    </button>
  )
}
