import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../../data/home'
import { BrandLogo } from './BrandLogo'
import { NavDropdown } from './NavDropdown'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-locked', menuOpen)
    return () => document.body.classList.remove('nav-locked')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const closeMenus = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header id="home" className={menuOpen ? 'is-menu-open' : undefined}>
      <nav
        className={`navbar navbar-default navbar-fixed dark bootsnav shadow-less${
          scrolled ? ' sticked' : ' navbar-transparent'
        }`}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className={`nav-burger${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="nav-burger-box" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
            <BrandLogo className="navbar-brand" onClick={closeMenus} />
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              {NAV_ITEMS.map((item) => (
                <NavDropdown
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onToggle={() =>
                    setOpenDropdown((current) => (current === item.label ? null : item.label))
                  }
                  onNavigate={closeMenus}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`nav-overlay${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="nav-overlay-nav" aria-label="Mobile">
          <ul className="nav-overlay-list">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.label}>
                <a href={item.href} onClick={closeMenus}>
                  <span className="nav-overlay-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="nav-overlay-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-theme effect btn-md nav-overlay-cta" href="#contact" onClick={closeMenus}>
          Schedule Your Demo Now
        </a>
      </div>
    </header>
  )
}
