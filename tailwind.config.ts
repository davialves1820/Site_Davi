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
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        bg: '#080808',
        'bg-2': '#111111',
        accent: '#9B8EFF',
        text: '#F0EDE6',
        muted: '#8A8680',
      },
    },
  },
  plugins: [],
}

export default config