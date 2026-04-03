'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number; opacity: number
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx    = canvas.getContext('2d')!
    let   width  = 0
    let   height = 0
    let   raf    = 0
    const particles: Particle[] = []
    const N = 90

    const resize = () => {
      width = canvas.width  = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.45 + 0.08,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Connect nearby particles
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 140) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,150,255,${(1 - d / 140) * 0.18})`
            ctx.lineWidth   = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw & move particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,198,255,${p.opacity})`
        ctx.fill()

        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > width)  p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-50"
    />
  )
}
