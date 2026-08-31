import { WHO_ITS_FOR } from '../../data/home'

const PERSONA_ICONS = {
  coffee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 2v2M10 2v2M14 2v2" />
    </svg>
  ),
  store: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9 5.25 4h13.5L21 9" />
      <path d="M3 9v11h18V9" />
      <path d="M3 9h18" />
      <path d="M9 20v-7h6v7" />
    </svg>
  ),
  dining: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7a3 3 0 0 0 6 0V2" />
      <path d="M6 9v13" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6h5Z" />
      <path d="M16 15v8" />
    </svg>
  ),
}

export function WhoItsFor() {
  return (
    <section id="who" className="who">
      <div
        className="who-media"
        role="img"
        aria-label="Restaurant dining room"
      />
      <div className="who-panel">
        <div className="who-heading">
          <p className="who-kicker">{WHO_ITS_FOR.kicker}</p>
          <h2>{WHO_ITS_FOR.title}</h2>
        </div>

        <div className="who-grid">
          {WHO_ITS_FOR.personas.map((persona) => (
            <article key={persona.title} className="who-card">
              <span className="who-icon" aria-hidden="true">
                {PERSONA_ICONS[persona.icon]}
              </span>
              <h4>{persona.title}</h4>
              <p>{persona.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
