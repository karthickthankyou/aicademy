import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AnswerOrderByWithRelationInput } from 'src/models/answers/graphql/dtos/order-by.args'
import { ChapterOrderByWithRelationInput } from 'src/models/chapters/graphql/dtos/order-by.args'
import { TestQuestionOrderByRelationAggregateInput } from 'src/models/test-questions/graphql/dtos/order-by.args'

@InputType()
export class QuestionOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      QuestionOrderByWithRelationInputStrict,
      Prisma.QuestionOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  question: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  chapterId: Prisma.SortOrder
  answer: AnswerOrderByWithRelationInput
  chapter: ChapterOrderByWithRelationInput
  testQuestions: TestQuestionOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class QuestionOrderByWithRelationInput extends PartialType(
  QuestionOrderByWithRelationInputStrict,
) {}

@InputType()
export class QuestionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
