import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ChapterOrderByWithRelationInput } from './order-by.args'
import { ChapterWhereInput, ChapterWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ChapterScalarFieldEnum, {
  name: 'ChapterScalarFieldEnum',
})

@ArgsType()
class FindManyChapterArgsStrict
  implements
    RestrictProperties<
      FindManyChapterArgsStrict,
      Omit<Prisma.ChapterFindManyArgs, 'include' | 'select'>
    >
{
  where: ChapterWhereInput
  orderBy: ChapterOrderByWithRelationInput[]
  cursor: ChapterWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ChapterScalarFieldEnum])
  distinct: Prisma.ChapterScalarFieldEnum[]
}

@ArgsType()
export class FindManyChapterArgs extends PartialType(
  FindManyChapterArgsStrict,
) {}

@ArgsType()
export class FindUniqueChapterArgs {
  where: ChapterWhereUniqueInput
}
