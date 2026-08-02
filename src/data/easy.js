import heroImage from '@assets/easy_coupons /easy-Coupons-overview-wide.png'
import flowImage from '@assets/easy_coupons /easy-Coupons-flow-wide.png'
import churnImage from '@assets/easy_coupons /easy-Coupons-churn-map-wide.png'
import userFlowImage from '@assets/easy_coupons /easy-Coupons-user-flow-wide.png'
import locationImage from '@assets/easy_coupons /easy-Coupons-location-wide.png'
import wizardImage from '@assets/easy_coupons /easy-Coupons-wizard-wide.png'
import offerDetailsImage from '@assets/easy_coupons /easy-Coupons-Offer Details-square.png'
import popularImage from '@assets/easy_coupons /easy-Coupons-Popular-square.png'
import supportImage from '@assets/easy_coupons /easy-Coupons-support-square.png'
import offerAltImage from '@assets/easy_coupons /easy-Coupons-Offerד-square.png'
import overviewImage from '@assets/easy_coupons /easy-Coupons-overview-wide.png'
import trustFirstIcon from '@assets/easy_coupons /Trust first.svg'
import reduceUncertaintyIcon from '@assets/easy_coupons /Reduce uncertainty.svg'
import clearValueIcon from '@assets/easy_coupons /Clear value.svg'
import confidentDecisionsIcon from '@assets/easy_coupons /Confident decisions.svg'

function splitParagraphs(text) {
  return text.split('\n\n').flatMap((part, index, all) => (index < all.length - 1 ? [part, ''] : [part]))
}

const marketResearchParagraphs = splitParagraphs(
  "The signal wasn't coming from one direction. Customer Success was hearing frustration from users who felt the platform wasn't delivering on its promise. Business owners were expressing the same thing from the other side — they were offering real value and watching it go unclaimed. Merchant roundtables confirmed it independently. Discounts were everywhere on the platform and creating value for almost no one. That convergence across three separate sources gave me confidence that this wasn't an edge case — it was a structural problem worth solving properly.",
)

const userResearchParagraphs = splitParagraphs(
  "Across interviews, surveys, behavioral analysis, and journey mapping, one pattern kept repeating at the moment of decision. Users weren't leaving because the offer wasn't good enough. They were hesitating right before claiming it — and that hesitation had a consistent source. They didn't know how redemption worked. They weren't sure what happened after purchase. They suspected hidden conditions might be waiting for them at the register.\n\nThe coupon's value was never in question. The confidence to use it was. Uncertainty, it turned out, had a far greater impact on behavior than price ever did.\n\nPersonas\n\nThe research produced two distinct behavioral profiles — not defined by demographics, but by their relationship with uncertainty and trust in the redemption process.\n\nThe Cautious Claimer. Engages with offers regularly but abandons at the point of commitment. Not price-sensitive — risk-sensitive. Needs to understand exactly what happens after they tap \"claim\" before they're willing to do it. One unexpected condition at the register is enough to erode trust entirely.\n\nThe Business Owner. Publishing offers with genuine intent but losing confidence in the platform when redemption stays low. Doesn't know if the problem is the offer itself, the placement, or something upstream in the user experience. Needs visibility into what's happening between publish and redemption.",
)

export const easyData = {
  title: 'Easy App · From an Ignored Feature to a Key Driver, 6% User Adoption',
  heroImage,
  heroImageAlt: 'Easy coupon app overview',
  sections: [
    {
      type: 'text',
      highlight:
        'Context. Easy helped millions of users discover local businesses, but its discounts never became a real product. Offers sat on the platform, visible to everyone, claimed by almost no one.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: flowImage, alt: 'Complete coupon purchase flow' }],
      caption:
        'Claiming a coupon became a guided flow — selection, purchase, redemption — instead of one vague tap. Users were afraid of hidden conditions and surprise charges, so I broke the action into steps they could see coming, which turned a hesitant glance into a clear path to ownership.',
    },
    {
      type: 'text',
      highlight:
        'Problem Statement. I set out to find what kept users from claiming offers they\'d already said they wanted, and design an experience they could trust from the moment they saw a deal to the moment they redeemed it.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: churnImage, alt: 'Churn analysis map' }],
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: userFlowImage, alt: 'User flow diagram' }],
    },
    {
      type: 'text',
      highlight:
        'Market Research. I started with the business perspective. Product analytics showed strong visibility but very low redemption — people saw the offers and scrolled past them.',
      body: {
        title: 'What convinced me this problem was worth solving?',
        paragraphs: marketResearchParagraphs,
      },
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: locationImage, alt: 'Location-based offer carousel' }],
      caption:
        'Offers moved into a horizontal carousel above the fold instead of stacked cards, so people could scan more value before they even started scrolling — more offers seen at first glance meant more reasons to stop and look closer.',
    },
    {
      type: 'text',
      highlight:
        'User Research. I expected to find a pricing problem. Instead, I discovered uncertainty had a much bigger impact on behavior than price ever did.',
      body: {
        title: 'Why were users walking away from valuable offers?',
        paragraphs: userResearchParagraphs,
      },
    },
    {
      type: 'text',
      highlight:
        'Key Insight. Trust, not discount size, decided whether people acted. Once I saw that, every product decision became a lot clearer.',
    },
    {
      type: 'principles',
      intro:
        'Design Principles. Four principles followed directly from the insight that trust — not discount size — decides whether people act.',
      principles: [
        { title: 'Trust first', icon: trustFirstIcon },
        { title: 'Reduce uncertainty', icon: reduceUncertaintyIcon },
        { title: 'Clear value', icon: clearValueIcon },
        { title: 'Confident decisions', icon: confidentDecisionsIcon },
      ],
    },
    {
      type: 'text',
      highlight:
        'Solution. Every part of the experience was redesigned to make claiming and redeeming a coupon feel simple, predictable, and trustworthy.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: wizardImage, alt: 'Coupon wizard experience' }],
      caption:
        'A vague “free” discount became a structured coupon card with a real price, real terms, and a claimed-by count. “Free” had felt risky without rules attached to it; giving the offer a shape people could hold onto turned a gamble into a purchase-ready decision.',
    },
    {
      type: 'text',
      highlight:
        'Usability Testing. Each round of testing turned up a new moment of hesitation I hadn’t caught yet — a term that read as ambiguous, a step that felt like a commitment before it should have. Fixing those one at a time is what got the experience to a place where people moved through it without stopping to second-guess themselves.',
    },
    {
      type: 'media',
      variant: 'square',
      images: [
        { src: offerDetailsImage, alt: 'Offer details screen' },
        { src: popularImage, alt: 'Popular offers screen' },
      ],
    },
    {
      type: 'media',
      variant: 'square',
      images: [
        { src: supportImage, alt: 'Support screen' },
        { src: offerAltImage, alt: 'Offer redemption screen' },
      ],
    },
    {
      type: 'text',
      highlight:
        'Impact. The redesign turned an overlooked feature into an adopted product: 6% adoption among active users, 5.4K quarterly coupon claims, and 850 onboarded businesses. It also gave Easy its first scalable coupon platform — the foundation for every promotional experience that comes after it.',
    },
    {
      type: 'impact',
      metrics: [
        { value: '↑ 6', suffix: '%', label: 'Feature Adoption' },
        { value: '5.4', suffix: 'K', label: 'Quarterly Claims' },
        { value: '850', suffix: '', label: 'Onboarded Businesses' },
      ],
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: overviewImage, alt: 'Easy coupon platform overview' }],
    },
    {
      type: 'text',
      highlight:
        'Reflection. This project changed how I think about trust. People rarely hesitate because they don’t see the value — they hesitate because they don’t understand what happens next. Since Easy, I look for uncertainty before I look for usability problems, on onboarding flows, payments, AI products, enterprise systems, all of it. Innovation succeeds when people feel confident enough to embrace the change, not just interested in it.',
    },
    {
      type: 'text',
      highlight:
        'Collaboration. This experience took shape through close work with Product Managers, Customer Success, developers, and business owners. Customer Success surfaced the recurring user frustrations, business owners brought the reality of what redemption actually looked like on their end, and together we kept challenging our own assumptions until the experience felt both valuable and trustworthy.',
    },
    {
      type: 'metadata',
      items: [
        { label: 'Role', value: 'Senior Product Designer | UX Researcher' },
        { label: 'Timeline', value: 'Timeline: 6 Months (Q4 2023 – Q1 2024)' },
        { label: 'Tools', value: 'Figma Make, Maze, Mixpanel' },
      ],
    },
  ],
}
