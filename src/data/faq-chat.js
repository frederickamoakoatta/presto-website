import { FAQS } from './home'

export const faqChatFaqs = FAQS.items.map((item, index) => ({
  id: `faq-${index + 1}`,
  question: item.question,
  answer: item.answer,
}))

export const faqChatCopy = {
  agentName: 'Presto',
  headerTitle: 'Chat with Presto',
  onlineStatus: 'We are online!',
  teaserGreeting: 'Hello — need help with Presto FAQs?',
  teaserYes: 'Yes, please!',
  teaserNo: 'No, thanks.',
  welcomeMessage:
    'Hi there! I can help answer questions about Presto — from POS features and offline resilience to hardware, payments, and data security.',
  inputPlaceholder: 'Enter your message...',
  sendLabel: 'Send message',
  openChatLabel: 'Open FAQ chat',
  minimizeLabel: 'Minimize chat',
  closeLabel: 'Close chat',
  typingLabel: 'Presto is typing',
  errorMessage: 'Something went wrong. Please try again or browse our FAQs.',
  viewAllFaqs: 'View all FAQs',
  viewAllFaqsHref: '#faqs',
  contactTeam: 'Talk to our team',
  contactHref: '#contact',
}

export const starterQuickReplies = [
  ...faqChatFaqs.map((faq) => ({
    id: faq.id,
    label: faq.question,
  })),
  {
    id: 'contact',
    label: faqChatCopy.contactTeam,
    href: faqChatCopy.contactHref,
  },
]

export const followUpQuickReplies = [
  {
    id: 'all-faqs',
    label: faqChatCopy.viewAllFaqs,
    href: faqChatCopy.viewAllFaqsHref,
  },
  {
    id: 'contact',
    label: faqChatCopy.contactTeam,
    href: faqChatCopy.contactHref,
  },
]
