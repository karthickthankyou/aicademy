import { fetchGraphQL } from '@foundation/common/src/fetch'
import { CoursesDocument } from '@foundation/network/src/generated'

import { CourseCardSimple } from '@foundation/ui/src/components/organisms/CourseCardSimple'

export default async function ManageCourses() {
  const { data } = await fetchGraphQL({ document: CoursesDocument })

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
