import { ReactNode } from 'react'

export const StickyLayout = ({
  sidebarContent,
  children,
}: {
  sidebarContent: ReactNode
  children: ReactNode
}) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="sticky h-screen max-w-xs bg-white top-12">
        {sidebarContent}
      </div>

      <div className="flex-grow">{children}</div>
    </div>
  )
}
