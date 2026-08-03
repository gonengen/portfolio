import heroImage from '@assets/robonote/Case Name=Robonote, Location=case atudy page.png'
import roleViewImage from '@assets/robonote/robonote-solution-dashboard-overview-wide.png'
import researchImage from '@assets/robonote/robonote-solution-dashboard-vp-wide.png'
import principlesImage from '@assets/robonote/robonote-solution-dashboard-decision-level-wide.png'
import teamLeadImage from '@assets/robonote/robonote-solution-dashboard-team-lead-wide.png'
import ceoImage from '@assets/robonote/robonote-solution-dashboard-ceo-wide.png'
import vpImage from '@assets/robonote/robonote-solution-dashboard-vp-wide.png'
import issueImage from '@assets/robonote/robonote-Issue-square.png'
import statusImage from '@assets/robonote/robonote-status-square.png'
import agentImage from '@assets/robonote/robonote-Agent Performance Overview-square.png'
import goalsImage from '@assets/robonote/robonote-Departmental Goals-square.png'
import executiveImage from '@assets/robonote/robonote-Executive Action Center-square.png'
import salesImage from '@assets/robonote/robonote-Sales Review Coverage-square.png'
import trendsImage from '@assets/robonote/robonote-Strategic Trends-square.png'
import trendingImage from '@assets/robonote/robonote-Trending-square.png'
import responsibilityFirstIcon from '@assets/robonote/Responsibility first.svg'
import prioritiesOverMetricsIcon from '@assets/robonote/Priorities over metrics.svg'
import evidenceBackedIcon from '@assets/robonote/Evidence-backed.svg'
import familiarAlwaysLocalIcon from '@assets/robonote/Familiar, always local.svg'

function splitParagraphs(text) {
  return text.split('\n\n').flatMap((part, index, all) => (index < all.length - 1 ? [part, ''] : [part]))
}

const marketResearchParagraphs = splitParagraphs(
  "Product analytics showed a sharp drop in engagement immediately after onboarding — not a gradual fade, a cliff. That meant the issue wasn't product-market fit or feature gaps. Something was breaking in the moment users first tried to make the product their own. The platform had everything it needed to be valuable. What it didn't have was a way to surface what mattered to each person, at the moment they needed it. That gap is what sent me into user research.",
)

const userResearchParagraphs = splitParagraphs(
  'Working alongside Customer Success, I sat with stakeholders across customer organizations — CEOs, VPs of sales and operations, department leaders, and team managers. Rather than asking about interface preferences, I asked each of them how they decided where to focus. The answers split cleanly across three distinct Jobs to Be Done.\n\nCEOs were scanning for signals of organizational health — they needed to know if the business was moving in the right direction without getting pulled into operational detail.\n\nVPs wanted trends and cross-department comparisons — they were building cases, tracking progress, and trying to understand where performance was clustering.\n\nManagers needed immediate operational evidence — something they could act on before their next one-on-one or team meeting, without having to build a report from scratch.\n\nOne dashboard was never going to serve all three equally well. That insight became the structural foundation of everything that followed.\n\nPersonas\n\nRather than forcing the research into a traditional persona format, I mapped the findings to three distinct decision-making profiles — each with a different relationship to data, a different time horizon, and a fundamentally different definition of "useful."\n\nThe Executive (CEO level). Needs a single, trustworthy signal of organizational direction. Has no patience for raw data and no time for interpretation. If the system requires effort to extract meaning, it won\'t get used.\n\nThe Strategist (VP level). Lives in comparisons and trends. Needs to see patterns across teams, departments, and time periods — and needs to be able to bring that analysis into a conversation without building it from scratch.\n\nThe Operator (Manager level). Closest to the day-to-day. Needs evidence that\'s specific enough to act on — not "sales calls are down" but "these three reps are struggling with this specific objection." Immediacy and specificity matter more than breadth.',
)

export const robonoteData = {
  title: 'Robonote · Rebuilding the entry-point cut customer churn by 8%',
  heroImage,
  heroImageAlt: 'Robonote team lead dashboard hero',
  sections: [
    {
      type: 'text',
      highlight:
        "Context. Robonote turned millions of customer conversations into performance analytics for sales, support, operations, and compliance teams. Customers loved it in the demo — then struggled to find value on their own after onboarding.",
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: roleViewImage, alt: 'Role view with decision-making questions' }],
    },
    {
      type: 'text',
      highlight:
        'Problem Statement. I set out to redesign how organizations consume conversation intelligence — an experience where every decision-maker could see what needed attention in seconds, without abandoning the habits they’d already built around the product.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: researchImage, alt: 'User research synthesis' }],
    },
    {
      type: 'text',
      highlight:
        'Market Research. I started with the business perspective. Customer Success kept hearing the same story from enterprise customers: the value was obvious in the demo, but it never carried into daily use.',
      body: {
        title: 'What convinced me this problem was worth solving?',
        paragraphs: marketResearchParagraphs,
      },
    },
    {
      type: 'text',
      highlight:
        'User Research. I expected different roles to ask for different features. Instead, I discovered every role was trying to answer a different business question.',
      body: {
        title: 'How did user research reshape the product?',
        paragraphs: userResearchParagraphs,
      },
    },
    {
      type: 'text',
      highlight:
        'Key Insight. Better decisions begin with the right perspective. Every role needed the same organizational knowledge — just presented at a different level of abstraction.',
    },
    {
      type: 'principles',
      intro:
        'Design Principles. Every decision followed four principles that guided how conversation intelligence was structured for each role.',
      principles: [
        { title: 'Responsibility first', icon: responsibilityFirstIcon },
        { title: 'Priorities over metrics', icon: prioritiesOverMetricsIcon },
        { title: 'Evidence-backed', icon: evidenceBackedIcon },
        { title: 'Familiar, always local', icon: familiarAlwaysLocalIcon },
      ],
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: principlesImage, alt: 'Design principles framework' }],
    },
    {
      type: 'text',
      highlight:
        'Solution. I redesigned the platform around decision-making rather than information discovery — giving executives, department leaders, and managers each a view built around the question they actually needed answered.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: teamLeadImage, alt: 'Team lead operational dashboard' }],
      caption:
        'For managers, I chose agent-level risk signals over an executive summary. Managers don’t need the company picture — they need to know exactly who to check in on before the shift ends. That choice turned browsing into same-day follow-up.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: ceoImage, alt: 'CEO strategic dashboard' }],
      caption:
        'For executives, I chose business-impact KPIs over a feed of AI system events. A CEO scanning the dashboard cares about revenue and churn, not how many conversations the model processed. Framing it that way turned a monitoring screen into a decision briefing.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: vpImage, alt: 'VP regional dashboard' }],
      caption:
        'For VPs, I kept the same underlying structure as the manager and executive views, but built it around region-to-region comparison. VPs think in gaps between teams, not absolute numbers, so the view had to make drift visible at a glance — and that’s what let them spot underperforming regions before quarterly review.',
    },
    {
      type: 'text',
      highlight:
        'Usability Testing. Early demo reviews confirmed the new decision-making model — people understood it immediately. But they also kept scrolling, looking for something. It turned out to be the event stream they’d relied on for years, and its absence made the new dashboard feel unfamiliar even though it was clearer. Adding a compact event-based section gave people that anchor back, and adoption of the new structure followed right after.',
    },
    {
      type: 'media',
      variant: 'square',
      images: [
        { src: issueImage, alt: 'Issue detail panel' },
        { src: statusImage, alt: 'Status overview panel' },
      ],
    },
    {
      type: 'media',
      variant: 'square',
      images: [
        { src: agentImage, alt: 'Agent performance panel' },
        { src: goalsImage, alt: 'Departmental goals panel' },
      ],
    },
    {
      type: 'text',
      highlight:
        'Impact. The redesign reduced churn by 8%, cut post-demo drop-off by 6%, and increased dashboard-first entry by 22%. More than the numbers, customers stopped exploring conversation data and started making faster, more confident operational calls.',
    },
    {
      type: 'impact',
      metrics: [
        { value: '22', suffix: '%', label: 'Dashboard-First Entry' },
        { value: '8', suffix: '%', label: 'Churn Reduction' },
        { value: '6', suffix: '%', label: 'Drop-Off Reduction' },
      ],
    },
    {
      type: 'media',
      variant: 'square',
      images: [
        { src: executiveImage, alt: 'Executive action center panel' },
        { src: salesImage, alt: 'Sales review coverage panel' },
      ],
    },
    {
      type: 'media',
      variant: 'square',
      images: [
        { src: trendsImage, alt: 'Strategic trends panel' },
        { src: trendingImage, alt: 'Trending panel' },
      ],
    },
    {
      type: 'text',
      highlight:
        'Reflection. This project changed how I think about enterprise dashboards. People rarely need more information — they need more clarity. Since Robonote, I approach every complex product the same way: design should shrink the effort required to decide, not grow the amount of information someone has to read first.',
    },
    {
      type: 'text',
      highlight:
        'Collaboration. I led this as the senior designer on the project, working closely with the CEO, CTO, and VP of R&D. The CEO brought the recurring customer pain points and business priorities; the CTO kept every decision grounded in what the existing platform could actually support; the VP of R&D was my day-to-day design partner through interaction design. Together we shipped an experience that felt new to the business and familiar to the people already using it.',
    },
    {
      type: 'metadata',
      items: [
        { label: 'Role', value: 'Senior Product Designer (Lead)' },
        { label: 'Timeline', value: '3 Months (Q1 2026)' },
        { label: 'Tools', value: 'Figma, Cursor, Claude Code' },
      ],
    },
  ],
}
