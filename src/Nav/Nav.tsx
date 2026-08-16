import NavItem from './NavItem'

const NAV_ITEMS = [
  { sectionId: 'home', label: 'Home' },
  { sectionId: 'about', label: 'About' },
  { sectionId: 'experience', label: 'Experience' },
  { sectionId: 'projects', label: 'Projects' },
  { sectionId: 'skills', label: 'Skills' },
  { sectionId: 'contact', label: 'Contact' },
] as const

function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-10 text-white">
      <div className="flex items-center">
        <div className="text-xl font-bold">
          <h1>SOYEONG JOO</h1>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-between">
        {NAV_ITEMS.map(({ sectionId, label }) => (
          <NavItem key={sectionId} sectionId={sectionId}>
            {label}
          </NavItem>
        ))}
      </div>
    </div>
  )
}

export default Nav
