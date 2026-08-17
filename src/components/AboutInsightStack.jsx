import StickyCardStack from './StickyCardStack'
import AboutInsightCard from './AboutInsightCard'

export default function AboutInsightStack({ insights }) {
  return (
    <StickyCardStack
      items={insights}
      enableScrollEffects
      getItemKey={(insight) => insight.id}
      renderCard={(insight) => (
        <AboutInsightCard
          {...insight}
          className="shadow-[0_25px_50px_-12px_rgba(23,23,23,0.12)]"
        />
      )}
    />
  )
}
