import { faqChatCopy } from '../../data/faq-chat'

export function FaqChatLauncher({ hasUnread, onClick }) {
  return (
    <button
      type="button"
      className="maestro-faq-chat__launcher"
      aria-label={faqChatCopy.openChatLabel}
      onClick={onClick}
    >
      <i className="fas fa-comments" aria-hidden="true" />
      {hasUnread ? <span className="maestro-faq-chat__badge" aria-hidden="true">1</span> : null}
    </button>
  )
}
