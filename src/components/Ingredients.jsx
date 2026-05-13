import { INGREDIENTS } from '../data.jsx';

export default function Ingredients() {
  return (
    <section className="bg-white px-5 py-12 lg:px-[5vw] lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue">Signature ingredients</div>
            <h2 className="font-display text-[clamp(1.7rem,3.8vw,2.65rem)] font-bold leading-tight text-ink">
              Real toppings, real texture.
            </h2>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} className="flex min-h-[132px] w-[150px] flex-shrink-0 flex-col justify-between rounded-[22px] border border-border bg-[#F7FBFD] p-4 transition hover:border-blue/25 hover:bg-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-tint text-blue">
                <div className="h-5 w-5">{ing.icon}</div>
              </div>
              <div className="text-[0.88rem] font-semibold leading-tight text-ink">{ing.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
