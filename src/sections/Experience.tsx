import { Reveal } from '../components/Reveal'
import { experience } from '../constants/portfolio'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <Reveal><div className="section-kicker">05 / Experience</div></Reveal>
      <Reveal><div className="section-heading"><h2>Real systems.<br />Continuous <em>growth.</em></h2></div></Reveal>
      <div className="timeline">{experience.map((item) => <Reveal key={`${item.dates}-${item.role}`}><article><time>{item.dates}</time><div><h3>{item.role}</h3><span>{item.organization}</span><p>{item.description}</p></div></article></Reveal>)}</div>
    </section>
  )
}
