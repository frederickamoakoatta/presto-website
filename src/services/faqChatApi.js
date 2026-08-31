import { faqChatCopy, faqChatFaqs, followUpQuickReplies, starterQuickReplies } from '../data/faq-chat'

const API_BASE_URL = import.meta.env.VITE_FAQ_CHAT_API_URL || 'https://api-dev.chat.emit-labs.com'
const BOT_SLUG = import.meta.env.VITE_FAQ_CHAT_BOT || 'maestro'

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function normalizeText(value) {
  return value.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

function isValidUuid(value) {
  return UUID_PATTERN.test(value)
}

export function ensureFaqChatClientId(existing) {
  if (existing && isValidUuid(existing)) {
    return existing
  }

  return crypto.randomUUID()
}

function getChatEndpoint() {
  if (!API_BASE_URL?.trim()) {
    return undefined
  }

  const base = API_BASE_URL.replace(/\/$/, '')
  return `${base}/api/v1/bots/${BOT_SLUG}/chat`
}

function fallbackQuickReplies() {
  return [
    { id: 'all-faqs', label: faqChatCopy.viewAllFaqs, href: faqChatCopy.viewAllFaqsHref },
    { id: 'contact', label: faqChatCopy.contactTeam, href: faqChatCopy.contactHref },
  ]
}

function mapActionsToQuickReplies(actions) {
  if (!actions?.length) {
    return undefined
  }

  return actions.map((action, index) => ({
    id: `action-${action.type}-${index}`,
    label: action.label,
    href: action.href,
  }))
}

function mapEmitChatResponse(body, clientId) {
  const actionReplies = mapActionsToQuickReplies(body.actions)

  return {
    reply: body.answer,
    sessionId: clientId,
    quickReplies:
      actionReplies ??
      (body.outcome === 'fallback' ? fallbackQuickReplies() : followUpQuickReplies),
  }
}

function buildWelcomeResponse(sessionId) {
  return {
    reply: faqChatCopy.welcomeMessage,
    sessionId: ensureFaqChatClientId(sessionId),
    quickReplies: starterQuickReplies,
  }
}

function findFaqMatch(message) {
  const normalized = normalizeText(message)

  return faqChatFaqs.find((faq) => {
    const question = normalizeText(faq.question)
    const answer = normalizeText(faq.answer)
    return (
      normalized.includes(question) ||
      question.includes(normalized) ||
      normalized.split(' ').some((word) => word.length > 3 && (question.includes(word) || answer.includes(word)))
    )
  })
}

async function sendMockFaqChatMessage(payload) {
  await new Promise((resolve) => window.setTimeout(resolve, 600))

  if (payload.message === '__welcome__') {
    return buildWelcomeResponse(payload.sessionId)
  }

  const matched = findFaqMatch(payload.message)
  if (matched) {
    return {
      reply: matched.answer,
      sessionId: ensureFaqChatClientId(payload.sessionId),
      quickReplies: followUpQuickReplies,
    }
  }

  return {
    reply:
      'I could not find a precise answer to that. You can browse all FAQs on this page or contact our team for personalised help.',
    sessionId: ensureFaqChatClientId(payload.sessionId),
    quickReplies: fallbackQuickReplies(),
  }
}

async function sendRestFaqChatMessage(payload) {
  const endpoint = getChatEndpoint()
  if (!endpoint) {
    throw new Error('FAQ chat API URL is not configured')
  }

  const clientId = ensureFaqChatClientId(payload.sessionId)

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      question: payload.message,
    }),
  })

  if (!response.ok) {
    throw new Error(`FAQ chat API responded with ${response.status}`)
  }

  const body = await response.json()
  return mapEmitChatResponse(body, clientId)
}

export async function sendFaqChatMessage(payload) {
  if (payload.message === '__welcome__') {
    return buildWelcomeResponse(payload.sessionId)
  }

  const endpoint = getChatEndpoint()
  if (!endpoint) {
    return sendMockFaqChatMessage(payload)
  }

  try {
    return await sendRestFaqChatMessage(payload)
  } catch {
    return sendMockFaqChatMessage(payload)
  }
}
