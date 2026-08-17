import campaignData from './brod-campaign.json'

const adImages = import.meta.glob('@assets/BRØD/ad_*.png', { eager: true, import: 'default' })

function getAdImage(id) {
  const normalizedId = String(id).padStart(2, '0')
  const entry = Object.entries(adImages).find(([path]) => path.endsWith(`ad_${normalizedId}.png`))
  return entry ? entry[1] : ''
}

export const brodCampaignAds = campaignData.ads.map((ad) => ({
  id: ad.id,
  strategy: ad.strategy,
  description: ad.variation_logic,
  image: getAdImage(ad.id),
  imageAlt: ad.headline,
}))
