'use client'
import { useEffect, useState } from 'react'
import { PERSONAL } from '@/lib/data'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  const fadeOut = Math.max(0, 1 - scrollY / 380)
  const parallaxUp = -scrollY * 0.22
  const parallaxDown = scrollY * 0.22

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ paddingBottom: 'clamp(3rem, 8vh, 6rem)', zIndex: 1 }}
    >
      {/* Giant split name */}
      <div
        className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none"
        style={{ opacity: fadeOut }}
        aria-hidden
      >
        <div
          className="display-italic overflow-hidden"
          style={{
            fontSize: 'clamp(5.5rem, 19vw, 21rem)',
            lineHeight: 0.86,
            paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
            color: 'var(--text)',
          }}
        >
          {/* parallax layer — instant, scroll-driven, no transition */}
          <div style={{ transform: `translateY(${parallaxUp}px)` }}>
            {/* reveal layer — transitions once on mount */}
            <span
              style={{
                display: 'inline-block',
                transform: visible ? 'translateY(0)' : 'translateY(100px)',
                opacity: visible ? 1 : 0,
                transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.05s, opacity 1s ease 0.05s',
              }}
            >
              Davi
            </span>
          </div>
        </div>

        <div
          className="display-italic overflow-hidden"
          style={{
            fontSize: 'clamp(5.5rem, 19vw, 21rem)',
            lineHeight: 0.86,
            paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
            color: 'var(--accent)',
          }}
        >
          <div style={{ transform: `translateY(${parallaxDown}px)` }}>
            <span
              style={{
                display: 'inline-block',
                transform: visible ? 'translateY(0)' : 'translateY(100px)',
                opacity: visible ? 1 : 0,
                transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.22s, opacity 1s ease 0.22s',
              }}
            >
              Alves
            </span>
          </div>
        </div>
      </div>

      {/* Bottom meta row */}
      <div
        className="container-editorial relative flex justify-between items-end"
        style={{
          zIndex: 2,
          opacity: visible ? 1 : 0,
          transition: 'opacity 1s ease 0.7s',
        }}
      >
        <div>
          <p className="label mb-2">{PERSONAL.role}</p>
          <p className="label" style={{ color: 'var(--text-dim)' }}>João Pessoa, Paraíba · UFPB</p>
        </div>
      </div>

      <div
        className="container-editorial mt-8"
        style={{ zIndex: 2, opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.9s' }}
      >
        <div className="divider" />
      </div>
    </section>
  )
}
