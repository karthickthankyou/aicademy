'use client'
import { Bot, LucideIcon, User } from 'lucide-react'
import { Button } from '../atoms/button'
import { SimpleDialog } from '../molecules/SimpleDialog'
import { useCallback, useEffect, useState } from 'react'
import { fetchGraphQLClient } from '@foundation/common/src/fetch/client'
import {
  TakeTestDocument,
  VerifyAnswerDocument,
} from '@foundation/network/src/generated'
import { Title3 } from '../atoms/typography'
import { ChatItem } from './ChatItem'
import { useToast } from '../molecules/Toaster/use-toast'
import { TextArea } from '../atoms/textArea'

export interface IAIChatProps {}

export const AITest = ({
  courseInfo,
  Icon = Bot,
}: {
  courseInfo: string
  Icon: LucideIcon
}) => {
  const [question, setQuestion] = useState('')
  const [userAnswer, setUserAnswer] = useState('')
  const [mark, setMark] = useState('')
  const [questionLoading, setQuestionLoading] = useState(false)
  const [thinking, setThinking] = useState(false)

  const { toast } = useToast()

  const fetchQuestion = useCallback(async () => {
    setQuestionLoading(true)
    const { data } = await fetchGraphQLClient({
      document: TakeTestDocument,
      variables: { courseInfo },
    })
    setQuestionLoading(false)

    const fetchedQuestion = data?.takeTest.question
    if (!fetchedQuestion) {
      toast({ title: 'Oops. No question found.' })
      return
    }
    setQuestion(fetchedQuestion)
  }, [courseInfo, toast])

  const resetTest = useCallback(() => {
    setQuestion('')
    setUserAnswer('')
    setMark('')
    fetchQuestion()
  }, [fetchQuestion])

  useEffect(() => {
    fetchQuestion()
  }, [fetchQuestion])

  return (
    <SimpleDialog
      buttonText={
        <div className="p-1 border-2 border-black rounded animate-in bg-white/10 backdrop-blur backdrop-filter">
          <Icon />
        </div>
      }
    >
      <Title3 className="flex items-center gap-2 mt-4">
        <Bot /> Test!
      </Title3>
      <div className="mt-6 space-y-6">
        <>
          <ChatItem loading={questionLoading} Icon={Bot}>
            {question}
          </ChatItem>
          {question ? (
            <ChatItem align="right" Icon={User}>
              <div className="whitespace-pre-wrap">{userAnswer}</div>
            </ChatItem>
          ) : null}
          {userAnswer ? (
            <ChatItem loading={thinking} Icon={Bot}>
              <div className="whitespace-pre-wrap">{mark}</div>
            </ChatItem>
          ) : null}
        </>
      </div>
      <div className="sticky bottom-0 flex flex-col gap-2 p-1 bg-white/50 backdrop-blur backdrop-filter">
        {mark ? (
          <Button
            variant={'ghost'}
            onClick={() => {
              resetTest()
            }}
          >
            One more question.
          </Button>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const answerFormData = formData.get('answer')?.toString()

              setThinking(true)
              if (!answerFormData) {
                toast({ title: 'The answer is null.' })
                return
              }
              setUserAnswer(answerFormData)

              const { data } = await fetchGraphQLClient({
                document: VerifyAnswerDocument,
                variables: { question, courseInfo, answer: answerFormData },
              })

              setMark(data?.verifyAnswer.mark || '')
              setThinking(false)
            }}
          >
            <TextArea
              placeholder="Talk..."
              className="text-lg"
              name="answer"
              disabled={Boolean(userAnswer)}
            />
            <Button type="submit" disabled={Boolean(userAnswer)}>
              Send
            </Button>
          </form>
        )}
      </div>
    </SimpleDialog>
  )
}
