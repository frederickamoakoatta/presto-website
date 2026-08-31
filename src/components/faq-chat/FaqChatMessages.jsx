import { useEffect, useRef } from 'react'
import { faqChatCopy } from '../../data/faq-chat'
import { FaqChatMessage } from './FaqChatMessage'
import { FaqChatQuickReplies } from './FaqChatQuickReplies'

export function FaqChatMessages({ messages, quickReplies, isLoading, onSelectQuickReply }) {
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isLoading, quickReplies])

  return (
    <div className="maestro-faq-chat__messages" aria-live="polite">
      {messages.map((message) => (
        <FaqChatMessage key={message.id} message={message} />
      ))}

      {isLoading ? (
        <div className="maestro-faq-chat__typing" aria-label={faqChatCopy.typingLabel}>
          <span />
          <span />
          <span />
        </div>
      ) : (
        <FaqChatQuickReplies replies={quickReplies} onSelect={onSelectQuickReply} />
      )}

      <div ref={endRef} />
    </div>
  )
}
