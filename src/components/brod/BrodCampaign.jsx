import { useLayoutEffect, useRef, useState } from 'react'
import StickyCardStack from '../StickyCardStack'
import CampaignCard from './CampaignCard'
import { brodCampaignAds } from '../../data/brodCampaign'

export default function BrodCampaign() {
  const [textMinHeight, setTextMinHeight] = useState(undefined)
  const textAreaRefs = useRef([])

  useLayoutEffect(() => {
    const measure = () => {
      const heights = textAreaRefs.current.filter(Boolean).map((element) => element.scrollHeight)

      if (heights.length === 0) return

      const maxHeight = Math.max(...heights)
      setTextMinHeight((prev) => (prev !== maxHeight ? maxHeight : prev))
    }

    measure()

    const observer = new ResizeObserver(measure)
    textAreaRefs.current.filter(Boolean).forEach((element) => observer.observe(element))
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const cardShadowClass = 'shadow-[0_25px_50px_-12px_rgba(23,23,23,0.12)]'

  return (
    <StickyCardStack
      items={brodCampaignAds}
      stackStep={0}
      maxWidthClass="max-w-[720px]"
      activeCardShadow
      ariaLabel="Campaign"
      getItemKey={(ad) => ad.id}
      renderCard={(ad, index, { isActive }) => (
        <CampaignCard
          id={ad.id}
          strategy={ad.strategy}
          description={ad.description}
          image={ad.image}
          imageAlt={ad.imageAlt}
          textAreaRef={(element) => {
            textAreaRefs.current[index] = element
          }}
          textMinHeight={textMinHeight}
          className={isActive ? cardShadowClass : 'shadow-none'}
        />
      )}
    />
  )
}
