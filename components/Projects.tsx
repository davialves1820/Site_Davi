'use client'
import { useEffect, useRef, useState } from 'react'
import { PROJECTS } from '@/lib/data'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeProject, setActiveProject] = useState<number | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="work" className="py-32">
      <div className="container-editorial">
        <div className="divider mb-16" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          <div className="lg:col-span-3">
            <p className="label" style={{ color: 'var(--text-muted)', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
              Work
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="flex justify-between items-end mb-16">
              <h2
                className="display text-[--text]"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
                }}
              >
                Projetos<br />
                <span className="display-italic" style={{ color: 'var(--accent)' }}>selecionados</span>
              </h2>
              <a
                href="https://github.com/davialves1820"
                target="_blank"
                rel="noopener noreferrer"
                className="label no-underline hidden md:block"
                style={{ color: 'var(--text-muted)' }}
              >
                Ver todos ↗
              </a>
            </div>

            {/* Project list */}
            <div>
              {PROJECTS.map((project, i) => (
                <ProjectRow
                  key={project.name}
                  project={project}
                  index={i}
                  visible={visible}
                  isActive={activeProject === i}
                  onEnter={() => setActiveProject(i)}
                  onLeave={() => setActiveProject(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating project accent — follows mouse when hovering */}
      {activeProject !== null && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePos.x + 24,
            top: mousePos.y - 12,
            transform: 'translateY(-50%)',
          }}
        >
          <div
            className="label px-4 py-2"
            style={{
              background: 'var(--accent)',
              color: 'var(--bg)',
              whiteSpace: 'nowrap',
            }}
          >
            {PROJECTS[activeProject].live ? 'Ver projeto ↗' : 'Ver código ↗'}
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectRow({
  project, index, visible, isActive, onEnter, onLeave
}: {
  project: any
  index: number
  visible: boolean
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="no-underline block group"
      style={{
        borderTop: '1px solid var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.8s ease ${0.15 + index * 0.07}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.15 + index * 0.07}s`,
      }}
    >
      <div
        className="flex items-start justify-between py-8 gap-8 transition-all duration-300"
        style={{
          paddingLeft: isActive ? '1rem' : '0',
        }}
      >
        {/* Left: number + name + desc */}
        <div className="flex gap-8 items-start min-w-0">
          <span
            className="mono flex-shrink-0 mt-1"
            style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="min-w-0">
            <h3
              className="display text-[--text] mb-2 transition-colors duration-300"
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                color: isActive ? 'var(--accent)' : 'var(--text)',
              }}
            >
              {project.name}
              {project.live && (
                <span
                  className="mono ml-3 align-middle"
                  style={{ fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '0.15em' }}
                >
                  LIVE
                </span>
              )}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              {project.desc}
            </p>
          </div>
        </div>

        {/* Right: stack tags */}
        <div className="hidden md:flex flex-wrap gap-2 flex-shrink-0 justify-end max-w-[200px]">
          {project.stack.map((s: string) => (
            <span
              key={s}
              className="mono"
              style={{ color: 'var(--text-dim)', fontSize: '0.65rem', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}