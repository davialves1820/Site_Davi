'use client'
import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react'

export default function RevealLine({
  children,
  delay = 0,
  as = 'span',
  className = '',
  style = {},
}: {
  children: ReactNode
  delay?: number
  as?: 'span' | 'div'
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const Wrapper = as as any

  return (
    <Wrapper
      ref={ref}
      className={className}
      style={{ display: 'block', overflow: 'hidden', ...style }}
    >
      <span
        style={{
          display: 'block',
          transform: visible ? 'translateY(0%)' : 'translateY(115%)',
          transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        }}
      >
        {children}
      </span>
    </Wrapper>
  )
}
