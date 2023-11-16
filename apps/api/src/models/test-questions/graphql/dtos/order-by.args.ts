import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { QuestionOrderByWithRelationInput } from 'src/models/questions/graphql/dtos/order-by.args'
import { TestOrderByWithRelationInput } from 'src/models/tests/graphql/dtos/order-by.args'

@InputType()
export class TestQuestionOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      TestQuestionOrderByWithRelationInputStrict,
      Prisma.TestQuestionOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  studentAnswer: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  aiScore: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  aiFeedback: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  testId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  questionId: Prisma.SortOrder
  Test: TestOrderByWithRelationInput
  question: QuestionOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class TestQuestionOrderByWithRelationInput extends PartialType(
  TestQuestionOrderByWithRelationInputStrict,
) {}

@InputType()
export class TestQuestionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
