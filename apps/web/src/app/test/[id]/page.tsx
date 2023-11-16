import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { CreateTestDocument } from '@foundation/network/src/generated'
import { Title2 } from '@foundation/ui/src/components/atoms/typography'
import { Test } from '@foundation/ui/src/components/templates/Test'

const TestPagte = async ({ params }: { params: { id: string } }) => {
  const courseId = +params.id

  if (!courseId) {
    return <div>No course id provided.</div>
  }

  const { data, error } = await fetchGraphQLServer({
    document: CreateTestDocument,
    variables: { courseId },
  })

  if (!data?.createTest.id) {
    return <div>Something went wrong. Please try again.</div>
  }

  return (
    <div>
      <Title2>{data?.createTest.course.title}</Title2>
      <div className="mb-12 text-sm text-gray-600">5 x 20 marks</div>
      <Test
        questions={data.createTest.questions || []}
        testId={data.createTest.id}
      />
    </div>
  )
}

export default TestPagte
