import { useMemo, useState } from 'react'
import { Arrow } from '../components/Arrow'
import { ProjectModal } from '../components/ProjectModal'
import { Reveal } from '../components/Reveal'
import { projects } from '../constants/portfolio'
import type { Project, ProjectCategory } from '../types'

type Filter = 'All' | ProjectCategory
const filters: Filter[] = ['All', 'Web', 'Video', 'Mobile', 'UI Design']

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)
  const visible = useMemo(() => projects.filter((project) => {
    const matchesCategory = filter === 'All' || project.category === filter
    const searchable = `${project.title} ${project.subtitle} ${project.blurb} ${project.tech.join(' ')}`.toLowerCase()
    return matchesCategory && searchable.includes(query.toLowerCase())
  }), [filter, query])

  return (
    <section className="section work" id="work">
      <Reveal><div className="section-kicker">03 / Featured projects</div></Reveal>
      <Reveal><div className="section-heading"><h2>Systems built with<br /><em>purpose.</em></h2><p>Selected work across institutional platforms, AI applications, business tools, interfaces, and motion.</p></div></Reveal>
      <div className="work-tools">
        <div className="filters" aria-label="Filter projects">{filters.map((item) => <button className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" aria-label="Search projects" /></label>
      </div>
      <div className="project-grid">{visible.map((project, index) => <Reveal key={project.id}><button className="project" onClick={() => setSelected(project)} aria-label={`View ${project.title} case study`}><div className="project-visual" style={{ '--project-color': project.color } as React.CSSProperties}><span>{project.mark}</span><i>View case study <Arrow /></i></div><div className="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><h3>{project.title}</h3><p>{project.subtitle}</p></div></button></Reveal>)}</div>
      {!visible.length && <p className="empty">No projects match that search.</p>}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
