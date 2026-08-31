import { OFFER_COPY, OFFERS } from '../../data/home'
import { Carousel } from '../ui/Carousel'

export function Offers() {
  return (
    <div className="offer-area">
      <div className="container-full">
        <div className="row">
          <div className="offer-items">
            <Carousel
              className="offer-carousel"
              items={1}
              itemsTablet={1}
              itemsDesktop={1}
              nav
            >
              {OFFERS.map((offer) => (
                <div key={offer.title} className="item">
                  <div
                    className="col-md-6 thumb bg-cover"
                    style={{ backgroundImage: `url(${offer.image})` }}
                  >
                    <div className="price">
                      <h4>
                        Price <span>{offer.price}</span>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6 info">
                    <h3>Special Offer</h3>
                    <h2>{offer.title}</h2>
                    <span>{offer.items}</span>
                    <p>{OFFER_COPY}</p>
                    <a className="btn btn-dark border btn-md" href="#how-it-works">
                      Book a table
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
