import { PartialType } from '@nestjs/swagger'
import { CreateTest } from './create.dto'
import { Test } from '@prisma/client'

export class UpdateTest extends PartialType(CreateTest) {
  id: Test['id']
}
