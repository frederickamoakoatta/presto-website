import { SIDE_MENU } from '../../data/home'

export function SideMenu({ open, onClose }) {
  return (
    <>
      <div className={`side${open ? ' on' : ''}`}>
        <a
          href="#close-side"
          className="close-side"
          onClick={(event) => {
            event.preventDefault()
            onClose()
          }}
        >
          <i className="fa fa-times" />
        </a>
        <div className="widget">
          <h4 className="title">About Presto</h4>
          <p>{SIDE_MENU.about}</p>
        </div>
        <div className="widget">
          <h4 className="title">Explore</h4>
          <ul>
            {SIDE_MENU.links.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={onClose}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="body-overlay" onClick={onClose} />
    </>
  )
}
