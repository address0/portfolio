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
  const initialHash = window.location.hash.slice(1)
  const initialSection = SECTION_IDS.includes(
    initialHash as (typeof SECTION_IDS)[number],
  )
    ? initialHash
    : SECTION_IDS[0]
  const activeSection = useScrollSpy([...SECTION_IDS], initialSection)

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (initialSection !== SECTION_IDS[0]) {
      requestAnimationFrame(() => scrollTo(initialSection))
    }
  }, [])

  useEffect(() => {
    const nextHash = `#${activeSection}`
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', nextHash)
    }
  }, [activeSection])

  return (
    <ScrollProvider activeSection={activeSection} scrollTo={scrollTo}>
      <Nav />
      <main className="pt-16 gowun-dodum-regular">
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
