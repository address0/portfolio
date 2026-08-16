import type { ReactNode } from 'react'
import { useScroll } from '../Main/ScrollContext'

type NavItemProps = {
  sectionId: string
  children: ReactNode
}

function NavItem({ sectionId, children }: NavItemProps) {
  const { activeSection, scrollTo } = useScroll()
  const isActive = activeSection === sectionId

  return (
    <a
      href={`#${sectionId}`}
      onClick={(event) => {
        event.preventDefault()
        scrollTo(sectionId)
      }}
      className={[
        'mx-4 h-full flex items-center transition-colors duration-200',
        isActive
          ? 'text-white font-semibold border-b-2 border-blue-500'
          : 'text-white/60 hover:text-white',
      ].join(' ')}
    >
      {children}
    </a>
  )
}

export default NavItem
