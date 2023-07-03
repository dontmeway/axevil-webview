import { withChildren } from '@builder.io/react'
import clsx from 'clsx'
import Image from 'next/image'
import SVG from 'react-inlinesvg'

type SummaryProps = {
  logo?: string
  link?: string
  linkIcon?: string
  backgroundImage?: string
  gradient?: string
  linkIconHeight?: number
  linkIconWidth?: number
  children: React.ReactNode
}

const SummaryView = ({
  children,
  link,
  logo,
  backgroundImage,
  gradient,
  linkIconHeight = 20,
  linkIconWidth = 20,
  linkIcon,
}: SummaryProps) => {
  const hasBgImageOrGradient = backgroundImage || gradient

  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : gradient
    ? { backgroundImage: gradient }
    : {}

  return (
    <div
      className={clsx(
        'w-full px-2 pt-2 pb-6 rounded-3xl flex flex-col space-y-6 relative bg-cover bg-no-repeat',
        {
          'bg-summary': !hasBgImageOrGradient,
        }
      )}
      style={bgStyle}
    >
      <div className="w-full">{children}</div>

      <div className="w-full flex justify-center">
        {logo && (
          <div className="relative h-8 w-32">
            <Image src={logo} fill style={{ objectFit: 'contain' }} alt="logo" />
          </div>
        )}

        {linkIcon && (
          <a
            href={link}
            target="_blank"
            className="w-12 h-12 rounded-2xl flex justify-center items-center absolute right-2 bottom-2 text-white bg-neutral-85 dark:text-neutral-100 dark:bg-white dark:bg-opacity-30"
          >
            <SVG src={linkIcon} height={linkIconHeight} width={linkIconWidth} />
          </a>
        )}
      </div>
    </div>
  )
}

export const Summary = withChildren(SummaryView)
