import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { CoursesDocument } from '@foundation/network/src/generated'
import { CourseCard } from '../organisms/CourseCard'

export const HomePage = async () => {
  const { data } = await fetchGraphQLServer({
    document: CoursesDocument,
  })

  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 md:grid-cols-3">
      {data?.courses.map((course) => (
        <div key={course.id}>
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  )
}
