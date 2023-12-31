import { ReactNode } from 'react'

export type Role = 'admin' | 'teacher'
export type MenuItem = { label: string; href: string; loggedIn: boolean }

export type BaseComponent = {
  children?: ReactNode
  className?: string
}

export interface FormState {
  data?: string | null
  error?: string | null
}
