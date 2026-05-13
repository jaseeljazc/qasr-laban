const DeliveryIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="M3 7h10v8H3z" />
    <path d="M13 10h4l3 3v2h-7z" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F7FBFD] pt-[82px] lg:pt-[96px]">
      <div className="mx-auto grid min-h-[calc(100svh-82px)] max-w-[1440px] grid-cols-1 items-center gap-8 px-5 pb-8 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[0.92fr_1.08fr] lg:px-[5vw] lg:pb-12">
        <div className="relative z-10 max-w-[610px] animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-blue shadow-[0_10px_30px_rgba(0,162,228,0.08)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue text-white">
              <DeliveryIcon />
            </span>
            Premium dessert delivery
          </div>

          <h1 className="font-display text-[clamp(2.65rem,6.4vw,5.1rem)] font-bold leading-[0.92] tracking-[-0.01em] text-ink">
            Laban at your door,
            <span className="block text-[#00a2e4]">cold and creamy.</span>
          </h1>

          <p className="mt-5 max-w-[470px] text-[0.96rem] font-light leading-[1.8] text-ink-soft lg:text-[1.05rem]">
            Order layered qashtuta, salankatia, Nutella cups, and seasonal mango desserts from Labaan with fast local delivery across Kerala.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-blue px-6 text-[0.9rem] font-semibold text-white shadow-[0_16px_32px_rgba(0,162,228,0.28)] transition active:scale-[0.98] active:bg-blue-dark"
            >
              Start Order
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#outlets"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-border bg-white px-5 text-[0.9rem] font-medium text-ink shadow-[0_10px_28px_rgba(18,18,18,0.06)] transition hover:border-blue/30 hover:text-blue active:scale-[0.98]"
            >
              Check Locations
            </a>
          </div>

          <div className="mt-8 grid max-w-[520px] grid-cols-3 overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_18px_50px_rgba(18,18,18,0.07)]">
            {[
              ['15-25', 'min delivery'],
              ['4.9', 'customer rating'],
              ['8+', 'active outlets'],
            ].map(([value, label], index) => (
              <div key={label} className={`p-4 ${index < 2 ? 'border-r border-border-soft' : ''}`}>
                <div className="font-display text-[1.85rem] font-bold leading-none text-ink">{value}</div>
                <div className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-ink-faint">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[690px] lg:max-w-none">
          <div className="absolute left-[8%] top-[8%] hidden rounded-[22px] bg-white p-4 shadow-[0_20px_50px_rgba(18,18,18,0.12)] lg:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-tint text-blue">
                <CheckIcon />
              </span>
              <div>
                <div className="text-[0.78rem] font-semibold text-ink">Packed fresh</div>
                <div className="text-[0.65rem] text-ink-soft">Sealed for delivery</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[34px] border border-white bg-white p-3 shadow-[0_28px_70px_rgba(0,91,128,0.16)]">
            <div className="overflow-hidden rounded-[26px] bg-blue-tint">
              <img
                src="/images/qasr/nuttella_kaushari.jpeg"
                alt="Qasr dessert ready for delivery"
                className="h-[390px] w-full object-cover sm:h-[520px] lg:h-[660px]"
              />
            </div>
          </div>

          <div className="absolute bottom-5 left-4 right-4 rounded-[26px] border border-white/70 bg-white/92 p-4 shadow-[0_22px_55px_rgba(18,18,18,0.14)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-blue">Live order</div>
                <div className="mt-1 text-[1rem] font-semibold text-ink">Biscoff Nutella Salankatia</div>
              </div>
              <div className="rounded-full bg-blue px-3 py-2 text-[0.78rem] font-semibold text-white">Rs 199</div>
            </div>
            <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-blue" />
              <div className="h-1.5 overflow-hidden rounded-full bg-blue-tint2">
                <div className="h-full w-[72%] rounded-full bg-blue" />
              </div>
              <span className="text-[0.72rem] font-medium text-ink-soft">18 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
