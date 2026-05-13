export default function SignatureBand() {
  return (
    <section id="about" className="bg-white px-5 py-12 lg:px-[5vw] lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-ink lg:min-h-[520px]">
          <img
            src="/images/qasr/salankatia.jpeg"
            alt="Premium Qasr dessert"
            className="h-full w-full object-cover opacity-95 transition duration-[900ms] hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/20 bg-white/12 p-5 text-white backdrop-blur-md lg:bottom-8 lg:left-8 lg:right-8">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/70">Kitchen standard</div>
            <h3 className="mt-2 max-w-[560px] font-display text-[1.9rem] font-bold leading-[1] lg:text-[2.8rem]">
              Built for rich flavor and clean delivery.
            </h3>
          </div>
        </div>

        <div className="grid content-between gap-5 rounded-[28px] border border-border bg-[#F7FBFD] p-6 lg:p-9">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-white px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue shadow-[0_8px_22px_rgba(18,18,18,0.06)]">
              The Labaan promise
            </div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.8rem)] font-bold leading-[1.03] text-ink">
              Dessert shop quality,
              <span className="block text-blue">delivery app speed.</span>
            </h2>
            <p className="mt-5 text-[0.95rem] font-light leading-[1.8] text-ink-soft">
              Every cup is layered to travel well: chilled base, crisp toppings, clean packaging, and a quick route from outlet to doorstep.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Cold packed', 'Temperature-first handoff'],
              ['Fresh batch', 'Prepared around live demand'],
              ['Clean layers', 'Texture protected until opening'],
              ['Fast pickup', 'Outlet-ready delivery flow'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[20px] border border-border bg-white p-4">
                <div className="mb-2 h-2 w-9 rounded-full bg-blue" />
                <div className="font-semibold text-ink">{title}</div>
                <div className="mt-1 text-[0.75rem] font-light text-ink-soft">{desc}</div>
              </div>
            ))}
          </div>

          <a
            href="#menu"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-blue px-6 text-[0.88rem] font-semibold text-white shadow-[0_14px_30px_rgba(0,162,228,0.24)] transition active:scale-95"
          >
            Explore Menu
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
