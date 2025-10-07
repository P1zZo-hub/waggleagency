import { cn } from '@/utils/cn'
import { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
} & ComponentProps<'button'>

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={cn('btn', `btn--${variant}`, `btn--${size}`, className)}
      aria-busy={isLoading ? 'true' : 'false'}
      {...rest}
    >
      {isLoading ? (
        <span className="btn__spinner" aria-hidden="true" />
      ) : (
        <>
          {leftIcon ? <span className="icon">{leftIcon}</span> : null}
          <span>{children}</span>
          {rightIcon ? <span className="icon">{rightIcon}</span> : null}
        </>
      )}
    </button>
  )
}


