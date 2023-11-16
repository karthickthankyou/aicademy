import { MyTestsQuery } from '@foundation/network/src/generated'
import { StudentTestCard } from '../organisms/StudentTestCard'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../atoms/accordion'

export const StudentTests = ({ tests }: { tests: MyTestsQuery['myTests'] }) => {
  return (
    <div>
      <Accordion type="multiple">
        {tests.map((test) => (
          <AccordionItem value={test.id.toString()} key={test.id}>
            <AccordionTrigger>
              <div>{test.course.title}</div>
              <div>{test.aiTotalScore}</div>
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
