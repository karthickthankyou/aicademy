import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { TestOrderByWithRelationInput } from './order-by.args'
import { TestWhereInput, TestWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.TestScalarFieldEnum, {
  name: 'TestScalarFieldEnum',
})

@ArgsType()
class FindManyTestArgsStrict
  implements
    RestrictProperties<
      FindManyTestArgsStrict,
      Omit<Prisma.TestFindManyArgs, 'include' | 'select'>
    >
{
  where: TestWhereInput
  orderBy: TestOrderByWithRelationInput[]
  cursor: TestWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.TestScalarFieldEnum])
  distinct: Prisma.TestScalarFieldEnum[]
}

@ArgsType()
export class FindManyTestArgs extends PartialType(FindManyTestArgsStrict) {}

@ArgsType()
export class FindUniqueTestArgs {
  where: TestWhereUniqueInput
}
