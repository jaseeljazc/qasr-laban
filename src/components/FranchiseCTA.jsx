export default function FranchiseCTA() {
  return (
    <section id="franchise" className="bg-[#F7FBFD] px-5 py-12 lg:px-[5vw] lg:py-20">
      <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[30px] bg-ink text-white shadow-[0_28px_80px_rgba(18,18,18,0.18)] lg:grid-cols-[1fr_0.85fr]">
        <div className="p-7 sm:p-10 lg:p-14">
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue">
            Franchise opportunity
          </div>
          <h3 className="font-display text-[clamp(1.95rem,4.8vw,3.75rem)] font-bold leading-[0.98] tracking-[-0.01em]">
            Open a Qasr Laban
            <span className="block text-blue">delivery outlet.</span>
          </h3>
          <p className="mt-5 max-w-[520px] text-[0.95rem] font-light leading-[1.8] text-white/62">
            Bring premium Egyptian-inspired desserts to your city with product training, brand systems, and a delivery-ready operating model.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue px-6 text-[0.9rem] font-semibold text-white shadow-[0_14px_30px_rgba(0,162,228,0.24)] transition active:scale-95"
            >
              Enquire Now
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#outlets" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-5 text-[0.9rem] font-medium text-white/80">
              View Network
            </a>
          </div>
        </div>

        <div className="relative min-h-[300px] border-t border-white/10 lg:border-l lg:border-t-0">
          <img
            src="/images/qasr/kinder_loua.jpeg"
            alt="Qasr dessert franchise product"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent lg:bg-gradient-to-r lg:from-ink/50 lg:to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white p-4 text-ink shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue">Starter support</div>
            <div className="mt-1 text-[0.9rem] font-semibold">Stock, training, packaging, and launch guidance.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
