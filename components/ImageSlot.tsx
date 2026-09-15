import { slotImages } from '@/lib/images';

type Props = { id: string; placeholder: string; label: string };

/** Static stand-in for the design's <image-slot>: a 4:5 photograph, or a captioned placeholder. */
export default function ImageSlot({ id, placeholder, label }: Props) {
  const src = slotImages[id];
  return (
    <div className="mp-slot" id={id} role="img" aria-label={label}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" loading="lazy" decoding="async" />
      ) : (
        <span className="mp-slot-empty" aria-hidden="true">{placeholder}</span>
      )}
    </div>
  );
}
