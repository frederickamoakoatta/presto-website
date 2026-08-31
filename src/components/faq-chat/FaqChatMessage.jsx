export function FaqChatMessage({ message }) {
  const isUser = message.role === 'user'

  return (
    <div className={`maestro-faq-chat__message${isUser ? ' is-user' : ' is-assistant'}`}>
      <div className="maestro-faq-chat__bubble">{message.content}</div>
    </div>
  )
}
