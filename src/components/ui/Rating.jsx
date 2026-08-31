export function Rating({ value }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index + 1 <= value
    const half = !filled && index + 0.5 === value

    return (
      <i
        key={index}
        className={half ? 'fas fa-star-half-alt' : filled ? 'fas fa-star' : 'far fa-star'}
      />
    )
  })

  return <div className="rating">{stars}</div>
}
