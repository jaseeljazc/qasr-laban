const WHY_ITEMS = [
  {
    title: 'Fresh Daily',
    desc: 'Prepared in small batches so every order tastes newly layered.',
    icon: '01',
  },
  {
    title: 'Fast Routing',
    desc: 'Outlet-first delivery flow keeps prep, packing, and dispatch tight.',
    icon: '02',
  },
  {
    title: 'Premium Pack',
    desc: 'Secure cups, clean seals, and toppings protected for the ride.',
    icon: '03',
  },
  {
    title: 'Loved Locally',
    desc: 'Qashtuta and salankatia favorites with a growing Kerala following.',
    icon: '04',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#F7FBFD] px-5 py-12 lg:px-[5vw] lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue">Why choose Labaan</div>
            <h2 className="font-display text-[clamp(1.8rem,4.4vw,3rem)] font-bold leading-[1] text-ink">
              Delivery that respects
              <span className="block text-blue">the dessert.</span>
            </h2>
          </div>
          <p className="max-w-[390px] text-[0.9rem] font-light leading-[1.8] text-ink-soft lg:text-right">
            The experience is designed end to end, from the recipe and cup structure to how quickly it reaches you.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ITEMS.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-border bg-white p-5 shadow-[0_16px_42px_rgba(18,18,18,0.05)] transition hover:border-blue/25">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue text-[0.82rem] font-bold text-white">
                {item.icon}
              </div>
              <h3 className="font-display text-[1.22rem] font-bold leading-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-[0.82rem] font-light leading-[1.65] text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
