'use client'
import { useReveal } from '@/lib/hooks'
import { PERSONAL } from '@/lib/data'

export default function About() {
  const { ref: leftRef, revealClass: leftReveal, transitionClass: leftTransition } = useReveal()
  const { ref: rightRef, revealClass: rightReveal, transitionClass: rightTransition } = useReveal(0.2)

  return (
    <section id="about" className="relative z-10 py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* ── Left ─────────────────────────────────────────── */}
          <div ref={leftRef} className={`${leftTransition} ${leftReveal}`}>
            <p className="font-mono text-[0.7rem] tracking-[0.35em] uppercase text-[--blue-neon] mb-3">
              // 01
            </p>
            <h2
              className="font-extrabold leading-[0.92] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
            >
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            <div className="space-y-4 mb-10">
              {PERSONAL.bio.map((p, i) => (
                <p key={i} className="text-[rgba(240,248,255,0.65)] leading-relaxed text-[0.95rem]">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* ── Right: Photo Space ──────────────────────────────────── */}
          <div ref={rightRef} className={`${rightTransition} ${rightReveal} relative group`}>
            <div className="relative w-full aspect-square max-w-[440px] mx-auto">
              {/* Decorative background glow */}
              <div
                className="absolute inset-x-[-20px] inset-y-[-20px] opacity-20 blur-[60px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--blue-neon), var(--blue-accent))' }}
              />

              {/* Main image container */}
              <div className="relative h-full w-full overflow-hidden border border-[rgba(0,198,255,0.2)] bg-[rgba(4,20,40,0.4)]
                group-hover:border-[--blue-neon] transition-colors duration-500">
                
                {/* 
                  Note to User: 
                  Place your image here. 
                  Update the 'src' attribute below with your photo path.
                */}
                <img
                  src="/Davi.jpeg" 
                  alt={PERSONAL.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Corner Accents */}
                <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[--blue-neon] opacity-40" />
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[--blue-neon] opacity-40" />
              </div>

              {/* Tag overlay */}
              <div className="absolute -bottom-6 -right-6 px-6 py-3 bg-[--blue-accent] border border-[--blue-neon]
                font-mono text-[0.65rem] tracking-[0.2em] uppercase text-white shadow-[0_10px_30px_rgba(0,98,255,0.3)]">
                {PERSONAL.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
