'use client'
import useReveal from '@/hooks/useReveal'
import Link from 'next/link'
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
              <span className="font-poppins">Siamo</span>{" "}
              <span className="font-degular text-[#ffdb7c] !text-[#ffdb7c]"> Memorabili.</span>
            </h2>
          </TextAppearAnimation>
        </div>

        <h3
          ref={revealRef}
          className="text-center text-2xl font-normal text-secondary/90 dark:text-backgroundBody/70 lg:text-3xl lg:leading-[1.5] lg:tracking-[0.72px] xl:text-4xl">
          Non siamo cresciuti tra le luci di Times Square.
Siamo nati in un favo, a Trapani, dentro un alveare che si chiama Beehive, dove giovani
under 30 hanno deciso che il Sud non doveva solo inseguire, ma guidare.
Da lì, un passo alla volta (anzi, una danza alla volta), è nata Waggle.
<br />
<span>Come le api, comunichiamo con energia e precisione: la Waggle Dance è il nostro
manifesto, un movimento semplice che indica direzione, distanza e qualità.
Tradotto nel nostro lavoro? Strategie chiare, idee che fanno rumore, progetti che lasciano il segno.
</span>
Non siamo i più bravi, non siamo perfetti.
Ma se ti affidi a noi, di una cosa puoi stare certo: non ti annoierai mai.
Mescoliamo creatività e metodo, ironia e rigore.
A volte stiamo negli schemi, altre volte li spacchiamo in due.

Perché “fare comunicazione” non basta:<br /><br /><span></span>
  <span>Noi facciamo Waggle.</span>
        </h3>

        <RevealWrapper as="ul" className="mx-auto mt-[56px] flex list-none justify-center">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/team" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>Meet the Team</span>
              </div>
              <div className="rv-button-bottom">
                <span>Meet the Team</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutV9
