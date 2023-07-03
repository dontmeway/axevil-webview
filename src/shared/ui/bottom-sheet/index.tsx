import { withChildren, useIsPreviewing } from '@builder.io/react'

import { useAppContext } from '@/shared/lib'

type BottomSheetProps = {
  id: string
  children: React.ReactNode
}

const BottomSheetView = ({ id, children }: BottomSheetProps) => {
  const context = useAppContext()
  const isPreviewing = useIsPreviewing()

  if (context?.bottomSheetId !== `${id}` && !isPreviewing) return null

  return <div className="w-full">{children}</div>
}

export const BottomSheet = withChildren(BottomSheetView)
