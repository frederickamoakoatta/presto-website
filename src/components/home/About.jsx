import { ABOUT } from '../../data/home'
import { BookingForm } from './BookingForm'

export function About() {
  return (
    <div id="how-it-works" className="about-area default-padding">
      <div className="container">
        <div className="row">
          <div className="about-items">
            <div className="col-md-7 info">
              <h3>{ABOUT.kicker}</h3>
              <h2>
                Until I discovered cooking I was never
                <br /> really interested in anything
              </h2>
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              <ul>
                {ABOUT.contacts.map((contact) => (
                  <li key={contact.label}>
                    <div className="icon">
                      <i className={contact.icon} />
                    </div>
                    <div className="info">
                      <h4>{contact.label}</h4>
                      <span>{contact.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-5 form">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
