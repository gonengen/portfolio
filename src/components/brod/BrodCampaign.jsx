import CampaignCard from './CampaignCard'
import { brodCampaignAds } from '../../data/brodCampaign'

export default function BrodCampaign() {
  return (
    <section
      className="mx-auto flex w-full max-w-[960px] flex-col gap-[var(--spacing-section)]"
      aria-label="Campaign"
    >
      {brodCampaignAds.map((ad) => (
        <CampaignCard
          key={ad.id}
          id={ad.id}
          strategy={ad.strategy}
          description={ad.description}
          image={ad.image}
          imageAlt={ad.imageAlt}
        />
      ))}
    </section>
  )
}
