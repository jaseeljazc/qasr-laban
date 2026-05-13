const OUTLETS = [
  'Mannarkkad',
  'Thrissur',
  'Feroke',
  'Guruvayoor',
  'Changaramkulam',
  'Valanchery',
  'Kaloor',
  'Edapally',
];

export default function Outlets() {
  return (
    <section id="outlets" className="bg-[#F7FBFD] px-5 py-12 lg:px-[5vw] lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-3 inline-flex rounded-full bg-white px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue shadow-[0_8px_22px_rgba(18,18,18,0.06)]">
            Delivery coverage
          </div>
          <h2 className="font-display text-[clamp(1.85rem,4.6vw,3.35rem)] font-bold leading-[1] text-ink">
            Qasr Laban is closer
            <span className="block text-blue">than your craving.</span>
          </h2>
          <p className="mt-5 max-w-[420px] text-[0.92rem] font-light leading-[1.8] text-ink-soft">
            Order from nearby outlets across Kerala, with focused local dispatch for fresher arrivals.
          </p>
        </div>

        <div className="rounded-[28px] border border-border bg-white p-4 shadow-[0_22px_60px_rgba(18,18,18,0.07)] lg:p-6">
          <div className="mb-4 flex items-center justify-between rounded-[22px] bg-ink p-4 text-white">
            <div>
              <div className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/55">Active network</div>
              <div className="mt-1 font-display text-[2rem] font-bold leading-none">8 outlets</div>
            </div>
            <span className="rounded-full bg-blue px-3 py-2 text-[0.76rem] font-bold">Open today</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {OUTLETS.map((name, index) => (
              <div key={name} className="flex items-center justify-between rounded-[18px] border border-border bg-[#F7FBFD] p-4 transition hover:border-blue/30 hover:bg-white">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-tint text-[0.74rem] font-bold text-blue">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-ink">{name}</span>
                </div>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-blue stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
