'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { PERSONAL } from '@/lib/data'
import RevealLine from '@/components/RevealLine'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const photoWrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [parallax, setParallax] = useState(0)
  const [photoError, setPhotoError] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = photoWrapRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        const clamped = Math.min(1, Math.max(0, progress))
        setParallax((clamped - 0.5) * 40)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section id="about" className="py-32" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-editorial">
        <div className="divider mb-16" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          {/* Label col */}
          <div className="lg:col-span-3">
            <p
              className="label"
              style={{
                color: 'var(--text-muted)',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.8s ease',
              }}
            >
              About
            </p>
          </div>

          {/* Content col */}
          <div className="lg:col-span-9">

            {/* Big statement */}
            <h2
              className="display text-[--text] mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              <RevealLine>{PERSONAL.aboutHeadline[0]}</RevealLine>
              <RevealLine delay={0.12}>
                <span className="display-italic" style={{ color: 'var(--accent)' }}>
                  {PERSONAL.aboutHeadline[1]}
                </span>
              </RevealLine>
            </h2>

            {/* Bio paragraphs */}
            <div
              className="space-y-5 mb-16"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.25s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s',
              }}
            >
              {PERSONAL.bio.map((p, i) => (
                <p key={i} style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '1rem' }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Contextual photo — ancora o parágrafo pessoal */}
            <div
              ref={photoWrapRef}
              className="relative overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '560px',
                aspectRatio: '3 / 2',
                borderRadius: '8px',
                background: 'var(--bg-2)',
                opacity: visible ? 1 : 0,
                transition: 'opacity 1s ease 0.4s',
              }}
            >
              {photoError ? (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ border: '1px dashed var(--border-md)' }}
                  role="img"
                  aria-label="Foto contextual de Davi Alves ainda não adicionada"
                >
                  <span className="mono text-center px-6" style={{ color: 'var(--text-dim)', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
                    [MÍDIA — foto de Davi trabalhando / palestrando / com o time]
                  </span>
                </div>
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    inset: '-5% -5%',
                    transform: `translateY(${parallax}px)`,
                  }}
                >
                  <Image
                    src={PERSONAL.contextPhoto}
                    alt="Davi Alves palestrando em evento da comunidade de tecnologia da UFPB"
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    style={{ objectFit: 'cover', objectPosition: '75% 45%' }}
                    onError={() => setPhotoError(true)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
