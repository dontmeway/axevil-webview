import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'
import { BuilderContent } from '@builder.io/sdk'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { AppContextProvider, useBindAnchorHandlers, useResize } from '@/shared/lib'
import '@/shared/ui/registration'

const API_KEY = process.env.BUILDER_API_KEY
const MODEL_NAME = process.env.BUILDER_MODEL ?? 'page'

if (!API_KEY) {
  throw new Error(`No Builder.io API key found as environment variable: ${API_KEY}`)
}

builder.init(API_KEY)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const urlPath = '/' + ((params?.page as string[])?.join('/') || '')
  const page = await builder
    .get(MODEL_NAME, {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise()

  return {
    props: {
      page: page || null,
    },
    // revalidate: 5,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll(MODEL_NAME, {
    fields: 'data.url',
    options: { noTargeting: true },
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`).filter((url) => url !== '/'),
    fallback: false,
  }
}

export default function Page({ page }: { page: BuilderContent | null }) {
  const isPreviewing = useIsPreviewing()
  const ref = useResize(page)

  useBindAnchorHandlers([page])

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>
      <AppContextProvider>
        <div className="w-full h-full bg-white text-black dark:bg-[#131416] dark:text-white overflow-auto px-4">
          <ToggleThemeButton />
          <BuilderComponent ref={ref} model={MODEL_NAME} content={page || undefined} />
        </div>
      </AppContextProvider>
    </>
  )
}

const ToggleThemeButton = () => {
  const isPreviewing = useIsPreviewing()
  const isToggleButtonVisible = isPreviewing || process.env.NODE_ENV === 'development'

  if (!isToggleButtonVisible) return null

  const handleClick = () => {
    const html = document.querySelector('html')

    if (!html) return

    html.classList.contains('dark') ? html.classList.remove('dark') : html.classList.add('dark')
  }

  return (
    <button
      className="rounded bg-gray-500 text-white dark:bg-gray-50 dark:text-black px-2 py-1 text-sm"
      type="button"
      onClick={handleClick}
    >
      Toggle Theme
    </button>
  )
}
