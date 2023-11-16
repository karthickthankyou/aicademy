import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  ChapterDocument,
  ChapterQuery,
} from '@foundation/network/src/generated'
import { Title } from '@foundation/ui/src/components/atoms/typography'
import { AIChat } from '@foundation/ui/src/components/organisms/AIChat'

const concatenateCourseInfo = (chapter: ChapterQuery['chapter']): string => {
  let result = `Course Title:${chapter.course.title}\n Course Description:${
    chapter.course.description ? chapter.course.description : ''
  }\n`

  result += `\nChapter Title: ${chapter.title}\nContent: ${chapter.content}\n`

  return result
}

const ChapterPage = async ({ params }: { params: { chapterId: string } }) => {
  const chapterId = params.chapterId
  const { data, error } = await fetchGraphQLServer({
    document: ChapterDocument,
    variables: { where: { id: +chapterId } },
  })
  console.log('ChapterPage data ,erorr', data, error)

  if (!data?.chapter) {
    return <div>No chapter found.</div>
  }
  return (
    <div>
      <Title>{data?.chapter.title}</Title>
      <div className="max-w-lg whitespace-pre-wrap">
        {data?.chapter.content}
      </div>
      <div className="mt-4">
        <AIChat courseInfo={concatenateCourseInfo(data?.chapter)} />
      </div>
    </div>
  )
}

export default ChapterPage
