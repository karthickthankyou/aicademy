import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CourseOrderByWithRelationInput } from './order-by.args'
import { CourseWhereInput, CourseWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.CourseScalarFieldEnum, {
  name: 'CourseScalarFieldEnum',
})

@ArgsType()
class FindManyCourseArgsStrict
  implements
    RestrictProperties<
      FindManyCourseArgsStrict,
      Omit<Prisma.CourseFindManyArgs, 'include' | 'select'>
    >
{
  where: CourseWhereInput
  orderBy: CourseOrderByWithRelationInput[]
  cursor: CourseWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.CourseScalarFieldEnum])
  distinct: Prisma.CourseScalarFieldEnum[]
}

@ArgsType()
export class FindManyCourseArgs extends PartialType(FindManyCourseArgsStrict) {}

@ArgsType()
export class FindUniqueCourseArgs {
  where: CourseWhereUniqueInput
}
