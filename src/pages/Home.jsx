import { useCallback, useState } from 'react'
import { Banner } from '../components/home/Banner'
import { Capabilities } from '../components/home/Capabilities'
import { ComingSoon } from '../components/home/ComingSoon'
import { Faqs } from '../components/home/Faqs'
import { FinalCta } from '../components/home/FinalCta'
import { HowItWorks } from '../components/home/HowItWorks'
import { Softtribe } from '../components/home/Softtribe'
import { WhoItsFor } from '../components/home/WhoItsFor'
import { WhyPresto } from '../components/home/WhyPresto'
import { FaqChatWidget } from '../components/faq-chat/FaqChatWidget'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Preloader } from '../components/layout/Preloader'
import { Reveal } from '../components/ui/Reveal'

export function Home() {
  const [ready, setReady] = useState(false)
  const onReady = useCallback(() => setReady(true), [])

  return (
    <>
      <Preloader onDone={onReady} />
      <Reveal ready={ready}>
        <Header />
      </Reveal>
      <Reveal ready={ready} delay={80}>
        <Banner />
      </Reveal>
      <Reveal ready={ready}>
        <WhyPresto />
      </Reveal>
      <Reveal ready={ready}>
        <Capabilities />
      </Reveal>
      <Reveal ready={ready}>
        <Softtribe />
      </Reveal>
      <Reveal ready={ready}>
        <HowItWorks />
      </Reveal>
      <Reveal ready={ready}>
        <ComingSoon />
      </Reveal>
      <Reveal ready={ready}>
        <WhoItsFor />
      </Reveal>
      <Reveal ready={ready}>
        <Faqs />
      </Reveal>
      <Reveal ready={ready}>
        <FinalCta />
      </Reveal>
      <Footer />
      <FaqChatWidget />
    </>
  )
}
