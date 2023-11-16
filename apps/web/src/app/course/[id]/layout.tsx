import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  CourseDocument,
  namedOperations,
} from '@foundation/network/src/generated'

import { UserSidebar } from '@foundation/ui/src/components/organisms/UserSidebar'
import { StickyLayout } from '@foundation/ui/src/components/organisms/StickyLayout'
import { CourseSidebar } from '@foundation/ui/src/components/templates/CoursePage'

export default async function CoursePageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    id: number
  }
}) {
  const courseId = params.id
  const { data, error } = await fetchGraphQLServer({
    document: CourseDocument,
    variables: { where: { id: +courseId } },
    config: {
      next: {
        tags: [namedOperations.Query.course],
      },
    },
  })

  if (!data?.course) {
    return <div>Course not found.</div>
  }

  return (
    <StickyLayout
      sidebarContent={
        <div className="hidden sm:block">
          <CourseSidebar course={data.course} />
        </div>
      }
    >
      <div className="flex-grow">
        <div className="sm:hidden">
          <UserSidebar>
            <CourseSidebar course={data.course} />
          </UserSidebar>
        </div>
        <div className="bg-white min-h-[calc(100vh-8rem)] py-2 px-4">
          {children}
        </div>
      </div>
    </StickyLayout>
  )
}
