import type { Metadata } from 'next';
import Link from 'next/link';
import Corners from '@/components/Corners';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Book a session' };

const terms: React.ReactNode[] = [
  <>A <strong>$150 retainer</strong> holds your date. It is non-refundable and comes off your session fee.</>,
  'The balance is due on the day of the session.',
  'Newborn dates are held as a due-date week and confirmed once the baby arrives — rescheduling for arrival or illness carries no fee.',
  'Travel is included within 25 miles of Palatine; beyond that $0.65 a mile, always quoted before you commit.',
];

export default function ContactPage() {
  return (
    <main id="main" className="mp-main">
      <header className="mp-pagehead">
        <h1 className="mp-display">Book a session</h1>
        <p className="mp-lede">
          Nothing here is binding — the form just starts a conversation. I read every inquiry myself and reply within two
          working days with the dates I genuinely have. If it is easier, phone or text instead.
        </p>
      </header>

      <section
        className="mp-split"
        style={{ alignItems: 'start', padding: '0 0 clamp(28px, 4vw, 48px)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}
      >
        <div>
          <span className="mp-eyebrow">01 · Inquiry</span>
          <hr className="mp-rule" style={{ marginBottom: 24 }} />
          <ContactForm />
        </div>

        <div>
          <span className="mp-eyebrow">02 · Direct</span>
          <hr className="mp-rule" style={{ marginBottom: 24 }} />
          <dl className="mp-dl">
            <dt>Email</dt>
            <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            <dt>Phone &amp; text</dt>
            <dd><a href={site.phoneHref}>{site.phone}</a></dd>
            <dt>Studio</dt>
            <dd>Palatine, Illinois — address sent with your booking confirmation</dd>
            <dt>Hours</dt>
            <dd>Sessions Tuesday to Saturday, mornings for newborns; email answered daily</dd>
          </dl>

          <div className="blueprint" style={{ overflow: 'visible', marginTop: 32 }}>
            <Corners />
            <header className="mp-boxhead">
              <span style={{ minWidth: '14ch' }}>Booking terms</span>
              <span>2026</span>
            </header>
            <ol className="mp-terms">
              {terms.map((t, i) => (
                <li key={i}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mp-body" style={{ marginTop: 24 }}>
            Prices and what each package includes are on the <Link href="/pricing">pricing page</Link>; recent work is in
            the <Link href="/portfolio">portfolio</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
