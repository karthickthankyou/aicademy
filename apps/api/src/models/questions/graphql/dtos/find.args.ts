import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { QuestionOrderByWithRelationInput } from './order-by.args'
import { QuestionWhereInput, QuestionWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.QuestionScalarFieldEnum, {
  name: 'QuestionScalarFieldEnum',
})

@ArgsType()
class FindManyQuestionArgsStrict
  implements
    RestrictProperties<
      FindManyQuestionArgsStrict,
      Omit<Prisma.QuestionFindManyArgs, 'include' | 'select'>
    >
{
  where: QuestionWhereInput
  orderBy: QuestionOrderByWithRelationInput[]
  cursor: QuestionWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.QuestionScalarFieldEnum])
  distinct: Prisma.QuestionScalarFieldEnum[]
}

@ArgsType()
export class FindManyQuestionArgs extends PartialType(
  FindManyQuestionArgsStrict,
) {}

@ArgsType()
export class FindUniqueQuestionArgs {
  where: QuestionWhereUniqueInput
}
