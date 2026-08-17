import type { ReactNode } from 'react'
import { useScroll } from '../Main/ScrollContext'

type NavItemProps = {
  sectionId: string
  children: ReactNode
  light: boolean
}

function NavItem({ sectionId, children, light }: NavItemProps) {
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
          ? light
            ? 'text-[#020D24] font-semibold border-b-2 border-blue-500'
            : 'text-white font-semibold border-b-2 border-blue-500'
          : light
            ? 'text-[#020D24]/60 hover:text-[#020D24]'
            : 'text-white/60 hover:text-white',
      ].join(' ')}
    >
      {children}
    </a>
  )
}

export default NavItem
