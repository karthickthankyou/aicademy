import { PartialType } from '@nestjs/swagger'
import { CreateTestQuestion } from './create.dto'
import { TestQuestion } from '@prisma/client'

export class UpdateTestQuestion extends PartialType(CreateTestQuestion) {
  id: TestQuestion['id']
}
