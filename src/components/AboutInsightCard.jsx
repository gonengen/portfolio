export default function AboutInsightCard({ icon, iconAlt, lead, emphasis }) {
  return (
    <article className="flex w-full flex-col items-start gap-[var(--spacing-element-y)] rounded-[var(--radius-xl)] bg-container px-[var(--spacing-element-x)] py-[var(--spacing-element-y)] sm:flex-row sm:items-center">
      <div className="size-32 shrink-0 overflow-hidden rounded-[var(--radius-lg)] bg-surface-primary">
        <img src={icon} alt={iconAlt} className="size-full object-cover" loading="lazy" />
      </div>
      <p className="min-w-0 flex-1 text-2xl leading-[1.44] tracking-[0.24px]">
        <span className="font-light text-secondary">{lead}</span>{' '}
        <span className="font-medium text-primary">{emphasis}</span>
      </p>
    </article>
  )
}
