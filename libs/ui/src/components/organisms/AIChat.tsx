'use client'
import { Bot, User } from 'lucide-react'
import { Input } from '../atoms/input'
import { Button } from '../atoms/button'
import { SimpleDialog } from '../molecules/SimpleDialog'
import { useEffect, useState } from 'react'
import { fetchGraphQLClient } from '@foundation/common/src/fetch/client'
import { DoubtDocument } from '@foundation/network/src/generated'
import { Title3 } from '../atoms/typography'
import { ChatItem } from './ChatItem'
import { useToast } from '../molecules/Toaster/use-toast'

export interface IAIChatProps {}

export const AIChat = ({ courseInfo }: { courseInfo: string }) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [thinking, setThinking] = useState(false)

  const { toast } = useToast()
  useEffect(() => {})
  return (
    <SimpleDialog
      buttonText={
        <div className="p-1 border-2 border-black rounded animate-in bg-white/10 backdrop-blur backdrop-filter">
          <Bot />
        </div>
      }
    >
      <Title3 className="flex items-center gap-2 mt-4">
        <Bot /> Ask anything.
      </Title3>
      <div className="mt-6 space-y-6">
        <>
          <ChatItem align="right" loading={!answer && !thinking} Icon={User}>
            {question}
          </ChatItem>
          <ChatItem loading={thinking} Icon={Bot}>
            <div className="whitespace-pre-wrap">{answer}</div>
          </ChatItem>
        </>
      </div>
      <div className="sticky bottom-0 flex flex-col gap-2 p-1 bg-white/50 backdrop-blur backdrop-filter">
        {answer ? (
          <Button
            variant={'ghost'}
            onClick={() => {
              setQuestion('')
              setAnswer('')
            }}
          >
            Ask
          </Button>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const questionFormData = formData.get('question')?.toString()

              setThinking(true)
              if (!questionFormData) {
                toast({ title: 'The question is null.' })
                return
              }
              setQuestion(questionFormData)

              const data = await fetchGraphQLClient({
                document: DoubtDocument,
                variables: { question: questionFormData, courseInfo },
              })
              setThinking(false)

              setAnswer(data.data?.doubt.answer || 'No answers. 😕')
            }}
          >
            <Input
              placeholder="Talk..."
              className="text-lg"
              name="question"
              disabled={Boolean(answer)}
            />
            <Button type="submit" disabled={Boolean(answer)}>
              Send
            </Button>
          </form>
        )}
      </div>
    </SimpleDialog>
  )
}
