import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Arrow } from '../components/Arrow'

export function Hero() {
  const scope = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.from('[data-hero-reveal]', { y: 28, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.25 })
      gsap.from('.hero-art', { x: 35, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 })
    }, scope)
    return () => context.revert()
  }, [])

  return (
    <section className="hero" id="home" ref={scope}>
      <div className="hero-copy">
        <p className="eyebrow" data-hero-reveal><span /> Available for selected projects</p>
        <h1 data-hero-reveal>I build scalable web applications that <em>solve real problems.</em></h1>
        <p className="hero-lead" data-hero-reveal>I’m Aaron Sansaet, a Web Developer and Video Editor from the Philippines specializing in modern web development, business systems, and digital experiences.</p>
        <div className="hero-actions" data-hero-reveal>
          <a className="button primary" href="#work">View projects <Arrow direction="down" /></a>
          <a className="button outline-button" href="/Aaron-Sansaet-Resume.pdf" download>Download résumé ↓</a>
          <a className="button text-button" href="#contact">Hire me <Arrow /></a>
        </div>
      </div>
      <div className="hero-art" aria-label="Abstract monogram portrait for Aaron Sansaet">
        <div className="portrait"><img src="/aaron-sansaet.jpg" alt="Aaron Sansaet" loading="eager" fetchPriority="high" /><span className="portrait-label">WEB DEVELOPER<br />+ VIDEO EDITOR</span><small>Based in<br />the Philippines</small></div>
        <div className="orbit one">⌁</div><div className="orbit two">✦</div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to discover</span><Arrow direction="down" /></a>
    </section>
  )
}
