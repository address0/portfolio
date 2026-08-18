import { useCallback, useEffect, useRef, useState } from 'react'
import './Intro.css'
import IntroOpening from './IntroOpening'

function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const revealIntro = useCallback(() => setIsRevealed(true), [])

  useEffect(() => {
    let animationFrame = 0

    const updateScene = () => {
      animationFrame = 0
      const section = sectionRef.current
      if (!section) return

      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const progress = Math.min(
        Math.max((window.scrollY - sectionTop) / section.offsetHeight, 0),
        1,
      )

      section.style.setProperty('--intro-scene-scale', `${1 + progress * 0.5}`)
      section.style.setProperty('--intro-scene-opacity', `${1 - progress * 0.7}`)
    }

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateScene)
      }
    }

    updateScene()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`intro-section relative min-h-[calc(100svh-4rem)] scroll-mt-16 snap-start overflow-hidden text-white ${isRevealed ? 'intro-section--revealed' : ''}`}
    >
      <IntroOpening onComplete={revealIntro} />
      <div className="intro-scene" aria-hidden="true">
        <img src="/intro-background.png" alt="" />
      </div>
      <div className="intro-content">
        <div className="relative z-10 w-2/5 flex justify-center flex-col pl-20 pr-8 gap-4">
          <p className="text-sm text-blue-500 tracking-[0.2em]">FINACIAL IT DEVELOPER</p>
          <h2 className="text-4xl font-bold">금융IT 개발 / 운영</h2>
          <h2 className="text-8xl font-bold">주소영</h2>
          <hr className='w-1/3 my-4 border-[#315597]'/>
          <p className='text-sm'>소제목 어쩌구저쩌구 ... 뭘 써야할까 </p>
          <p className='text-sm'>내가 생각한 디자인은 이게 아닌데~!!!! </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-[#315597] bg-gradient-to-br from-[#315597] to-[#1D335A] px-5 text-lg font-semibold text-white shadow-sm transition duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              이력서 다운로드
              <span className="material-symbols-outlined !text-base ml-2">download</span>
            </button>
            <a
              href="https://github.com/address0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-white/70 bg-white/10 px-5 text-lg font-semibold text-white shadow-sm backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <img src="/icon/github.png" alt="" className="h-5 w-5" />
              GitHub
              <span className="material-symbols-outlined !text-base ml-2">open_in_new</span>
            </a>
          </div>
        </div>
        <div className="relative z-10 w-3/5 my-16 mr-16 gap-4 grid grid-flow-col grid-rows-4">
          <section className="flex col-span-3 items-center justify-center rounded-lg border border-white/40 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm">
            기술 스택
          </section>
          <section className='flex row-span-2 items-center justify-center rounded-lg bg-[#315597]/50 backdrop-blur-sm'>
            개발자 포부
          </section>
          <section className='flex col-span-2 row-span-2 items-center justify-center rounded-lg bg-white/10 backdrop-blur-lg'>
            차트자리
          </section>
        </div>
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce flex justify-center items-center gap-2 flex-col">
          <div className="flex justify-center items-center border-1 border-white rounded-full w-10 h-10">
            <span className="material-symbols-outlined">arrow_downward</span>
          </div>
          <span className="text-sm">SCROLL</span>
        </div>
      </div>
    </section>
  )
}

export default Intro
