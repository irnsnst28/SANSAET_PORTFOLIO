import { useEffect } from 'react'
import type { Project } from '../types'
import { Arrow } from './Arrow'

interface ProjectModalProps { project: Project; onClose: () => void }

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    addEventListener('keydown', close)
    document.body.classList.add('modal-open')
    return () => { removeEventListener('keydown', close); document.body.classList.remove('modal-open') }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close project">×</button>
        <div className="modal-mark" style={{ background: project.color }}>{project.mark}</div>
        <span className="eyebrow">{project.category} / {project.subtitle}</span>
        <h2 id="modal-title">{project.title}</h2>
        <p>{project.blurb}</p>
        <h3>Key features</h3>
        <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        <a className="button primary" href="#contact" onClick={onClose}>Discuss a similar project <Arrow /></a>
      </article>
    </div>
  )
}
