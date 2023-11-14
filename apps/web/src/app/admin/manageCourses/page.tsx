import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { CoursesDocument } from '@foundation/network/src/generated'

import { CourseCardSimple } from '@foundation/ui/src/components/organisms/CourseCardSimple'

export default async function ManageCourses() {
  const { data, error } = await fetchGraphQLServer({
    document: CoursesDocument,
  })
  console.log('data, error ', data, error)

  return (
    <div>
      <div>Manage Courses</div>
      <div className="flex flex-col gap-8">
        {data?.courses.map((course) => (
          <div key={course.id}>
            <CourseCardSimple course={course} />
          </div>
        ))}
      </div>
    </div>
  )
}
