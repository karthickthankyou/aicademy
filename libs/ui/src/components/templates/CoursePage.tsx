import { CourseQuery } from '@foundation/network/src/generated'

import { cn } from '../../utils'
import { DisplayDate } from '../molecules/DisplayDate'
import { Title3 } from '../atoms/typography'

export interface ICoursePageProps {
  course: CourseQuery['course']
}

export const CoursePage = ({ course }: ICoursePageProps) => {
  return (
    <div className={cn('max-w-xl')}>
      <h1 className={cn('text-xl')}>{course.title}</h1>
      <DisplayDate dateString={course.createdAt} />

      <div className="mt-4 whitespace-pre-wrap ">{course.description}</div>
      <div className="flex flex-col gap-4">
        {course.chapters.map((chapter, index) => (
          <div key={chapter.id}>
            <Title3>
              Chapter {index + 1}: {chapter.title}
            </Title3>
            <div>{chapter.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
