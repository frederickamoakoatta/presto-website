import { useEffect, useState } from 'react'

export function Preloader({ onDone }) {
  const [phase, setPhase] = useState('in')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const leave = window.setTimeout(() => setPhase('out'), 1500)
    const done = window.setTimeout(() => {
      document.body.style.overflow = ''
      setPhase('gone')
      onDone?.()
    }, 2050)

    return () => {
      document.body.style.overflow = ''
      window.clearTimeout(leave)
      window.clearTimeout(done)
    }
  }, [onDone])

  if (phase === 'gone') return null

  return (
    <div className={`page-loader${phase === 'out' ? ' is-leaving' : ''}`}>
      <div className="page-loader-inner">
        <div className="page-loader-brand">
          Presto <sup className="brand-pos">POS</sup>
        </div>
        <div className="page-loader-track" aria-hidden="true">
          <span className="page-loader-fill" />
        </div>
      </div>
    </div>
  )
}
