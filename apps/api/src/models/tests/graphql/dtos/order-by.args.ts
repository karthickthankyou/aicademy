import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CourseOrderByWithRelationInput } from 'src/models/courses/graphql/dtos/order-by.args'
import { StudentOrderByWithRelationInput } from 'src/models/students/graphql/dtos/order-by.args'
import { TestQuestionOrderByRelationAggregateInput } from 'src/models/test-questions/graphql/dtos/order-by.args'

@InputType()
export class TestOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      TestOrderByWithRelationInputStrict,
      Prisma.TestOrderByWithRelationInput
    >
{
  Student: StudentOrderByWithRelationInput
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  courseId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  aiTotalScore: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  studentUid: Prisma.SortOrder
  course: CourseOrderByWithRelationInput
  questions: TestQuestionOrderByRelationAggregateInput

  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class TestOrderByWithRelationInput extends PartialType(
  TestOrderByWithRelationInputStrict,
) {}

@InputType()
export class TestOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
