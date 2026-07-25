'use client'
import { useEffect, useRef, useState } from 'react'
import { SKILLS } from '@/lib/data'
import RevealLine from '@/components/RevealLine'

export default function Skills() {
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
    <section id="skills" className="py-32" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-editorial">
        <div className="divider mb-16" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          {/* Label */}
          <div className="lg:col-span-3">
            <p className="label" style={{ color: 'var(--text-muted)', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
              Stack
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <h2
              className="display text-[--text] mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              <RevealLine>Tecnologias que uso</RevealLine>
              <RevealLine delay={0.12}>
                <span className="display-italic" style={{ color: 'var(--accent)' }}>no dia a dia</span>
              </RevealLine>
            </h2>

            {/* Skills as tag cloud rows per category */}
            <div className="space-y-10">
              {SKILLS.map((skill, i) => (
                <div
                  key={skill.title}
                  className="grid grid-cols-12 gap-4 items-start"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 0.8s ease ${0.15 + i * 0.07}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.07}s`,
                  }}
                >
                  {/* Category label */}
                  <div className="col-span-12 md:col-span-3 flex items-center gap-3 pt-1">
                    <span style={{ fontSize: '1.1rem' }}>{skill.icon}</span>
                    <span className="label" style={{ color: 'var(--text-muted)' }}>{skill.title}</span>
                  </div>

                  {/* Tags */}
                  <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
                    {skill.tags.map((tag: string) => (
                      <SkillTag key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillTag({ tag }: { tag: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mono text-xs px-4 py-2 transition-all duration-300 cursor-default"
      style={{
        border: '1px solid',
        borderColor: hovered ? 'var(--accent)' : 'var(--border-md)',
        color: hovered ? 'var(--accent)' : 'var(--text-muted)',
        background: hovered ? 'var(--accent-dim)' : 'transparent',
        fontSize: '0.72rem',
        letterSpacing: '0.08em',
      }}
    >
      {tag}
    </span>
  )
}