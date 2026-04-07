'use client'
import { useReveal } from '@/lib/hooks'
import { EDUCATION, AWARDS } from '@/lib/data'

export default function Education() {
  const { ref: headRef, revealClass: headReveal, transitionClass: headTransition } = useReveal()
  const { ref: cardRef, revealClass: cardReveal, transitionClass: cardTransition } = useReveal(0.15)

  return (
    <section
      id="education"
      className="relative z-10 py-36"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(10,37,64,0.25), transparent)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headRef} className={`${headTransition} ${headReveal} mb-20`}>
          <p className="font-mono text-[0.7rem] tracking-[0.35em] uppercase text-[--blue-neon] mb-3">
            // 05
          </p>
          <h2
            className="font-extrabold leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
          >
            Formação & <span className="gradient-text">Conquistas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education card */}
          <div ref={cardRef} className={`${cardTransition} ${cardReveal} card-glow p-10 border border-[rgba(0,198,255,0.1)]
            bg-[rgba(4,20,40,0.6)] backdrop-blur-sm relative overflow-hidden`}>
            {/* Decorative corner */}
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, var(--blue-neon), transparent)' }}
            />

            <p className="font-mono text-[0.65rem] tracking-[0.4em] uppercase text-[--blue-neon] mb-8">
              Educação
            </p>

            <div className="flex items-start gap-5">
              <div
                className="w-14 h-14 flex-shrink-0 rounded border border-[rgba(0,198,255,0.2)]
                  bg-[rgba(0,98,255,0.1)] flex items-center justify-center text-2xl"
              >
                🎓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{EDUCATION.degree}</h3>
                <p className="font-mono text-sm text-[--blue-pale] mb-1">{EDUCATION.school}</p>
                <p className="font-mono text-xs text-[rgba(0,198,255,0.55)]">
                  {EDUCATION.period} · {EDUCATION.city}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-8">
              <div className="flex justify-between font-mono text-[0.65rem] text-[--blue-pale] mb-2">
                <span>Progresso do curso</span>
                <span>~40%</span>
              </div>
              <div className="h-[2px] bg-[rgba(0,198,255,0.1)]">
                <div
                  className="h-full"
                  style={{
                    width: '40%',
                    background: 'linear-gradient(90deg, var(--blue-accent), var(--blue-neon))',
                  }}
                />
              </div>
              <p className="font-mono text-[0.62rem] text-[rgba(0,198,255,0.45)] mt-2">
                2023 → 2028 · Ciência da Computação · UFPB
              </p>
            </div>
          </div>

          {/* Awards cards */}
          <div className="space-y-5">
            {AWARDS.map((award, i) => (
              <AwardCard key={award.title} award={award} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AwardCard({ award, delay }: { award: any; delay: number }) {
  const { ref, revealClass, transitionClass } = useReveal(0.1)
  const { medal, title, desc } = award

  return (
    <div
      ref={ref}
      className={`${transitionClass} ${revealClass} card-glow flex items-start gap-6 p-8
        border border-[rgba(0,198,255,0.1)]
        bg-[rgba(4,20,40,0.6)] backdrop-blur-sm relative overflow-hidden`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,98,255,0.04), transparent)' }}
      />

      <span
        className="text-4xl flex-shrink-0"
        style={{ filter: 'drop-shadow(0 0 16px rgba(255,215,0,0.4))' }}
      >
        {medal}
      </span>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="font-mono text-[0.78rem] text-[--blue-pale] leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
