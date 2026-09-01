import { FOOTER } from '../../data/home'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="f-items title-effect text-light default-padding">
            <div className="col-md-5 col-sm-6 item">
              <div className="f-item address">
                <BrandLogo className="footer-brand" />
                <p>{FOOTER.blurb}</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="f-item link">
                <h4>Explore</h4>
                <ul>
                  {FOOTER.links.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 item">
              <div className="f-item link">
                <h4>Talk to us</h4>
                <ul>
                  <li>
                    <a href="#contact">Request a Strategic Live Demo</a>
                  </li>
                  <li>
                    <a href="#contact">Speak with our team</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} Presto. Powered by theSOFTtribe.</p>
            </div>
            <div className="col-md-6 text-right link">
              <ul>
                {FOOTER.legal.map((item) => (
                  <li key={item}>
                    <a href="#contact">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
