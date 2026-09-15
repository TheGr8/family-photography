import Corners from './Corners';
import ImageSlot from './ImageSlot';

type Props = { id: string; placeholder: string; label: string; duotone?: boolean };

export default function Frame({ id, placeholder, label, duotone }: Props) {
  return (
    <figure className={`blueprint mp-frame${duotone ? ' duotone' : ''}`}>
      <ImageSlot id={id} placeholder={placeholder} label={label} />
      <Corners />
    </figure>
  );
}
