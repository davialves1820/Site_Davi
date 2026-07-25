'use client'
import { useRef, ReactNode, CSSProperties, MouseEvent } from 'react'

export default function Magnetic({
  children,
  strength = 0.3,
  className = '',
  style = {},
}: {
  children: ReactNode
  strength?: number
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)', ...style }}
    >
      {children}
    </div>
  )
}
