import StickyCardStack from '../StickyCardStack'
import CampaignCard from './CampaignCard'
import { brodCampaignAds } from '../../data/brodCampaign'

export default function BrodCampaign() {
  return (
    <StickyCardStack
      items={brodCampaignAds}
      stackStep={0}
      ariaLabel="Campaign"
      getItemKey={(ad) => ad.id}
      renderCard={(ad) => (
        <CampaignCard
          id={ad.id}
          strategy={ad.strategy}
          description={ad.description}
          image={ad.image}
          imageAlt={ad.imageAlt}
          className="shadow-[0_25px_50px_-12px_rgba(23,23,23,0.12)]"
        />
      )}
    />
  )
}
