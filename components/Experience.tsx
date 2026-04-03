'use client'
import { useEffect } from 'react'
import { EXPERIENCES } from '@/lib/data'

export default function Experience() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-exp').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="experience"
      className="relative z-10 py-36"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(10,37,64,0.2), transparent)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="reveal mb-20">
          <p className="font-mono text-[0.7rem] tracking-[0.35em] uppercase text-[--blue-neon] mb-3">
            // 03
          </p>
          <h2
            className="font-extrabold leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
          >
            Experi<span className="gradient-text">ência</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-16">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="reveal relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.15rem] md:-left-[3.15rem] top-1.5">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-[--blue-neon] bg-[--blue-accent] relative"
                    style={{ boxShadow: '0 0 18px rgba(0,198,255,0.6)' }}
                  >
                    {/* Pulse ring */}
                    <span
                      className="absolute inset-[-6px] rounded-full border border-[rgba(0,198,255,0.35)]"
                      style={{ animation: 'float 2.5s ease-in-out infinite' }}
                    />
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-[--blue-neon]">
                    {exp.period}
                  </p>
                  {exp.current && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5
                        font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[--blue-neon]
                        border border-[rgba(0,198,255,0.4)] bg-[rgba(0,198,255,0.08)]"
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full bg-[--blue-neon]"
                        style={{ animation: 'blink 1.2s step-end infinite' }}
                      />
                      Atual
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-0.5">{exp.role}</h3>
                <p className="font-mono text-sm text-[--blue-pale] mb-4">{exp.company}</p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {exp.stack.map(s => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 font-mono text-[0.6rem] tracking-wider uppercase
                        text-[--blue-neon] border border-[rgba(0,198,255,0.2)] bg-[rgba(0,98,255,0.06)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Content card */}
                <div
                  className="p-6 border-l-[3px] border-[--blue-accent]
                    border-t border-r border-b border-t-[rgba(0,198,255,0.08)]
                    border-r-[rgba(0,198,255,0.08)] border-b-[rgba(0,198,255,0.08)]
                    bg-[rgba(4,20,40,0.65)] backdrop-blur-sm"
                >
                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-4 text-[0.92rem] text-[rgba(240,248,255,0.65)] leading-relaxed"
                      >
                        <span className="font-mono text-[--blue-neon] flex-shrink-0 mt-0.5">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
