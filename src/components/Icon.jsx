const toneClasses = {
  primary: 'bg-primary',
  secondary: 'bg-secondary group-hover:bg-primary',
  white: 'bg-white',
}

export default function Icon({ src, tone = 'primary', className = 'size-6', style }) {
  return (
    <span
      aria-hidden="true"
      className={`icon inline-block shrink-0 mask-contain mask-center mask-no-repeat transition-colors duration-300 motion-reduce:transition-none ${toneClasses[tone]} ${className}`.trim()}
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        ...style,
      }}
    />
  )
}
