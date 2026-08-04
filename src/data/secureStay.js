import heroImage from '@assets/secure_stay/Case Name=Secure Stay, Location=case atudy page.png'
import governanceMapImage from '@assets/secure_stay/securestay-global-fleet-performance-wide.png'
import auditTimelineImage from '@assets/secure_stay/securestay-global-fleet-performance-log-wide.png'
import agentProfilesImage from '@assets/secure_stay/securestay-contextual-intelligence-constitution-wide.png'
import gallerySummaryImage from '@assets/secure_stay/securestay-gallery01.png'
import galleryLogicImage from '@assets/secure_stay/securestay-gallery02.png'
import galleryPredictiveImage from '@assets/secure_stay/securestay-gallery03.png'
import galleryForensicsImage from '@assets/secure_stay/securestay-gallery04.png'
import reasoningFirstIcon from '@assets/secure_stay/Reasoning first.svg'
import effortlessOverrideIcon from '@assets/secure_stay/Effortless override.svg'
import governanceVisibleIcon from '@assets/secure_stay/Governance visible.svg'
import languageThatHoldsIcon from '@assets/secure_stay/Language that holds.svg'

function splitParagraphs(text) {
  return text.split('\n\n').flatMap((part, index, all) => (index < all.length - 1 ? [part, ''] : [part]))
}

const marketResearchParagraphs = splitParagraphs(
  'I validated that observation through qualitative interviews with CISOs and Tier-3 Analysts, then expanded into quantitative research across 42 practitioners. The same theme came back every time: security teams already had automation. What they wanted was confidence in the automation they already had. The numbers made it concrete — mean trust in fully autonomous actions sat at 2.8 out of 7, over 60% of analysts estimated more than half their daily alerts were false positives, and the single highest-ranked need across the entire survey was real-time explanation before an AI decision was executed. That reframed how I approached the whole product.',
)

const userResearchParagraphs = splitParagraphs(
  "Two conversations did it. A CISO told me that every autonomous action eventually had to be justified to executives and regulators — not in the moment, but after the fact, under scrutiny. A Tier-3 Analyst described working through hundreds of alerts mid-breach, trying to reconstruct why the AI had acted the way it did, while the situation was still unfolding. Different roles, different pressures, same underlying need: both required a clear picture of the system's limits before they could trust its decisions. That shifted the project from designing autonomous workflows to designing AI governance.\n\nPersonas\n\nThe research produced two distinct profiles — not defined by seniority, but by what kind of accountability they carried.\n\nSarah Jenkins — CISO. Responsible for compliance, board reporting, and regulatory exposure. Her relationship with the system is retrospective — she needs to be able to explain every autonomous decision after it happens. If the system can't generate a defensible audit trail, it becomes a liability, not an asset.\n\nDanny P. — Tier-3 Analyst. Operates in real time, often under breach conditions. His relationship with the system is immediate — he needs one clear reason to act, not a dashboard full of data. If an autonomous action happens and he can't understand it in seconds, his instinct is to override it, regardless of whether it was correct.",
)

export const secureStayData = {
  title: 'Secure Stay × Building Trust Between Humans and Agents - 75% Faster MTTR',
  heroImage,
  heroImageAlt: 'Secure Stay fleet trust overview',
  sections: [
    {
      type: 'text',
      highlight:
        'Context. Secure Stay evolved from a traditional security platform into an autonomous AI system, with specialized agents monitoring, investigating, and responding to incidents across more than 400 hotels. That shift created a new problem no one had designed for yet: how do you help an organization confidently govern decisions an AI is making on its own?',
    },
    {
      type: 'text',
      highlight:
        'Challenge. I set out to design the governance layer that let security teams understand autonomous decisions, weigh their impact, and supervise AI operating across a global enterprise — with confidence, not just visibility.',
    },
    {
      type: 'text',
      highlight:
        'Market Research. I started by studying the existing security ecosystem. Platforms like CrowdStrike Charlotte AI, Splunk, and Tines were strong at automation, integrations, and workflow orchestration — but they all shared the same gap. Analysts could see what an autonomous action had done, and rarely understood why it had done it.',
      body: {
        title: 'What revealed the real opportunity?',
        paragraphs: marketResearchParagraphs,
      },
    },
    {
      type: 'text',
      highlight:
        'User Research. I expected to find usability issues. Instead, I uncovered a trust model that shaped every decision after it.',
      body: {
        title: 'What changed the direction of the product?',
        paragraphs: userResearchParagraphs,
      },
    },
    {
      type: 'text',
      highlight:
        'Key Insight. Trust grows when people understand the boundaries of autonomous decision-making — not when they simply watch the system succeed.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: governanceMapImage, alt: 'Global governance map' }],
      caption:
        'A single view of agent health across 400+ properties, layered by autonomy level, trust gap, and constitutional load — built around AI trust rather than attack density.',
    },
    {
      type: 'principles',
      intro:
        'Design Principles. Every decision followed four principles that shaped how security teams understand, supervise, and trust autonomous AI.',
      principles: [
        { title: 'Reasoning first', icon: reasoningFirstIcon },
        { title: 'Effortless override', icon: effortlessOverrideIcon },
        { title: 'Governance visible', icon: governanceVisibleIcon },
        { title: 'Language that holds', icon: languageThatHoldsIcon },
      ],
    },
    {
      type: 'text',
      highlight:
        'Solution. I redesigned the platform around governance — giving security teams visibility into agent behavior, constitutional boundaries, decision reasoning, and operational health before action was ever required.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: auditTimelineImage, alt: 'AI audit timeline' }],
      caption:
        'Every autonomous action, constitutional trigger, and human intervention as a readable narrative instead of a raw log — the primary screen for compliance reviews and incident investigations.',
    },
    {
      type: 'text',
      highlight:
        'Usability Testing. Early reviews confirmed the governance model, but analysts kept reaching for familiar SIEM patterns out of habit. Instead of asking them to unlearn those instincts, I built recognizable investigation flows into the new experience — so people adopted AI governance through interactions they already knew how to use.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: agentProfilesImage, alt: 'Agent profiles' }],
      caption:
        'A dedicated identity page for every autonomous agent — capabilities, responsibilities, constitutional limits, and recent activity — making intent visible before action.',
    },
    {
      type: 'gallery',
      hideTabs: true,
      tabs: [
        {
          id: 'summary',
          label: 'Summary',
          image: gallerySummaryImage,
          alt: 'Secure Stay summary investigation view',
        },
        {
          id: 'logic',
          label: 'Logic',
          image: galleryLogicImage,
          alt: 'Secure Stay logic and reasoning view',
        },
        {
          id: 'predictive',
          label: 'Predictive',
          image: galleryPredictiveImage,
          alt: 'Secure Stay predictive intelligence view',
        },
        {
          id: 'forensics',
          label: 'Forensics',
          image: galleryForensicsImage,
          alt: 'Secure Stay forensics audit view',
        },
      ],
      caption:
        'Operational context, AI reasoning, autonomy simulation, and audit history in one screen, cutting post-incident review time by 60%.',
    },
    {
      type: 'text',
      highlight:
        'Impact. The redesigned experience cut mean time to respond by 75%, raised confidence in autonomous decisions, and moved security teams from reacting to alerts to actively governing AI behavior with transparency and control.',
    },
    {
      type: 'impact',
      metrics: [
        { value: '↑ 84', suffix: '%', label: 'Autonomous Accuracy' },
        { value: '-75', suffix: '%', label: 'Mitigation Latency' },
        { value: '< 1', suffix: '%', label: 'Unintended Downtime' },
      ],
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: galleryLogicImage, alt: 'Secure Stay logic and reasoning view' }],
      caption:
        'Thirteen constitutional rules covering activation history and override behavior, built as a living artifact that anchors both daily decisions and executive accountability.',
    },
    {
      type: 'text',
      highlight:
        "Reflection. This project changed how I think about trust in AI. People don't build confidence by watching an intelligent system succeed — they build it by understanding the boundaries that system operates within. Since Secure Stay, I've carried one principle into every AI product I've worked on: transparency creates confidence, and confidence is what makes adoption possible.",
    },
    {
      type: 'text',
      highlight:
        'Collaboration. This project took shape through close work with security experts, engineers, and product leadership. Security specialists stress-tested every governance assumption against real operational scenarios, engineers grounded each interaction idea in what the autonomous system architecture could actually support, and product leadership kept every design decision connected to customer and regulatory expectations. Those conversations turned governance from a technical requirement into the core product experience.',
    },
    {
      type: 'metadata',
      items: [
        { label: 'Role', value: 'Senior Product Designer & Systems Architect' },
        { label: 'Timeline', value: 'Timeline: 5 Months (Q1 2025 – Q2 2025)' },
        { label: 'Tools', value: 'Figma, Cursor, Claude Code, shadcn' },
      ],
    },
  ],
}
