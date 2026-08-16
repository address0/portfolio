import { createContext, useContext, type ReactNode } from 'react'

type ScrollContextValue = {
  activeSection: string
  scrollTo: (sectionId: string) => void
}

const ScrollContext = createContext<ScrollContextValue | null>(null)

export function ScrollProvider({
  activeSection,
  scrollTo,
  children,
}: ScrollContextValue & { children: ReactNode }) {
  return (
    <ScrollContext.Provider value={{ activeSection, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within ScrollProvider')
  }
  return context
}
