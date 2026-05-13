import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data.jsx';
import { useCart } from '../context/CartContext';

function badgeClass(badge) {
  if (badge === 'new') return 'bg-green';
  if (badge === 'hot') return 'bg-coral';
  if (badge === 'seasonal') return 'bg-amber text-ink';
  return 'bg-blue';
}

function ProductCard({ product, rank }) {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_-2px_10px_rgba(18,18,18,0.04)] transition duration-300 hover:-translate-y-1 hover:border-blue/20 hover:shadow-[0_16px_36px_rgba(0,162,228,0.12)]">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[1.12/1] bg-white p-3">
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            className="h-full w-full rounded-[16px] object-cover"
          />
          {product.badge && (
            <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-white ${badgeClass(product.badge)}`}>
              {product.badge}
            </span>
          )}
          <span className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1.5 text-[0.7rem] font-semibold text-ink shadow-[0_10px_24px_rgba(0,0,0,0.14)] backdrop-blur">
            #{rank} Trending
          </span>
        </div>
      </Link>

      <button
        onClick={(event) => {
          event.preventDefault();
          setLiked((value) => !value);
        }}
        aria-label="Wishlist"
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/92 shadow-[0_8px_22px_rgba(18,18,18,0.12)] backdrop-blur transition active:scale-95"
      >
        <svg viewBox="0 0 24 24" className={`h-4 w-4 stroke-[1.9] [stroke-linecap:round] [stroke-linejoin:round] ${liked ? 'fill-[#FF4D6D] stroke-[#FF4D6D]' : 'fill-none stroke-ink-soft'}`}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
        </svg>
      </button>

      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-[0.64rem] font-bold uppercase tracking-[0.13em] text-blue">
              {product.cat.charAt(0).toUpperCase() + product.cat.slice(1)}
            </span>
            <span className="text-[0.7rem] font-medium text-amber">4.9 rated</span>
          </div>
          <h3 className="min-h-[42px] font-display text-[1.12rem] font-bold leading-[1.15] text-ink transition group-hover:text-blue">
            {product.name}
          </h3>
          <p className="mt-2 min-h-[42px] text-[0.76rem] font-light leading-[1.55] text-ink-soft line-clamp-2">
            {product.desc}
          </p>
        </Link>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-[1.55rem] font-bold leading-none text-ink">Rs {product.price}</div>
            {product.orig && <div className="mt-1 text-[0.68rem] text-ink-faint line-through">Rs {product.orig}</div>}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-blue px-4 text-[0.8rem] font-semibold text-white shadow-[0_12px_26px_rgba(0,162,228,0.24)] transition active:scale-95 active:bg-blue-dark"
          >
            Add
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.cat === activeCategory);

  return (
    <section id="menu" className="bg-[#F7FBFD] px-5 py-12 lg:px-[5vw] lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-blue-tint px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue">
              Order by craving
            </div>
            <h2 className="font-display text-[clamp(1.85rem,4.6vw,3.35rem)] font-bold leading-[1] tracking-[-0.01em] text-ink">
              Curated for fast,
              <span className="block text-blue">premium delivery.</span>
            </h2>
          </div>
          <p className="max-w-[380px] text-[0.9rem] font-light leading-[1.8] text-ink-soft lg:text-right">
            Choose a chilled cup, add it to cart, and Labaan prepares it fresh for a smooth doorstep handoff.
          </p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex-shrink-0 rounded-full border px-5 py-3 text-[0.82rem] font-semibold transition ${
                activeCategory === cat.key
                  ? 'border-blue bg-blue text-white shadow-[0_12px_26px_rgba(0,162,228,0.22)]'
                  : 'border-border bg-white text-ink-soft hover:border-blue/30 hover:text-blue'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
