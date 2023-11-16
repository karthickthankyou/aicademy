import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { QuestionOrderByWithRelationInput } from 'src/models/questions/graphql/dtos/order-by.args'

@InputType()
export class AnswerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AnswerOrderByWithRelationInputStrict,
      Prisma.AnswerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  answer: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  explanation: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  questionId: Prisma.SortOrder
  question: QuestionOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AnswerOrderByWithRelationInput extends PartialType(
  AnswerOrderByWithRelationInputStrict,
) {}

@InputType()
export class AnswerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
