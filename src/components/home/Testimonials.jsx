import { TESTIMONIALS } from '../../data/home'
import { Carousel } from '../ui/Carousel'
import { Rating } from '../ui/Rating'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <div className="testimonials-area bg-gray carousel-shadow default-padding">
      <div className="container">
        <div className="row">
          <SectionHeading
            kicker="Reviews"
            title="Testimonials"
            text="While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old"
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="testimonial-items text-center">
              <Carousel
                className="testimonials-carousel"
                items={1}
                itemsTablet={2}
                itemsDesktop={2}
                autoplay
                nav={false}
                dots
                gap={30}
              >
                {TESTIMONIALS.map((item, index) => (
                  <div key={`${item.name}-${index}`} className="item">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <div className="thumb">
                      <img src={item.image} alt={item.name} />
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="clients-info">
                      <h5>{item.name}</h5>
                      <Rating value={item.rating} />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
