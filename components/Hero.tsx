'use client'
import { useEffect, useRef, useState } from 'react'
import { PERSONAL } from '@/lib/data'

const PHRASES = [
  'Construindo o futuro, uma linha de código de cada vez.',
  'Full Stack · IoT · IA · Open Source',
  'UFPB · João Pessoa, Paraíba 🇧🇷',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [phIdx, setPhIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [visible, setVisible] = useState(false)

  const [repoCount, setRepoCount] = useState<number | null>(null)

  /* fade-in on mount */
  useEffect(() => { 
    setTimeout(() => setVisible(true), 100) 
    
    // Fetch GitHub repo count
    fetch('https://api.github.com/users/davialves1820')
      .then(res => res.json())
      .then(data => {
        if (data.public_repos) setRepoCount(data.public_repos)
      })
      .catch(err => console.error('Error fetching GitHub data:', err))
  }, [])

  /* typing effect */
  useEffect(() => {
    const phrase = PHRASES[phIdx]
    const speed = deleting ? 35 : 60

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = charIdx + 1
        setText(phrase.slice(0, next))
        if (next === phrase.length) {
          setTimeout(() => setDeleting(true), 2200)
          return
        }
        setCharIdx(next)
      } else {
        const next = charIdx - 1
        setText(phrase.slice(0, next))
        if (next === 0) {
          setDeleting(false)
          setPhIdx(p => (p + 1) % PHRASES.length)
        }
        setCharIdx(next)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, phIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hex-bg"
    >
      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]
          rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,98,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* ── Left: Text ─────────────────────────────────────── */}
        <div
          className="flex-1 transition-all duration-1000 w-full"
          style={{ 
            opacity: visible ? 1 : 0, 
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            textAlign: 'left'
          }}
        >
          {/* Tag line */}
          <div
            className="flex items-center gap-4 font-mono text-[0.72rem] tracking-[0.3em] uppercase
              text-[--blue-neon] mb-6"
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="inline-block w-10 h-px bg-[--blue-neon]" />
            Full Stack Developer · UFPB
          </div>

          {/* Name */}
          <h1 className="font-sans font-extrabold leading-[0.88] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 8rem)' }}>
            <span className="block text-white">{PERSONAL.firstName}</span>
            <span
              className="block glitch-wrap shimmer-text"
              data-text={PERSONAL.lastName}
            >
              {PERSONAL.lastName}
            </span>
          </h1>

          {/* Typed sub */}
          <p className="font-mono text-base text-[rgba(240,248,255,0.65)] max-w-md leading-relaxed mb-10 min-h-[2.5rem]">
            {text}
            <span
              className="inline-block w-[2px] h-[1em] bg-[--blue-neon] ml-1 align-bottom"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-gradient-to-r from-[--blue-accent] to-[--blue-bright]
                font-mono text-[0.72rem] tracking-[0.15em] uppercase text-white
                hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,98,255,0.4)]
                transition-all duration-300"
            >
              Ver Projetos
            </a>
            <a
              href={PERSONAL.resume}
              download
              className="px-8 py-3.5 bg-transparent border border-[rgba(0,198,255,0.35)]
                font-mono text-[0.72rem] tracking-[0.15em] uppercase text-[--blue-neon]
                hover:bg-[rgba(0,198,255,0.08)] hover:border-[--blue-neon]
                hover:shadow-[0_0_30px_rgba(0,198,255,0.15)]
                transition-all duration-300 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Baixar CV
            </a>
          </div>

          {/* Social micro-links */}
          <div className="flex gap-6 mt-10">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[--blue-pale]
                hover:text-[--blue-neon] transition-all duration-300 flex flex-col gap-1"
            >
              <div>GitHub ↗</div>
              <div className="text-[10px] text-[rgba(0,198,255,0.4)] lowercase tracking-normal group-hover:text-[--blue-neon] transition-colors">
                {repoCount !== null ? `${repoCount} repos` : '... repos'}
              </div>
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[--blue-pale]
                hover:text-[--blue-neon] transition-colors duration-300 h-fit"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* ── Right: Animated Orb ─────────────────────────────── */}
        <div
          className="hidden lg:block flex-shrink-0 relative"
          style={{
            width: 480, height: 480,
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.5s ease 1s',
          }}
        >


          {/* Core glow */}
          <div
            className="absolute inset-[140px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 40% 40%, rgba(0,98,255,0.35), rgba(0,198,255,0.08) 60%, transparent)',
              filter: 'blur(24px)',
              animation: 'float 5s ease-in-out infinite',
            }}
          />

          {/* Center code snippet */}
          <div
            className="absolute inset-[150px] rounded-full border border-[rgba(0,198,255,0.1)]
              flex flex-col items-center justify-center text-center overflow-hidden"
            style={{ background: 'rgba(4,20,40,0.6)', backdropFilter: 'blur(12px)' }}
          >
            <div className="font-mono text-[0.6rem] text-[--blue-pale] space-y-1 px-4">
              <p className="text-[--blue-neon]">const dev = {'{'}</p>
              <p className="ml-3">stack: <span className="text-[--blue-bright]">"Full Stack"</span>,</p>
              <p className="ml-3">years: <span className="text-[--blue-bright]">2</span>,</p>
              <p className="ml-3">coffee: <span className="text-[--blue-bright]">Infinity</span></p>
              <p className="text-[--blue-neon]">{'}'}</p>
            </div>
          </div>

          {/* Orbiting dot */}
          <div
            className="absolute top-1/2 left-1/2 w-0 h-0"
            style={{ animation: 'orbit 7s linear infinite' }}
          >
            <div
              className="w-3 h-3 rounded-full bg-[--blue-neon] -translate-x-1.5 -translate-y-1.5"
              style={{ boxShadow: '0 0 18px var(--blue-neon), 0 0 40px rgba(0,198,255,0.4)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 1s ease 2.5s both' }}>
        <span className="font-mono text-[0.58rem] tracking-[0.35em] uppercase text-[rgba(0,198,255,0.45)]"
          style={{ writingMode: 'vertical-lr' }}>
          Scroll
        </span>
        <div
          className="w-px h-16"
          style={{
            background: 'linear-gradient(180deg, transparent, var(--blue-neon))',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
