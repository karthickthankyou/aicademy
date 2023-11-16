import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CourseOrderByWithRelationInput } from 'src/models/courses/graphql/dtos/order-by.args'
import { QuestionOrderByRelationAggregateInput } from 'src/models/questions/graphql/dtos/order-by.args'

@InputType()
export class ChapterOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ChapterOrderByWithRelationInputStrict,
      Prisma.ChapterOrderByWithRelationInput
    >
{
  questions: QuestionOrderByRelationAggregateInput
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  content: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  courseId: Prisma.SortOrder
  course: CourseOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ChapterOrderByWithRelationInput extends PartialType(
  ChapterOrderByWithRelationInputStrict,
) {}

@InputType()
export class ChapterOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
