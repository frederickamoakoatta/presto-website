import { WHY_PRESTO } from '../../data/home'

export function WhyPresto() {
  return (
    <section id="why-presto" className="why-split">
      <div className="container">
        <div className="row why-split-row">
          <div className="col-md-7 why-split-media">
            <div className="why-device">
              <img
                className="why-device-main"
                src="/features/feature-01.png"
                alt="Presto POS dashboard"
              />
              <img
                className="why-device-float why-device-float-b"
                src="/features/feature-03.png"
                alt="Presto payment confirmation"
              />
            </div>
          </div>
          <div className="col-md-5 why-split-copy">
            <p className="why-split-kicker">{WHY_PRESTO.kicker}</p>
            <h2>{WHY_PRESTO.title}</h2>
            <p>{WHY_PRESTO.intro}</p>
            <p>{WHY_PRESTO.closer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
