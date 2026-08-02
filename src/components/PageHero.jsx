export default function PageHero({
  segments,
  children,
  className = '',
  headingClassName = 'max-w-[960px]',
}) {
  return (
    <section className={`flex w-full flex-col items-start ${className}`.trim()}>
      <h1 className={`w-full text-balance text-primary ${headingClassName}`.trim()}>
        {children ??
          segments?.map((segment) => (
            <span key={segment.text} className="text-primary">
              {segment.text}
            </span>
          ))}
      </h1>
    </section>
  )
}
