import { FINAL_CTA } from '../../data/home'
import { DemoForm } from './DemoForm'

export function FinalCta() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-copy">
            <p className="cta-kicker">{FINAL_CTA.kicker}</p>
            <h2>{FINAL_CTA.title}</h2>
            <p>{FINAL_CTA.text}</p>
          </div>
          <div id="contact-form" className="cta-form">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  )
}
