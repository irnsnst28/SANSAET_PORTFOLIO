import { Arrow } from '../components/Arrow'
import { Reveal } from '../components/Reveal'
import { services } from '../constants/portfolio'

export function Services() {
  return (
    <section className="section services" id="services">
      <Reveal><div className="section-kicker">02 / Services</div></Reveal>
      <Reveal><div className="section-heading"><h2>Technical depth.<br /><em>Creative clarity.</em></h2><p>End-to-end technical and creative capabilities for products that need to work reliably and communicate clearly.</p></div></Reveal>
      <div className="service-list">{services.map((service) => <Reveal key={service.number}><article><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><i><Arrow /></i></article></Reveal>)}</div>
    </section>
  )
}
