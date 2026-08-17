function BrandBookHeading({ children }) {
  return (
    <h3 className="mb-0 text-2xl font-medium leading-[1.44] tracking-[0.24px] text-primary">
      {children}
    </h3>
  )
}

function BrandBookParagraph({ label, children }) {
  return (
    <p className="mb-0">
      {label ? (
        <>
          <span className="font-medium text-primary">{label}</span>{' '}
        </>
      ) : null}
      {children}
    </p>
  )
}

function BrandBookGroup({ children }) {
  return <div className="flex flex-col gap-[var(--spacing-element-y)]">{children}</div>
}

export default function BrodBrandBook() {
  return (
    <div className="flex min-w-0 flex-col gap-[var(--spacing-element-x)]">
      <BrandBookGroup>
        <BrandBookHeading>BRØD — Brand System</BrandBookHeading>
        <BrandBookParagraph label="The audience.">
          BRØD is built for urban residents of Østerbro, Copenhagen — people who care about food,
          design and quality, but don&apos;t want any of them to feel overly precious. The research
          pointed toward simple choices, visible quality, local character and brands with personality.
        </BrandBookParagraph>
        <BrandBookParagraph label="The insight.">
          Premium bread doesn&apos;t need to behave like a luxury product. What makes it desirable is
          more human: freshness, craft, texture and the small rituals around eating it.
        </BrandBookParagraph>
        <BrandBookParagraph label="The idea.">
          Nothing between you and good bread. BRØD is direct, tactile and confident. The product is
          taken seriously; the brand doesn&apos;t take itself too seriously.
        </BrandBookParagraph>
      </BrandBookGroup>

      <BrandBookGroup>
        <BrandBookHeading>🥖 Name &amp; Logo</BrandBookHeading>
        <BrandBookParagraph label="BRØD.">
          The Danish word for bread is intentionally literal. Instead of inventing an elaborate name,
          the brand owns the simplest description of what it sells. The Ø gives that simplicity a
          distinctive visual signature.
        </BrandBookParagraph>
        <BrandBookParagraph label="The logo.">
          Bold, typographic and deliberately uncomplicated. The Ø can also live independently —
          cropped, oversized, repeated, used as a frame or as a mask over photography. It should
          always have a compositional purpose.
        </BrandBookParagraph>
      </BrandBookGroup>

      <BrandBookGroup>
        <BrandBookHeading>🎨 Color</BrandBookHeading>
        <BrandBookParagraph>
          The palette combines warm food tones with a cooler Nordic contrast. Cream and Espresso form
          the foundation, Tomato brings appetite and energy, Pale Blue adds contrast, and Apricot
          brings warmth.
        </BrandBookParagraph>
        <div className="flex flex-col gap-1">
          <p className="mb-0">Cream — #F2E5C4</p>
          <p className="mb-0">Espresso — #33251F</p>
          <p className="mb-0">Tomato — #E84A32</p>
          <p className="mb-0">Pale Blue — #B8D4DB</p>
          <p className="mb-0">Apricot — #F2A36F</p>
        </div>
        <BrandBookParagraph label="Rule.">
          Not every ad needs every color. Cream + Espresso are the foundation, Tomato + Pale Blue
          create recognition and contrast, and Apricot is an accent.
        </BrandBookParagraph>
      </BrandBookGroup>

      <BrandBookGroup>
        <BrandBookHeading>Aa — Typography</BrandBookHeading>
        <BrandBookParagraph label="Bricolage Grotesque.">
          One typeface, used with confidence. Its structure keeps the system direct and functional,
          while its character prevents BRØD from feeling sterile.
        </BrandBookParagraph>
        <BrandBookParagraph>
          Headlines are short, oversized and assertive. Type can dominate the composition, overlap
          photography or become the entire ad.
        </BrandBookParagraph>
      </BrandBookGroup>

      <BrandBookGroup>
        <BrandBookHeading>📸 Photography</BrandBookHeading>
        <BrandBookParagraph label="Human first.">
          BRØD shows who the bread is for, not only the bread itself. Faces, bites, hands, gestures
          and attitude become key visuals instead of generic lifestyle scenes.
        </BrandBookParagraph>
        <BrandBookParagraph label="Bread should feel tactile.">
          Tear it, bite it, stack it, slice it or crop it until the crust becomes almost abstract.
        </BrandBookParagraph>
        <BrandBookParagraph label="Keep the frame clean.">
          Limited props, controlled backgrounds and one obvious thing to look at.
        </BrandBookParagraph>
        <BrandBookParagraph label="Stay inside the palette.">
          Clothing, surfaces, props and backgrounds should reinforce BRØD&apos;s colors whenever
          possible. Photography and graphic identity should feel like one system.
        </BrandBookParagraph>
      </BrandBookGroup>

      <BrandBookGroup>
        <BrandBookHeading>✍️ Voice</BrandBookHeading>
        <BrandBookParagraph>Short. Direct. Sensory. Confident.</BrandBookParagraph>
        <BrandBookParagraph>
          BRØD talks about the experience instead of over-explaining the craft.
        </BrandBookParagraph>
        <BrandBookParagraph label="Instead of:">
          &ldquo;Handcrafted artisan sourdough, traditionally fermented with premium
          ingredients.&rdquo;
        </BrandBookParagraph>
        <p className="mb-0">
          <span className="font-medium text-primary">BRØD says:</span>
        </p>
        <div className="flex flex-col gap-1">
          <p className="mb-0">&ldquo;Still warm.&rdquo;</p>
          <p className="mb-0">&ldquo;No polite bites.&rdquo;</p>
          <p className="mb-0">&ldquo;Look inside.&rdquo;</p>
          <p className="mb-0">&ldquo;Bread. Sorted.&rdquo;</p>
        </div>
        <BrandBookParagraph label="Rule.">
          Process and craft are evidence. Pleasure gets the headline.
        </BrandBookParagraph>
        <BrandBookParagraph>
          Avoid romantic bakery clichés, exaggerated claims and unnecessary adjectives.
        </BrandBookParagraph>
      </BrandBookGroup>

      <BrandBookGroup>
        <BrandBookHeading>◯ Composition</BrandBookHeading>
        <BrandBookParagraph label="One idea per frame.">
          Every execution should be understandable almost immediately. If an element doesn&apos;t
          strengthen that idea, remove it.
        </BrandBookParagraph>
        <BrandBookParagraph>
          Use asymmetry, aggressive crops, oversized type and negative space. Photography,
          typography and the Ø can interact rather than living in separate boxes.
        </BrandBookParagraph>
        <BrandBookParagraph>
          Avoid the predictable logo + headline + centered product + CTA formula. Consistency should
          come from the brand language, not from repeating the same layout.
        </BrandBookParagraph>
      </BrandBookGroup>

      <BrandBookGroup>
        <BrandBookHeading>🤖 From principles to rules</BrandBookHeading>
        <BrandBookParagraph>
          The system was deliberately written in two layers.
        </BrandBookParagraph>
        <BrandBookParagraph label="For me:">
          human principles like premium without luxury, human before product, and one idea per frame.
        </BrandBookParagraph>
        <BrandBookParagraph label="For the agent:">
          executable constraints — approved colors, typography, image-selection rules, Ø behavior,
          composition boundaries and explicit definitions of what to avoid.
        </BrandBookParagraph>
        <BrandBookParagraph>
          That translation became the foundation of the experiment: I defined the judgment; the agent
          made decisions inside it.
        </BrandBookParagraph>
      </BrandBookGroup>
    </div>
  )
}
