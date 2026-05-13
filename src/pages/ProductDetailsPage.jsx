import { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data.jsx';
import { useCart } from '../context/CartContext';

function badgeClass(badge) {
  if (badge === 'new') return 'bg-green';
  if (badge === 'hot') return 'bg-coral';
  if (badge === 'seasonal') return 'bg-amber text-ink';
  return 'bg-blue';
}

const serviceNotes = [
  ['15-25 min', 'Local delivery'],
  ['Cold packed', 'Sealed cup'],
  ['Fresh daily', 'Small batch'],
];

const detailNotes = [
  ['Best served cold', 'Keep chilled and open just before eating.'],
  ['Layered texture', 'Creamy base, rich topping, and a clean finish.'],
  ['Delivery ready', 'Packed to protect the dessert on the ride.'],
];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = PRODUCTS.find((item) => item.id === Number(id));
  const related = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((item) => item.id !== product.id && item.cat === product.cat).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-[70svh] flex-col items-center justify-center px-5 pt-[90px] text-center">
        <h2 className="mb-2 font-display text-[1.8rem] font-bold text-ink">Product Not Found</h2>
        <p className="mb-6 text-ink-soft">The dessert you are looking for does not exist.</p>
        <Link to="/" className="rounded-full bg-blue px-6 py-3 font-semibold text-white">
          Back to Menu
        </Link>
      </div>
    );
  }

  const addSelectedQty = () => {
    Array.from({ length: qty }).forEach(() => addToCart(product));
  };

  return (
    <section className="min-h-screen bg-[#F7FBFD] pb-28 pt-[76px] lg:pb-20 lg:pt-[96px]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[5vw]">
        <div className="mb-5 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-white px-4 text-[0.82rem] font-semibold text-ink-soft shadow-[0_8px_22px_rgba(18,18,18,0.05)] transition hover:border-blue/30 hover:text-blue"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back
          </button>
          <Link to="/#menu" className="hidden h-11 items-center rounded-full border border-border bg-white px-4 text-[0.82rem] font-semibold text-ink-soft transition hover:text-blue sm:inline-flex">
            Full menu
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(380px,0.82fr)] lg:items-start">
          <div className="lg:sticky lg:top-[104px]">
            <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(0,91,128,0.13)]">
              <div className="relative overflow-hidden rounded-[24px] bg-blue-tint">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-[320px] w-full object-cover sm:h-[430px] lg:h-[560px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />

                {product.badge && (
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white shadow-lg ${badgeClass(product.badge)}`}>
                    {product.badge}
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/25 bg-white/92 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[0.66rem] font-bold uppercase tracking-[0.13em] text-blue">Ready for delivery</div>
                      <div className="mt-1 text-[0.92rem] font-semibold text-ink">Packed fresh from the nearest outlet.</div>
                    </div>
                    <div className="rounded-full bg-blue px-3 py-2 text-[0.78rem] font-bold text-white">{product.rating}</div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {serviceNotes.map(([value, label]) => (
                      <div key={label} className="rounded-[16px] bg-[#F7FBFD] px-2 py-3 text-center">
                        <div className="text-[0.82rem] font-bold text-ink">{value}</div>
                        <div className="mt-1 text-[0.56rem] uppercase tracking-[0.1em] text-ink-faint">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[30px] border border-border bg-white p-6 shadow-[0_20px_60px_rgba(18,18,18,0.07)] lg:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-tint px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-blue">
                  {product.cat}
                </span>
                <span className="rounded-full bg-[#F7FBFD] px-3 py-1.5 text-[0.72rem] font-semibold text-ink-soft">
                  {product.reviews} reviews
                </span>
              </div>

              <h1 className="font-display text-[clamp(2rem,4.5vw,3.45rem)] font-bold leading-[1] tracking-[-0.01em] text-ink">
                {product.name}
              </h1>

              <p className="mt-4 text-[0.95rem] font-light leading-[1.8] text-ink-soft">
                {product.desc} Finished fresh, sealed cleanly, and delivered chilled for the best texture.
              </p>

              <div className="mt-6 flex items-end justify-between gap-4 border-y border-border-soft py-5">
                <div>
                  <div className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-ink-faint">Price</div>
                  <div className="mt-1 flex items-end gap-3">
                    <span className="font-display text-[2.45rem] font-bold leading-none text-blue">Rs {product.price}</span>
                    {product.orig && <span className="mb-1 text-[0.92rem] text-ink-faint line-through">Rs {product.orig}</span>}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-ink-faint">Rating</div>
                  <div className="mt-1 text-[1.05rem] font-bold text-ink">{product.rating} / 5</div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {detailNotes.map(([title, desc]) => (
                  <div key={title} className="rounded-[18px] border border-border bg-[#F7FBFD] p-4">
                    <div className="text-[0.86rem] font-bold text-ink">{title}</div>
                    <div className="mt-1 text-[0.72rem] font-light leading-[1.5] text-ink-soft">{desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex h-14 w-full items-center justify-between rounded-full border border-border bg-[#F7FBFD] px-2 sm:w-[150px]">
                  <button
                    onClick={() => setQty((value) => Math.max(1, value - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[1.1rem] font-semibold text-ink-soft"
                  >
                    -
                  </button>
                  <span className="text-[0.95rem] font-bold text-ink">{qty}</span>
                  <button
                    onClick={() => setQty((value) => Math.min(9, value + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-[1.1rem] font-semibold text-white"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={addSelectedQty}
                  className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-full bg-blue px-8 text-[0.96rem] font-bold text-white shadow-[0_16px_34px_rgba(0,162,228,0.26)] transition active:scale-[0.98] active:bg-blue-dark"
                >
                  Add to Cart - Rs {product.price * qty}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-border bg-white p-6 shadow-[0_20px_60px_rgba(18,18,18,0.05)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[0.66rem] font-bold uppercase tracking-[0.13em] text-blue">You may also like</div>
                  <h2 className="mt-1 font-display text-[1.25rem] font-bold text-ink">Similar cravings</h2>
                </div>
              </div>

              <div className="grid gap-3">
                {(related.length ? related : PRODUCTS.filter((item) => item.id !== product.id).slice(0, 3)).map((item) => (
                  <Link key={item.id} to={`/product/${item.id}`} className="grid grid-cols-[72px_1fr_auto] items-center gap-3 rounded-[18px] border border-border bg-[#F7FBFD] p-2 transition hover:border-blue/30 hover:bg-white">
                    <img src={item.img} alt={item.name} className="h-[72px] w-[72px] rounded-[14px] object-cover" />
                    <div className="min-w-0">
                      <div className="truncate text-[0.86rem] font-bold text-ink">{item.name}</div>
                      <div className="mt-1 text-[0.72rem] font-light text-ink-soft">{item.rating} rated</div>
                    </div>
                    <div className="pr-2 text-[0.82rem] font-bold text-blue">Rs {item.price}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-[90] border-t border-border bg-white/94 px-4 py-3 backdrop-blur-xl lg:hidden">
        <button
          onClick={addSelectedQty}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue px-5 text-[0.92rem] font-bold text-white shadow-[0_12px_28px_rgba(0,162,228,0.24)]"
        >
          Add {qty} to Cart - Rs {product.price * qty}
        </button>
      </div>
    </section>
  );
}
