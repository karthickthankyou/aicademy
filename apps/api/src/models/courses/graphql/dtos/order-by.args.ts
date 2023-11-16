import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AdminOrderByWithRelationInput } from 'src/models/admins/graphql/dtos/order-by.args'
import { ChapterOrderByRelationAggregateInput } from 'src/models/chapters/graphql/dtos/order-by.args'
import { TestOrderByRelationAggregateInput } from 'src/models/tests/graphql/dtos/order-by.args'

@InputType()
export class CourseOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CourseOrderByWithRelationInputStrict,
      Prisma.CourseOrderByWithRelationInput
    >
{
  tests: TestOrderByRelationAggregateInput
  @Field(() => Prisma.SortOrder)
  published: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  adminUid: Prisma.SortOrder
  chapters: ChapterOrderByRelationAggregateInput
  admin: AdminOrderByWithRelationInput
}

@InputType()
export class CourseOrderByWithRelationInput extends PartialType(
  CourseOrderByWithRelationInputStrict,
) {}

@InputType()
export class CourseOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
