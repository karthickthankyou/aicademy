import { CoursesQuery } from '@foundation/network/src/generated'

import Link from 'next/link'

import { cn } from '../../utils'
import { DisplayDate } from '../molecules/DisplayDate'

export const CourseCard = ({
  course,
}: {
  course: CoursesQuery['courses'][0]
}) => {
  return (
    <div>
      <Link href={`/course/${course.id}`}>
        <div
          className={cn(
            'text-lg font-medium hover:underline line-clamp-2 max-w-lg underline-offset-4 ',
          )}
        >
          {course.title}
        </div>
      </Link>
      <div className="max-w-md mt-1 text-sm gray-500 line-clamp-2">
        {course.chaptersLength}
      </div>
      <DisplayDate dateString={course.createdAt} className="mt-2" />
    </div>
  )
}
