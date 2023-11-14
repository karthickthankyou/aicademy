'use client'
import { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogContent } from '../atoms/dialog'

import { BaseComponent } from '@foundation/util/types'

export interface ICreateReporterProps extends BaseComponent {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

export const DialogMessage = ({
  open,
  setOpen,
  children,
}: ICreateReporterProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">{children}</DialogContent>
    </Dialog>
  )
}
