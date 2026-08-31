import { SERVICES } from '../../data/home'
import { Carousel } from '../ui/Carousel'

export function Services() {
  return (
    <div className="services-area item-bg bg-gray">
      <div className="container-full">
        <div className="row">
          <div className="services-items text-center text-light">
            <Carousel className="services-carousel" items={1} itemsTablet={2} itemsDesktop={3} autoplay>
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="item bg-cover"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="box">
                    <i className={service.icon} />
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
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
