import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  CourseDocument,
  namedOperations,
} from '@foundation/network/src/generated'

import { UserSidebar } from '@foundation/ui/src/components/organisms/UserSidebar'

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

  //   console.log('data ,error', data, error)

  return (
    <div className="flex">
      <div className="hidden w-full max-w-xs sm:block">
        <CourseSidebar course={data.course} />
      </div>

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
    </div>
  )
}
