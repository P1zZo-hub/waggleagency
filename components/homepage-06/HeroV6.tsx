import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import AnimatedHeroImage from './AnimatedHeroImage'
import ScrollingWords from '../shared/ScrollingWords'

const HeroV6 = () => {
  return (
    <RevealWrapper as="section" className="relative overflow-hidden">
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="text-center">
            <h1 className="font-degular">
              <span className="block font-semibold">Waggle Agency</span>
            </h1>
            <ul className="mt-10 flex list-none justify-center md:mt-14">
              <li className="block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="btn--coffee-text">Coffee Break?</Button>
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
