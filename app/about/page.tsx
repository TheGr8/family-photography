import type { Metadata } from 'next';
import Link from 'next/link';
import Corners from '@/components/Corners';
import Frame from '@/components/Frame';
import StepCard from '@/components/StepCard';

export const metadata: Metadata = { title: 'About' };

const facts = [
  { value: 'Since 2014', body: 'Twelve years photographing newborns, and several hundred families in the northwest suburbs.' },
  { value: 'Insured', body: 'Fully insured and trained in newborn handling and safety. Happy to show the paperwork.' },
  { value: 'One a day', body: 'One family per day, and rescheduling at an hour’s notice — new babies keep their own calendar.' },
];

export default function AboutPage() {
  return (
    <main id="main" className="mp-main">
      <section className="mp-hero">
        <div>
          <h1 className="mp-display" style={{ fontSize: 'clamp(34px, 4.6vw, 58px)' }}>
            <span>Hello — I am</span>
            <span>the one holding</span>
            <span>the camera.</span>
          </h1>
          <p className="mp-lede mp-lede--hero">
            I photographed my first newborn in 2014, a fortnight after my own son was born, and I have not worked from a
            checklist since. Maria Chicago Photography is one person: I answer the emails, I do the styling, I edit every
            frame, and I am the one who will be sitting on your living-room floor at nine in the morning.
          </p>
          <p className="mp-lede mp-lede--hero" style={{ marginTop: 20 }}>
            I book one family a day. It means sessions can run long without anyone hurrying, and it means I remember
            your children&apos;s names when you come back for the first birthday.
          </p>
        </div>
        <Frame duotone id="mp-about-portrait" placeholder="Portrait of the photographer"
          label="Portrait of the photographer at work" />
      </section>

      <section className="mp-section">
        <span className="mp-eyebrow">01 · How a newborn session runs</span>
        <hr className="mp-rule" />
        <div className="mp-grid" style={{ ['--min' as string]: '250px' }}>
          <StepCard kicker="Before" title="One page of notes">
            A week ahead you get a single page: what to wear, when to feed, how warm to keep the room, and which window I
            would like to use. Nothing about shopping.
          </StepCard>
          <StepCard kicker="During" title="Led by the baby">
            Two hours are booked so a feed, a change and a long cry all fit inside them. Awake photographs count too —
            they look like the week actually did. Props, wraps and outfits are mine to carry.
          </StepCard>
          <StepCard kicker="After" title="Gallery in ten days">
            A proof gallery arrives within ten days. You pick your images; the fine-art edits follow a week later at full
            resolution, yours to print wherever you like.
          </StepCard>
        </div>
      </section>

      <section className="mp-section">
        <span className="mp-eyebrow">02 · How a family session runs</span>
        <hr className="mp-rule" />
        <div className="mp-grid" style={{ ['--min' as string]: '250px' }}>
          <StepCard kicker="Where" title="Your place or mine">
            The studio in Palatine, your own house, or a park you actually go to. I keep a short list of good
            northwest-suburb locations for people who would rather not choose.
          </StepCard>
          <StepCard kicker="With whom" title="Everyone, including the dog">
            Grandparents, cousins and the reluctant teenager are all welcome — extended groups take the two-hour session
            so nobody is rushed into a line-up.
          </StepCard>
          <StepCard kicker="How" title="Barely any posing">
            I set a place to stand, then give you something to do — walk, lift, whisper something rude. Two or three
            properly posed frames at the end, for the grandparents&apos; wall.
          </StepCard>
        </div>
      </section>

      <section className="mp-section">
        <div className="blueprint" style={{ overflow: 'visible' }}>
          <Corners />
          <header className="mp-boxhead">
            <span>The practical facts</span>
            <span>Maria Chicago Photography</span>
          </header>
          <div className="mp-stats" style={{ ['--min' as string]: '240px' }}>
            {facts.map((f) => (
              <div key={f.value} className="mp-stat">
                <span className="mp-stat-value">{f.value}</span>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mp-split mp-section mp-section--last">
        <figure>
          <blockquote className="mp-quote">
            “She stayed two hours and never once asked us to smile. They are the only photographs of that month I can
            look at.”
          </blockquote>
          <figcaption className="mp-quote-cite">— Priya &amp; Tom, Barrington</figcaption>
        </figure>
        <div className="blueprint mp-panel mp-panel--cta">
          <Corners />
          <h2 className="mp-h2 mp-h2--cta">Come and say hello</h2>
          <p style={{ fontSize: 16, lineHeight: '26px', margin: '12px 0 20px', maxWidth: '46ch' }}>
            Tell me your due date or the week you are thinking of, and I will send back the dates I have and the package
            I would actually recommend.
          </p>
          <Link className="btn btn-primary mp-btn" href="/contact">Start an inquiry</Link>
        </div>
      </section>
    </main>
  );
}
