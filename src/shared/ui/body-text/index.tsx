import { cva } from 'cva'
import { createElement } from 'react'
import SVG from 'react-inlinesvg'

export type BodyTextProps = {
  content?: string
  variant?: 'default' | 'black' | 'yellow' | 'yellow-dark'
  icon?: string | null
  iconHeight?: number
  iconWidth?: number
  direction: 'horizontal' | 'vertical'
}

const containerVariants = cva([], {
  variants: {
    variant: {
      default: ['[&>svg]:text-secondary-light [&>svg]:dark:text-brand-yellow'],
      black: [
        'bg-card-light dark:bg-card-dark p-5 rounded-2xl bg-cover bg-no-repeat',
        'border border-body-text-light dark:border-body-text-dark',
        '[&>svg]:text-secondary-light [&>svg]:dark:text-brand-yellow',
      ],
      yellow: ['bg-brand-yellow p-5 rounded-2xl', '[&>svg]:text-neutral-100'],
      'yellow-dark': [
        'bg-brand-yellow-light dark:bg-brand-yellow-dark p-5 rounded-2xl',
        '[&>svg]:text-secondary-medium [&>svg]:dark:text-brand-yellow',
      ],
    },
    direction: {
      horizontal: ['flex space-x-3 items-start'],
      vertical: ['flex flex-col space-y-3'],
    },
  },
})

const textVariants = cva(
  [
    'builder-body-text builder-body-text-light dark:builder-body-text-dark',
    '[&>*]:font-mazzard-h [&>p]:text-base [&>p]:font-normal',
    '[&>h1]:mb-2 [&>h2]:mb-2 [&>h3]:mb-2',
    '[&>h1]:text-2xl [&>h2]:text-lg [&>h2]:leading-6 [&>h3]:text-base',
    '[&>h1]:font-medium [&>h2]:font-medium [&>h3]:font-medium',
    '[&>p>a]:text-secondary-medium [&>p>a]:dark:text-brand-yellow',
    '[&>p>strong]:font-medium',
  ],
  {
    variants: {
      variant: {
        default: [
          '[&>*]:text-neutral-75 [&>*]:dark:text-neutral-15 [&>h1]:dark:text-white [&>h2]:dark:text-white [&>h3]:dark:text-white',
        ],
        black: [
          '[&>*]:text-neutral-75 [&>*]:dark:text-neutral-15 [&>h1]:dark:text-white [&>h2]:dark:text-white [&>h3]:dark:text-white',
        ],
        yellow: [
          '[&>*]:text-neutral-100 [&>p>a]:text-secondary-medium [&>p>a]:dark:text-secondary-medium',
        ],
        'yellow-dark': ['[&>*]:text-secondary-medium [&>*]:dark:text-brand-yellow'],
      },
    },
  }
)

export const BodyText = ({
  content = 'Definition Lists: Lists used to define terms and their meanings, typically consisting of a term and its definition.',
  variant = 'default',
  direction = 'horizontal',
  icon = null,
  iconHeight = 24,
  iconWidth = 24,
}: BodyTextProps) => {
  return createElement('div', {
    className: containerVariants({ variant, direction }),
    children: [
      icon ? createElement(SVG, { src: icon, height: iconHeight, width: iconWidth, key: 1 }) : null,
      createElement('div', {
        dangerouslySetInnerHTML: { __html: content },
        className: textVariants({ variant }),
        key: 2,
      }),
    ],
  })
}
