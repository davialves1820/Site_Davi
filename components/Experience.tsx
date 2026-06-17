'use client'
import { useEffect, useRef, useState } from 'react'
import { EXPERIENCES } from '@/lib/data'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="py-32" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-editorial">
        <div className="divider mb-16" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          <div className="lg:col-span-3">
            <p className="label" style={{ color: 'var(--text-muted)', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
              Experience
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2
              className="display text-[--text] mb-16"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              Onde construí<br />
              <span className="display-italic" style={{ color: 'var(--accent)' }}>experiência</span>
            </h2>

            <div>
              {EXPERIENCES.map((exp, i) => (
                <ExperienceRow key={i} exp={exp} index={i} visible={visible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceRow({ exp, index, visible }: { exp: any; index: number; visible: boolean }) {
  const [open, setOpen] = useState(index < 2)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.8s ease ${0.12 + index * 0.06}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.12 + index * 0.06}s`,
      }}
    >
      <button
        className="w-full text-left py-8 flex justify-between items-start gap-8 cursor-pointer group"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: 'none', border: 'none', padding: '2rem 0' }}
      >
        <div className="flex gap-8 min-w-0">
          {/* Period */}
          <div className="flex-shrink-0 w-28 hidden md:block">
            <span className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
              {exp.period.split(' — ')[0]}
            </span>
            {exp.current && (
              <div className="flex items-center gap-1.5 mt-1">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--accent)', animation: 'pulse-accent 2s ease infinite' }}
                />
                <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.6rem', letterSpacing: '0.15em' }}>
                  ATUAL
                </span>
              </div>
            )}
          </div>

          {/* Role + company */}
          <div className="min-w-0">
            <h3
              className="display mb-1 transition-colors duration-300"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                color: hovered ? 'var(--accent)' : 'var(--text)',
              }}
            >
              {exp.role}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              {exp.company}
            </p>
          </div>
        </div>

        {/* Toggle icon */}
        <span
          className="flex-shrink-0 mono transition-transform duration-300 mt-1"
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.2rem',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      {/* Expandable content */}
      <div
        style={{
          maxHeight: open ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div style={{ paddingBottom: '2rem', paddingLeft: '0' }}>
          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {exp.stack.map((s: string) => (
              <span
                key={s}
                className="mono px-3 py-1"
                style={{
                  border: '1px solid var(--border-md)',
                  color: 'var(--text-muted)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Bullets */}
          <ul className="space-y-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {exp.bullets.map((b: string, j: number) => (
              <li
                key={j}
                className="flex gap-4"
                style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}
              >
                <span style={{ color: 'var(--accent)', flexShrink: 0, fontFamily: 'JetBrains Mono, monospace' }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}