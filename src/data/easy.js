import heroImage from '@assets/easy_coupons /Case Name=Easy, Location=case atudy page.png'
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

// Preserved for future editorial deep dives (accordions hidden on page)
export const easyHiddenAccordions = {
  marketResearch: {
    title: 'What convinced me this problem was worth solving?',
    paragraphs: splitParagraphs(
      "The signal wasn't coming from one direction. Customer Success was hearing frustration from users who felt the platform wasn't delivering on its promise. Business owners were expressing the same thing from the other side — they were offering real value and watching it go unclaimed. Merchant roundtables confirmed it independently. Discounts were everywhere on the platform and creating value for almost no one. That convergence across three separate sources gave me confidence that this wasn't an edge case — it was a structural problem worth solving properly.",
    ),
  },
  userResearch: {
    title: 'Why were users walking away from valuable offers?',
    paragraphs: splitParagraphs(
      "Across interviews, surveys, behavioral analysis, and journey mapping, one pattern kept repeating at the moment of decision. Users weren't leaving because the offer wasn't good enough. They were hesitating right before claiming it — and that hesitation had a consistent source. They didn't know how redemption worked. They weren't sure what happened after purchase. They suspected hidden conditions might be waiting for them at the register.\n\nThe coupon's value was never in question. The confidence to use it was. Uncertainty, it turned out, had a far greater impact on behavior than price ever did.\n\nPersonas\n\nThe research produced two distinct behavioral profiles — not defined by demographics, but by their relationship with uncertainty and trust in the redemption process.\n\nThe Cautious Claimer. Engages with offers regularly but abandons at the point of commitment. Not price-sensitive — risk-sensitive. Needs to understand exactly what happens after they tap \"claim\" before they're willing to do it. One unexpected condition at the register is enough to erode trust entirely.\n\nThe Business Owner. Publishing offers with genuine intent but losing confidence in the platform when redemption stays low. Doesn't know if the problem is the offer itself, the placement, or something upstream in the user experience. Needs visibility into what's happening between publish and redemption.",
    ),
  },
}

export const easyData = {
  title: 'Easy App × From an Ignored Feature to a Key Driver, 6% User Adoption',
  heroImage,
  heroImageAlt: 'Easy coupon app overview',
  sections: [
    {
      type: 'text',
      highlight:
        'Context. Easy offered discounts from local businesses, but almost nobody used them. Users were seeing the offers; the challenge was understanding what stopped an attractive discount from becoming something they were willing to claim.',
    },
    {
      type: 'media',
      variant: 'wide',
      images: [{ src: flowImage, alt: 'Complete coupon purchase flow' }],
      caption:
        'Claiming a coupon became a guided flow — selection, purchase, redemption — instead of one vague tap. Users were afraid of hidden conditions and surprise charges, so I broke the action into steps they could see coming, which turned a hesitant glance into a clear path to ownership.',
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
        'Hypothesis. We had several plausible explanations: perhaps the discounts were not valuable enough, the offers were not prominent enough, or users simply did not understand how claiming and redeeming them worked.',
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
        'Research. Product analytics and user research challenged our initial assumptions. Users were already noticing the offers and understood the value of the discounts. What stopped them was uncertainty: they did not know who stood behind the offer, whether it was still valid, whether the business would honor it, or exactly what would happen when they tried to use it.',
    },
    {
      type: 'text',
      highlight:
        'Insight. Every unanswered question became a reason to hesitate. Trust depended less on making the offer look more attractive and more on giving users enough information to feel confident acting on it.',
    },
    {
      type: 'text',
      highlight:
        'Principles. The insight gave us four principles for the redesign: establish trust first, remove uncertainty, make the value explicit, and help users make confident decisions.',
    },
    {
      type: 'principles',
      hideIntro: true,
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
        'Decision. We chose transparency over persuasion. Instead of hiding details that might create friction, we surfaced them early — including the actual price of paid coupons. If users discovered a condition or cost only after deciding to claim an offer, we risked reinforcing the exact distrust we were trying to remove.',
    },
    {
      type: 'text',
      highlight: 'Trust came from answering questions before users had to ask them.',
    },
    {
      type: 'text',
      highlight:
        'Solution. We treated every source of uncertainty as a product question to answer. Offers clearly showed who provided the discount, how long it remained valid, what conditions applied, what a paid coupon cost, and what users needed to do to claim and redeem it.',
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
        'Testing. Each round of usability testing exposed another moment of hesitation — an unclear condition, an unexpected commitment, or uncertainty about what happened next. We addressed those moments one by one until users could move through the experience without having to second-guess the offer.',
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
        'Impact. Within the first month, coupon usage grew from nearly 0% to 6% of active users. The redesign turned an almost-unused feature into something users were willing to act on by replacing uncertainty with clear, trustworthy information.',
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
        'Reflection. This project changed how I think about trust in product design. Trust is rarely created by asking users to believe us. It comes from removing the reasons they have to doubt. Since Easy, I look for unanswered questions whenever users hesitate — especially around payments, onboarding, and unfamiliar product experiences.',
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
