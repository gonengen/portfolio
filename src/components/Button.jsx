import { Link } from 'react-router-dom'

const baseClass =
  'group inline-flex items-center gap-2 text-base font-semibold uppercase leading-none transition-all duration-300 ease-out motion-reduce:transition-none'

function getSurfaceClass({ fill, outline, iconOnly, hasText }) {
  if (fill) {
    return iconOnly
      ? 'rounded-[var(--radius-xl)] bg-container p-3 text-primary hover:bg-container-hover'
      : 'rounded-[var(--radius-xl)] bg-container px-4 py-3 text-primary hover:bg-container-hover'
  }

  if (outline) {
    return iconOnly
      ? 'rounded-[var(--radius-xl)] border border-secondary bg-transparent p-3 text-primary hover:border-primary hover:bg-primary/5'
      : 'rounded-[var(--radius-xl)] border border-secondary bg-transparent px-4 py-3 text-primary hover:border-primary hover:bg-primary/5'
  }

  if (iconOnly) {
    return 'rounded-[var(--radius-xl)] bg-transparent p-3 text-primary hover:bg-primary/5'
  }

  return `rounded-[var(--radius-xl)] bg-transparent px-4 py-3 text-primary ${
    hasText ? '' : 'hover:bg-primary/5'
  }`
}

function getLayoutClass(variant, className) {
  if (variant === 'split') {
    return `w-full justify-between ${className}`.trim()
  }

  return className
}

export default function Button({
  children,
  href,
  to,
  onClick,
  leftIcon,
  rightIcon,
  variant = 'ghost',
  fill = false,
  iconOnly = false,
  className = '',
  external = false,
  type = 'button',
  ariaLabel,
}) {
  const outline = variant === 'outline' || variant === 'bordered' || variant === 'split'
  const hasText = Boolean(children) && !iconOnly

  const surfaceClass = getSurfaceClass({ fill, outline, iconOnly, hasText })
  const layoutClass = getLayoutClass(variant, className)
  const classes = `${baseClass} ${surfaceClass} ${layoutClass}`.trim()

  const content = (
    <>
      {leftIcon && (
        <span className="inline-flex size-6 shrink-0 items-center justify-center [&_.icon]:size-6">
          {leftIcon}
        </span>
      )}
      {hasText && <span className="inline-block">{children}</span>}
      {rightIcon && (
        <span className="inline-flex size-6 shrink-0 items-center justify-center [&_.icon]:size-6">
          {rightIcon}
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
