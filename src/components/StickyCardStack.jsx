import { useEffect, useRef, useState } from 'react'

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

function getActiveCardIndex(cards) {
  const stickyTop = getStickyTop()
  let activeIndex = -1

  cards.forEach((card, index) => {
    if (card.getBoundingClientRect().top <= stickyTop + 1) {
      activeIndex = index
    }
  })

  return activeIndex
}

function getCardHeight(cards, inners) {
  const innerHeights = inners.map((inner) => inner?.offsetHeight ?? 0)
  const maxInnerHeight = innerHeights.length ? Math.max(...innerHeights) : 0
  return maxInnerHeight || cards[0]?.clientHeight || 0
}

export default function StickyCardStack({
  items,
  renderCard,
  getItemKey = (item, index) => item.id ?? index,
  enableScrollEffects = false,
  stackStep = STACK_STEP,
  maxWidthClass = 'max-w-[960px]',
  activeCardShadow = false,
  ariaLabel,
}) {
  const containerRef = useRef(null)
  const cardRefs = useRef([])
  const innerRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, items.length)
    innerRefs.current = innerRefs.current.slice(0, items.length)
  }, [items.length])

  useEffect(() => {
    if (!activeCardShadow) return undefined

    let rafId = 0

    const updateActiveCard = () => {
      const cards = cardRefs.current.filter(Boolean)
      if (cards.length === 0) return

      const nextActive = getActiveCardIndex(cards)
      setActiveIndex((prev) => (prev !== nextActive ? nextActive : prev))
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateActiveCard)
    }

    updateActiveCard()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateActiveCard)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateActiveCard)
    }
  }, [activeCardShadow, items.length])

  useEffect(() => {
    const container = containerRef.current
    const cards = cardRefs.current.filter(Boolean)
    const inners = innerRefs.current.filter(Boolean)

    if (!container || cards.length === 0) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const updateLayout = () => {
      const stickyTop = getStickyTop()
      const innerHeight = getCardHeight(cards, inners)

      container.style.setProperty('--cards-count', String(cards.length))
      container.style.setProperty('--card-height', `${innerHeight}px`)

      cards.forEach((card, index) => {
        card.style.top = `${stickyTop + index * stackStep}px`
        card.style.zIndex = String(index + 1)
      })
    }

    const resetInnerStyles = (inner) => {
      inner.style.transform = 'scale(1)'
      inner.style.filter = 'brightness(1)'
    }

    const updateScroll = () => {
      if (!enableScrollEffects) return

      const stickyTop = getStickyTop()

      cards.forEach((card, index) => {
        const inner = inners[index]
        if (!inner) return

        if (prefersReducedMotion || index === cards.length - 1) {
          resetInnerStyles(inner)
          return
        }

        const nextCard = cards[index + 1]
        const offsetTop = stickyTop + index * stackStep
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

    if (enableScrollEffects) {
      window.addEventListener('scroll', updateScroll, { passive: true })
    }
    window.addEventListener('resize', updateLayout)

    return () => {
      resizeObserver.disconnect()
      if (enableScrollEffects) {
        window.removeEventListener('scroll', updateScroll)
      }
      window.removeEventListener('resize', updateLayout)
    }
  }, [items, enableScrollEffects, stackStep])

  return (
    <section
      className={`relative mx-auto w-full ${maxWidthClass}`}
      aria-label={ariaLabel}
    >
      <div
        ref={containerRef}
        className="grid w-full gap-y-6"
        style={{
          gridTemplateRows: 'repeat(var(--cards-count, 1), var(--card-height, auto))',
        }}
      >
        {items.map((item, index) => (
          <div
            key={getItemKey(item, index)}
            ref={(element) => {
              cardRefs.current[index] = element
            }}
            className="sticky"
          >
            <div
              ref={(element) => {
                innerRefs.current[index] = element
              }}
              className={
                enableScrollEffects
                  ? 'origin-top will-change-transform motion-reduce:transform-none motion-reduce:filter-none'
                  : undefined
              }
            >
              {renderCard(item, index, {
                isActive: !activeCardShadow || index === activeIndex,
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
