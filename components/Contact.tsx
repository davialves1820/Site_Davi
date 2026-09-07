'use client'
import { useEffect, useRef, useState } from 'react'
import { PERSONAL } from '@/lib/data'
import RevealLine from '@/components/RevealLine'
import Magnetic from '@/components/Magnetic'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-32" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-editorial">
        <div className="divider mb-16" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          <div className="lg:col-span-3">
            <p className="label" style={{ color: 'var(--text-muted)', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
              Contact
            </p>
          </div>

          <div className="lg:col-span-9">
            {/* Big CTA headline */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: 'opacity 1s ease 0.1s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              <h2
                className="display-italic mb-4"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  lineHeight: 0.9,
                  color: 'var(--text)',
                }}
              >
                <RevealLine>Vamos</RevealLine>
                <RevealLine delay={0.12}>
                  <span style={{ color: 'var(--accent)' }}>conversar?</span>
                </RevealLine>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.7, marginTop: '1.5rem' }}>
                Aberto a oportunidades, projetos desafiadores e boas ideias.
                Manda uma mensagem — respondo rápido.
              </p>
            </div>

            {/* Email button — the star */}
            <div
              className="mt-16 mb-16"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s',
              }}
            >
              <Magnetic strength={0.08} style={{ display: 'block' }}>
                <button
                  onClick={copyEmail}
                  className="group w-full text-left transition-all duration-500"
                  style={{
                    background: 'none',
                    border: 'none',
                    borderTop: '1px solid var(--border-md)',
                    borderBottom: '1px solid var(--border-md)',
                    padding: '2.5rem 0',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-md)'
                  }}
                >
                  <div className="flex justify-between items-center gap-4">
                    <span
                      className="display-italic"
                      style={{
                        fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
                        color: 'var(--text)',
                        wordBreak: 'break-all',
                      }}
                    >
                      {PERSONAL.email}
                    </span>
                    <span
                      className="label flex-shrink-0 transition-all duration-300"
                      style={{ color: copied ? 'var(--accent)' : 'var(--text-muted)' }}
                    >
                      {copied ? '✓ copiado' : 'copiar'}
                    </span>
                  </div>
                </button>
              </Magnetic>
            </div>

            {/* Links row */}
            <div
              className="flex flex-wrap gap-8"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.9s ease 0.5s',
              }}
            >
              {[
                { label: 'GitHub', url: PERSONAL.github, external: true },
                { label: 'LinkedIn', url: PERSONAL.linkedin, external: true },
                { label: 'Baixar CV', url: PERSONAL.resume, external: false },
              ].map(({ label, url, external }) => (
                <a
                  key={label}
                  href={url}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  download={external ? undefined : true}
                  className="label no-underline transition-colors duration-300"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
                >
                  {label} {external ? '↗' : '↓'}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}