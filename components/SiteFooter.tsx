import Link from 'next/link';
import { site } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="mp-footer">
      <div className="mp-footer-grid">
        <div>
          <span className="mp-footer-brand">{site.name}</span>
          <p>Newborn, maternity and family portraits — studio in Palatine, and at home across northwest Chicagoland.</p>
        </div>
        <div>
          <span className="mp-footer-head">Pages</span>
          <span className="mp-footer-links">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </span>
        </div>
        <div>
          <span className="mp-footer-head">Get in touch</span>
          <span className="mp-footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <Link href="/contact">Instagram — @marminphoto</Link>
          </span>
        </div>
        <div>
          <span className="mp-footer-head">Studio</span>
          <p>Palatine, Illinois. Travel included within 25 miles; $0.65 a mile beyond, quoted before you book.</p>
        </div>
      </div>
      <div className="mp-footer-legal">
        © 2026 {site.name} · Serving Palatine, Arlington Heights, Barrington, Schaumburg and the northwest suburbs
      </div>
    </footer>
  );
}
