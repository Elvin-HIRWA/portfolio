/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5B5BD6',
          50: '#EDEDFB',
          100: '#D5D5F7',
          200: '#ABABEF',
          300: '#8080E7',
          400: '#5B5BD6',
          500: '#3D3DC4',
          600: '#2E2EA3',
          700: '#222282',
          800: '#161661',
          900: '#0A0A40',
        },
        accent: {
          DEFAULT: '#22C55E',
          50: '#DCFCE7',
          100: '#BBF7D0',
          200: '#86EFAC',
          300: '#4ADE80',
          400: '#22C55E',
          500: '#16A34A',
          600: '#15803D',
        },
        bg: '#09090B',
        card: '#18181B',
        surface: '#1C1C1F',
        border: '#27272A',
        text: '#FAFAFA',
        muted: '#A1A1AA',
        subtle: '#71717A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(91,91,214,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(91,91,214,0.03) 1px, transparent 1px)`,
        'brand-gradient': 'linear-gradient(135deg, #5B5BD6 0%, #7C3AED 50%, #5B5BD6 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 60% 50%, rgba(91,91,214,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(34,197,94,0.08) 0%, transparent 50%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'brand': '0 0 30px rgba(91, 91, 214, 0.3)',
        'brand-lg': '0 0 60px rgba(91, 91, 214, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(91, 91, 214, 0.2)',
        'glow': '0 0 20px rgba(91, 91, 214, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
