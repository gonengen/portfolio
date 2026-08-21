import Navbar from '../Navbar'
import Footer from '../Footer'
import HeroSection from './HeroSection'
import TextSection from './TextSection'
import MediaSection from './MediaSection'
import ImpactSection from './ImpactSection'
import MetadataSection from './MetadataSection'
import InteractiveGallery from './InteractiveGallery'
import DesignPrinciplesSection from './DesignPrinciplesSection'
import CaseStudyNavigation from './CaseStudyNavigation'

function renderSection(section, index, caseStudyId) {
  const isRobonote = caseStudyId === 'robonote'

  switch (section.type) {
    case 'text':
      return (
        <TextSection
          key={index}
          highlight={section.highlight}
          body={section.body}
          compactMobileTypography={isRobonote}
        />
      )
    case 'media':
      return (
        <MediaSection
          key={index}
          variant={section.variant || 'wide'}
          images={section.images}
          title={section.title}
          description={section.description}
          tags={section.tags}
          caption={section.caption}
          link={section.link}
          className={section.className}
          captionVariant={isRobonote ? 'robonote' : 'default'}
        />
      )
    case 'impact':
      return <ImpactSection key={index} metrics={section.metrics} />
    case 'gallery':
      return (
        <InteractiveGallery
          key={index}
          tabs={section.tabs}
          caption={section.caption}
          hideTabs={section.hideTabs}
        />
      )
    case 'principles':
      return (
        <DesignPrinciplesSection
          key={index}
          intro={section.intro}
          principles={section.principles}
          hideIntro={section.hideIntro}
        />
      )
    case 'metadata':
      return <MetadataSection key={index} items={section.items} />
    default:
      return null
  }
}

export default function CaseStudyPage({ data, caseStudyId }) {
  return (
    <div className="min-h-screen w-full bg-surface">
      <Navbar />
      <article className="page-shell mx-auto flex w-full max-w-[1440px] flex-col gap-[var(--spacing-section)] px-[var(--spacing-page-x)] py-[var(--spacing-page-y)] max-lg:px-6 max-lg:py-6">
        <HeroSection
          title={data.title}
          context={data.context}
          heroImage={data.heroImage}
          heroImageAlt={data.heroImageAlt}
        />
        <div className="flex flex-col gap-[var(--spacing-section)]">
          {data.sections.map((section, index) => renderSection(section, index, caseStudyId))}
          {caseStudyId && <CaseStudyNavigation currentId={caseStudyId} />}
        </div>
        <Footer />
      </article>
    </div>
  )
}
