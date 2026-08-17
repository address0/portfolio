import NavItem from './NavItem'
import { useScroll } from '../Main/ScrollContext'

const NAV_ITEMS = [
  { sectionId: 'home', label: 'Home' },
  { sectionId: 'about', label: 'About' },
  { sectionId: 'experience', label: 'Experience' },
  { sectionId: 'projects', label: 'Projects' },
  { sectionId: 'skills', label: 'Skills' },
  { sectionId: 'contact', label: 'Contact' },
] as const

const NAV_STYLES: Record<string, { background: string; light: boolean }> = {
  home: { background: 'bg-[#020D24]', light: false },
  about: { background: 'bg-white', light: true },
  experience: { background: 'bg-white', light: true },
  projects: { background: 'bg-white', light: true },
  skills: { background: 'bg-white', light: true },
  contact: { background: 'bg-white', light: true },
}

function Nav() {
  const { activeSection } = useScroll()
  const navStyle = NAV_STYLES[activeSection] ?? NAV_STYLES.home

  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-10 transition-colors duration-300 ${navStyle.background} ${navStyle.light ? 'text-[#020D24]' : 'text-white'}`}
    >
      <div className="flex items-center">
        <div className="text-xl font-bold">
          <h1>SOYEONG JOO</h1>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-between">
        {NAV_ITEMS.map(({ sectionId, label }) => (
          <NavItem key={sectionId} sectionId={sectionId} light={navStyle.light}>
            {label}
          </NavItem>
        ))}
      </div>
    </div>
  )
}

export default Nav
