import { useEffect, useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { withChildren } from '@builder.io/react'

import { IconChevronUp } from '@/shared/assets/icons'

type DropDownProps = {
  children: React.ReactNode
  title: string
  emoji: string
  initialOpen?: boolean
}

const DropDownView = ({ children, emoji, title, initialOpen = false }: DropDownProps) => {
  const [open, setOpen] = useState(initialOpen)

  useEffect(() => {
    setOpen(initialOpen)
  }, [initialOpen])

  return (
    <Collapsible.Root className="w-full" open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="flex items-center justify-between px-4 py-5 rounded-xl bg-dropdown-light dark:bg-dropdown-dark w-full border border-gray-300 dark:border-gray-800">
        <div className="flex items-center space-x-3 mr-2">
          <span className="flex-shrink-0">{emoji}</span>
          <span className="font-mazzard-h text-base text-neutral-100 dark:text-white text-left">
            {title}
          </span>
        </div>
        <IconChevronUp
          className={clsx('transition-all flex-shrink-0', {
            'transform rotate-180': !open,
          })}
        />
      </Collapsible.Trigger>
      <Collapsible.Content className="CollapsibleContent">{children}</Collapsible.Content>
    </Collapsible.Root>
  )
}

export const DropDown = withChildren(DropDownView)
