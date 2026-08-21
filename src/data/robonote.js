import heroImage from '@assets/robonote/robonote-case_study-hero-wide.png'
import researchInsightImage from '@assets/robonote/robonote-solution-dashboard-decision-level-wide.png'
import overviewImage from '@assets/robonote/robonote-solution-dashboard-overview-wide.png'
import teamLeadImage from '@assets/robonote/robonote-solution-dashboard-team-lead-wide.png'
import vpImage from '@assets/robonote/robonote-solution-dashboard-vp-wide.png'
import trendingImage from '@assets/robonote/robonote-Trendingl-wide.png'
import executiveActionImage from '@assets/robonote/robonote-Executive Action Centerl-wide.png'
import goalsImage from '@assets/robonote/robonote-Departmental Goals-wide.png'
import strategicTrendsImage from '@assets/robonote/robonote-Strategic Trend-wide.png'
import relatedSignalImage from '@assets/robonote/robonote-Related Signal-wide.png'
import agentPerformanceImage from '@assets/robonote/robonote-Agent Performance Overview-wide.png'
import responsibilityFirstIcon from '@assets/robonote/Responsibility first.svg'
import prioritiesOverMetricsIcon from '@assets/robonote/Priorities over metrics.svg'
import evidenceBackedIcon from '@assets/robonote/Evidence-backed.svg'
import familiarAlwaysLocalIcon from '@assets/robonote/Familiar, always local.svg'

function splitParagraphs(text) {
  return text.split('\n\n').flatMap((part, index, all) => (index < all.length - 1 ? [part, ''] : [part]))
}

// Preserved for future editorial deep dives (accordions hidden on page)
export const robonoteHiddenAccordions = {
  marketResearch: {
    title: 'What convinced me this problem was worth solving?',
    paragraphs: splitParagraphs(
      "Product analytics showed a sharp drop in engagement immediately after onboarding — not a gradual fade, a cliff. That meant the issue wasn't product-market fit or feature gaps. Something was breaking in the moment users first tried to make the product their own. The platform had everything it needed to be valuable. What it didn't have was a way to surface what mattered to each person, at the moment they needed it. That gap is what sent me into user research.",
    ),
  },
  userResearch: {
    title: 'How did user research reshape the product?',
    paragraphs: splitParagraphs(
      'Working alongside Customer Success, I sat with stakeholders across customer organizations — CEOs, VPs of sales and operations, department leaders, and team managers. Rather than asking about interface preferences, I asked each of them how they decided where to focus. The answers split cleanly across three distinct Jobs to Be Done.\n\nCEOs were scanning for signals of organizational health — they needed to know if the business was moving in the right direction without getting pulled into operational detail.\n\nVPs wanted trends and cross-department comparisons — they were building cases, tracking progress, and trying to understand where performance was clustering.\n\nManagers needed immediate operational evidence — something they could act on before their next one-on-one or team meeting, without having to build a report from scratch.\n\nOne dashboard was never going to serve all three equally well. That insight became the structural foundation of everything that followed.\n\nPersonas\n\nRather than forcing the research into a traditional persona format, I mapped the findings to three distinct decision-making profiles — each with a different relationship to data, a different time horizon, and a fundamentally different definition of "useful."\n\nThe Executive (CEO level). Needs a single, trustworthy signal of organizational direction. Has no patience for raw data and no time for interpretation. If the system requires effort to extract meaning, it won\'t get used.\n\nThe Strategist (VP level). Lives in comparisons and trends. Needs to see patterns across teams, departments, and time periods — and needs to be able to bring that analysis into a conversation without building it from scratch.\n\nThe Operator (Manager level). Closest to the day-to-day. Needs evidence that\'s specific enough to act on — not "sales calls are down" but "these three reps are struggling with this specific objection." Immediacy and specificity matter more than breadth.',
    ),
  },
}

export const robonoteData = {
  title: 'Robonote × Rebuilding the entry-point cut customer churn by 8%',
  heroImage,
  heroImageAlt: 'Robonote team lead dashboard hero',
  sections: [
    {
      type: 'text',
      highlight:
        'Context. Robonote turned millions of customer conversations into performance analytics. After onboarding, customers entered an event-heavy system full of tables, filters, and signals. They had plenty of information, but little guidance on what deserved attention, how signals connected, or what to do next.',
    },
    {
      type: 'text',
      highlight:
        'Hypothesis. I suspected the same data needed to be framed differently depending on who was making the decision. That led me to investigate how different roles decided what deserved their attention.',
    },
    {
      type: 'text',
      highlight:
        'Research. Working with Customer Success, I combined product analytics with conversations across customer organizations. Analytics showed a sharp drop in engagement immediately after onboarding, while interviews revealed that CEOs, VPs, and managers were using the same organizational data to answer fundamentally different business questions.',
    },
    {
      type: 'text',
      highlight:
        'Framework. I translated the research into three decision profiles — each defined by a different time horizon, relationship to data, and definition of what was useful.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: researchInsightImage, alt: 'Decision-level dashboard framework by role' }],
      caption:
        'Three decision contexts × Decision · Split the product by responsibility. × Reason · Each role used the same data for different decisions. × Result · Each level received the context relevant to its responsibility.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: executiveActionImage, alt: 'Executive action center panel' }],
      caption:
        'Executive action center × Decision · Added urgency, ownership, and status to issues. × Reason · Detecting a problem wasn\'t enough to drive action. × Result · Signals became a prioritized action queue.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'text',
      highlight:
        'Decision. I deliberately chose less flexibility. A single dashboard with role filters gave users more control, but also made them decide which perspective they should be monitoring. Instead, each level of responsibility received a dedicated view. The product decided what was relevant before asking users to interpret it.',
    },
    {
      type: 'text',
      highlight: 'Less choice meant clearer responsibility.',
    },
    {
      type: 'text',
      highlight:
        'Principles. That decision became four principles for the redesign: organize information around responsibility, surface priorities before metrics, connect signals to supporting evidence, and introduce new workflows through familiar patterns.',
    },
    {
      type: 'principles',
      hideIntro: true,
      principles: [
        { title: 'Responsibility first', icon: responsibilityFirstIcon },
        { title: 'Priorities over metrics', icon: prioritiesOverMetricsIcon },
        { title: 'Evidence-backed', icon: evidenceBackedIcon },
        { title: 'Familiar, always local', icon: familiarAlwaysLocalIcon },
      ],
    },
    {
      type: 'text',
      highlight:
        'Solution. I reorganized the entry point around the decisions each role was responsible for making, while keeping every perspective connected to the same underlying organizational knowledge.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: overviewImage, alt: 'Dashboard organized around role-specific questions' }],
      caption:
        'Role-specific questions × Decision · Organized the dashboard around business questions. × Reason · Users needed direction, not more data. × Result · Each area made its purpose immediately clear.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: teamLeadImage, alt: 'Team lead operational dashboard' }],
      caption:
        'Team manager view × Decision · Connected signals directly to people and exceptions. × Reason · Managers needed to know who required attention. × Result · Insights translated directly into follow-up.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: agentPerformanceImage, alt: 'Agent performance overview panel' }],
      caption:
        'Agent performance × Decision · Connected performance changes to specific agents. × Reason · Managers needed actionable evidence. × Result · Team-level signals became individual follow-up.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: vpImage, alt: 'VP regional dashboard' }],
      caption:
        'VP strategic view × Decision · Organized the view around cross-team patterns. × Reason · VPs needed to distinguish isolated events from broader trends. × Result · Comparisons pointed to areas worth investigating.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: goalsImage, alt: 'Departmental goals panel' }],
      caption:
        'Departmental goals × Decision · Compared performance against explicit targets. × Reason · Percentages need a benchmark to have meaning. × Result · Performance became immediately interpretable.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: strategicTrendsImage, alt: 'Strategic trends panel' }],
      caption:
        'Strategic trends × Decision · Attached context to meaningful changes over time. × Reason · Spikes and drops alone don\'t explain what happened. × Result · Trends became starting points for investigation.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'text',
      highlight:
        'Signals. Robonote detected meaningful overlaps across teams, agents, and time periods. When a cross-functional signal changed the meaning of an event, the system surfaced it inside the relevant role\'s dashboard — adding context without requiring users to explore another department\'s view.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: relatedSignalImage, alt: 'Related cross-functional signal panel' }],
      caption:
        'Related signals × Decision · Surfaced relevant signals across departments. × Reason · Cross-functional relationships can change what an event means. × Result · VPs gained context without leaving their own view.',
    },
    {
      type: 'text',
      highlight:
        'Trade-off. The first iteration removed the familiar event and category layer entirely. Testing showed that while the new dashboards were easier to understand, users still relied on those familiar signals to trust what they were seeing. I brought them back as supporting context — without returning to the table-first workflow.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: trendingImage, alt: 'Trending events and categories panel' }],
      caption:
        'Trending events × Testing · Users still looked for familiar event categories. × Iteration · I brought those signals back as context without restoring the table-first workflow.',
    },
    {
      type: 'text',
      highlight:
        'Impact. The redesign reduced churn by 8%, cut post-demo drop-off by 6%, and increased dashboard-first entry by 22%. The entry point now gave users a clear perspective on where to focus first.',
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
      type: 'text',
      highlight:
        'Reflection. This project changed how I think about enterprise dashboards. People rarely need more information. They need enough context to know what deserves their attention — and why they should trust it.',
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
