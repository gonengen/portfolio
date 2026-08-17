import StickyCardStack from '../StickyCardStack'
import CampaignCard from './CampaignCard'
import { brodCampaignAds } from '../../data/brodCampaign'

export default function BrodCampaign() {
  const cardShadowClass = 'shadow-[0_25px_50px_-12px_rgba(23,23,23,0.12)]'

  return (
    <StickyCardStack
      items={brodCampaignAds}
      stackStep={0}
      maxWidthClass="max-w-[720px]"
      activeCardShadow
      ariaLabel="Campaign"
      getItemKey={(ad) => ad.id}
      renderCard={(ad, _index, { isActive }) => (
        <CampaignCard
          id={ad.id}
          strategy={ad.strategy}
          description={ad.description}
          image={ad.image}
          imageAlt={ad.imageAlt}
          className={isActive ? cardShadowClass : 'shadow-none'}
        />
      )}
    />
  )
}
