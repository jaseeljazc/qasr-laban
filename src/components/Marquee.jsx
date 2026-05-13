import { MARQUEE_ITEMS } from '../data.jsx';

export default function Marquee() {
  const all = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden border-y border-blue/15 bg-white py-3">
      <div className="inline-flex animate-marquee items-center">
        {all.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-4 px-5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-blue" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
