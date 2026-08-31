import { Children, useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export function Carousel({
  children,
  items = 1,
  itemsTablet = 2,
  itemsDesktop = 3,
  autoplay = false,
  interval = 5000,
  nav = true,
  dots = false,
  className = '',
  gap = 0,
}) {
  const slides = useMemo(() => Children.toArray(children), [children])
  const isDesktop = useMediaQuery('(min-width: 1000px)')
  const isTablet = useMediaQuery('(min-width: 600px)')
  const visible = isDesktop ? itemsDesktop : isTablet ? itemsTablet : items
  const maxIndex = Math.max(0, slides.length - visible)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (!autoplay || slides.length <= visible) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, interval)

    return () => window.clearInterval(timer)
  }, [autoplay, interval, maxIndex, slides.length, visible])

  const goTo = (next) => {
    setIndex(Math.min(Math.max(next, 0), maxIndex))
  }

  return (
    <div className={`react-carousel ${className}`.trim()}>
      <div className="react-carousel-viewport">
        <div
          className="react-carousel-track"
          style={{
            gap,
            transform: `translateX(calc(-${index} * ((100% - ${(visible - 1) * gap}px) / ${visible} + ${gap}px)))`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="react-carousel-slide"
              style={{ flex: `0 0 calc((100% - ${(visible - 1) * gap}px) / ${visible})` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {nav && slides.length > visible ? (
        <div className="react-carousel-nav">
          <button type="button" className="is-prev" onClick={() => goTo(index - 1)} aria-label="Previous">
            <i className="fa fa-angle-left" />
          </button>
          <button type="button" className="is-next" onClick={() => goTo(index + 1)} aria-label="Next">
            <i className="fa fa-angle-right" />
          </button>
        </div>
      ) : null}

      {dots ? (
        <div className="react-carousel-dots">
          {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              className={dotIndex === index ? 'is-active' : ''}
              onClick={() => goTo(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
