import { useCallback, useEffect, useRef, useState } from 'react'
import addIcon from '@assets/Icons/Property 1=add_2.svg'
import removeIcon from '@assets/Icons/Property 1=remove.svg'
import arrowLeftIcon from '@assets/Icons/Property 1=arrow_left_alt.svg'
import arrowRightIcon from '@assets/Icons/Property 1=arrow_right_alt.svg'

const SLIDE_MS = 500
const TRANSITION_EASE = 'cubic-bezier(0.4, 0, 0.2, 1)'
const DRAG_THRESHOLD = 48

function GalleryPanel({
  tabs,
  activeIndex,
  onSelectIndex,
  onPrevious,
  onNext,
  onExpand,
  onClose,
  isExpanded,
  hideTabs = false,
}) {
  const activeTab = tabs[activeIndex]
  const viewportRef = useRef(null)
  const dragStartXRef = useRef(0)
  const dragPointerIdRef = useRef(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const finishDrag = useCallback(
    (clientX) => {
      const delta = clientX - dragStartXRef.current

      setIsDragging(false)
      setDragOffset(0)
      dragPointerIdRef.current = null

      if (Math.abs(delta) < DRAG_THRESHOLD) return

      if (delta < 0) {
        onNext()
      } else {
        onPrevious()
      }
    },
    [onNext, onPrevious],
  )

  const handlePointerDown = (event) => {
    if (event.button !== 0) return
    if (event.target.closest('button')) return

    dragStartXRef.current = event.clientX
    dragPointerIdRef.current = event.pointerId
    setIsDragging(true)
    setDragOffset(0)
    viewportRef.current?.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!isDragging || event.pointerId !== dragPointerIdRef.current) return

    setDragOffset(event.clientX - dragStartXRef.current)
  }

  const handlePointerUp = (event) => {
    if (!isDragging || event.pointerId !== dragPointerIdRef.current) return

    viewportRef.current?.releasePointerCapture(event.pointerId)
    finishDrag(event.clientX)
  }

  const handlePointerCancel = (event) => {
    if (event.pointerId !== dragPointerIdRef.current) return

    setIsDragging(false)
    setDragOffset(0)
    dragPointerIdRef.current = null
  }

  return (
    <>
      {!hideTabs && (
        <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-6">
          <nav
            className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto"
            aria-label="Gallery views"
            role="tablist"
          >
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={tab.id}
                  id={`gallery-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  onClick={() => onSelectIndex(index)}
                  className={`relative shrink-0 px-3 py-2 text-sm font-medium leading-none transition-colors duration-300 md:text-base ${
                    isActive ? 'text-white' : 'text-[#94949e] hover:text-[#c7c8ca]'
                  }`}
                  aria-selected={isActive}
                  aria-controls={`gallery-panel-${tab.id}`}
                >
                  {tab.label}
                  <span
                    className={`absolute inset-x-3 -bottom-3 h-0.5 rounded-full bg-white transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {!isExpanded && (
              <button
                type="button"
                onClick={onExpand}
                className="flex size-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                aria-label="Expand gallery"
              >
                <img src={addIcon} alt="" aria-hidden="true" className="size-5 invert" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
              aria-label={isExpanded ? 'Close expanded gallery' : 'Reset gallery'}
            >
              <img src={removeIcon} alt="" aria-hidden="true" className="size-5 invert" />
            </button>
          </div>
        </header>
      )}

      <div className={`relative w-full overflow-hidden ${hideTabs ? '' : 'bg-[#111214]'}`}>
        <div
          ref={viewportRef}
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeTab?.label ?? 'Gallery'} view`}
          className={`relative w-full touch-none select-none overflow-hidden ${
            isExpanded ? 'aspect-auto min-h-[60vh]' : 'aspect-[16/10] max-md:aspect-[4/3]'
          } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div
            className="flex h-full w-full motion-reduce:transition-none"
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : `transform ${SLIDE_MS}ms ${TRANSITION_EASE}`,
            }}
          >
            {tabs.map((tab, index) => (
              <div key={tab.id} className="h-full w-full shrink-0">
                <img
                  src={tab.image}
                  alt={tab.alt || `${tab.label} view`}
                  draggable={false}
                  className={`size-full object-cover object-top ${
                    isExpanded ? 'bg-[#111214] object-contain' : ''
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => onPrevious()}
            className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 md:left-4 md:size-11"
            aria-label={`Previous slide: ${tabs[(activeIndex - 1 + tabs.length) % tabs.length]?.label}`}
          >
            <img src={arrowLeftIcon} alt="" aria-hidden="true" className="size-5 invert" />
          </button>

          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => onNext()}
            className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 md:right-4 md:size-11"
            aria-label={`Next slide: ${tabs[(activeIndex + 1) % tabs.length]?.label}`}
          >
            <img src={arrowRightIcon} alt="" aria-hidden="true" className="size-5 invert" />
          </button>

          <div
            className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2.5"
            role="tablist"
            aria-label="Gallery pagination"
          >
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={() => onSelectIndex(index)}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    isActive
                      ? 'size-2.5 bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.25)]'
                      : 'size-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to ${tab.label}`}
                  aria-selected={isActive}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default function InteractiveGallery({ tabs = [], caption, hideTabs = true }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef(null)

  const tabCount = tabs.length

  const goToSlide = useCallback(
    (index) => {
      if (tabCount === 0) return
      const normalizedIndex = ((index % tabCount) + tabCount) % tabCount
      setActiveIndex(normalizedIndex)
    },
    [tabCount],
  )

  const goToPrevious = useCallback(() => {
    goToSlide(activeIndex - 1)
  }, [activeIndex, goToSlide])

  const goToNext = useCallback(() => {
    goToSlide(activeIndex + 1)
  }, [activeIndex, goToSlide])

  useEffect(() => {
    if (activeIndex >= tabCount && tabCount > 0) {
      setActiveIndex(0)
    }
  }, [activeIndex, tabCount])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (tabCount === 0) return

      const targetTag = event.target?.tagName?.toLowerCase()
      if (targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select') return

      const isGalleryFocused = sectionRef.current?.contains(document.activeElement)
      const shouldHandle = isExpanded || isGalleryFocused

      if (!shouldHandle) return

      if (event.key === 'Escape' && isExpanded) {
        setIsExpanded(false)
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToPrevious()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious, isExpanded, tabCount])

  useEffect(() => {
    if (!isExpanded) return undefined

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isExpanded])

  if (tabs.length === 0) return null

  const activeTab = tabs[activeIndex] ?? tabs[0]

  const handleClose = () => {
    if (isExpanded) {
      setIsExpanded(false)
      return
    }

    goToSlide(0)
  }

  const panelProps = {
    tabs,
    activeIndex,
    onSelectIndex: goToSlide,
    onPrevious: goToPrevious,
    onNext: goToNext,
    onExpand: () => setIsExpanded(true),
    onClose: handleClose,
    hideTabs,
  }

  return (
    <section
      ref={sectionRef}
      tabIndex={-1}
      className="flex w-full flex-col gap-[var(--spacing-stack)] outline-none"
      aria-label="Secure Stay interactive gallery"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Showing slide {activeIndex + 1} of {tabs.length}: {activeTab.label}
      </p>

      <div
        className={`overflow-hidden rounded-2xl ${
          hideTabs
            ? 'shadow-[0_24px_48px_rgba(0,0,0,0.12)]'
            : 'bg-[#1a1c1e] shadow-[0_24px_48px_rgba(0,0,0,0.12)]'
        }`}
      >
        <GalleryPanel {...panelProps} isExpanded={false} />
      </div>

      {caption && (
        <p className="mx-auto w-full max-w-[960px] text-2xl font-light leading-[1.6] text-primary">
          {caption}
        </p>
      )}

      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeTab.label} expanded view`}
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#1a1c1e] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <GalleryPanel {...panelProps} isExpanded />
          </div>
        </div>
      )}
    </section>
  )
}
