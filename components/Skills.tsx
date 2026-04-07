'use client'
import { useReveal } from '@/lib/hooks'
import { SKILLS } from '@/lib/data'

export default function Skills() {
  const { ref: headRef, revealClass: headReveal, transitionClass: headTransition } = useReveal()

  return (
    <section id="skills" className="relative z-10 py-36">
      {/* Subtle horizontal line decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, var(--blue-accent), var(--blue-neon), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headRef} className={`${headTransition} ${headReveal} text-center mb-20`}>
          <p className="font-mono text-[0.7rem] tracking-[0.35em] uppercase text-[--blue-neon] mb-3">
            // 02
          </p>
          <h2
            className="font-extrabold leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
          >
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, delay }: { skill: any; delay: number }) {
  const { ref, revealClass, transitionClass } = useReveal(0.08)
  const { icon, title, tags } = skill

  return (
    <div
      ref={ref}
      className={`${transitionClass} ${revealClass} card-glow group relative p-8
        border border-[rgba(0,198,255,0.1)]
        bg-[rgba(4,20,40,0.55)] backdrop-blur-sm overflow-hidden`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,98,255,0.06), transparent)' }}
      />

      {/* Top-right corner decoration */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10
          transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at top right, var(--blue-neon), transparent)' }}
      />

      <span className="text-3xl block mb-4">{icon}</span>
      <p className="font-mono text-[0.67rem] tracking-[0.3em] uppercase text-[--blue-neon] mb-5">
        {title}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1.5 font-mono text-[0.68rem] tracking-wide
              text-[--blue-pale] border border-[rgba(0,198,255,0.15)]
              bg-[rgba(0,98,255,0.07)]
              hover:text-[--blue-neon] hover:border-[--blue-neon]
              hover:-translate-y-0.5
              transition-all duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
