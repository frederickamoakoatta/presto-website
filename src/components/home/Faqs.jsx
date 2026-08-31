import { useState } from 'react'
import { FAQS } from '../../data/home'

export function Faqs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="faqs">
      <div className="container">
        <div className="faqs-heading">
          <p className="faqs-kicker">{FAQS.kicker}</p>
          <h2>{FAQS.title}</h2>
        </div>

        <div className="faqs-list">
          {FAQS.items.map((item, index) => {
            const isOpen = openIndex === index
            const number = String(index + 1).padStart(2, '0')

            return (
              <article key={item.question} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-number">{number}</span>
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    <i className={isOpen ? 'fas fa-minus' : 'fas fa-plus'} />
                  </span>
                </button>
                {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
