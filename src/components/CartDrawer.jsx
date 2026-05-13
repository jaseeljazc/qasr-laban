import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, count, total, isOpen, closeCart, changeQty } = useCart();

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[200] bg-ink/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      />

      <aside
        className={`fixed bottom-0 left-0 right-0 z-[201] flex max-h-[88svh] flex-col rounded-t-[30px] bg-white shadow-[0_-24px_80px_rgba(18,18,18,0.2)] transition-transform duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)] lg:left-auto lg:right-6 lg:top-6 lg:h-[calc(100vh-48px)] lg:max-h-none lg:w-[420px] lg:rounded-[30px] ${
          isOpen ? 'translate-y-0 lg:translate-x-0' : 'translate-y-full lg:translate-x-[calc(100%+48px)] lg:translate-y-0'
        }`}
      >
        <div className="mx-auto mt-3 h-1 w-10 flex-shrink-0 rounded-full bg-border lg:hidden" />

        <div className="flex flex-shrink-0 items-center justify-between border-b border-border-soft px-5 py-5">
          <div>
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-blue">Labaan cart</div>
            <h3 className="mt-1 font-display text-[1.8rem] font-bold leading-none text-ink">
              Your Order {count > 0 && <span className="text-blue">({count})</span>}
            </h3>
          </div>
          <button onClick={closeCart} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7FBFD] text-ink-soft">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round]">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-tint text-blue">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <p className="text-[0.88rem] font-light text-ink-soft">Your cart is empty. Add a dessert to start your order.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 rounded-[20px] border border-border bg-[#F7FBFD] p-3">
                <div className="h-[68px] w-[68px] flex-shrink-0 overflow-hidden rounded-[16px] bg-blue-tint">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[0.88rem] font-semibold text-ink">{item.name}</div>
                  <div className="mt-1 font-display text-[1.2rem] font-bold leading-none text-blue">Rs {item.price}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <button onClick={() => changeQty(item.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-white text-ink-soft">
                      -
                    </button>
                    <span className="min-w-[18px] text-center text-[0.84rem] font-semibold text-ink">{item.qty}</span>
                    <button onClick={() => changeQty(item.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-blue text-white">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="flex-shrink-0 border-t border-border-soft px-5 pb-5 pt-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[0.86rem] text-ink-soft">Total</span>
              <strong className="font-display text-[1.8rem] font-bold leading-none text-blue">Rs {total}</strong>
            </div>
            <button className="w-full rounded-full bg-blue py-4 text-[0.92rem] font-semibold text-white shadow-[0_14px_30px_rgba(0,162,228,0.24)] transition active:bg-blue-dark">
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
