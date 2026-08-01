export default function MetadataSection({ items }) {
  return (
    <section className="flex w-full flex-wrap content-start items-start gap-x-[var(--spacing-element-x)] gap-y-[var(--spacing-element-y)] text-2xl font-light leading-[1.6]">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-[var(--spacing-element-x)]">
          <p className="text-secondary">{item.label}</p>
          <p className="text-primary">{item.value}</p>
        </div>
      ))}
    </section>
  )
}
