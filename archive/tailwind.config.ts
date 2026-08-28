import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: '#F7F4EE',
          muted: '#EFECE4',
          dark: '#E2DDD0',
          border: 'rgba(104, 98, 89, 0.15)',
        },
        charcoal: {
          DEFAULT: '#1D1B18',
          muted: '#686259',
          light: '#36322D',
          border: 'rgba(29, 27, 24, 0.12)',
        },
        terracotta: {
          DEFAULT: '#B85B35',
          dark: '#944423',
          light: '#D97E59',
          muted: 'rgba(184, 91, 53, 0.12)',
        },
        olive: {
          DEFAULT: '#4E5340',
          muted: '#6E745C',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1EBE5D',
          glow: 'rgba(37, 211, 102, 0.28)',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
      },
      animation: {
        'ken-burns': 'kenBurns 24s ease-in-out infinite alternate',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1.0) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1.5%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
