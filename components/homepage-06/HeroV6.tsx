import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import AnimatedHeroImage from './AnimatedHeroImage'
import ScrollingWords from '../shared/ScrollingWords'

const HeroV6 = () => {
  return (
    <RevealWrapper as="section" className="relative overflow-hidden">
      <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="text-center">
            <h1 className="font-degular">
              <span className="block font-semibold">Waggle Agency</span> 
              
            </h1>
            <ul className="mt-10 flex list-none justify-center md:mt-14">
              <li className="block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-sm rv-button-primary block md:inline-block">
                  <div className="rv-button-top">
                    <span>Coffee Break?</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span className="text-nowrap">Coffee Break?</span>
                  </div>
                </Link>
              </li>
            </ul>
          </RevealWrapper>
        </div>
      </div>
      <AnimatedHeroImage />
    </RevealWrapper>
  )
}

export default HeroV6
