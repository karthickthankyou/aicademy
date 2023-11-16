import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { TestQuestionOrderByWithRelationInput } from './order-by.args'
import {
  TestQuestionWhereInput,
  TestQuestionWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.TestQuestionScalarFieldEnum, {
  name: 'TestQuestionScalarFieldEnum',
})

@ArgsType()
class FindManyTestQuestionArgsStrict
  implements
    RestrictProperties<
      FindManyTestQuestionArgsStrict,
      Omit<Prisma.TestQuestionFindManyArgs, 'include' | 'select'>
    >
{
  where: TestQuestionWhereInput
  orderBy: TestQuestionOrderByWithRelationInput[]
  cursor: TestQuestionWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.TestQuestionScalarFieldEnum])
  distinct: Prisma.TestQuestionScalarFieldEnum[]
}

@ArgsType()
export class FindManyTestQuestionArgs extends PartialType(
  FindManyTestQuestionArgsStrict,
) {}

@ArgsType()
export class FindUniqueTestQuestionArgs {
  where: TestQuestionWhereUniqueInput
}
