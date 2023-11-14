'use client'

import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'

import { BaseComponent } from '@foundation/util/types'
import { Button } from '../atoms/button'

export const SubmitButton = ({ children, className }: BaseComponent) => {
  const { action, data, method, pending } = useFormStatus()

  console.log('action, data, method, pending', action, data, method, pending)

  return (
    <Button type="submit" className={className}>
      {pending ? <Loader className="animate-spin" /> : children}
    </Button>
  )
}
