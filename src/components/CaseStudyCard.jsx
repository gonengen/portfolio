import { Link } from 'react-router-dom'
import callMadeIcon from '@assets/Icons/Property 1=call_made.svg'
import Icon from './Icon'

export default function CaseStudyCard({ id, title, subtitle, tags, image }) {
  return (
    <Link
      to={`/case-study/${id}`}
      className="group flex w-full flex-col gap-[var(--spacing-element-x)] transition-opacity hover:opacity-90"
    >
      <div className="flex w-full flex-col gap-[var(--spacing-element-x)]">
        <div className="h-[640px] w-full overflow-hidden rounded-[var(--radius-xl)] max-md:h-[320px]">
          <img
            src={image}
            alt={`${title} case study preview`}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </div>

        <div className="flex w-full items-start gap-[var(--spacing-element-x)]">
          <div className="flex min-w-0 flex-1 flex-col gap-[var(--spacing-inner)]">
            <p className="text-2xl font-medium leading-[1.44] tracking-[0.24px]">
              <span className="text-secondary">{title}</span>
              <span className="text-primary"> · {subtitle}</span>
            </p>
            <p className="text-2xl font-light leading-[1.6] text-secondary">{tags}</p>
          </div>

          <Icon
            src={callMadeIcon}
            tone="secondary"
            className="size-8 opacity-70 transition-opacity group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  )
}
