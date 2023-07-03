import { useIsPreviewing, withChildren } from '@builder.io/react'

import { useAppHasBottomSheet } from '@/shared/lib'

const BoxView = ({ children }: { children: React.ReactNode }) => {
  const hasBottomSheet = useAppHasBottomSheet()
  const isPreviewing = useIsPreviewing()

  if (hasBottomSheet && !isPreviewing) return null

  return <>{children}</>
}

export const Box = withChildren(BoxView)
