import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        blue: {
          deep:   '#020b18',
          dark:   '#041428',
          mid:    '#0a2540',
          accent: '#0062ff',
          bright: '#2e8fff',
          neon:   '#00c6ff',
          glow:   '#38bdf8',
          pale:   '#7dd3fc',
        },
      },
      animation: {
        'spin-slow':    'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'blink':        'blink 1s step-end infinite',
        'orbit':        'orbit 6s linear infinite',
        'scan-line':    'scanLine 8s linear infinite',
        'glitch-1':     'glitch1 4s infinite',
        'glitch-2':     'glitch2 4s infinite',
        'reveal-up':    'revealUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'slide-right':  'slideRight 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'noise':        'noise 0.2s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(200px)' },
          to:   { transform: 'rotate(360deg) translateX(200px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch1: {
          '0%,100%': { transform: 'translate(0)', clipPath: 'polygon(0 0,100% 0,100% 35%,0 35%)' },
          '20%':     { transform: 'translate(-3px,2px)', clipPath: 'polygon(0 15%,100% 15%,100% 45%,0 45%)' },
          '40%':     { transform: 'translate(3px,-2px)', clipPath: 'polygon(0 0,100% 0,100% 35%,0 35%)' },
          '60%':     { transform: 'translate(0)', clipPath: 'polygon(0 0,100% 0,100% 35%,0 35%)' },
        },
        glitch2: {
          '0%,100%': { transform: 'translate(0)', clipPath: 'polygon(0 65%,100% 65%,100% 100%,0 100%)' },
          '20%':     { transform: 'translate(3px,-2px)', clipPath: 'polygon(0 55%,100% 55%,100% 85%,0 85%)' },
          '40%':     { transform: 'translate(-3px,2px)', clipPath: 'polygon(0 65%,100% 65%,100% 100%,0 100%)' },
          '60%':     { transform: 'translate(0)', clipPath: 'polygon(0 65%,100% 65%,100% 100%,0 100%)' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        noise: {
          '0%':   { backgroundPosition: '0 0' },
          '10%':  { backgroundPosition: '-5% -10%' },
          '20%':  { backgroundPosition: '-15% 5%' },
          '30%':  { backgroundPosition: '7% -25%' },
          '40%':  { backgroundPosition: '20% 25%' },
          '50%':  { backgroundPosition: '-25% 10%' },
          '60%':  { backgroundPosition: '15% 5%' },
          '70%':  { backgroundPosition: '0 15%' },
          '80%':  { backgroundPosition: '25% 35%' },
          '90%':  { backgroundPosition: '-10% 10%' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
