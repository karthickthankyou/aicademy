import { CreateQuestionInput } from './create-question.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Question } from '@prisma/client'

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  id: Question['id']
}
