import { useEffect, useRef, useState } from 'react'

export function NiceSelect({ name, value, options, onChange }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const selected = options.find((option) => option.value === value) ?? options[0]

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  return (
    <div ref={rootRef} className={`nice-select${open ? ' open' : ''}`} onClick={() => setOpen((current) => !current)}>
      <span className="current">{selected.label}</span>
      <ul className="list">
        {options.map((option) => (
          <li
            key={option.value}
            className={`option${option.value === value ? ' selected' : ''}`}
            onClick={(event) => {
              event.stopPropagation()
              onChange(name, option.value)
              setOpen(false)
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
