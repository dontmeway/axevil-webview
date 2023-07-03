import '@/styles/globals.css'
import localFont from 'next/font/local'
import type { AppProps } from 'next/app'

const mazzardH = localFont({
  src: [
    {
      path: '../shared/assets/fonts/MazzardH-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/MazzardH-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/MazzardH-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/MazzardH-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/MazzardH-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/MazzardH-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/MazzardH-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/MazzardH-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-mazzardh',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mazzardH.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
