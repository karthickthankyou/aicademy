import { PartialType } from '@nestjs/swagger'
import { CreateQuestion } from './create.dto'
import { Question } from '@prisma/client'

export class UpdateQuestion extends PartialType(CreateQuestion) {
  id: Question['id']
}
