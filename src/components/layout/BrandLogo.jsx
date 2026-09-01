import { IMAGES } from '../../data/home'

export function BrandLogo({ href = '#home', className = '', onClick }) {
  return (
    <a className={`brand-logo ${className}`.trim()} href={href} onClick={onClick} aria-label="Presto">
      <img src={IMAGES.logo} alt="Presto" />
    </a>
  )
}
