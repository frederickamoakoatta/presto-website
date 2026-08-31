export function NavDropdown({ item, isOpen, onToggle, onNavigate }) {
  const hasChildren = Boolean(item.children?.length)

  if (!hasChildren) {
    return (
      <li>
        <a href={item.href} onClick={onNavigate}>
          {item.label}
        </a>
      </li>
    )
  }

  return (
    <li className={`dropdown${isOpen ? ' on open' : ''}`}>
      <a
        href={item.href}
        className="dropdown-toggle"
        onClick={(event) => {
          event.preventDefault()
          onToggle()
        }}
      >
        {item.label}
      </a>
      <ul className="dropdown-menu">
        {item.children.map((child) =>
          child.children ? (
            <NavDropdown
              key={child.label}
              item={child}
              isOpen={false}
              onToggle={() => {}}
              onNavigate={onNavigate}
            />
          ) : (
            <li key={child.label}>
              <a href={child.href} onClick={onNavigate}>
                {child.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </li>
  )
}
