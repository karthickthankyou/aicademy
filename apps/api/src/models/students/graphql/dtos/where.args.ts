import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { TestListRelationFilter } from 'src/models/tests/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/dtos/where.args'

@InputType()
export class StudentWhereUniqueInput {
  uid: string
}

@InputType()
export class StudentWhereInputStrict
  implements
    RestrictProperties<StudentWhereInputStrict, Prisma.StudentWhereInput>
{
  uid: StringFilter
  user: UserRelationFilter
  tests: TestListRelationFilter

  AND: StudentWhereInput[]
  OR: StudentWhereInput[]
  NOT: StudentWhereInput[]
}

@InputType()
export class StudentWhereInput extends PartialType(StudentWhereInputStrict) {}

@InputType()
export class StudentListRelationFilter {
  every?: StudentWhereInput
  some?: StudentWhereInput
  none?: StudentWhereInput
}

@InputType()
export class StudentRelationFilter {
  is?: StudentWhereInput
  isNot?: StudentWhereInput
}
