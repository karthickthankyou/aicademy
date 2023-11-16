'use client'
import {
  CreateTestMutation,
  SubmitTestDocument,
} from '@foundation/network/src/generated'
import { useFormTest } from '@foundation/forms/src/test'
import { TextArea } from '../atoms/textArea'
import { Label } from '../atoms/label'
import { fetchGraphQLClient } from '@foundation/common/src/fetch/client'

export const Test = ({
  testId,
  questions,
}: {
  testId: number
  questions: CreateTestMutation['createTest']['questions']
}) => {
  const { register, handleSubmit } = useFormTest({
    defaultValues: {
      answers: questions.map((question) => ({ ...question, answer: null })),
    },
  })

  return (
    <form
      onSubmit={handleSubmit(async ({ answers }) => {
        const { data, error } = await fetchGraphQLClient({
          document: SubmitTestDocument,
          variables: {
            submitTestInput: answers,
            testId,
          },
        })
        console.log('result ', data, error)
      })}
      className="space-y-6"
    >
      {questions.map((question, index) => (
        <div key={question.id}>
          <Label title={question.question}>
            <TextArea
              {...register(`answers.${index}.userAnswer`)}
              placeholder="Your answer"
            />
          </Label>
        </div>
      ))}
      <button type="submit">Submit Answers</button>
    </form>
  )
}
