'use client'
import { useEffect, useState, useRef } from 'react'

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.1,
  once: boolean = true
) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const revealClass = isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
  const transitionClass = 'transition-all duration-1000 ease-out'

  return { ref, isVisible, revealClass, transitionClass }
}
