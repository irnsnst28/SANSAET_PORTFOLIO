import { Arrow } from '../components/Arrow'
import { Reveal } from '../components/Reveal'

export function About() {
  return (
    <section className="section about" id="about">
      <Reveal><div className="section-kicker">01 / About</div></Reveal>
      <Reveal><div className="about-main">
        <h2>Turning ideas into <em>reliable digital products.</em></h2>
        <div>
          <p className="large-copy">I specialize in full-stack application development, workflow automation, and responsive user experiences.</p>
          <p>My experience includes institutional systems, research management platforms, AI-powered applications, and modern web interfaces. Alongside development, I create motion graphics and promotional videos that help businesses communicate through visual storytelling.</p>
          <p>I enjoy transforming complex processes into simple, intuitive digital solutions.</p>
          <a className="inline-link" href="#experience">More about my journey <Arrow /></a>
        </div>
      </div></Reveal>
      <Reveal><div className="stats"><div><strong>20+</strong><span>Projects completed</span></div><div><strong>3+</strong><span>Years creating</span></div><div><strong>15+</strong><span>Technical tools</span></div><div><strong>100%</strong><span>Built with care</span></div></div></Reveal>
    </section>
  )
}
