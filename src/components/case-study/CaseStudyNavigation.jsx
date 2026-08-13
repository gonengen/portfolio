import { Link } from 'react-router-dom'
import callMadeIcon from '@assets/Icons/Property 1=call_made.svg'
import Icon from '../Icon'

const caseStudies = [
  { id: 'secure-stay', title: 'Secure Stay', subtitle: 'AI Governance · ↓75% MTTR' },
  { id: 'robonote', title: 'Robonote', subtitle: 'Conversation Intelligence · ↓8% Churn' },
  { id: 'easy', title: 'Easy', subtitle: 'Consumer App · +6% Adoption' },
]

export default function CaseStudyNavigation({ currentId }) {
  const otherStudies = caseStudies.filter((study) => study.id !== currentId)

  return (
    <section className="mx-auto flex w-full max-w-[960px] flex-col gap-[var(--spacing-element-x)] border-t border-secondary/30 pt-[var(--spacing-stack)]">
      <p className="text-2xl font-medium leading-[1.44] tracking-[0.24px] text-primary">
        More case studies
      </p>
      <div className="flex flex-col gap-[var(--spacing-element-y)]">
        {otherStudies.map((study) => (
          <Link
            key={study.id}
            to={`/case-study/${study.id}`}
            className="group flex items-center justify-between gap-[var(--spacing-element-x)] rounded-[var(--radius-lg)] border border-secondary/25 bg-container px-[var(--spacing-element-x)] py-[var(--spacing-element-y)] transition-opacity hover:opacity-90"
          >
            <div className="min-w-0">
              <p className="text-2xl font-medium leading-[1.44] tracking-[0.24px] text-primary">
                <span className="text-secondary">{study.title}</span>
                <span className="text-primary"> · {study.subtitle}</span>
              </p>
            </div>
            <Icon
              src={callMadeIcon}
              tone="secondary"
              className="size-6 opacity-70 transition-opacity group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
