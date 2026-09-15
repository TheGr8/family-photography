import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main" className="mp-main">
      <header className="mp-pagehead">
        <h1 className="mp-display">Page not found</h1>
        <p className="mp-lede">That address does not lead anywhere on this site. The portfolio and prices are a click away.</p>
        <div className="mp-actions">
          <Link className="btn btn-primary mp-btn" href="/">Go to the home page</Link>
          <Link className="btn btn-secondary mp-btn" href="/portfolio">See the portfolio</Link>
        </div>
      </header>
    </main>
  );
}
