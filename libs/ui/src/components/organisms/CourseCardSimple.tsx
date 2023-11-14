import { CoursesQuery } from '@foundation/network/src/generated'
import Link from 'next/link'

import { Badge } from '../molecules/Badge'
import { DisplayDate } from '../molecules/DisplayDate'
import { cn } from '../../utils'

export interface ICourseCardSimpleProps {
  course: CoursesQuery['courses'][0]
}

export const CourseCardSimple = ({ course }: ICourseCardSimpleProps) => {
  return (
    <Link
      href={`/course/${course.id}`}
      className={!course.published ? 'text-gray-400' : ' bg-gray-100'}
    >
      <div
        className={cn(
          'text-lg font-medium group-hover:underline underline-offset-4 ',
        )}
      >
        {course.title}
      </div>

      <DisplayDate dateString={course.createdAt} className="mt-2" />
      <Badge variant={'secondary'}>
        {course.published ? 'published' : 'unpublished'}
      </Badge>
    </Link>
  )
}
