import type { Metadata } from 'next';
import Link from 'next/link';
import Corners from '@/components/Corners';
import Gallery, { type GalleryItem } from '@/components/Gallery';

export const metadata: Metadata = { title: 'Portfolio' };

const g = (prefix: string, name: string, labels: string[]): GalleryItem[] =>
  labels.map((label, i) => ({ id: `${prefix}-${i + 1}`, placeholder: `${name} 0${i + 1}`, label }));

const galleries = [
  {
    id: 'newborn', eyebrow: '01 · Newborn',
    intro: 'Days five to fourteen, studio or at home. Wraps, bonnets and props are mine to bring; the sleepiness is yours.',
    items: g('mp-nb', 'Newborn', [
      'Newborn wrapped and asleep on a neutral backdrop',
      "Newborn's hands and feet in close detail",
      'Parent holding their newborn against the shoulder',
      'Older sibling meeting the new baby',
      'Newborn in a styled studio set with soft props',
      'Both parents looking down at their newborn',
    ]),
  },
  {
    id: 'maternity', eyebrow: '02 · Maternity',
    intro: 'Weeks thirty to thirty-six, when you still feel like moving. Studio gowns available, or wear the dress you love.',
    items: g('mp-mat', 'Maternity', [
      'Expectant parent in a studio gown in soft light',
      'Couple outdoors at golden hour, hands on the bump',
      'Profile silhouette against a bright window',
      "Toddler kissing their mother's bump",
      'Detail of hands resting on the bump',
      'Expectant parent walking through tall grass',
    ]),
  },
  {
    id: 'family', eyebrow: '03 · Family',
    intro: 'Your house, a favourite park, or the studio when the weather refuses. Extended families and grandparents take the two-hour session.',
    items: g('mp-fam', 'Family', [
      'Family of four walking a wooded path',
      'Siblings laughing together on a bed at home',
      'Three generations posed in the studio',
      'Parents lifting a toddler between them',
      'Family at home in the kitchen, mid-morning',
      'Extended family group in a park at golden hour',
    ]),
  },
  {
    id: 'milestone', eyebrow: '04 · Milestones & first birthdays',
    intro: 'Sitting up, standing, and the smash-cake year — styled sets, balloons and décor included. Cakes stay with you, for allergy reasons.',
    items: g('mp-mile', 'Milestone', [
      'Six-month-old sitting up in a styled studio set',
      'First birthday session with a balloon garland',
      'Baby mid-laugh reaching for the cake',
      'One-year-old standing at a low table',
      'Sibling portrait at the birthday set',
      'Cake-covered hands in close detail',
    ]),
  },
];

export default function PortfolioPage() {
  return (
    <main id="main" className="mp-main">
      <header className="mp-pagehead">
        <h1 className="mp-display">Portfolio</h1>
        <p className="mp-lede" style={{ maxWidth: '52ch' }}>
          Twelve years of northwest-suburb families, in the order you are most likely to meet me: pregnant, newly home,
          and then every year after. Click any photograph to see it large.
        </p>
        <div className="mp-tags">
          <a className="tag tag-outline" href="#newborn">Newborn</a>
          <a className="tag tag-outline" href="#maternity">Maternity</a>
          <a className="tag tag-outline" href="#family">Family</a>
          <a className="tag tag-outline" href="#milestone">Milestones</a>
        </div>
      </header>

      {galleries.map((gal) => (
        <section key={gal.id} id={gal.id} className="mp-section">
          <span className="mp-eyebrow">{gal.eyebrow}</span>
          <hr className="mp-rule" style={{ marginBottom: 12 }} />
          <p className="mp-intro">{gal.intro}</p>
          <Gallery items={gal.items} />
        </section>
      ))}

      <section className="mp-section mp-section--last">
        <div className="blueprint mp-panel mp-panel--cta mp-panel--row">
          <Corners />
          <div>
            <h2 className="mp-h2 mp-h2--cta">Somewhere in here is your family</h2>
            <p style={{ fontSize: 16, lineHeight: '26px', margin: '12px 0 0', maxWidth: '52ch' }}>
              Send your due date or the week you have in mind, and I will reply with the openings I actually have.
            </p>
          </div>
          <Link className="btn btn-primary mp-btn" href="/contact">Book a session</Link>
        </div>
      </section>
    </main>
  );
}
