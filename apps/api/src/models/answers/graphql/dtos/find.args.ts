import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AnswerOrderByWithRelationInput } from './order-by.args'
import { AnswerWhereInput, AnswerWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.AnswerScalarFieldEnum, {
  name: 'AnswerScalarFieldEnum',
})

@ArgsType()
class FindManyAnswerArgsStrict
  implements
    RestrictProperties<
      FindManyAnswerArgsStrict,
      Omit<Prisma.AnswerFindManyArgs, 'include' | 'select'>
    >
{
  where: AnswerWhereInput
  orderBy: AnswerOrderByWithRelationInput[]
  cursor: AnswerWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.AnswerScalarFieldEnum])
  distinct: Prisma.AnswerScalarFieldEnum[]
}

@ArgsType()
export class FindManyAnswerArgs extends PartialType(FindManyAnswerArgsStrict) {}

@ArgsType()
export class FindUniqueAnswerArgs {
  where: AnswerWhereUniqueInput
}
