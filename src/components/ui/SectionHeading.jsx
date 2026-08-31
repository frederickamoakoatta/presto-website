export function SectionHeading({ kicker, title, text }) {
  return (
    <div className="col-md-8 col-md-offset-2">
      <div className="site-heading text-center">
        <h3>{kicker}</h3>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
    </div>
  )
}
