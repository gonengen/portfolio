import PageShell from '../components/PageShell'
import './Home.css'
import CaseStudyCard from '../components/CaseStudyCard'
import secureStayImage from '@assets/secure_stay/Case Name=Secure Stay, Location=case atudy page.png'
import robonoteImage from '@assets/robonote/robonote-case_study-hero-wide.png'
import easyImage from '@assets/easy_coupons /Case Name=Easy, Location=case atudy page.png'

const caseStudies = [
  {
    id: 'robonote',
    title: 'Robonote',
    description: 'Helping teams find what matters in their customer conversations.',
    caption: 'A dashboard organized around the decisions a team lead needs to make.',
    outcome: '8% less churn',
    subtitle: 'Conversation Intelligence · ↓8% Churn',
    tags: 'B2B SaaS · AI Analytics · Dashboard · Enterprise',
    image: robonoteImage,
  },
  {
    id: 'easy',
    title: 'Easy',
    description: 'Making a good offer feel easier to trust and use.',
    caption: 'From discovering an offer to understanding and redeeming it.',
    outcome: '+6% user adoption',
    subtitle: 'Consumer App · +6% User Adoption',
    tags: 'B2C · Mobile App · Marketplace · Growth',
    image: easyImage,
  },
  {
    id: 'secure-stay',
    title: 'Secure Stay',
    description: 'Giving people a clearer view of the AI they govern.',
    caption: 'A shared view of agent behavior and trust across the hotel network.',
    outcome: '75% faster incident response',
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
  const [name, context, ...result] = highlight.split(' · ')
  return (
    <li className="home-experience-row">
      <div>
        <h3>{name} <span>· {context}</span></h3>
        <p>{result.join(' · ')}</p>
      </div>
      <div className="home-experience-role"><span>{role}</span><span>{year}</span></div>
    </li>
  )
}

export default function Home() {
  return (
    <PageShell className="home-exploration">
      <section className="home-intro" aria-labelledby="home-title">
        <p className="home-eyebrow">Gonen Maatuk <span> / Senior Product Designer</span></p>
        <h1 id="home-title">Making complex products<br className="home-desktop-break" /> feel clear and considered.</h1>
        <div className="home-intro-bottom">
          <p>I help teams turn complex problems into experiences people can understand and trust. My work spans AI tools, enterprise platforms, and everyday consumer products.</p>
          <a className="home-text-link" href="#selected-work">Explore the work <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section id="selected-work" className="home-work" aria-labelledby="work-title">
        <div className="home-section-heading"><h2 id="work-title">Selected work</h2><span>Three problems. Three different contexts.</span></div>
        <div className="home-projects">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} {...study} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="home-experience" aria-labelledby="experience-title">
        <div className="home-section-heading"><h2 id="experience-title">Experience, in brief</h2><span>A broader view of the work.</span></div>
        <ul>
          {projectList.map((project) => (
            <ProjectRow key={project.highlight} {...project} />
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
