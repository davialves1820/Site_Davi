'use client'
import { useEffect, useRef } from 'react'

// ── Config ────────────────────────────────────────────
const COLS = 28
const ROWS = 18
const GRAVITY_RADIUS = 260
const GRAVITY_STR = 44
const RETURN_SPEED = 0.055

const DUST_COUNT = 55
const DUST_SPEED_MIN = 0.08
const DUST_SPEED_MAX = 0.28
const DUST_RADIUS_MIN = 0.8
const DUST_RADIUS_MAX = 2.2

// ── Types ─────────────────────────────────────────────
interface GridPoint {
    x: number; y: number
    ox: number; oy: number
}

interface Dust {
    x: number; y: number
    r: number
    vx: number; vy: number
    opacity: number
    opacityTarget: number
    opacitySpeed: number
}

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d')!

        let W = 0, H = 0
        let grid: GridPoint[] = []
        let dust: Dust[] = []
        let mouse = { x: -9999, y: -9999 }
        let raf = 0

        // ── Build grid ──────────────────────────────────
        const buildGrid = () => {
            grid = []
            for (let r = 0; r <= ROWS; r++)
                for (let c = 0; c <= COLS; c++) {
                    const x = (c / COLS) * W
                    const y = (r / ROWS) * H
                    grid.push({ x, y, ox: x, oy: y })
                }
        }

        // ── Build dust ──────────────────────────────────
        const makeDust = (): Dust => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: DUST_RADIUS_MIN + Math.random() * (DUST_RADIUS_MAX - DUST_RADIUS_MIN),
            vx: (Math.random() - 0.5) * (DUST_SPEED_MAX - DUST_SPEED_MIN) + DUST_SPEED_MIN * Math.sign(Math.random() - 0.5),
            vy: -DUST_SPEED_MIN - Math.random() * (DUST_SPEED_MAX - DUST_SPEED_MIN), // drift upward
            opacity: 0,
            opacityTarget: 0.12 + Math.random() * 0.22,
            opacitySpeed: 0.003 + Math.random() * 0.005,
        })

        const buildDust = () => {
            dust = Array.from({ length: DUST_COUNT }, makeDust)
            // stagger initial positions across the full height
            dust.forEach(d => { d.y = Math.random() * H; d.opacity = d.opacityTarget * Math.random() })
        }

        // ── Resize ──────────────────────────────────────
        const resize = () => {
            W = canvas.width = window.innerWidth
            H = canvas.height = window.innerHeight
            buildGrid()
            buildDust()
        }

        // ── Mouse ────────────────────────────────────────
        const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
        const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }

        // ── Draw loop ────────────────────────────────────
        const draw = () => {
            ctx.clearRect(0, 0, W, H)

            // ── Grid: update & draw ──────────────────────
            for (const p of grid) {
                const dx = mouse.x - p.ox
                const dy = mouse.y - p.oy
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < GRAVITY_RADIUS && dist > 0) {
                    const force = (1 - dist / GRAVITY_RADIUS) * GRAVITY_STR
                    p.x += ((p.ox + (dx / dist) * force) - p.x) * 0.11
                    p.y += ((p.oy + (dy / dist) * force) - p.y) * 0.11
                } else {
                    p.x += (p.ox - p.x) * RETURN_SPEED
                    p.y += (p.oy - p.y) * RETURN_SPEED
                }
            }

            // horizontal lines
            for (let r = 0; r <= ROWS; r++) {
                ctx.beginPath()
                for (let c = 0; c <= COLS; c++) {
                    const p = grid[r * (COLS + 1) + c]
                    const near = Math.max(0, 1 - Math.hypot(p.x - mouse.x, p.y - mouse.y) / GRAVITY_RADIUS)
                    ctx.strokeStyle = near > 0.05
                        ? `rgba(108, 92, 231, ${0.055 + near * 0.16})`
                        : 'rgba(13, 13, 13, 0.055)'
                    ctx.lineWidth = near > 0.05 ? 0.6 : 0.5
                    c === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
                }
                ctx.stroke()
            }

            // vertical lines
            for (let c = 0; c <= COLS; c++) {
                ctx.beginPath()
                for (let r = 0; r <= ROWS; r++) {
                    const p = grid[r * (COLS + 1) + c]
                    const near = Math.max(0, 1 - Math.hypot(p.x - mouse.x, p.y - mouse.y) / GRAVITY_RADIUS)
                    ctx.strokeStyle = near > 0.05
                        ? `rgba(108, 92, 231, ${0.055 + near * 0.16})`
                        : 'rgba(13, 13, 13, 0.055)'
                    ctx.lineWidth = near > 0.05 ? 0.6 : 0.5
                    r === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
                }
                ctx.stroke()
            }

            // ── Dust: update & draw ──────────────────────
            for (const d of dust) {
                // fade in/out toward target
                if (Math.abs(d.opacity - d.opacityTarget) > 0.001)
                    d.opacity += (d.opacityTarget - d.opacity) * d.opacitySpeed * 4

                // drift
                d.x += d.vx
                d.y += d.vy

                // wrap around edges — fade out then respawn
                if (d.y < -10 || d.x < -10 || d.x > W + 10) {
                    d.opacityTarget = 0
                    if (d.opacity < 0.005) {
                        // respawn at bottom
                        d.x = Math.random() * W
                        d.y = H + 5
                        d.vx = (Math.random() - 0.5) * DUST_SPEED_MAX * 0.6
                        d.vy = -DUST_SPEED_MIN - Math.random() * (DUST_SPEED_MAX - DUST_SPEED_MIN)
                        d.opacityTarget = 0.12 + Math.random() * 0.22
                    }
                } else {
                    // gentle opacity breathing
                    if (Math.random() < 0.004)
                        d.opacityTarget = 0.08 + Math.random() * 0.25
                }

                // mouse repulsion on dust — subtle push away
                const mdx = d.x - mouse.x
                const mdy = d.y - mouse.y
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
                if (mdist < 100 && mdist > 0) {
                    const push = (1 - mdist / 100) * 0.4
                    d.x += (mdx / mdist) * push
                    d.y += (mdy / mdist) * push
                }

                // draw as soft circle
                const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 2.5)
                grad.addColorStop(0, `rgba(108, 92, 231, ${d.opacity})`)
                grad.addColorStop(0.5, `rgba(108, 92, 231, ${d.opacity * 0.4})`)
                grad.addColorStop(1, `rgba(108, 92, 231, 0)`)
                ctx.beginPath()
                ctx.arc(d.x, d.y, d.r * 2.5, 0, Math.PI * 2)
                ctx.fillStyle = grad
                ctx.fill()
            }

            raf = requestAnimationFrame(draw)
        }

        resize()
        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseleave', onMouseLeave)
        draw()

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    )
}