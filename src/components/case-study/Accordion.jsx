import { useId, useState } from 'react'
import addIcon from '@assets/Icons/Property 1=add_2.svg'
import removeIcon from '@assets/Icons/Property 1=remove.svg'

const ACCORDION_TRANSITION = '600ms cubic-bezier(0.4, 0, 0.2, 1)'

function MountainFlagIcon({ className = 'size-7 shrink-0 text-secondary' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.7 12.925L10.075 13.85L12 12.875L13.925 13.85L15.25 12.975L14.25 11H9.65L8.7 12.925ZM5.225 20H18.75L16.15 14.775L14.075 16.15L12 15.125L9.925 16.15L7.8 14.75L5.225 20ZM2 22L7.85 10.125C8.01667 9.79167 8.2625 9.52083 8.5875 9.3125C8.9125 9.10417 9.26667 9 9.65 9H11V2H18L17 4L18 6H13V9H14.25C14.6333 9 14.9833 9.1 15.3 9.3C15.6167 9.5 15.8667 9.76667 16.05 10.1L22 22H2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentId = useId()

  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-container px-[var(--spacing-element-x)] motion-reduce:transition-none ${
        isOpen ? 'gap-[var(--spacing-element-y)]' : ''
      }`}
      style={{ transition: `gap ${ACCORDION_TRANSITION}` }}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-[var(--spacing-inner)] py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="flex min-w-0 flex-1 items-center gap-[var(--spacing-tight-x)]">
          <MountainFlagIcon className="size-7 shrink-0 text-secondary" />
          <span className="min-w-0 flex-1 text-2xl font-medium leading-[1.44] tracking-[0.24px] text-primary">
            {title}
          </span>
        </span>
        <img
          src={isOpen ? removeIcon : addIcon}
          alt=""
          aria-hidden="true"
          className="size-8 shrink-0 motion-reduce:transition-none"
          style={{ transition: `transform ${ACCORDION_TRANSITION}` }}
        />
      </button>

      <div
        id={contentId}
        aria-hidden={!isOpen}
        className={`grid motion-reduce:transition-none ${
          isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
        style={{
          transition: `grid-template-rows ${ACCORDION_TRANSITION}, opacity ${ACCORDION_TRANSITION}`,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <div className="text-2xl font-light leading-[1.6] text-secondary">{children}</div>
        </div>
      </div>
    </div>
  )
}
