'use client'
import { useEffect, useRef, useState } from 'react'
import { EDUCATION, AWARDS } from '@/lib/data'
import RevealLine from '@/components/RevealLine'

export default function Education() {
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
    <section id="education" className="py-32" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-editorial">
        <div className="divider mb-16" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          <div className="lg:col-span-3">
            <p className="label" style={{ color: 'var(--text-muted)', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
              Education
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2
              className="display text-[--text] mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              <RevealLine>Formação &</RevealLine>
              <RevealLine delay={0.12}>
                <span className="display-italic" style={{ color: 'var(--accent)' }}>conquistas</span>
              </RevealLine>
            </h2>

            {/* Education item */}
            <div
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
              }}
            >
              <div className="flex justify-between items-start gap-8 flex-wrap">
                <div>
                  <h3 className="display text-[--text] mb-1" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>
                    {EDUCATION.degree}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{EDUCATION.school}</p>
                </div>
                <div className="text-right">
                  <span className="label">{EDUCATION.period}</span>
                  <p className="label mt-1" style={{ color: 'var(--text-dim)' }}>{EDUCATION.city}</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="label">Progresso do curso</span>
                  <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>~40%</span>
                </div>
                <div style={{ height: '2px', background: 'var(--border)' }}>
                  <div
                    style={{
                      height: '100%',
                      width: visible ? '40%' : '0%',
                      background: 'var(--accent)',
                      transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Awards */}
            {AWARDS.map((award, i) => (
              <div
                key={award.title}
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '2rem',
                  paddingBottom: '2rem',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.8s ease ${0.3 + i * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.1}s`,
                }}
              >
                <div className="flex gap-6 items-start">
                  <span style={{ fontSize: '2rem' }}>{award.medal}</span>
                  <div>
                    <h3 className="display text-[--text] mb-1" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                      {award.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{award.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}