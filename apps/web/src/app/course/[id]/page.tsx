import { fetchGraphQL } from '@foundation/common/src/fetch'
import { CoursePage } from '@foundation/ui/src/components/templates/CoursePage'
import { CourseDocument } from '@foundation/network/src/generated'

export default async function CoursePagePage({
  params,
}: {
  params: { id: string }
}) {
  const courseId = params.id

  const course = await fetchGraphQL({
    document: CourseDocument,
    variables: { where: { id: +courseId } },
  })

  if (!course.data?.course) {
    return <div>Course not found.</div>
  }
  console.log('course ', course)
  return <CoursePage course={course.data.course} />
}
