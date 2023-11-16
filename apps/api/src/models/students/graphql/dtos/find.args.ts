import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { StudentOrderByWithRelationInput } from './order-by.args'
import { StudentWhereInput, StudentWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.StudentScalarFieldEnum, {
  name: 'StudentScalarFieldEnum',
})

@ArgsType()
class FindManyStudentArgsStrict
  implements
    RestrictProperties<
      FindManyStudentArgsStrict,
      Omit<Prisma.StudentFindManyArgs, 'include' | 'select'>
    >
{
  where: StudentWhereInput
  orderBy: StudentOrderByWithRelationInput[]
  cursor: StudentWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.StudentScalarFieldEnum])
  distinct: Prisma.StudentScalarFieldEnum[]
}

@ArgsType()
export class FindManyStudentArgs extends PartialType(
  FindManyStudentArgsStrict,
) {}

@ArgsType()
export class FindUniqueStudentArgs {
  where: StudentWhereUniqueInput
}
