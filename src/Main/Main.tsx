import { useEffect } from 'react'
import Nav from '../Nav/Nav'
import Intro from '../Intro/Intro'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import { ScrollProvider } from './ScrollContext'
import { useScrollSpy } from './useScrollSpy'

export const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'contact',
] as const

function Main() {
  const activeSection = useScrollSpy([...SECTION_IDS])

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', `#${sectionId}`)
  }

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && SECTION_IDS.includes(hash as (typeof SECTION_IDS)[number])) {
      requestAnimationFrame(() => scrollTo(hash))
    }
  }, [])

  return (
    <ScrollProvider activeSection={activeSection} scrollTo={scrollTo}>
      <Nav />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </ScrollProvider>
  )
}

export default Main
