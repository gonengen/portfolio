import { Link } from 'react-router-dom'

const baseClass =
  'group inline-flex items-center gap-2 px-4 py-3 text-base font-semibold uppercase leading-none text-primary transition-colors'

export default function Button({
  children,
  href,
  to,
  onClick,
  leftIcon,
  rightIcon,
  variant = 'ghost',
  className = '',
  external = false,
  type = 'button',
  ariaLabel,
}) {
  const variantClass =
    variant === 'bordered'
      ? 'border border-secondary justify-center'
      : variant === 'split'
        ? 'border border-secondary w-full justify-between'
        : 'rounded-[var(--radius-xl)]'

  const content = (
    <>
      {leftIcon && (
        <span className="inline-flex size-6 shrink-0 items-center justify-center text-primary [&_img]:size-6 [&_svg]:size-6">
          {leftIcon}
        </span>
      )}
      <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100">
        {children}
      </span>
      {rightIcon && (
        <span className="inline-flex size-6 shrink-0 items-center justify-center text-secondary transition-colors group-hover:text-primary [&_img]:size-6 [&_svg]:size-6">
          {rightIcon}
        </span>
      )}
    </>
  )

  const classes = `${baseClass} ${variantClass} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
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
