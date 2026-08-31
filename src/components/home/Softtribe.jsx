import { SOFTTRIBE } from '../../data/home'

export function Softtribe() {
  return (
    <section id="softtribe" className="softtribe">
      <div className="container">
        <div className="softtribe-inner">
          <p className="softtribe-kicker">{SOFTTRIBE.kicker}</p>
          <h2>{SOFTTRIBE.title}</h2>
          <div className="softtribe-copy">
            {SOFTTRIBE.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
