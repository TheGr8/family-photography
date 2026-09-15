import type { Metadata } from 'next';
import Link from 'next/link';
import Corners from '@/components/Corners';

export const metadata: Metadata = { title: 'Packages & prices' };

type Tier = { name: string; price: string; meta: string; features: string[]; badge?: string };
type Group = { id: string; eyebrow: string; intro: string; tiers: Tier[] };

const groups: Group[] = [
  {
    id: 'newborn', eyebrow: '01 · Newborn sessions',
    intro: 'Prices are for the Palatine studio, where the light and the temperature are already right. In-home newborn sessions are available for a travel fee — I bring a full portable setup, so nothing about the day depends on your house being tidy. Luxury props, wraps, outfits and accessories are included in all three.',
    tiers: [
      { name: 'Silver', price: '$450', meta: '1 hour · 10 images',
        features: ['One or two styled newborn sets', 'Parent and sibling portraits', 'Classic, simple, unhurried'] },
      { name: 'Gold', badge: 'Most booked', price: '$550', meta: '2 hours · 20 images',
        features: ['Several styled sets', 'Full run of the premium wardrobe', 'Parent and sibling portraits', 'Room in the schedule for feeds'] },
      { name: 'Platinum', price: '$900', meta: '2.5 hours · 40 images',
        features: ['The full newborn experience, multiple sets', 'Detailed styling plus family portraits', 'Handcrafted 8×10 fine-art album included'] },
    ],
  },
  {
    id: 'portrait', eyebrow: '02 · Portrait sessions',
    intro: 'Maternity, family, milestones, children and headshots. Mini sessions run in the studio or on set dates and locations I choose; for your own home or a location of your choosing, the one-hour Gold is the one to book. Platinum is the only session built for extended families — the others are sized for one family.',
    tiers: [
      { name: 'Mini', price: '$300', meta: '30 minutes · 10 images',
        features: ['One studio or outdoor location', 'Made for seasonal and milestone portraits', 'Single family, one look'] },
      { name: 'Gold', price: '$450', meta: '1 hour · 20 images',
        features: ['The location of your choice, including home', 'Time for an outfit change', 'The sensible pick for maternity and family'] },
      { name: 'Platinum', price: '$600', meta: '2 hours · 40 images',
        features: ['Studio or any outdoor location', 'Several outfits and posing variations', 'Built for extended families and fuller galleries'] },
    ],
  },
  {
    id: 'smashcake', eyebrow: '03 · Smash cake & first birthdays',
    intro: 'Every smash-cake session comes styled: premium balloons, décor and coordinated props, plus luxury dresses for girls and a smaller but good wardrobe for boys. Cakes are not included — allergies and liability make that your call, and the session photographs beautifully with or without one.',
    tiers: [
      { name: 'Mini', price: '$350', meta: '30 minutes · 10 images',
        features: ['Styled backdrop, décor and one balloon set', 'One themed look', 'Baby-led, with parents welcome in frame'] },
      { name: 'Family', price: '$475', meta: '1 hour · 20 images',
        features: ['Several backdrops', 'Décor and balloons', 'Smash cake plus family portraits'] },
      { name: 'Platinum', price: '$600', meta: '1.5–2 hours · 40 images',
        features: ['Multiple styled sets', 'Décor and balloons', 'Smash cake plus sibling portraits', 'For detailed custom themes'] },
    ],
  },
];

const terms = [
  ['Proof gallery', 'Curated online gallery within 10 days; you choose your images from it yourself.'],
  ['Final images', 'Fine-art edited, high resolution, delivered a week after your selections.'],
  ['Extra images', '$14 each, or take the entire gallery for $250.'],
  ['Travel', 'Included within 25 miles of the Palatine studio; $0.65 a mile beyond, quoted first.'],
  ['Retainer', '$150 holds the date, non-refundable, applied to your session fee.'],
];

const faqs = [
  ['When should I book a newborn session?',
    'In your second trimester, ideally. I hold a due-date week rather than a fixed day, then we pin the real date once the baby has arrived — usually somewhere between day five and day fourteen. Late inquiries are still worth sending; babies rearrange my calendar constantly.'],
  ['Studio or my house?',
    'Both, genuinely. The studio has controlled light, a warm room and the whole prop wardrobe on hand. Your home has your own bedroom light and a shower you can use halfway through. Newborn prices here are studio prices; at home adds a travel fee based on where you are.'],
  ['What if the baby will not settle?',
    'Then we photograph an unsettled baby, which is most of them, and it turns out honest and lovely. Feeds, changes and long unexplained crying are all inside the session time. If a day collapses completely we stop and I rebook you at no extra fee.'],
  ['Do I need to buy prints or collections afterwards?',
    'No. Your package price includes the edited high-resolution images, and you may stop there quite happily. If you fall in love with more than you paid for, extras are $14 each or $250 for the whole gallery — that is the entire upsell.'],
  ['How far do you travel?',
    'Twenty-five miles from Palatine is included, which covers most of the northwest suburbs — Arlington Heights, Barrington, Schaumburg, Hoffman Estates, Mount Prospect. Beyond that it is $0.65 a mile, quoted before you commit to anything.'],
];

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div className="blueprint mp-panel mp-panel--stack">
      <Corners />
      <h2 className="mp-h2 mp-tier-name">
        {tier.name}
        {tier.badge && <span className="tag tag-accent mp-badge">{tier.badge}</span>}
      </h2>
      <span className="mp-price">{tier.price}</span>
      <span className="mp-label">{tier.meta}</span>
      <ul className="mp-features">
        {tier.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main id="main" className="mp-main">
      <header className="mp-pagehead">
        <h1 className="mp-display">Packages &amp; prices</h1>
        <p className="mp-lede">
          Every price on this page is the whole session price — the sitting, the styling and your edited high-resolution
          images. No collections to buy afterwards, no per-photograph pressure. A $150 retainer holds your date and comes
          off the total.
        </p>
        <div className="mp-tags">
          <a className="tag tag-outline" href="#newborn">Newborn</a>
          <a className="tag tag-outline" href="#portrait">Portrait</a>
          <a className="tag tag-outline" href="#smashcake">Smash cake</a>
          <a className="tag tag-outline" href="#fresh48">Fresh 48</a>
          <a className="tag tag-outline" href="#events">Events</a>
        </div>
      </header>

      {groups.map((grp) => (
        <section key={grp.id} id={grp.id} className="mp-section">
          <span className="mp-eyebrow">{grp.eyebrow}</span>
          <hr className="mp-rule" style={{ marginBottom: 16 }} />
          <p className="mp-intro mp-intro--pricing">{grp.intro}</p>
          <div className="mp-grid mp-grid--tight">
            {grp.tiers.map((t) => <TierCard key={t.name} tier={t} />)}
          </div>
        </section>
      ))}

      <section className="mp-section mp-grid mp-grid--tight" style={{ ['--min' as string]: '300px' }}>
        <div id="fresh48" className="blueprint mp-panel mp-panel--stack">
          <Corners />
          <span className="mp-label">04 · Fresh 48</span>
          <h2 className="mp-h2 mp-h2--feature">The first two days, at the hospital</h2>
          <span className="mp-price">$400</span>
          <span className="mp-label">1 hour · 20 images</span>
          <p className="mp-body mp-body--82">
            Photographed within 48 hours of birth, in the room as it is: the hospital blanket, the name card, the
            grandparents arriving. Documentary, no styling, no props. I stay on call around your due date and travel to
            hospitals across the northwest suburbs.
          </p>
        </div>
        <div id="events" className="blueprint mp-panel mp-panel--stack">
          <Corners />
          <span className="mp-label">05 · Events</span>
          <h2 className="mp-h2 mp-h2--feature">Christenings, birthdays, showers</h2>
          <span className="mp-price">$250<small> / hour</small></span>
          <span className="mp-label">Two-hour minimum</span>
          <p className="mp-body mp-body--82">
            All the best frames, lightly edited and delivered within two weeks, with a sneak-peek gallery inside the
            first week. A private online gallery for saving, downloading and sharing with everyone who was there.
          </p>
        </div>
      </section>

      <section className="mp-section">
        <span className="mp-eyebrow">06 · What happens after the session</span>
        <hr className="mp-rule" style={{ marginBottom: 24 }} />
        <div className="blueprint" style={{ overflow: 'visible' }}>
          <Corners />
          <header className="mp-boxhead">
            <span>Delivery, add-ons and terms</span>
            <span>2026 season</span>
          </header>
          <div className="mp-table-wrap">
            <table className="table mp-table">
              <caption className="sr-only">Delivery timings, add-on prices and booking terms</caption>
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Item</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                {terms.map(([item, detail], i) => (
                  <tr key={item}>
                    <td>{String(i + 1).padStart(2, '0')}</td>
                    <td>{item}</td>
                    <td>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mp-section">
        <span className="mp-eyebrow">07 · Questions, answered plainly</span>
        <hr className="mp-rule" style={{ marginBottom: 8 }} />
        {faqs.map(([q, a]) => (
          <details key={q} className="mp-faq">
            <summary>
              <span>{q}</span>
              <span className="mp-plus" aria-hidden="true" />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>

      <section className="mp-section mp-section--last">
        <div className="blueprint mp-panel mp-panel--cta mp-panel--row">
          <Corners />
          <div>
            <h2 className="mp-h2 mp-h2--cta">Not sure which package fits?</h2>
            <p style={{ fontSize: 16, lineHeight: '26px', margin: '12px 0 0', maxWidth: '52ch' }}>
              Tell me who is coming and what week you are thinking of. I will recommend one — usually not the most
              expensive one.
            </p>
          </div>
          <Link className="btn btn-primary mp-btn" href="/contact">Ask me</Link>
        </div>
      </section>
    </main>
  );
}
