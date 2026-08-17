export default function CampaignCard({
  id,
  strategy,
  description,
  image,
  imageAlt,
  className = '',
  textAreaRef,
  textMinHeight,
}) {
  return (
    <article
      className={`flex w-full min-w-0 flex-col gap-[var(--spacing-element-y)] rounded-[var(--radius-xl)] bg-container p-12 max-lg:p-6 ${className}`.trim()}
    >
      <div
        ref={textAreaRef}
        className="flex w-full min-w-0 flex-col gap-[var(--spacing-element-y)] text-2xl font-medium leading-[1.44] tracking-[0.24px] text-secondary"
        style={textMinHeight ? { minHeight: `${textMinHeight}px` } : undefined}
      >
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-[var(--spacing-element-x)] gap-y-1">
          <p className="mb-0 shrink-0">{id}</p>
          <p className="mb-0 min-w-0">{strategy}</p>
        </div>
        <p className="mb-0 w-full min-w-0">{description}</p>
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-[21.6px] bg-surface">
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
