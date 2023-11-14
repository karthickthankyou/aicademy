import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AdminRelationFilter } from 'src/models/admins/graphql/dtos/where.args'
import { ChapterListRelationFilter } from 'src/models/chapters/graphql/dtos/where.args'

@InputType()
export class CourseWhereUniqueInput {
  id: number
}

@InputType()
export class CourseWhereInputStrict
  implements
    RestrictProperties<CourseWhereInputStrict, Prisma.CourseWhereInput>
{
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  id: IntFilter
  title: StringFilter
  description: StringFilter

  adminUid: StringFilter
  chapters: ChapterListRelationFilter
  admin: AdminRelationFilter

  AND: CourseWhereInput[]
  OR: CourseWhereInput[]
  NOT: CourseWhereInput[]
}

@InputType()
export class CourseWhereInput extends PartialType(CourseWhereInputStrict) {}

@InputType()
export class CourseListRelationFilter {
  every?: CourseWhereInput
  some?: CourseWhereInput
  none?: CourseWhereInput
}

@InputType()
export class CourseRelationFilter {
  is?: CourseWhereInput
  isNot?: CourseWhereInput
}
