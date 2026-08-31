import { faqChatCopy } from '../../data/faq-chat'

export function FaqChatHeader({ onMinimize, onClose }) {
  return (
    <div className="maestro-faq-chat__header">
      <div className="maestro-faq-chat__header-top">
        <div className="maestro-faq-chat__agent">
          <span className="maestro-faq-chat__avatar" aria-hidden="true">
            <i className="fas fa-comments" />
          </span>
          <div>
            <p className="maestro-faq-chat__agent-name">{faqChatCopy.headerTitle}</p>
            <p className="maestro-faq-chat__agent-status">{faqChatCopy.onlineStatus}</p>
          </div>
        </div>
        <div className="maestro-faq-chat__header-actions">
          <button
            type="button"
            className="maestro-faq-chat__icon-btn"
            aria-label={faqChatCopy.minimizeLabel}
            onClick={onMinimize}
          >
            <i className="fa fa-angle-down" />
          </button>
          <button
            type="button"
            className="maestro-faq-chat__icon-btn"
            aria-label={faqChatCopy.closeLabel}
            onClick={onClose}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    </div>
  )
}
