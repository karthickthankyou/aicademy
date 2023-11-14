import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { CourseListRelationFilter } from 'src/models/courses/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/dtos/where.args'

@InputType()
export class AdminWhereUniqueInput {
  uid: string
}

@InputType()
export class AdminWhereInputStrict
  implements RestrictProperties<AdminWhereInputStrict, Prisma.AdminWhereInput>
{
  uid: StringFilter
  user: UserRelationFilter
  courses: CourseListRelationFilter

  AND: AdminWhereInput[]
  OR: AdminWhereInput[]
  NOT: AdminWhereInput[]
}

@InputType()
export class AdminWhereInput extends PartialType(AdminWhereInputStrict) {}

@InputType()
export class AdminListRelationFilter {
  every?: AdminWhereInput
  some?: AdminWhereInput
  none?: AdminWhereInput
}

@InputType()
export class AdminRelationFilter {
  is?: AdminWhereInput
  isNot?: AdminWhereInput
}
