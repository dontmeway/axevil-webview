import { createElement } from 'react'
import { cva } from 'cva'

export type HeadingProps = {
  content: string
  size: 'sm' | 'md' | 'lg'
}

const element: Record<HeadingProps['size'], string> = {
  sm: 'h3',
  md: 'h2',
  lg: 'h1',
}

const variants = cva(['text-neutral-100 font-mazzard-h font-medium dark:text-white'], {
  variants: {
    size: {
      sm: ['text-base'],
      md: ['text-lg leading-6'],
      lg: ['text-2xl'],
    },
  },
})

export const Heading = ({ content = 'Block Title - L', size = 'sm' }: HeadingProps) => {
  return createElement(element[size], { children: content, className: variants({ size }) })
}
