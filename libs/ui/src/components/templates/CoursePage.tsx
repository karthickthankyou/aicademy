'use client'
import { CourseQuery } from '@foundation/network/src/generated'

import { cn } from '../../utils'
import { DisplayDate } from '../molecules/DisplayDate'
import Link from 'next/link'
import Image from 'next/image'

export interface ICoursePageProps {
  course: CourseQuery['course']
}

export const CoursePage = ({ course }: ICoursePageProps) => {
  console.log('course ', course)
  return (
    <div className={cn('max-w-xl')}>
      <Image
        src={course.image || ''}
        alt=""
        className="object-cover w-full rounded shadow-lg aspect-video"
        width={300}
        height={300}
      />
      <div className="mt-4 whitespace-pre-wrap ">{course.title}I</div>
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
    <div className="w-full max-w-lg p-4 bg-red-100">
      <h1 className={cn('text-xl')}>{course.title}</h1>

      <h2 className="mt-4 mb-2 font-semibold">Chapters</h2>
      <ul className="space-y-1">
        {course.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={`/course/${course.id}/chapter/${chapter.id}`}>
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={`/test/${course.id}`}
        className="inline-block mt-4 font-semibold underline underline-offset-4"
      >
        Take test
      </Link>
    </div>
  )
}
