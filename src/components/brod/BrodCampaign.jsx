import StickyCardStack from '../StickyCardStack'
import CampaignCard from './CampaignCard'
import { brodCampaignAds } from '../../data/brodCampaign'

export default function BrodCampaign() {
  return (
    <StickyCardStack
      items={brodCampaignAds}
      ariaLabel="Campaign"
      getItemKey={(ad) => ad.id}
      renderCard={(ad) => (
        <CampaignCard
          id={ad.id}
          strategy={ad.strategy}
          description={ad.description}
          image={ad.image}
          imageAlt={ad.imageAlt}
        />
      )}
    />
  )
}
