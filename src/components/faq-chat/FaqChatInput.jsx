import { useState } from 'react'
import { faqChatCopy } from '../../data/faq-chat'

export function FaqChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('')

  const submit = () => {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submit()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      submit()
    }
  }

  return (
    <form className="maestro-faq-chat__composer" onSubmit={handleSubmit}>
      <div className="maestro-faq-chat__composer-row">
        <textarea
          className="maestro-faq-chat__input"
          placeholder={faqChatCopy.inputPlaceholder}
          value={value}
          rows={1}
          disabled={disabled}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Message"
        />
        <button
          type="submit"
          className="maestro-faq-chat__send"
          aria-label={faqChatCopy.sendLabel}
          disabled={disabled || !value.trim()}
        >
          <i className="fas fa-arrow-up" aria-hidden="true" />
        </button>
      </div>
      <a href={faqChatCopy.viewAllFaqsHref} className="maestro-faq-chat__faqs-link">
        {faqChatCopy.viewAllFaqs}
      </a>
    </form>
  )
}
