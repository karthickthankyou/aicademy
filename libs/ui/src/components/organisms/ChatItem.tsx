import { LucideIcon } from 'lucide-react'

import { Thinking } from '../molecules/Thinking'
import { cn } from '../../utils'
import { BaseComponent } from '@foundation/util/types'

export interface IChatItemProps extends BaseComponent {
  Icon: LucideIcon
  loading?: boolean
  align?: 'right' | 'left'
}

export const ChatItem = ({
  children,
  Icon,
  loading = false,
  align = 'left',
}: IChatItemProps) => {
  const alightClasses = align === 'right' ? 'flex-row-reverse' : ''
  return (
    <div className={cn('flex gap-2', alightClasses)}>
      <Icon className="flex flex-shrink-0 w-8 h-8" />
      {loading ? <Thinking /> : <div>{children}</div>}
      <div className="flex flex-shrink-0 w-12 h-8" />
    </div>
  )
}
