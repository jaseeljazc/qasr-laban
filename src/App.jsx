import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import CartDrawer    from './components/CartDrawer';
import BottomBar     from './components/BottomBar';
import Toast         from './components/Toast';

import HomePage      from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </main>
      <Footer />
      <BottomBar />
      <CartDrawer />
      <Toast />
    </CartProvider>
  );
}
