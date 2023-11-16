import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { TestQuestion } from '../entity/test-question.entity'

@InputType()
export class CreateTestQuestionInput extends OmitType(
  TestQuestion,
  ['id'],
  InputType,
) {}
