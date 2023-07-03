/* eslint-disable react-refresh/only-export-components */
import { BuilderComponent } from '@builder.io/react'
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

type AppContextType = {
  bottomSheetId: string | null
  hasBottomSheet: boolean
}

export const AppContext = createContext<AppContextType | null>(null)

export const useAppContext = () => useContext(AppContext)
export const useAppHasBottomSheet = () => useAppContext()?.hasBottomSheet ?? false

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [bottomSheetId, setBottomSheetId] = useState<string | null>(null)

  useEffect(() => {
    let ignore = false
    const injected = injectHash()

    if (!ignore) {
      setBottomSheetId(injected['show-bottomsheet'] ?? null)
    }

    return () => {
      ignore = true
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        bottomSheetId,
        hasBottomSheet: bottomSheetId !== null,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useResize<T>(...deps: T[]) {
  const [isFlutterAppReady, setIsFlutterAppReady] = useState(false)
  const handlerName = 'handler'
  const ref = useRef<BuilderComponent>(null)

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      const entry = entries[0]

      if (entry) {
        const size = entry.contentBoxSize[0]?.blockSize ?? 0
        const record = {
          action: 'resize_webview',
          height: size?.toString() ?? '0',
        }

        if (!isFlutterAppReady) {
          console.log(JSON.stringify(record, null, 2))
          // return
        }
        const flutterInAppWebView = (window as any)?.flutter_inappwebview

        flutterInAppWebView?.callHandler(handlerName, record)
      }
    },
    [isFlutterAppReady]
  )

  const debouncedHandleResize = useCallback(debounce(handleResize, 500), [handleResize])

  useEffect(() => {
    const handler = () => setIsFlutterAppReady(true)
    window.addEventListener('flutterInAppWebViewPlatformReady', handler)

    return () => {
      window.removeEventListener('flutterInAppWebViewPlatformReady', handler)
    }
  }, [...deps])

  useEffect(() => {
    const observer = new ResizeObserver(debouncedHandleResize)

    if (ref.current?.ref) {
      observer.observe(ref.current?.ref)
    }

    return () => {
      observer.disconnect()
    }
  }, [...deps])

  return ref
}

export function useBindAnchorHandlers<T>(deps: T[]) {
  const [isFlutterAppReady, setIsFlutterAppReady] = useState(false)
  const handlerName = 'handler'

  const handleClick = useCallback(
    (ev: MouseEvent) => {
      const { href } = ev.currentTarget as unknown as { href: string }
      const query = href.split('?').at(-1)

      const params = new URLSearchParams(query)

      if (params.has('action')) {
        ev.preventDefault()

        const action = params.get('action')
        params.delete('action')

        const record = {
          action,
          params: Array.from(params.entries()).reduce((acc, [key, value]) => {
            if (action === 'open_bottom_sheet') {
              acc.webview_url = `${window.location.pathname}#show-bottomsheet-${value}`
            } else {
              acc[key] = value
            }

            return acc
          }, {} as Record<string, string>),
        }
        if (!isFlutterAppReady) {
          console.log(JSON.stringify(record, null, 2))
          // return
        }
        const flutterInAppWebView = (window as any)?.flutter_inappwebview

        flutterInAppWebView?.callHandler(handlerName, record)
      }
    },
    [isFlutterAppReady]
  )

  useEffect(() => {
    const handler = () => setIsFlutterAppReady(true)
    window.addEventListener('flutterInAppWebViewPlatformReady', handler)

    return () => {
      window.removeEventListener('flutterInAppWebViewPlatformReady', handler)
    }
  }, [...deps])

  useEffect(() => {
    const anchors = document.querySelectorAll('a')

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleClick)
    })

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [handleClick, ...deps])
}

const knownHashKeys = ['show-bottomsheet']

function debounce<T extends (...args: any[]) => any>(func: T, wait = 20) {
  let timeout: ReturnType<typeof setTimeout>
  return function executedFunction(this: any, ...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function injectHash() {
  const hash = window.location.hash.slice(1)
  const injected: Record<string, string> = {}
  if (!hash) return {}

  knownHashKeys.forEach((key) => {
    const [_, found] = hash.split(key)

    for (let i = 0; i < (found?.length ?? 0); i++) {
      const char = found?.charAt(i)
      if (typeof +char === 'number' && !isNaN(+char)) {
        injected[key] = (injected[key] ?? '') + char
      }
      const next = found?.charAt(i + 1)
      if (typeof +next !== 'number' || isNaN(+next)) {
        break
      }
    }
  })

  return injected
}
