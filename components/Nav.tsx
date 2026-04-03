'use client'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experiência' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5
        transition-all duration-500
        ${scrolled
          ? 'bg-[rgba(2,11,24,0.85)] backdrop-blur-xl border-b border-[rgba(0,198,255,0.1)]'
          : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <a href="#" className="font-mono text-sm tracking-[0.15em] text-[--blue-neon] hover:opacity-70 transition-opacity">
        DAVI<span className="text-[rgba(0,198,255,0.4)]">.</span>
      </a>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => setActive(href)}
              className={`font-mono text-[0.72rem] tracking-[0.18em] uppercase relative transition-colors duration-300
                ${active === href ? 'text-[--blue-neon]' : 'text-[--blue-pale] hover:text-[--blue-neon]'}
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px
                after:bg-[--blue-neon] after:transition-all after:duration-300
                ${active === href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
              `}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://github.com/davialves1820"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.15em] uppercase
          text-[--blue-neon] border border-[rgba(0,198,255,0.35)] px-5 py-2
          hover:bg-[rgba(0,198,255,0.08)] hover:border-[--blue-neon] transition-all duration-300"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </a>
    </nav>
  )
}
