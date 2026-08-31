import { CHEF_SOCIAL, CHEFS } from '../../data/home'
import { SectionHeading } from '../ui/SectionHeading'

export function Chefs() {
  return (
    <div id="chefs" className="chef-area default-padding bottom-less">
      <div className="container">
        <div className="row">
          <SectionHeading
            kicker="Chefs"
            title="Meet our experts"
            text="While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old"
          />
        </div>
        <div className="row">
          <div className="chef-items">
            {CHEFS.map((chef) => (
              <div key={chef.name} className="col-md-4 single-item">
                <div className="item">
                  <div className="thumb">
                    <img src={chef.image} alt={chef.name} />
                  </div>
                  <div className="info">
                    <div className="overlay">
                      <h4>{chef.name}</h4>
                      <span>{chef.role}</span>
                    </div>
                    <div className="content">
                      <p>{chef.bio}</p>
                      <ul>
                        {CHEF_SOCIAL.map((social) => (
                          <li key={social.name} className={social.name}>
                            <a href="#chefs" aria-label={`${chef.name} on ${social.name}`}>
                              <i className={social.icon} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
