import { CrossTitle } from './case-study/splitDotTitle'

export default function PageHero({
  children,
  className = '',
  headingClassName = 'max-w-[960px]',
}) {
  return (
    <section className={`flex w-full flex-col items-start ${className}`.trim()}>
      <h1 className={`w-full ${headingClassName}`.trim()}>
        <CrossTitle text={children} />
      </h1>
    </section>
  )
}
