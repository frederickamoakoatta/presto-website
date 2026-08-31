import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../../data/home'
import { NavDropdown } from './NavDropdown'
import { SideMenu } from './SideMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sideOpen, setSideOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('on-side', sideOpen)
    return () => document.body.classList.remove('on-side')
  }, [sideOpen])

  const closeMenus = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header id="home">
      <nav
        className={`navbar navbar-default navbar-fixed dark bootsnav shadow-less${
          scrolled ? ' sticked' : ' navbar-transparent'
        }`}
      >
        <div className="container">
          <div className="attr-nav">
            <ul>
              <li className="side-menu">
                <a
                  href="#side-menu"
                  onClick={(event) => {
                    event.preventDefault()
                    setSideOpen(true)
                  }}
                >
                  <i className="fa fa-bars" />
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand brand-text" href="#home">
              Presto <sup className="brand-pos">POS</sup>
            </a>
          </div>

          <div className={`collapse navbar-collapse${menuOpen ? ' in' : ''}`} id="navbar-menu">
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

        <SideMenu open={sideOpen} onClose={() => setSideOpen(false)} />
      </nav>
    </header>
  )
}
