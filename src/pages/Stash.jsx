import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import StashPromptItem from '../components/stash/StashPromptItem'
import { stashPrompts } from '../data/stashPrompts'

export default function Stash() {
  return (
    <PageShell>
      <PageHero headingClassName="w-full">
        {`Prompts × skills × things worth stealing`}
      </PageHero>

      <section className="mx-auto flex w-full max-w-[960px] flex-col gap-12">
        {stashPrompts.map((item) => (
          <StashPromptItem key={item.id} {...item} />
        ))}
      </section>
    </PageShell>
  )
}
