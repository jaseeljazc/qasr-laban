import { TESTIMONIALS } from '../data.jsx';

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-12 lg:px-[5vw] lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue">Customer love</div>
            <h2 className="font-display text-[clamp(1.8rem,4.4vw,3rem)] font-bold leading-[1] text-ink">
              Repeat orders say
              <span className="block text-blue">everything.</span>
            </h2>
          </div>
          <div className="rounded-full border border-border bg-[#F7FBFD] px-4 py-3 text-[0.82rem] font-semibold text-ink">
            4.9 average rating
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none lg:grid lg:grid-cols-4 lg:overflow-visible">
          {TESTIMONIALS.map((review) => (
            <article key={review.id} className="min-h-[260px] w-[82vw] max-w-[330px] flex-shrink-0 rounded-[24px] border border-border bg-[#F7FBFD] p-5 lg:w-auto lg:max-w-none">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue text-[1rem] font-bold text-white">
                  {review.initial}
                </div>
                <div className="text-[0.74rem] font-bold tracking-[0.08em] text-amber">5.0</div>
              </div>
              <p className="text-[0.86rem] font-light leading-[1.75] text-ink-soft">"{review.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-semibold text-ink">{review.name}</div>
                <div className="mt-1 text-[0.72rem] text-ink-faint">{review.loc}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
