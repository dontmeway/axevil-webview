import SVG from 'react-inlinesvg'
import { clsx } from 'clsx'

type BannerProps = {
  backgroundImage: string | null
  content: string
  icon?: string | null
  iconHeight?: number
  iconWidth?: number
  link: string
  backgroundType?: 'default' | 'accent'
}

export const Banner = ({
  backgroundImage,
  content,
  link,
  icon = null,
  iconHeight = 24,
  iconWidth = 24,
  backgroundType = 'default',
}: BannerProps) => {
  const hasBackgroundImage = !!backgroundImage
  return (
    <a href={link} target="_blank">
      <div
        className={clsx('w-full h-20 relative rounded-2xl overflow-hidden bg-center bg-cover', {
          'bg-banner-accent': !hasBackgroundImage && backgroundType === 'accent',
          'bg-banner-default': !hasBackgroundImage && backgroundType === 'default',
        })}
        style={hasBackgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
      >
        {hasBackgroundImage && <div className="absolute inset-0 bg-black bg-opacity-60" />}

        <div className="text-white flex items-center space-x-2 absolute z-10 inset-0 px-5">
          <p className="text-white text-lg leading-6 font-mazzard-h font-normal">{content}</p>
          {icon && <SVG src={icon} height={iconHeight} width={iconWidth} />}
        </div>
      </div>
    </a>
  )
}
