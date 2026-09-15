'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, site } from '@/lib/site';

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <>
      <div className="mp-navwrap">
        <nav className="nav mp-nav" aria-label="Main">
          <Link className="nav-brand" href="/">{site.name}</Link>
          <span className="mp-navlinks">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
          </span>
          <Link className="btn btn-primary" href="/contact">Book a session</Link>
        </nav>
      </div>
      <div className="mp-stickybar">
        <span className="mp-stickybar-label">{site.bookingWindow}</span>
        <Link className="btn btn-primary mp-btn" href="/contact">Book a session</Link>
      </div>
    </>
  );
}
