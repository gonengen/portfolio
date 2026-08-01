function ImpactCard({ value, suffix = '%', label }) {
  return (
    <div className="flex shrink-0 flex-col items-start gap-[var(--spacing-element-x)]">
      <div className="flex items-end gap-[var(--spacing-inner)]">
        <p className="text-display text-[128px] font-thin leading-none tracking-[-2.56px] text-primary max-lg:text-7xl max-md:text-6xl">
          {value}
        </p>
        {suffix && (
          <p className="pb-1 text-2xl font-light leading-[1.6] text-primary">{suffix}</p>
        )}
      </div>
      <p className="text-2xl font-light leading-[1.6] text-secondary">{label}</p>
    </div>
  )
}

export default function ImpactSection({ metrics }) {
  return (
    <section className="flex w-full flex-wrap content-center items-center justify-between gap-y-[var(--spacing-section)]">
      {metrics.map((metric) => (
        <ImpactCard
          key={metric.label}
          value={metric.value}
          suffix={metric.suffix}
          label={metric.label}
        />
      ))}
    </section>
  )
}
