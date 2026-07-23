import { useEffect, useState } from 'react'
import { navigation } from '../constants/portfolio'
import { Arrow } from './Arrow'

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navigation.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-40% 0px -50%' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="Aaron Sansaet home"><span>AS</span><b>.</b></a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {navigation.map((link) => (
          <a key={link} className={active === link ? 'active' : ''} href={`#${link}`} onClick={() => setOpen(false)}>
            {link === 'work' ? 'Projects' : link[0].toUpperCase() + link.slice(1)}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Hire me <Arrow /></a>
      </nav>
      <button className={open ? 'menu active' : 'menu'} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    </header>
  )
}
