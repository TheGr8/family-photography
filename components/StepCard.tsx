import Corners from './Corners';

type Props = { kicker: string; title: string; children: React.ReactNode };

export default function StepCard({ kicker, title, children }: Props) {
  return (
    <div className="blueprint mp-panel">
      <Corners />
      <span className="mp-label" style={{ marginBottom: 12 }}>{kicker}</span>
      <h2 className="mp-h2">{title}</h2>
      <p className="mp-body mp-body--80">{children}</p>
    </div>
  );
}
