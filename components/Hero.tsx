'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PERSONAL } from '@/lib/data'
import daviPortrait from '@/public/Davi.jpeg'

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

      {/* Portrait — ocupa a coluna direita, altura equivalente ao bloco do nome */}
      <div
        className="absolute overflow-hidden hidden sm:block"
        style={{
          top: '50%',
          left: '73vw',
          right: 'clamp(1.5rem, 5vw, 5rem)',
          aspectRatio: '4 / 5',
          borderRadius: '14px',
          zIndex: 2,
          opacity: visible ? fadeOut : 0,
          clipPath: visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
          transform: visible ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.95)',
          transition: 'clip-path 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s, opacity 0.3s ease',
        }}
      >
        <Image
          src={daviPortrait}
          alt="Retrato de Davi Alves, desenvolvedor full stack"
          placeholder="blur"
          sizes="27vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Portrait mobile — em fluxo normal, logo abaixo do nome e acima do meta row */}
      <div className="container-editorial relative flex justify-end sm:hidden mb-6" style={{ zIndex: 2 }}>
        <div
          className="overflow-hidden"
          style={{
            width: 'clamp(96px, 28vw, 150px)',
            aspectRatio: '4 / 5',
            borderRadius: '12px',
            opacity: visible ? fadeOut : 0,
            clipPath: visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
            transform: visible ? 'scale(1)' : 'scale(0.95)',
            transition: 'clip-path 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s, opacity 0.3s ease',
          }}
        >
          <Image
            src={daviPortrait}
            alt="Retrato de Davi Alves, desenvolvedor full stack"
            placeholder="blur"
            sizes="150px"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Bottom meta row */}
      <div
        className="container-editorial relative flex items-end"
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
