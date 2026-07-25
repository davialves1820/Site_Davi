'use client'
import { useEffect, useState } from 'react'
import Magnetic from '@/components/Magnetic'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-700"
        style={{
          padding: scrolled ? '1.25rem clamp(1.5rem,5vw,5rem)' : '2rem clamp(1.5rem,5vw,5rem)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled ? 'rgba(247,244,239,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
        }}
      >
        <a href="#" className="display-italic no-underline" style={{ fontSize: '1.25rem', color: 'var(--text)' }}>
          DAVI ALVES
        </a>

        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="label no-underline transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Magnetic strength={0.4} className="hidden md:block">
          <a
            href="https://github.com/davialves1820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 label no-underline px-5 py-2.5 transition-all duration-300"
            style={{ color: 'var(--text-muted)', border: '1px solid var(--border-md)' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = 'var(--text)'
              el.style.borderColor = 'rgba(13,13,13,0.28)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = 'var(--text-muted)'
              el.style.borderColor = 'var(--border-md)'
            }}
          >
            GitHub ↗
          </a>
        </Magnetic>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none' }}
        >
          <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--text)', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
        </button>
      </nav>

      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center md:hidden transition-all duration-500"
        style={{
          background: 'rgba(247,244,239,0.97)',
          backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <ul className="flex flex-col gap-8 list-none m-0 p-0 text-center">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="display-italic no-underline"
                style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', color: 'var(--text)' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}