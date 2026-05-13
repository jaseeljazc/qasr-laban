import React from 'react';

// Product data
export const PRODUCTS = [
  {
    id: 1, name: 'Qashtuta Banana & Mango', cat: 'laban',
    desc: 'Silky qashtuta base topped with fresh banana slices and luscious mango pulp.',
    price: 189, orig: 229, badge: 'hot',
    img: '/images/qasr/salankatia.jpeg',
    rating: 4.9, reviews: 312,
  },
  {
    id: 2, name: 'Qashtuta Lotus Biscoff', cat: 'cream',
    desc: 'The legendary qashtuta meets the crunch of authentic Lotus Biscoff.',
    price: 199, orig: 249, badge: 'bestseller',
    img: '/images/qasr/biscoff_nutella_salankatia.jpeg',
    rating: 4.8, reviews: 218,
  },
  {
    id: 3, name: 'Qashtuta Nutella Hazelnut', cat: 'kunafa',
    desc: "A chocolate lover's dream: Qashtuta with rich Nutella and toasted hazelnuts.",
    price: 219, orig: null, badge: 'new',
    img: '/images/qasr/nuttella_kaushari.jpeg',
    rating: 4.9, reviews: 405,
  },
  {
    id: 4, name: 'Salankatia Lotus', cat: 'laban',
    desc: 'Traditional creamy Salankatia layered with a golden Lotus crumble.',
    price: 169, orig: 199, badge: 'seasonal',
    img: '/images/qasr/biscoff_nutella_salankatia.jpeg',
    rating: 4.7, reviews: 167,
  },
  {
    id: 5, name: 'Salankatia Nutella & Lotus', cat: 'kunafa',
    desc: 'Double the indulgence with Nutella and Lotus on a smooth Salankatia base.',
    price: 229, orig: 269, badge: 'hot',
    img: '/images/qasr/biscoff_nutella_salankatia.jpeg',
    rating: 5.0, reviews: 521,
  },
  {
    id: 6, name: 'Salankatia Nutella', cat: 'cream',
    desc: 'Velvety Salankatia topped with a generous layer of pure Nutella goodness.',
    price: 179, orig: null, badge: 'new',
    img: '/images/qasr/nuttella_kaushari.jpeg',
    rating: 4.8, reviews: 143,
  },
  {
    id: 7, name: 'Salankatia Pistachio', cat: 'laban',
    desc: 'Premium Salankatia infused with the rich taste of hand-picked pistachios.',
    price: 199, orig: 239, badge: 'bestseller',
    img: '/images/qasr/salankatia.jpeg',
    rating: 4.9, reviews: 156,
  },
  {
    id: 8, name: 'Salankatia Mango', cat: 'seasonal',
    desc: 'Golden mango layers on a cool Salankatia base for a tropical twist.',
    price: 189, orig: 219, badge: 'seasonal',
    img: '/images/qasr/kinder_loua.jpeg',
    rating: 4.8, reviews: 112,
  },
];

export const CATEGORIES = [
  { key: 'all',      label: 'All' },
  { key: 'laban',    label: 'Laban Classics' },
  { key: 'kunafa',   label: 'Kunafa Series' },
  { key: 'cream',    label: 'Cream Cups' },
  { key: 'ice',      label: 'Ice Cream' },
  { key: 'seasonal', label: 'Seasonal' },
];

export const INGREDIENTS = [
  { 
    name: 'Rice Pudding', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15h18" />
        <path d="M3 15a9 9 0 0 0 18 0" />
        <path d="M8 10a2 2 0 1 1 4 0v5" />
        <path d="M12 10a2 2 0 1 1 4 0v5" />
      </svg>
    ) 
  },
  { 
    name: 'Thick Custard', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ) 
  },
  { 
    name: 'Kunafa Strands', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
        <path d="M12 3v18" />
      </svg>
    ) 
  },
  { 
    name: 'Whipped Cream', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 0 1 4-4Z" />
        <path d="M12 12s4 3 4 6a4 4 0 0 1-8 0c0-3 4-6 4-6Z" />
      </svg>
    ) 
  },
  { 
    name: 'Saffron', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 12 4-4" />
        <path d="m12 12-4-4" />
        <path d="m12 12 4 4" />
        <path d="m12 12-4 4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ) 
  },
  { 
    name: 'Pistachio', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="7" ry="9" />
        <path d="M12 3v18" />
      </svg>
    ) 
  },
  { 
    name: 'Belgian Chocolate', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ) 
  },
  { 
    name: 'Fresh Mango', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Z" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
      </svg>
    ) 
  },
];

export const TESTIMONIALS = [
  { id: 1, initial: 'A', name: 'Anna K.', loc: 'Ernakulam',
    text: "The Laban Spot offers the best desserts I've ever tasted! The kunafa layer with the creamy base is just absolutely divine, nothing like it in Kerala." },
  { id: 2, initial: 'J', name: 'John M.', loc: 'Thiruvananthapuram',
    text: 'Every visit is a delightful experience. The mango laban variation is a must-try, refreshing and rich at the same time. I visit every weekend now!' },
  { id: 3, initial: 'P', name: 'Priya R.', loc: 'Kochi',
    text: "I visited purely out of curiosity and now I'm completely addicted. The pistachio kunafa cup is extraordinary. Brought my whole family back the next day." },
  { id: 4, initial: 'R', name: 'Rahul S.', loc: 'Kozhikode',
    text: "The Chocolate Ashtouta is viral for a reason. Rich, crispy, melts right. I've been recommending it to everyone I know in Calicut." },
];

export const MARQUEE_ITEMS = [
  'Qashtuta Mango', 'Salankatia Lotus', 'Nutella Hazelnut', 'Pistachio Dream',
  'Salankatia Nutella', 'Qashtuta Lotus', 'Salankatia Mango', 'Egyptian Classics', 'Kerala Delights',
];
