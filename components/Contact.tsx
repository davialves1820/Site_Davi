'use client'
import { useEffect, useRef, useState } from 'react'
import { PERSONAL } from '@/lib/data'

const LINKS = [
  {
    label: 'GitHub',
    url: PERSONAL.github,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: PERSONAL.linkedin,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: '(83) 99444-0061',
    url: `tel:${PERSONAL.phone}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-10 py-36 text-center overflow-hidden"
    >
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-extrabold text-[20vw] leading-none tracking-tighter opacity-[0.015] text-white"
        >
          CONTACT
        </span>
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,98,255,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="reveal">
          <p className="font-mono text-[0.7rem] tracking-[0.35em] uppercase text-[--blue-neon] mb-3">
            // 06
          </p>
          <h2
            className="font-extrabold leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
          >
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="font-mono text-[0.88rem] text-[--blue-pale] max-w-md mx-auto mb-10 leading-relaxed">
            Aberto a oportunidades, projetos desafiadores e boas ideias.<br/>
            Manda uma mensagem — respondo rápido!
          </p>
        </div>

        {/* Email button */}
        <div className="reveal mb-12">
          <button
            onClick={copyEmail}
            className="group relative inline-block font-extrabold tracking-tight
              transition-all duration-300 hover:opacity-80"
            style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)' }}
          >
            <span className="shimmer-text">{PERSONAL.email}</span>
            <span
              className={`absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem]
                tracking-[0.2em] uppercase text-[--blue-neon] transition-all duration-300
                ${copied ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-0'}`}
            >
              ✓ Copiado!
            </span>
            <span
              className="absolute -bottom-1 left-0 right-0 h-px bg-[--blue-neon]
                scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            />
          </button>
          <p className="font-mono text-[0.65rem] text-[rgba(0,198,255,0.4)] mt-3 tracking-[0.15em]">
            Clique para copiar
          </p>
        </div>

        {/* Links row */}
        <div className="reveal flex flex-wrap gap-4 justify-center">
          {LINKS.map(({ label, url, icon }) => (
            <a
              key={label}
              href={url}
              target={url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="btn-clip flex items-center gap-2.5 px-7 py-3.5
                border border-[rgba(0,198,255,0.2)] font-mono text-[0.75rem]
                tracking-[0.12em] uppercase text-[--blue-pale]
                hover:text-[--blue-neon] hover:border-[--blue-neon]
                hover:bg-[rgba(0,198,255,0.07)] hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(0,198,255,0.12)]
                transition-all duration-300 no-underline"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
