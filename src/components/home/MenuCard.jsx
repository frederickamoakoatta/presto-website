export function MenuCard({ item }) {
  return (
    <div className={`item-single pf-item ${item.categories.join(' ')}`}>
      <div className="item">
        <div className="thumb">
          <a href="#menu">
            <img src={item.image} alt={item.name} />
          </a>
          <div className="price">
            <h5>{item.price}</h5>
          </div>
        </div>
        <div className="info">
          <h4>
            <a href="#menu">{item.name}</a>
          </h4>
          <span>{item.ingredients}</span>
          <p>
            Considered introduced themselves mr to discretion at. Means among saw hopes for. Death
            mirth in oh learn he equal on.
          </p>
          <div className="button">
            <a href="#how-it-works">Order Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}
