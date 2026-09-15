'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Corners from './Corners';
import ImageSlot from './ImageSlot';
import { slotImages } from '@/lib/images';
import { lightboxIn, lightboxOut } from '@/lib/motion';

export type GalleryItem = { id: string; placeholder: string; label: string };

type Open = { src: string; alt: string; opener: HTMLElement };

/** A grid of photographs; any filled one opens large in a lightbox. */
export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<Open | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    if (!open || !overlayRef.current) return;
    const opener = open.opener;
    lightboxOut(overlayRef.current, () => {
      setOpen(null);
      if (opener.isConnected) opener.focus();
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    if (overlayRef.current && imgRef.current) lightboxIn(overlayRef.current, imgRef.current);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const tryOpen = (item: GalleryItem, el: HTMLElement) => {
    const src = slotImages[item.id];
    if (!src) return false;
    setOpen({ src, alt: item.label, opener: el });
    return true;
  };

  return (
    <>
      <div className="mp-grid mp-grid--tight" style={{ ['--min' as string]: '240px' }}>
        {items.map((item) => (
          <figure
            key={item.id}
            className="blueprint mp-frame mp-zoom"
            tabIndex={0}
            role="button"
            aria-label="Enlarge this photograph"
            onClick={(e) => { if (tryOpen(item, e.currentTarget)) e.preventDefault(); }}
            onKeyDown={(e) => {
              if (e.key !== 'Enter' && e.key !== ' ') return;
              if (tryOpen(item, e.currentTarget)) e.preventDefault();
            }}
          >
            <ImageSlot {...item} />
            <Corners />
          </figure>
        ))}
      </div>

      {open && (
        <div
          ref={overlayRef}
          className="mp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph, enlarged"
          onClick={(e) => { if (e.target === overlayRef.current) close(); }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={imgRef} src={open.src} alt={open.alt} />
          <button ref={closeRef} type="button" className="btn btn-secondary" onClick={close}>Close</button>
        </div>
      )}
    </>
  );
}
