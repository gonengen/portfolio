import heroImage from '@assets/robonote/robonote-case_study-hero-wide.png'
import researchInsightImage from '@assets/robonote/robonote-solution-dashboard-decision-level-wide.png'
import overviewImage from '@assets/robonote/robonote-solution-dashboard-overview-wide.png'
import teamLeadImage from '@assets/robonote/robonote-solution-dashboard-team-lead-wide.png'
import vpImage from '@assets/robonote/robonote-solution-dashboard-vp-wide.png'
import trendingImage from '@assets/robonote/robonote-Trendingl-wide.png'
import executiveActionImage from '@assets/robonote/robonote-Executive Action Centerl-wide.png'
import goalsImage from '@assets/robonote/robonote-Departmental Goals-wide.png'
import strategicTrendsImage from '@assets/robonote/robonote-Strategic Trend-wide.png'
import agentPerformanceImage from '@assets/robonote/robonote-Agent Performance Overview-wide.png'

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
  title: 'Robonote × Rebuilding the entry-point cut customer churn by 8%',
  heroImage,
  heroImageAlt: 'Robonote team lead dashboard hero',
  sections: [
    {
      type: 'text',
      highlight:
        'Context. Robonote turned millions of customer conversations into performance analytics. But after onboarding, customers landed in an event-heavy system full of tables, filters, and data — and were left to figure out what mattered on their own.',
    },
    {
      type: 'text',
      highlight:
        "The problem wasn't access to data. It was perspective. Users needed to understand what deserved attention, how different signals were connected, and what they were expected to do next.",
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
        'Research. I expected different roles to need different features. Instead, I found that they were using the same organizational data to answer fundamentally different business questions.',
      body: {
        title: 'How did user research reshape the product?',
        paragraphs: userResearchParagraphs,
      },
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: researchInsightImage, alt: 'Decision-level dashboard framework by role' }],
      caption:
        'Choice · Split one product into three decision contexts. Why · Executives, VPs, and managers use the same organizational data for fundamentally different decisions. Result · Each role gets the context and level of detail needed for its next decision.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: executiveActionImage, alt: 'Executive action center panel' }],
      caption:
        'Choice · Surfaced issues with urgency, ownership, and status. Why · Detecting a problem is only useful if users know what requires action next. Result · Insights become prioritized actions rather than passive reporting.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'text',
      highlight:
        'The Decision. We deliberately chose less flexibility. A single dashboard with role filters looked more flexible, but it created another decision for users to make. If a VP could switch into the CEO view, they would naturally wonder whether there was something there they were supposed to monitor. Instead, I designed a dedicated perspective for each level of responsibility. The product took responsibility for deciding what was relevant, rather than asking users to assemble the right view themselves.',
    },
    {
      type: 'text',
      highlight: 'Less choice meant clearer responsibility.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: overviewImage, alt: 'Dashboard organized around role-specific questions' }],
      caption:
        'Choice · Organized the dashboard around decisions, not available data. Why · Users had plenty of information but lacked the context to know what mattered. Result · Each area answers a specific question instead of asking users to interpret raw signals.',
    },
    {
      type: 'text',
      highlight:
        'Solution. I reorganized the entry point around the decisions each role was responsible for making — while keeping all three perspectives connected to the same underlying organizational knowledge.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: teamLeadImage, alt: 'Team lead operational dashboard' }],
      caption:
        'Choice · Connected performance signals directly to people and exceptions. Why · Managers needed to move quickly from “something changed” to “who needs attention.” Result · The dashboard turns organizational signals into immediate operational actions.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: agentPerformanceImage, alt: 'Agent performance overview panel' }],
      caption:
        'Choice · Connected performance signals directly to people. Why · Managers needed to move from “something changed” to “who needs attention.” Result · Organizational signals become clear operational follow-up.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: vpImage, alt: 'VP regional dashboard' }],
      caption:
        'Choice · Built the view around cross-team patterns rather than individual events. Why · VPs needed context to understand whether a signal was isolated or part of a broader pattern. Result · They can compare teams, connect trends, and decide where to investigate.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: goalsImage, alt: 'Departmental goals panel' }],
      caption:
        'Choice · Compared performance against explicit targets. Why · A percentage alone doesn\'t tell users whether performance is healthy or requires attention. Result · Every metric gains immediate decision context.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: strategicTrendsImage, alt: 'Strategic trends panel' }],
      caption:
        'Choice · Added context directly to meaningful changes over time. Why · A spike or drop without explanation is just another data point. Result · Users can understand what changed and decide whether it deserves investigation.',
      className: '-mt-8 max-md:-mt-4',
    },
    {
      type: 'text',
      highlight:
        'The Trade-off. The first version moved the cheese too far. Our first iteration removed the familiar event and category layer entirely. The new role-based dashboards were easier to understand, but testing revealed that users still looked for the event model they had relied on for years. Instead of returning to the old event-driven experience, we brought a compact set of familiar events and categories into the new dashboards. The result kept the clarity of the new decision model without removing the context users needed to trust it.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: trendingImage, alt: 'Trending events and categories panel' }],
      caption:
        "Testing revealed that clarity wasn't enough · Users still looked for the event categories they trusted. I brought those familiar signals back as context — without bringing back the table-first workflow.",
    },
    {
      type: 'text',
      highlight:
        'Impact. The redesign reduced churn by 8%, cut post-demo drop-off by 6%, and increased dashboard-first entry by 22%. Users no longer had to begin by exploring the data — the product gave them a clear perspective on where to start.',
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
