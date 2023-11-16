import { CreateAnswerInput } from './create-answer.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Answer } from '@prisma/client'

@InputType()
export class UpdateAnswerInput extends PartialType(CreateAnswerInput) {
  id: Answer['id']
}
