import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const links = [
  ['/#home', 'Home'],
  ['/#menu', 'Menu'],
  ['/#outlets', 'Locations'],
  ['/#franchise', 'Franchise'],
  ['/#contact', 'Contact'],
];

export default function Navbar({ menuOpen, toggleMenu }) {
  const { count, openCart } = useCart();

  return (
    <>
      <nav className="fixed left-3 right-3 top-3 z-[120] rounded-[24px] border border-white/70 bg-white/78 px-[10px] shadow-[0_18px_50px_rgba(18,18,18,0.12)] backdrop-blur-2xl lg:left-[5vw] lg:right-[5vw] lg:top-5 lg:px-[14px]">
        <div className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between gap-4 lg:h-[74px]">
          <Link to="/#home" className="flex h-14 w-28 items-center justify-start py-[6px] pl-[0px]">
            <img src="/images/qasr/qasr_logo.jpeg" alt="Qasr" className="h-14 w-auto rounded-[14px] border border-white/70 object-contain shadow-[0_8px_20px_rgba(18,18,18,0.08)]" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="rounded-full px-4 py-2 text-[0.82rem] font-medium text-ink-soft transition hover:bg-white/80 hover:text-ink hover:shadow-[0_8px_20px_rgba(18,18,18,0.06)]"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              aria-label="Cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/80 text-ink shadow-[0_8px_22px_rgba(18,18,18,0.08)] transition active:scale-95"
            >
              <CartIcon />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue px-1 text-[10px] font-bold text-white ring-2 ring-white">
                {count}
              </span>
            </button>

            <Link
              to="/#menu"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-blue px-5 text-[0.84rem] font-semibold text-white shadow-[0_14px_28px_rgba(0,162,228,0.24)] transition active:scale-95 active:bg-blue-dark lg:inline-flex"
            >
              Order Now <ArrowIcon />
            </Link>

            <button
              id="hamburger"
              onClick={toggleMenu}
              aria-label="Menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/80 bg-white/80 shadow-[0_8px_22px_rgba(18,18,18,0.08)] lg:hidden"
            >
              <span className={`block h-[1.5px] rounded-sm bg-ink transition-all duration-[280ms] ${menuOpen ? 'w-5 translate-y-[6.5px] rotate-45' : 'w-5'}`} />
              <span className={`block h-[1.5px] rounded-sm bg-ink transition-all duration-[280ms] ${menuOpen ? 'w-0 opacity-0' : 'w-[14px]'}`} />
              <span className={`block h-[1.5px] rounded-sm bg-ink transition-all duration-[280ms] ${menuOpen ? 'w-5 -translate-y-[6.5px] -rotate-45' : 'w-[17px]'}`} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-x-3 top-[88px] z-[110] rounded-[28px] border border-white/80 bg-white/88 p-3 shadow-[0_24px_70px_rgba(18,18,18,0.18)] backdrop-blur-2xl transition-all duration-[280ms] lg:hidden ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-3 opacity-0 pointer-events-none'}`}>
        {links.map(([to, label]) => (
          <Link
            key={to}
            to={to}
            onClick={toggleMenu}
            className="block rounded-[18px] px-5 py-4 font-display text-[1.3rem] font-semibold text-ink transition hover:bg-blue-tint hover:text-blue"
          >
            {label}
          </Link>
        ))}
        <Link
          to="/#menu"
          onClick={toggleMenu}
          className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue px-5 text-[0.9rem] font-semibold text-white"
        >
          Start Order <ArrowIcon />
        </Link>
      </div>
    </>
  );
}
