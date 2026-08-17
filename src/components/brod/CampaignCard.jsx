export default function CampaignCard({ id, strategy, description, image, imageAlt, className = '' }) {
  return (
    <article
      className={`flex w-full flex-col gap-[var(--spacing-element-y)] rounded-[var(--radius-xl)] bg-container p-12 max-lg:p-6 ${className}`.trim()}
    >
      <div className="flex w-full flex-col gap-[var(--spacing-element-y)] text-2xl font-medium leading-[1.44] tracking-[0.24px] text-secondary">
        <div className="flex items-center gap-[var(--spacing-element-x)] whitespace-nowrap">
          <p className="mb-0">{id}</p>
          <p className="mb-0">{strategy}</p>
        </div>
        <p className="mb-0 w-full">{description}</p>
      </div>

      <div className="w-full overflow-hidden rounded-[21.6px] bg-surface">
        <img
          src={image}
          alt={imageAlt}
          className="block aspect-square w-full object-cover"
          loading="lazy"
        />
      </div>
    </article>
  )
}
