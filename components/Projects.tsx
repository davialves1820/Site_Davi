'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { PROJECTS, SHOWCASE_PROJECTS, ShowcaseProject } from '@/lib/data'

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
    <section id="projects" className="py-32" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container-editorial">
        <div className="divider mb-16" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          <div className="lg:col-span-3">
            <p className="label" style={{ color: 'var(--text-muted)', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
              Projects
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2
              className="display text-[--text] mb-16"
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
          </div>
        </div>

        {/* Carousel — usa a largura cheia do container, fora da coluna de 9/12 */}
        <ProjectsCarousel visible={visible} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 mt-24">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9">
            {/* Secondary list — other projects */}
            <div>
              <p className="label mb-6" style={{ color: 'var(--text-dim)' }}>Mais projetos</p>
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

      {/* Floating project accent — follows mouse when hovering the secondary list */}
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

function ProjectsCarousel({ visible }: { visible: boolean }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const ratiosRef = useRef<number[]>(Array(SHOWCASE_PROJECTS.length).fill(0))
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const idx = Number((entry.target as HTMLElement).dataset.index)
          ratiosRef.current[idx] = entry.intersectionRatio
        })
        let maxIdx = 0
        let maxRatio = -1
        ratiosRef.current.forEach((r, i) => {
          if (r > maxRatio) { maxRatio = r; maxIdx = i }
        })
        setActiveIndex(maxIdx)
      },
      { root: scroller, threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToIndex = (i: number) => {
    const el = cardRefs.current[i]
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest', inline: 'start' })
  }

  const total = SHOWCASE_PROJECTS.length

  return (
    <div className="mb-8">
      <div className="flex justify-center gap-2 mb-6" role="tablist" aria-label="Selecionar projeto">
        {SHOWCASE_PROJECTS.map((project, i) => (
          <button
            key={project.slug}
            role="tab"
            aria-label={`Ver ${project.name}`}
            aria-selected={i === activeIndex}
            onClick={() => scrollToIndex(i)}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: i === activeIndex ? 'var(--accent)' : 'var(--border-md)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>

      <div className="relative">
        <button
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Projeto anterior"
          className="mono hidden md:flex items-center justify-center transition-all duration-300"
          style={{
            position: 'absolute',
            left: 0,
            top: '129px',
            transform: 'translate(-50%, -50%)',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1px solid var(--border-md)',
            background: 'var(--bg)',
            boxShadow: '0 8px 24px rgba(13,13,13,0.08)',
            color: 'var(--text)',
            zIndex: 3,
            opacity: activeIndex === 0 ? 0.35 : 1,
            cursor: activeIndex === 0 ? 'default' : 'pointer',
          }}
        >
          ←
        </button>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-6 overflow-x-auto"
          style={{ scrollSnapType: 'x mandatory', paddingBottom: '0.5rem' }}
          role="region"
          aria-label="Carrossel de projetos selecionados"
          tabIndex={0}
        >
          {SHOWCASE_PROJECTS.map((project, i) => (
            <div
              key={project.slug}
              ref={el => { cardRefs.current[i] = el }}
              data-index={i}
              style={{ scrollSnapAlign: 'start', flex: '0 0 min(85vw, 460px)' }}
            >
              <ProjectCard project={project} index={i} visible={visible} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollToIndex(Math.min(total - 1, activeIndex + 1))}
          disabled={activeIndex === total - 1}
          aria-label="Próximo projeto"
          className="mono hidden md:flex items-center justify-center transition-all duration-300"
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translate(50%, -50%)',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1px solid var(--border-md)',
            background: 'var(--bg)',
            boxShadow: '0 8px 24px rgba(13,13,13,0.08)',
            color: 'var(--text)',
            zIndex: 3,
            opacity: activeIndex === total - 1 ? 0.35 : 1,
            cursor: activeIndex === total - 1 ? 'default' : 'pointer',
          }}
        >
          →
        </button>
      </div>
    </div>
  )
}

function ProjectCard({
  project, index, visible,
}: {
  project: ShowcaseProject
  index: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col"
      style={{
        border: '1px solid var(--border-md)',
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(24px)',
        boxShadow: hovered ? '0 20px 40px rgba(13,13,13,0.10)' : '0 0px 0px rgba(13,13,13,0)',
        transition: `opacity 0.8s ease ${0.15 + index * 0.08}s, transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease`,
      }}
    >
      <ProjectMedia project={project} hovered={hovered} />

      <div className="p-6 flex flex-col flex-1">
        <h3
          className={`display ${project.credit ? 'mb-1' : 'mb-3'}`}
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text)' }}
        >
          {project.name}
        </h3>

        {project.credit && (
          <p className="mono mb-3" style={{ color: 'var(--text-dim)', fontSize: '0.65rem', letterSpacing: '0.06em' }}>
            {project.credit}
          </p>
        )}

        {project.placeholder ? (
          <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: 1.6 }}>
            {project.solution}
          </p>
        ) : (
          <dl className="space-y-2 mb-5" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
            <div>
              <dt className="mono inline" style={{ color: 'var(--accent)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>PROBLEMA{' '}</dt>
              <dd className="inline" style={{ color: 'var(--text-muted)' }}>{project.problem}</dd>
            </div>
            <div>
              <dt className="mono inline" style={{ color: 'var(--accent)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>SOLUÇÃO{' '}</dt>
              <dd className="inline" style={{ color: 'var(--text-muted)' }}>{project.solution}</dd>
            </div>
            <div>
              <dt className="mono inline" style={{ color: 'var(--accent)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>RESULTADO{' '}</dt>
              <dd className="inline" style={{ color: 'var(--text-muted)' }}>{project.result}</dd>
            </div>
          </dl>
        )}

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.stack.map(s => (
              <span
                key={s}
                className="mono px-2.5 py-1"
                style={{
                  border: '1px solid var(--border-md)',
                  color: 'var(--text-muted)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.08em',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {!project.placeholder && (
          <div className="flex gap-4 mt-auto pt-2">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label no-underline transition-colors duration-300"
                style={{ color: 'var(--text)' }}
              >
                Demo ao vivo ↗
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label no-underline transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                Código ↗
              </a>
            ) : null}
            {!project.demoUrl && !project.repoUrl && (
              <span className="label" style={{ color: 'var(--text-dim)' }}>Links em breve</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectMedia({ project, hovered }: { project: ShowcaseProject; hovered: boolean }) {
  if (project.mediaSrc) {
    return (
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9', background: 'var(--bg-2)' }}>
        {project.mediaType === 'video' ? (
          <video
            src={project.mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            aria-label={project.mediaAlt}
            className="w-full h-full object-cover"
            style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
          />
        ) : (
          <Image
            src={project.mediaSrc}
            alt={project.mediaAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
          />
        )}
      </div>
    )
  }

  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        aspectRatio: '16 / 9',
        background: 'var(--bg-2)',
        border: project.placeholder ? '1px dashed var(--border-md)' : 'none',
        borderBottom: project.placeholder ? undefined : '1px solid var(--border-md)',
      }}
      role="img"
      aria-label={project.mediaAlt || 'Mídia do projeto ainda não adicionada'}
    >
      <span className="mono text-center px-6" style={{ color: 'var(--text-dim)', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
        {project.placeholder
          ? '[MÍDIA — screenshot ou GIF do 3º projeto]'
          : `[MÍDIA — ${project.mediaType === 'video' ? 'vídeo/GIF' : 'screenshot'} de ${project.name}]`}
      </span>
    </div>
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
