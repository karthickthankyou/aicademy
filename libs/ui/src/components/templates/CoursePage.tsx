import { CourseQuery } from '@foundation/network/src/generated'

import { cn } from '../../utils'
import { DisplayDate } from '../molecules/DisplayDate'
import { Title3 } from '../atoms/typography'
import { AIChat } from '../organisms/AIChat'

export interface ICoursePageProps {
  course: CourseQuery['course']
}

const concatenateCourseInfo = (course: CourseQuery['course']): string => {
  let result = `Course Title:${course.title}\n Course Description:${
    course.description ? course.description : ''
  }\n`

  for (const chapter of course.chapters) {
    result += `\nChapter Title: ${chapter.title}\nContent: ${chapter.content}\n`
  }

  return result
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
      <div className="fixed bottom-0 right-0 p-2">
        <AIChat courseInfo={concatenateCourseInfo(course)} />
      </div>
    </div>
  )
}
