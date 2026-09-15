import Link from 'next/link';
import Corners from '@/components/Corners';
import Frame from '@/components/Frame';

const services = [
  { anchor: 'newborn', id: 'mp-home-newborn', placeholder: 'Newborn', label: 'Newborn portrait from a studio session', title: 'Newborn',
    body: 'Best in the first two weeks, and worth booking while you are still pregnant. From $450.' },
  { anchor: 'maternity', id: 'mp-home-maternity', placeholder: 'Maternity', label: 'Maternity portrait photographed outdoors', title: 'Maternity',
    body: 'Weeks 30 to 36, in the studio or somewhere outdoors that means something to you. From $300.' },
  { anchor: 'family', id: 'mp-home-family', placeholder: 'Family', label: 'Family portrait photographed on location', title: 'Family',
    body: 'Grandparents, cousins, the dog — all welcome. Extended families take the two-hour session. From $300.' },
  { anchor: 'milestone', id: 'mp-home-milestone', placeholder: 'Milestone & first birthday', label: 'First birthday smash cake session portrait', title: 'Milestones',
    body: 'Sitting up, standing, and the first birthday with balloons and a cake. From $300.' },
];

const included = [
  { value: '10 days', body: 'Your proof gallery is ready within ten days of the session.' },
  { value: 'You choose', body: 'You pick your images straight from the proof gallery — nobody chooses for you.' },
  { value: 'Fine-art edits', body: 'High-resolution edited files are included with every package, no upsell.' },
  { value: 'Props included', body: 'Wraps, outfits, accessories and backdrops come with every newborn session.' },
];

export default function HomePage() {
  return (
    <main id="main" className="mp-main">
      <section className="mp-hero mp-hero--home">
        <div>
          <h1 className="mp-display mp-display--home">
            <span>The days that go</span>
            <span>by the quickest,</span>
            <span>kept properly.</span>
          </h1>
          <p className="mp-lede mp-lede--hero">
            I am a newborn and family photographer in northwest Chicagoland. Sessions happen in my Palatine studio or in
            your own living room — whichever will be calmer for your family that week. Either way I bring the wraps, the
            props and the patience.
          </p>
          <div className="mp-actions">
            <Link className="btn btn-primary mp-btn" href="/contact">Book a session</Link>
            <Link className="btn btn-secondary mp-btn" href="/portfolio">See the portfolio</Link>
          </div>
          <p className="mp-label" style={{ lineHeight: '24px', letterSpacing: '0.06em', margin: '24px 0 0' }}>
            Newborn dates booking now · November — February
          </p>
        </div>
        <Frame duotone id="mp-home-hero" placeholder="Hero photograph"
          label="Newborn asleep in a parent's arms, photographed in window light" />
      </section>

      <section className="mp-section">
        <span className="mp-eyebrow">01 · What I photograph</span>
        <hr className="mp-rule" />
        <div className="mp-grid">
          {services.map((s) => (
            <Link key={s.id} className="mp-service" href={`/portfolio#${s.anchor}`}>
              <Frame id={s.id} placeholder={s.placeholder} label={s.label} />
              <h2 className="mp-h2">{s.title}</h2>
              <p className="mp-body">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mp-section">
        <span className="mp-eyebrow">02 · In every package</span>
        <hr className="mp-rule" style={{ marginBottom: 24 }} />
        <div className="blueprint" style={{ overflow: 'visible' }}>
          <Corners />
          <div className="mp-stats">
            {included.map((i) => (
              <div key={i.value} className="mp-stat">
                <span className="mp-stat-value">{i.value}</span>
                <p>{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mp-split" style={{ padding: 'clamp(28px, 4vw, 48px) 0 clamp(36px, 5vw, 64px)' }}>
        <div>
          <h2 className="mp-h2" style={{ fontSize: 'clamp(28px, 3.2vw, 36px)', lineHeight: '36px' }}>Let&apos;s find your date</h2>
          <p style={{ fontSize: 16, lineHeight: '26px', margin: '20px 0 0', maxWidth: '44ch' }}>
            Tell me your due date — or the week you have in mind — and I will send back real openings, the packages
            that suit, and nothing that looks like a sales sequence. A $150 retainer holds the date and comes off your
            session fee.
          </p>
          <div className="mp-actions" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary mp-btn" href="/contact">Start an inquiry</Link>
            <Link className="btn btn-secondary mp-btn" href="/pricing">See all packages</Link>
          </div>
        </div>
        <figure>
          <blockquote className="mp-quote">
            “She came to our house on day six, held the baby while I showered, and somehow still made the loveliest
            photographs we own.”
          </blockquote>
          <figcaption className="mp-quote-cite">— Dana &amp; Mike, Arlington Heights</figcaption>
        </figure>
      </section>
    </main>
  );
}
