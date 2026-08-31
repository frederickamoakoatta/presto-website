import { faqChatCopy } from '../../data/faq-chat'

export function FaqChatTeaser({ onAccept, onDismiss }) {
  return (
    <div className="maestro-faq-chat__teaser" role="complementary" aria-label="FAQ chat invitation">
      <p className="maestro-faq-chat__teaser-text">{faqChatCopy.teaserGreeting}</p>
      <div className="maestro-faq-chat__teaser-actions">
        <button type="button" className="maestro-faq-chat__teaser-link" onClick={onAccept}>
          {faqChatCopy.teaserYes}
        </button>
        <button type="button" className="maestro-faq-chat__teaser-link" onClick={onDismiss}>
          {faqChatCopy.teaserNo}
        </button>
      </div>
    </div>
  )
}
