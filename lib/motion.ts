/*
 * Motion layer, ported from the design's motion.js to the gsap npm package.
 * Everything is a gsap.from(), so with reduced motion (or if anything fails)
 * the page simply renders static and complete.
 */
import type { gsap as GsapType } from 'gsap';
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger';

type Gsap = typeof GsapType;
const EASE = 'power2.out';
let ready: Promise<Gsap | null> | null = null;
let ST: typeof ScrollTriggerType | null = null;

export function reducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function ensureGsap(): Promise<Gsap | null> {
  if (ready) return ready;
  ready = Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
    .then(([g, st]) => {
      g.gsap.registerPlugin(st.ScrollTrigger);
      ST = st.ScrollTrigger;
      return g.gsap;
    })
    .catch(() => null);
  return ready;
}

/* A section's reveal units: its direct children, but where a child is a
   grid or flex row of several items, stagger the items themselves. */
function unitsOf(section: Element): Element[] {
  let out: Element[] = [];
  Array.from(section.children).forEach((child) => {
    const display = getComputedStyle(child).display;
    if ((display === 'grid' || display === 'flex') && child.children.length > 1) {
      out = out.concat(Array.from(child.children));
    } else {
      out.push(child);
    }
  });
  return out.filter((el) => (el as HTMLElement).offsetParent !== null || el.getClientRects().length);
}

function wireNav(gsap: Gsap) {
  const nav = document.querySelector<HTMLElement>('nav.nav');
  if (!nav || nav.dataset.motion) return;
  nav.dataset.motion = '1';
  const tl = gsap.timeline({ paused: true });
  tl.to(nav, {
    paddingTop: 6,
    paddingBottom: 6,
    boxShadow: '0 1px 0 var(--color-divider), var(--shadow-sm)',
    duration: 0.35,
    ease: EASE,
  });
  ST?.create({
    start: 48,
    end: 99999,
    onEnter: () => { tl.play(); },
    onLeaveBack: () => { tl.reverse(); },
  });
}

function wireHero(gsap: Gsap, section: Element) {
  const tl = gsap.timeline({ defaults: { ease: EASE } });
  const copy = section.querySelector('h1');
  const lines = copy ? copy.querySelectorAll('span') : [];
  const rest = Array.from(section.querySelectorAll(':scope > div > p, :scope > div > div'));
  const figure = section.querySelector('figure');

  if (lines.length > 1) tl.from(lines, { yPercent: 40, opacity: 0, duration: 0.8, stagger: 0.08 }, 0);
  else if (copy) tl.from(copy, { y: 24, opacity: 0, duration: 0.8 }, 0);
  if (rest.length) tl.from(rest, { y: 18, opacity: 0, duration: 0.6, stagger: 0.08 }, 0.25);
  if (figure) tl.from(figure, { opacity: 0, scale: 1.02, duration: 1.1 }, 0.1);
  return figure;
}

function wireParallax(gsap: Gsap, figure: Element | null) {
  if (!figure) return;
  gsap.to(figure, {
    yPercent: -6,
    ease: 'none',
    scrollTrigger: { trigger: figure, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
  });
}

/** Wires reveals for the current page. Returns a cleanup function. */
export function initMotion(): () => void {
  if (reducedMotion()) return () => {};
  let ctx: { revert: () => void } | null = null;
  let cancelled = false;

  ensureGsap().then((gsap) => {
    if (!gsap || cancelled) return;
    wireNav(gsap);
    ctx = gsap.context(() => {
      const sections = Array.from(document.querySelectorAll('main > section, main > header'));
      sections.forEach((section, i) => {
        const units = unitsOf(section);
        if (!units.length) return;
        if (i === 0) {
          wireParallax(gsap, wireHero(gsap, section));
          return;
        }
        gsap.from(units, {
          y: 22,
          opacity: 0,
          duration: 0.7,
          ease: EASE,
          stagger: 0.07,
          scrollTrigger: { trigger: section, start: 'top 82%', once: true },
        });
      });
    });
    ST?.refresh();
  });

  return () => {
    cancelled = true;
    ctx?.revert();
  };
}

export async function lightboxIn(overlay: Element, img: Element) {
  if (reducedMotion()) return;
  const gsap = await ensureGsap();
  if (!gsap) return;
  gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: EASE });
  gsap.fromTo(img, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: EASE });
}

export async function lightboxOut(overlay: Element, done: () => void) {
  const gsap = reducedMotion() ? null : await ensureGsap();
  if (!gsap) { done(); return; }
  gsap.to(overlay, { opacity: 0, duration: 0.2, ease: 'power1.in', onComplete: done });
}
