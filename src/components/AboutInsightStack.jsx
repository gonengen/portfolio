import { useEffect, useRef } from 'react'
import AboutInsightCard from './AboutInsightCard'

const NAV_GAP = 64
const STACK_STEP = 20

function valueAtPercentage({ from, to, percentage }) {
  const clamped = Math.min(1, Math.max(0, percentage))
  return from + (to - from) * clamped
}

function getScrollPercentage(element, offsetTop, offsetBottom) {
  const rect = element.getBoundingClientRect()
  const end = window.innerHeight - offsetBottom
  const range = end - offsetTop

  if (range <= 0) return 0

  return Math.min(1, Math.max(0, (end - rect.top) / range))
}

function getStickyTop() {
  const nav = document.getElementById('site-nav')
  return (nav?.offsetHeight ?? 0) + NAV_GAP
}

export default function AboutInsightStack({ insights }) {
  const containerRef = useRef(null)
  const endSpacerRef = useRef(null)
  const cardRefs = useRef([])
  const innerRefs = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const endSpacer = endSpacerRef.current
    const cards = cardRefs.current.filter(Boolean)
    const inners = innerRefs.current.filter(Boolean)

    if (!container || !endSpacer || cards.length === 0) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const updateLayout = () => {
      const stickyTop = getStickyTop()
      const innerHeight = inners[0]?.offsetHeight ?? cards[0].clientHeight

      container.style.setProperty('--cards-count', String(cards.length))
      container.style.setProperty('--card-height', `${innerHeight}px`)

      cards.forEach((card, index) => {
        card.style.top = `${stickyTop}px`
        card.style.paddingTop = `${index * STACK_STEP}px`
        card.style.zIndex = String(index + 1)
      })

      const releaseScroll = Math.max(
        stickyTop,
        window.innerHeight - stickyTop - innerHeight,
      )
      endSpacer.style.height = `${releaseScroll}px`
    }

    const resetInnerStyles = (inner) => {
      inner.style.transform = 'scale(1)'
      inner.style.filter = 'brightness(1)'
    }

    const updateScroll = () => {
      const stickyTop = getStickyTop()

      cards.forEach((card, index) => {
        const inner = inners[index]
        if (!inner) return

        if (prefersReducedMotion || index === cards.length - 1) {
          resetInnerStyles(inner)
          return
        }

        const nextCard = cards[index + 1]
        const offsetTop = stickyTop + index * STACK_STEP
        const offsetBottom = window.innerHeight - card.clientHeight
        const percentageY = getScrollPercentage(nextCard, offsetTop, offsetBottom)
        const toScale = 1 - (cards.length - 1 - index) * 0.1
        const scale = valueAtPercentage({ from: 1, to: toScale, percentage: percentageY })
        const brightness = valueAtPercentage({ from: 1, to: 0.6, percentage: percentageY })

        inner.style.transform = `scale(${scale})`
        inner.style.filter = `brightness(${brightness})`
      })
    }

    updateLayout()
    updateScroll()

    const resizeObserver = new ResizeObserver(() => {
      updateLayout()
      updateScroll()
    })

    const nav = document.getElementById('site-nav')

    resizeObserver.observe(cards[0])
    inners.forEach((inner) => resizeObserver.observe(inner))
    if (nav) resizeObserver.observe(nav)

    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateLayout)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateLayout)
    }
  }, [insights])

  return (
    <section className="relative isolate mx-auto w-full max-w-[960px]">
      <div
        ref={containerRef}
        className="grid w-full gap-y-10"
        style={{
          gridTemplateRows: 'repeat(var(--cards-count, 4), var(--card-height, auto))',
        }}
      >
        {insights.map((insight, index) => (
          <div
            key={insight.id}
            ref={(element) => {
              cardRefs.current[index] = element
            }}
            className="sticky"
          >
            <div
              ref={(element) => {
                innerRefs.current[index] = element
              }}
              className="origin-top will-change-transform motion-reduce:transform-none motion-reduce:filter-none"
            >
              <AboutInsightCard
                {...insight}
                className="shadow-[0_25px_50px_-12px_rgba(23,23,23,0.12)]"
              />
            </div>
          </div>
        ))}
      </div>
      <div ref={endSpacerRef} aria-hidden="true" />
    </section>
  )
}
