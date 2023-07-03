import { cva } from 'cva'
import { clsx } from 'clsx'
import SVG from 'react-inlinesvg'

type InfoGraphicProps = {
  heading: string
  headingSize: 'sm' | 'md' | 'lg' | 'xl'
  direction: 'horizontal' | 'vertical'
  isReverse: boolean
  description: string
  variant: 'default' | 'filled' | 'summary'
  badge?: string | null
  icon?: string | null
  iconHeight?: number
  iconWidth?: number
}

const containerVariants = cva(['font-mazzard-h flex-grow'], {
  variants: {
    variant: {
      default: [],
      filled: [
        'bg-card-light dark:bg-card-dark p-4 rounded-2xl border border-body-text-light dark:border-body-text-dark',
      ],
      summary: [
        'bg-neutral-85 dark:bg-white dark:bg-opacity-40 p-4 rounded-2xl border border-body-text-light dark:border-body-text-dark',
      ],
    },
  },
})

const headingVariants = cva(['font-normal'], {
  variants: {
    size: {
      sm: ['text-base'],
      md: ['text-lg leading-6'],
      lg: ['text-2xl'],
      xl: ['text-[32px] leading-9'],
    },
    variant: {
      default: ['text-neutral-100 dark:text-white'],
      summary: ['text-white dark:text-neutral-100'],
    },
  },
})

const paragraphVariants = cva(['text-xs font-normal'], {
  variants: {
    variant: {
      default: ['text-neutral-75 dark:text-white dark:text-opacity-40'],
      summary: ['text-white text-opacity-40 dark:text-neutral-100'],
    },
  },
})

const textContentContainerVariants = cva([], {
  variants: {
    direction: {
      horizontal: ['flex items-center justify-center space-x-3'],
      vertical: ['flex flex-col space-y-0'],
    },
  },
})

export const InfoGraphic = ({
  description,
  direction,
  heading,
  headingSize,
  variant = 'default',
  badge,
  isReverse = false,
  icon = null,
  iconHeight = 24,
  iconWidth = 24,
}: InfoGraphicProps) => {
  const textContentVariant = variant === 'summary' ? 'summary' : 'default'
  return (
    <div
      className={containerVariants({
        variant,
        className: clsx({
          'flex flex-col space-y-3': !!badge,
        }),
      })}
    >
      <div
        className={clsx({
          'flex items-center space-x-3': !!icon,
        })}
      >
        {icon && (
          <div
            className={clsx(
              'w-10 justify-center flex flex-shrink-0 self-stretch overflow-hidden items-center rounded-lg',
              'text-secondary-medium bg-brand-yellow-light dark:text-brand-yellow dark:bg-brand-yellow-dark'
            )}
          >
            <SVG src={icon} height={iconHeight} width={iconWidth} />
          </div>
        )}
        <div
          className={textContentContainerVariants({
            direction,
            className: clsx({
              'flex-col-reverse': isReverse && direction === 'vertical',
              'flex-row-reverse [&>p]:!mr-3': isReverse && direction === 'horizontal',
            }),
          })}
        >
          <h1 className={headingVariants({ size: headingSize, variant: textContentVariant })}>
            {heading}
          </h1>
          <p className={paragraphVariants({ variant: textContentVariant })}>{description}</p>
        </div>
      </div>
      {badge && (
        <div className="w-full flex rounded-lg justify-center py-1.5 bg-brand-yellow-light dark:bg-brand-yellow-dark">
          <span className="text-xs font-normal text-secondary-medium dark:text-brand-yellow">
            {badge}
          </span>
        </div>
      )}
    </div>
  )
}
