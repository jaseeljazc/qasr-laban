export default function Footer() {
  return (
    <footer id="contact" className="bg-ink px-5 pb-24 pt-12 text-white lg:px-[5vw] lg:pb-12 lg:pt-16">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 flex h-16 w-32 items-center">
            <img src="/images/qasr/qasr_logo.jpeg" alt="Qasr" className="h-16 w-auto rounded-[14px] border border-white/70 object-contain shadow-[0_8px_20px_rgba(0,0,0,0.22)]" />
          </div>
          <h2 className="max-w-[560px] font-display text-[clamp(1.75rem,4vw,2.9rem)] font-bold leading-[1.04]">
            Premium laban desserts, ready for pickup and delivery.
          </h2>
          <p className="mt-5 max-w-[470px] text-[0.9rem] font-light leading-[1.8] text-white/55">
            A better Foods Pvt. Ltd. brand bringing Egyptian-inspired layered desserts to Kerala.
          </p>
        </div>

        <div className="grid content-between gap-8">
          <div className="grid grid-cols-2 gap-3">
            {[
              ['Call', '+91 9876543222'],
              ['WhatsApp', '+91 9876543223'],
              ['Office', 'Qasr, Kochi,Kerala,India'],
              // ['Pin', 'Kerala 682018'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                <div className="text-[0.64rem] font-bold uppercase tracking-[0.13em] text-blue">{label}</div>
                <div className="mt-2 text-[0.82rem] leading-snug text-white/78">{value}</div>
              </div>
            ))}
          </div>

          <div>
            <label className="mb-3 block text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue">Stay updated</label>
            <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/[0.05]">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[0.86rem] text-white outline-none placeholder:text-white/28"
              />
              <button className="bg-blue px-5 py-3 text-[0.84rem] font-semibold text-white transition active:bg-blue-dark">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1440px] flex-col gap-5 border-t border-white/10 pt-6 text-[0.74rem] text-white/38 lg:flex-row lg:items-center lg:justify-between">
        {/* <p>Copyright 2026 Labaan. A Flavorarc Foods Pvt. Ltd. Brand.</p> */}
        <div className="flex flex-wrap gap-4">
          {['Home', 'Menu', 'About', 'Franchise', 'Privacy', 'Terms'].map((label) => (
            <a key={label} href={label === 'Menu' ? '#menu' : label === 'Franchise' ? '#franchise' : '#home'} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
