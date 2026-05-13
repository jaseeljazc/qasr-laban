/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:        '#00a2e4',
        'blue-mid':  '#008ecc',
        'blue-dark': '#007bb1',
        'blue-tint': '#f0f9fe',
        'blue-tint2':'#e1f3fd',
        ink:         '#121212',
        'ink-mid':   '#3D3D3D',
        'ink-soft':  '#7A7A7A',
        'ink-faint': '#BABABA',
        cream:       '#FAFAF8',
        border:      '#EBEBEB',
        'border-soft':'#F3F3F3',
        green:       '#1CB87A',
        amber:       '#FFB400',
        coral:       '#FF5E3A',
      },
      fontFamily: {
        display: ['Italiana', 'La Dolce Vita', 'Georgia', 'serif'],
        body:    ['Raleway', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        's':  '10px',
        'm':  '18px',
        'l':  '28px',
        'xl': '40px',
      },
      transitionTimingFunction: {
        'ease-custom': 'cubic-bezier(.4,0,.2,1)',
      },
      keyframes: {
        heroScale: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.35', transform: 'scale(0.7)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'hero-scale': 'heroScale 12s ease-in-out infinite alternate',
        'fade-up':    'fadeUp 0.8s 0.1s both',
        'fade-up-d2': 'fadeUp 0.7s 0.2s both',
        'fade-up-d4': 'fadeUp 0.7s 0.4s both',
        blink:        'blink 1.8s ease-in-out infinite',
        marquee:      'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
