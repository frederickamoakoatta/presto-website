import { FaqChatHeader } from './FaqChatHeader'
import { FaqChatInput } from './FaqChatInput'
import { FaqChatMessages } from './FaqChatMessages'

export function FaqChatPanel({
  messages,
  quickReplies,
  isLoading,
  onMinimize,
  onClose,
  onSend,
  onSelectQuickReply,
}) {
  return (
    <div
      className="maestro-faq-chat__panel"
      role="dialog"
      aria-modal="true"
      aria-label="FAQ chat"
    >
      <FaqChatHeader onMinimize={onMinimize} onClose={onClose} />
      <FaqChatMessages
        messages={messages}
        quickReplies={quickReplies}
        isLoading={isLoading}
        onSelectQuickReply={onSelectQuickReply}
      />
      <FaqChatInput onSend={onSend} disabled={isLoading} />
    </div>
  )
}
