import { MyTestsQuery } from '@foundation/network/src/generated'
import { StudentTestCard } from '../organisms/StudentTestCard'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../atoms/accordion'
import { format } from 'date-fns'

export const StudentTests = ({ tests }: { tests: MyTestsQuery['myTests'] }) => {
  return (
    <div>
      <Accordion type="multiple">
        {tests.map((test) => (
          <AccordionItem value={test.id.toString()} key={test.id}>
            <AccordionTrigger>
              <div className="flex flex-col items-start font-normal text-md">
                <div className="text-lg font-medium">{test.course.title}</div>
                <div className="text-xs">
                  {format(new Date(test.createdAt), 'PPp')}
                </div>
                <div className="mt-1">
                  {test.aiTotalScore}
                  <span className="text-xs">/500</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <StudentTestCard test={test} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
