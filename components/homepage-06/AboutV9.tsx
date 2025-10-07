'use client'
import useReveal from '@/hooks/useReveal'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const AboutV9 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="relative overflow-hidden pb-14 pt-6 md:pb-16 lg:pb-[88px] lg:pt-12 xl:pb-[100px]">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="rv-badge">
            <span className="rv-badge-text">Chi Siamo</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-8 mt-3 text-center">
              Non siamo perfetti. <br className="hidden md:block" />
              <span className="font-poppins">Siamo</span>{' '}
              <span className="font-degular !text-[#ffdb7c] text-[#ffdb7c]" style={{ fontSize: '4rem' }}> Memorabili.</span>
            </h2>
          </TextAppearAnimation>
        </div>

        <h3
          ref={revealRef}
          className="text-center text-2xl font-normal text-secondary/90 dark:text-backgroundBody/70 lg:text-3xl lg:leading-[1.5] lg:tracking-[0.72px] xl:text-4xl">
          Non siamo nati tra i grattacieli di Manhattan, ma dentro un favo a <b>Trapani.</b><br />
Da un alveare chiamato <b>Beehive</b> abbiamo imparato che il Sud non deve solo inseguire, ma guidare.
<br /><br />
Come le api, comunichiamo ballando: la <b>Waggle Dance</b> è la nostra ispirazione.
Con lo stesso ritmo trasformiamo idee in strategie chiare, progetti che fanno rumore e campagne che restano impresse.
<br /><br />
Non siamo perfetti, non siamo patinati.
<br /><br />
 Siamo ironici, curiosi, creativi e un po’ fuori dagli schemi.
 Perché “fare comunicazione” non ci basta: <span className="force-gold" style={{ fontSize: '2rem', fontWeight: 700 }}>noi facciamo Waggle.</span>
        </h3>

        <RevealWrapper as="ul" className="mx-auto mt-[56px] flex list-none justify-center">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/team">
              <Button variant="primary" size="lg">Meet the Team</Button>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutV9
