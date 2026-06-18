'use client'
import { useEffect, useRef, useState } from 'react'
import { PERSONAL, CURRENT_VIBE, STATS } from '@/lib/data'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
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
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              Desenvolvedor Full Stack,<br />
              construindo sistemas que{' '}
              <span className="display-italic" style={{ color: 'var(--accent)' }}>
                importam
              </span>{' '}
              de verdade.
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
          </div>
        </div>
      </div>
    </section>
  )
}
