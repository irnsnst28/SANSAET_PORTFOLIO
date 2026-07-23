import { Arrow } from '../components/Arrow'
import { Reveal } from '../components/Reveal'

export function VideoShowcase() {
  return (
    <section className="video-strip" aria-label="Video editing portfolio">
      <Reveal><div className="video-copy"><span className="section-kicker">Video / Motion</span><h2>Every frame<br />earns its place.</h2><p>From social-first cuts to promotional films, I edit for attention, emotion, and a story that stays with the viewer.</p><a className="button light" href="#contact">Plan an edit <Arrow /></a></div></Reveal>
      <Reveal><div className="frames"><div className="frame f1"><span>COMMERCIAL</span><b>01:24:08</b></div><div className="frame f2"><a href="#contact" aria-label="Ask about the video showreel">▶</a><span>SHOWREEL ’26</span></div><div className="frame f3"><span>MOTION</span><b>04:18:12</b></div></div></Reveal>
    </section>
  )
}
