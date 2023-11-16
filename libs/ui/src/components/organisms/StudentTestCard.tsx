import { MyTestsQuery } from '@foundation/network/src/generated'
import { BaseComponent } from '@foundation/util/types'

export interface IUserCardProps extends BaseComponent {
  test: MyTestsQuery['myTests'][0]
}

export const StudentTestCard = ({ test }: IUserCardProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">{test.course.title}</h3>
      <p className="text-sm text-gray-600">
        AI Total Score: {test.aiTotalScore || 'N/A'}
      </p>

      <div className="max-w-md mt-2">
        <h4 className="font-semibold text-md">Results</h4>
        <ul className="space-y-6">
          {test.results.map((result, index) => (
            <li key={index} className="mt-1 space-y-2 text-sm">
              <div>Q: {result.question.question}</div>
              <div className="text-gray-600">A: {result.studentAnswer}</div>
              <div className="flex items-start gap-2 mt-1">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-green-600 border rounded ">
                  {result.aiScore}
                </div>
                <p className="text-xs text-gray-500 ">
                  Feedback: {result.aiFeedback || 'No feedback'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
