export default function NavIcon({ src, className = '' }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`size-6 dark-mode-invert ${className}`.trim()}
    />
  )
}
