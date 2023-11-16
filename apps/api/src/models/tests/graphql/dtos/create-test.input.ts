import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Test } from '../entity/test.entity'

@InputType()
export class CreateTestInput extends OmitType(
  Test,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
