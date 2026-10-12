import type { Metadata, Viewport } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Motion from '@/components/Motion';
import '@/styles/ds.css';
import '@/styles/theme.css';
import '@/styles/site.css';

export const metadata: Metadata = {
  title: {
    default: 'Maria Chicago Photography — Newborn & family photographer, Palatine IL',
    template: '%s — Maria Chicago Photography',
  },
  description:
    'Newborn, maternity and family portraits in northwest Chicagoland — studio in Palatine, or at home.',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&family=Outfit:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div className="mp-shell">
          <a className="skip" href="#main">Skip to content</a>
          <SiteNav />
          {children}
          <SiteFooter />
        </div>
        <Motion />
      </body>
    </html>
  );
}
