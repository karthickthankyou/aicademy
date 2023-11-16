'use client'
import { CourseQuery } from '@foundation/network/src/generated'

import { cn } from '../../utils'
import { DisplayDate } from '../molecules/DisplayDate'
import Link from 'next/link'

export interface ICoursePageProps {
  course: CourseQuery['course']
}

export const CoursePage = ({ course }: ICoursePageProps) => {
  return (
    <div className={cn('max-w-xl')}>
      <div className="mt-4 whitespace-pre-wrap ">{course.title}</div>
      <DisplayDate dateString={course.createdAt} />

      <div className="mt-4 whitespace-pre-wrap ">{course.description}</div>
      <div className="mt-12 text-xs">Select a chapter to start learning...</div>
    </div>
  )
}

export const CourseSidebar = ({
  course,
}: {
  course: CourseQuery['course']
}) => {
  return (
    <div className="w-full max-w-lg p-4 overflow-y-auto bg-red-200 min-w-max">
      <h1 className={cn('text-xl')}>{course.title}</h1>
      {/* <h1>{course.description}</h1> */}
      <h2 className="mb-4">Chapters</h2>
      <ul>
        {course.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={`/course/${course.id}/chapter/${chapter.id}`}>
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
