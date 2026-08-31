import { useEffect, useState } from 'react'
import { HERO, HERO_SLIDES, IMAGES } from '../../data/home'

export function Banner() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (HERO_SLIDES.length < 2) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_SLIDES.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="banner-area responsive-auto-height text-light bg-fixed">
      <div className="banner-slides" aria-hidden="true">
        {HERO_SLIDES.map((src, index) => (
          <div
            key={src}
            className={`banner-slide${index === activeIndex ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="banner-overlay" />

      <div className="banner-hero">
        <div className="box-table">
          <div className="box-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="content">
                    {/* <h2>{HERO.kicker}</h2> */}
                    <h1>
                      {HERO.title[0]}
                      <br />
                      {HERO.title[1]}
                    </h1>
                    <p>{HERO.text}</p>
                    <a className="btn btn-theme effect btn-md" href={HERO.ctaHref}>
                      {HERO.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wavesshape">
        <img src={IMAGES.shape} alt="" />
      </div>
    </div>
  )
}
