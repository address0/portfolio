import { useEffect, useState } from 'react'

const OPENING_COPY = ['금융 IT로', '더 나은 흐름을 만듭니다.']

type IntroOpeningProps = {
  onComplete: () => void
}

function IntroOpening({ onComplete }: IntroOpeningProps) {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const leavingTimer = window.setTimeout(() => setIsLeaving(true), 1700)
    const completeTimer = window.setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 3000)

    return () => {
      window.clearTimeout(leavingTimer)
      window.clearTimeout(completeTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      className={`intro-opening${isLeaving ? ' intro-opening--leaving' : ''}`}
      aria-hidden="true"
    >
      <div className="intro-opening__panel intro-opening__panel--left" />
      <div className="intro-opening__panel intro-opening__panel--right" />
      <p className="intro-opening__copy">
        {OPENING_COPY.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </div>
  )
}

export default IntroOpening
