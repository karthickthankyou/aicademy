import { CreateTestInput } from './create-test.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Test } from '@prisma/client'

@InputType()
export class UpdateTestInput extends PartialType(CreateTestInput) {
  id: Test['id']
}
