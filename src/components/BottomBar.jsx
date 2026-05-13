import { useCart } from '../context/CartContext';

export default function BottomBar() {
  const { openCart } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex items-center gap-2 border-t border-border bg-white/92 px-4 py-3 backdrop-blur-xl lg:hidden">
      <a
        href="#menu"
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-blue px-5 text-[0.9rem] font-semibold text-white shadow-[0_12px_28px_rgba(0,162,228,0.24)]"
      >
        Order Now
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
      <button
        onClick={openCart}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 text-[0.9rem] font-semibold text-ink"
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        Cart
      </button>
    </div>
  );
}
