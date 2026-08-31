import { useEffect, useState } from 'react'
import { CAPABILITIES } from '../../data/home'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const GAP = 24

export function Capabilities() {
  const isDesktop = useMediaQuery('(min-width: 1000px)')
  const isTablet = useMediaQuery('(min-width: 768px)')
  const isMobile = !isTablet
  const visible = isDesktop ? 3 : isTablet ? 2 : 1
  const maxIndex = Math.max(0, CAPABILITIES.groups.length - visible)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const goTo = (next) => {
    setIndex(Math.min(Math.max(next, 0), maxIndex))
  }

  return (
    <section id="capabilities" className="cap-section">
      <div className="container">
        <div className="cap-heading">
          <p className="cap-kicker">{CAPABILITIES.kicker}</p>
          <h2>{CAPABILITIES.title}</h2>
          <p>{CAPABILITIES.intro}</p>
        </div>

        <div
          className={`cap-carousel${isMobile ? ' is-swipe' : ''}`}
          style={{
            '--cap-gap': `${GAP}px`,
            '--cap-visible': visible,
            '--cap-index': isMobile ? 0 : index,
          }}
        >
          {isMobile ? null : (
            <button
              type="button"
              className="cap-nav"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label="Previous capabilities"
            >
              <i className="fa fa-angle-left" />
            </button>
          )}

          <div className="cap-viewport">
            <div className="cap-track" style={{ gap: GAP }}>
              {CAPABILITIES.groups.map((group) => (
                <article key={group.title} className="cap-card">
                  <span className="cap-card-icon" aria-hidden="true">
                    <i className={group.icon} />
                  </span>
                  <h3>{group.title}</h3>
                  {group.subtitle ? <p className="cap-card-sub">{group.subtitle}</p> : null}
                  <p className="cap-card-intro">{group.intro}</p>
                  <ul>
                    {group.points.map((point) => (
                      <li key={point.title}>{point.title}</li>
                    ))}
                  </ul>
                  <a className="cap-card-link" href="#contact">
                    Learn more <i className="fas fa-arrow-right" />
                  </a>
                </article>
              ))}
            </div>
          </div>

          {isMobile || maxIndex === 0 ? null : (
            <div className="cap-rail" aria-hidden="true">
              <span
                className="cap-rail-thumb"
                style={{
                  height: `${100 / (maxIndex + 1)}%`,
                  top: `${(index / (maxIndex + 1)) * 100}%`,
                }}
              />
            </div>
          )}

          {isMobile ? null : (
            <button
              type="button"
              className="cap-nav"
              onClick={() => goTo(index + 1)}
              disabled={index === maxIndex}
              aria-label="Next capabilities"
            >
              <i className="fa fa-angle-right" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
