import { Reveal } from '../components/Reveal'
import { skillGroups } from '../constants/portfolio'

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <Reveal><div className="section-kicker">04 / Tech stack</div></Reveal>
      <Reveal><div className="section-heading"><h2>Tools I trust.<br /><em>Skills I sharpen.</em></h2><p>Full-stack engineering, system fundamentals, and creative tools brought together in one practical toolkit.</p></div></Reveal>
      <div className="skill-grid">{Object.entries(skillGroups).map(([group, items], index) => <Reveal key={group}><article><span>{String(index + 1).padStart(2, '0')}</span><h3>{group}</h3><ul>{items.map((item) => <li key={item}>{item}<i>●</i></li>)}</ul></article></Reveal>)}</div>
    </section>
  )
}
