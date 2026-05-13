import { createContext, useContext, useState, useCallback, useRef } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: '' });
  const toastTimer = useRef(null);

  const showToast = useCallback((msg) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ show: true, msg });
    toastTimer.current = setTimeout(() => setToast({ show: false, msg: '' }), 2500);
  }, []);

  const addToCart = useCallback((product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: prev[product.id]
        ? { ...prev[product.id], qty: prev[product.id].qty + 1 }
        : { ...product, qty: 1 },
    }));
    showToast(`${product.name} added!`);
  }, [showToast]);

  const changeQty = useCallback((id, delta) => {
    setCart(prev => {
      const next = { ...prev };
      if (!next[id]) return prev;
      next[id] = { ...next[id], qty: next[id].qty + delta };
      if (next[id].qty <= 0) delete next[id];
      return next;
    });
  }, []);

  const openCart  = () => { setIsOpen(true);  document.body.style.overflow = 'hidden'; };
  const closeCart = () => { setIsOpen(false); document.body.style.overflow = ''; };

  const items = Object.values(cart);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, items, count, total, addToCart, changeQty, isOpen, openCart, closeCart, toast }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
