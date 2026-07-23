import { useEffect } from 'react'
import Lenis from 'lenis'

export function usePortfolioMotion() {
  useEffect(() => {
    const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    let frame = 0
    const animate = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(animate) }
    frame = requestAnimationFrame(animate)
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [])

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - innerHeight
      const progress = document.getElementById('progress')
      if (progress) progress.style.width = `${scrollable > 0 ? (scrollY / scrollable) * 100 : 0}%`
    }
    addEventListener('scroll', update, { passive: true })
    update()
    return () => removeEventListener('scroll', update)
  }, [])
}
