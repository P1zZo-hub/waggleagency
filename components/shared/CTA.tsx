import ContactForm from '@/components/shared/ContactForm'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { FC, ReactNode } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

interface CTAProps {
  children: ReactNode
  showContactForm?: boolean
  headingClass?: string
  buttonText?: string
}

const CTA: FC<CTAProps> = ({ children, showContactForm = false, headingClass = '', buttonText = 'Contact Us' }) => {
  return (
    <section className="relative pb-[70px] pt-14 md:pt-16 lg:pb-[140px] lg:pt-[88px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper>
          <h2
            className={cn(
              'text-center font-normal xl:text-[96px] xl:leading-[1.1] xl:tracking-[-2.88px]',
              headingClass,
            )}>
            {children}
          </h2>
        </RevealWrapper>
        <RevealWrapper as="div" className="mt-14 flex items-center justify-center">
          <Link href="/contact">
            <Button variant="primary" size="lg">{buttonText}</Button>
          </Link>
        </RevealWrapper>
        {showContactForm && <ContactForm />}
      </div>
    </section>
  )
}

export default CTA
