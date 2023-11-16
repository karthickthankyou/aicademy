import { CreateTestQuestionInput } from './create-test-question.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { TestQuestion } from '@prisma/client'

@InputType()
export class UpdateTestQuestionInput extends PartialType(
  CreateTestQuestionInput,
) {
  id: TestQuestion['id']
}
