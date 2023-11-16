import { PartialType } from '@nestjs/swagger'
import { CreateAnswer } from './create.dto'
import { Answer } from '@prisma/client'

export class UpdateAnswer extends PartialType(CreateAnswer) {
  id: Answer['id']
}
