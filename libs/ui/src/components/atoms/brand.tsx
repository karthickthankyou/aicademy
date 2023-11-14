import Link from 'next/link'

import { cn } from '../../utils'
import { DeveloperInfo } from './developerInfo'

export interface IBrandProps {}

export const Brand = () => {
  return (
    <div>
      <Link
        href="/"
        className={cn('hover:underline font-medium underline-offset-4')}
      >
        A<span className="font-serif italic">i</span>cademy
      </Link>
      <DeveloperInfo />
    </div>
  )
}
