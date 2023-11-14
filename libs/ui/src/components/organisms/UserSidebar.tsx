'use client'
import { ReactNode } from 'react'

import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '../atoms/sheet'
import { useDialogState } from '@foundation/util/hooks'
import { Button } from '../atoms/button'

export interface IUserSidebarProps {
  children: ReactNode
}

export const UserSidebar = ({ children }: IUserSidebarProps) => {
  const [open, setOpen] = useDialogState(false)

  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">{children}</SheetContent>
      </Sheet>
    </div>
  )
}
