import { CoursesQuery } from '@foundation/network/src/generated'

import Link from 'next/link'
import Image from 'next/image'

import { cn } from '../../utils'

export const CourseCard = ({
  course,
}: {
  course: CoursesQuery['courses'][0]
}) => {
  return (
    <div>
      <Link href={`/course/${course.id}`}>
        <Image
          src={course.image || ''}
          alt=""
          className="object-cover w-full rounded shadow-lg aspect-square"
          width={300}
          height={300}
        />
        <div
          className={cn(
            'font-medium hover:underline mt-2 line-clamp-2 max-w-lg underline-offset-4 ',
          )}
        >
          {course.title}
        </div>
      </Link>
      <div className="max-w-md mt-1 text-sm gray-500 line-clamp-2">
        {course.chaptersLength} chapters
      </div>
      {/* <DisplayDate dateString={course.createdAt} className="mt-2" /> */}
    </div>
  )
}
