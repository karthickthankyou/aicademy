import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CourseOrderByRelationAggregateInput } from 'src/models/courses/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/dtos/order-by.args'

@InputType()
export class AdminOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AdminOrderByWithRelationInputStrict,
      Prisma.AdminOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  courses: CourseOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AdminOrderByWithRelationInput extends PartialType(
  AdminOrderByWithRelationInputStrict,
) {}

@InputType()
export class AdminOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
