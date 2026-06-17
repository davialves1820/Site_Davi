'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rx = 0, ry = 0, mx = 0, my = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top = my + 'px'
      }
    }

    const lerp = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      raf = requestAnimationFrame(lerp)
    }

    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      const isLink = el.tagName === 'A' || el.tagName === 'BUTTON'
      dotRef.current?.classList.toggle('link', isLink)
      dotRef.current?.classList.toggle('hover', !isLink)
      ringRef.current?.classList.add('hover')
    }
    const onLeave = () => {
      dotRef.current?.classList.remove('hover', 'link')
      ringRef.current?.classList.remove('hover')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    raf = requestAnimationFrame(lerp)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}