import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import CaseStudyCard from '../components/CaseStudyCard'
import secureStayImage from '@assets/home_page/Case Name=Secure Stay, Location=Case Study Page/_.png'
import robonoteImage from '@assets/home_page/Case Name=Robonote, Location=Case Study Page/_.png'
import easyImage from '@assets/home_page/Case Name=Easy, Location=Case Study Page/_.png'

const caseStudies = [
  {
    id: 'robonote',
    title: 'Robonote',
    subtitle: 'Conversation Intelligence · ↓8% Churn',
    tags: 'B2B SaaS · AI Analytics · Dashboard · Enterprise',
    image: robonoteImage,
  },
  {
    id: 'easy',
    title: 'Easy',
    subtitle: 'Consumer App · +6% User Adoption',
    tags: 'B2C · Mobile App · Marketplace · Growth',
    image: easyImage,
  },
  {
    id: 'secure-stay',
    title: 'Secure Stay',
    subtitle: 'AI Governance · ↓75% MTTR',
    tags: 'Enterprise SaaS · AI Agents · Cyber Security · AI Governance',
    image: secureStayImage,
  },
]

const projectList = [
  {
    highlight: 'Easy App · Consumer App · Increased user adoption by 6%',
    role: 'Senior Product Designer',
    year: '2024–2026',
  },
  {
    highlight: 'Easy Cloud · B2B SaaS Platform · Improved profile completion by 26%',
    role: 'Senior Product Designer',
    year: '2022–2024',
  },
  {
    highlight: 'RoboNote · Conversation Intelligence · Reduced early-stage churn by 8%',
    role: 'Senior Product Designer',
    year: '2023–2024',
  },
  {
    highlight: 'Secure Stay · AI Governance · Reduced incident response time by 75%',
    role: 'Senior Product Designer',
    year: '2024',
  },
  {
    highlight: 'Mr. Japan · AI Travel Companion · Increased bookings by 150%',
    role: 'Senior Product Designer',
    year: '2022',
  },
  {
    highlight: 'Magic Square · Web3 Marketplace · Supported a $3M Binance-backed launch',
    role: 'Product Designer',
    year: '2021',
  },
  {
    highlight: 'Antelope · Enterprise CRM · Reduced agent-to-lead matching time by 20%',
    role: 'Product Designer',
    year: '2020',
  },
]

function ProjectRow({ highlight, role, year }) {
  return (
    <div className="flex w-full flex-col gap-4 border-b border-secondary/30 pb-[var(--spacing-element-y)] last:border-b-0">
      <p className="text-2xl font-medium leading-[1.44] tracking-[0.24px] text-primary">
        {highlight}
      </p>
      <div className="flex w-full items-center justify-between text-2xl font-light leading-[1.6] text-secondary">
        <span>{role}</span>
        <span>{year}</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <PageShell>
      <PageHero headingClassName="max-w-6xl">
        An AI Expert &amp; Design Lead, helping product teams find their aha moment.
      </PageHero>

      <section id="work" className="flex w-full flex-col gap-[var(--spacing-section)] scroll-mt-24">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}
      </section>

      <section className="mx-auto flex w-full max-w-[960px] flex-col gap-[var(--spacing-stack)]">
        {projectList.map((project) => (
          <ProjectRow key={project.highlight} {...project} />
        ))}
      </section>
    </PageShell>
  )
}
