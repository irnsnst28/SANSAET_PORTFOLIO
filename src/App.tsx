import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { usePortfolioMotion } from './hooks/usePortfolioMotion'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'
import { VideoShowcase } from './sections/VideoShowcase'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  usePortfolioMotion()
  useEffect(() => { const timer = setTimeout(() => setLoaded(true), 350); return () => clearTimeout(timer) }, [])

  return (
    <>
      <div className={loaded ? 'loader done' : 'loader'} aria-hidden="true"><span>AS.</span></div>
      <div className="progress" id="progress" aria-hidden="true" />
      <Header />
      <main><Hero /><About /><Services /><Projects /><VideoShowcase /><Skills /><Experience /><Contact /></main>
      <Footer />
    </>
  )
}
