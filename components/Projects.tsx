'use client'
import { useEffect, useState } from 'react'
import { useReveal } from '@/lib/hooks'
import { PROJECTS } from '@/lib/data'

export default function Projects() {
  const { ref: headRef, revealClass: headReveal, transitionClass: headTransition } = useReveal()
  const { ref: footerRef, revealClass: footerReveal, transitionClass: footerTransition } = useReveal()
  const [repoCount, setRepoCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/users/davialves1820')
      .then(res => res.json())
      .then(data => {
        if (data.public_repos) setRepoCount(data.public_repos)
      })
      .catch(err => console.error('Error fetching GitHub data:', err))
  }, [])

  return (
    <section id="projects" className="relative z-10 py-36">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, var(--blue-neon), var(--blue-accent), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headRef} className={`${headTransition} ${headReveal} mb-20`}>
          <p className="font-mono text-[0.7rem] tracking-[0.35em] uppercase text-[--blue-neon] mb-3">
            // 04
          </p>
          <h2
            className="font-extrabold leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
          >
            Pro<span className="gradient-text">jetos</span>
          </h2>
          <p className="font-mono text-[0.82rem] text-[--blue-pale] mt-4">
            Seleção de repositórios do{' '}
            <a
              href="https://github.com/davialves1820"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--blue-neon] hover:underline"
            >
              github.com/davialves1820
            </a>{' '}
            — {repoCount !== null ? `${repoCount} repositórios públicos no total.` : '... repositórios públicos.'}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 60} />
          ))}
        </div>

        {/* View all CTA */}
        <div ref={footerRef} className={`${footerTransition} ${footerReveal} text-center mt-14`}>
          <a
            href="https://github.com/davialves1820?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clip inline-flex items-center gap-3 px-10 py-4
              border border-[rgba(0,198,255,0.3)] font-mono text-[0.78rem]
              tracking-[0.15em] uppercase text-[--blue-neon]
              hover:bg-[rgba(0,198,255,0.07)] hover:border-[--blue-neon]
              transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver todos os {repoCount !== null ? repoCount : '...'} repositórios
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }: { project: any; delay: number }) {
  const { ref, revealClass, transitionClass } = useReveal<HTMLAnchorElement>(0.1)
  const { name, desc, stack, url } = project

  return (
    <a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${transitionClass} ${revealClass} card-glow group relative flex flex-col p-7
        border border-[rgba(0,198,255,0.1)]
        bg-[rgba(4,20,40,0.55)] backdrop-blur-sm overflow-hidden
        no-underline`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover corner glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100
          transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(0,198,255,0.12), transparent)' }}
      />

      {/* Top bar */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-9 h-9 rounded flex items-center justify-center
            bg-[rgba(0,98,255,0.15)] border border-[rgba(0,198,255,0.2)]
            group-hover:border-[--blue-neon] transition-colors duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="var(--blue-neon)" strokeWidth="2" strokeLinecap="round">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="var(--blue-pale)" strokeWidth="1.5" strokeLinecap="round"
          className="group-hover:stroke-[--blue-neon] group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            transition-all duration-300"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>

      {/* Name */}
      <h3 className="font-bold text-white text-lg mb-3 leading-tight
        group-hover:text-[--blue-pale] transition-colors duration-300">
        {name}
      </h3>

      {/* Desc */}
      <p className="text-[rgba(240,248,255,0.55)] text-[0.88rem] leading-relaxed flex-1 mb-5">
        {desc}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {stack.map((s: string) => (
          <span
            key={s}
            className="px-2.5 py-0.5 font-mono text-[0.6rem] tracking-wider uppercase
              text-[--blue-pale] border border-[rgba(0,198,255,0.15)]
              bg-[rgba(0,98,255,0.06)]"
          >
            {s}
          </span>
        ))}
      </div>
    </a>
  )
}
