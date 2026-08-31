export function FaqChatQuickReplies({ replies, onSelect, disabled }) {
  if (!replies.length) return null

  return (
    <div className="maestro-faq-chat__quick-replies" aria-label="Suggested replies">
      {replies.map((reply) => (
        <button
          key={reply.id}
          type="button"
          className="maestro-faq-chat__quick-reply"
          disabled={disabled}
          onClick={() => onSelect(reply)}
        >
          {reply.label}
        </button>
      ))}
    </div>
  )
}
