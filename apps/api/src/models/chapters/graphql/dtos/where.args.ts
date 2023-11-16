import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CourseRelationFilter } from 'src/models/courses/graphql/dtos/where.args'
import { QuestionListRelationFilter } from 'src/models/questions/graphql/dtos/where.args'

@InputType()
export class ChapterWhereUniqueInput {
  id: number
}

@InputType()
export class ChapterWhereInputStrict
  implements
    RestrictProperties<ChapterWhereInputStrict, Prisma.ChapterWhereInput>
{
  questions: QuestionListRelationFilter
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  title: StringFilter
  content: StringFilter
  courseId: IntFilter
  course: CourseRelationFilter

  AND: ChapterWhereInput[]
  OR: ChapterWhereInput[]
  NOT: ChapterWhereInput[]
}

@InputType()
export class ChapterWhereInput extends PartialType(ChapterWhereInputStrict) {}

@InputType()
export class ChapterListRelationFilter {
  every?: ChapterWhereInput
  some?: ChapterWhereInput
  none?: ChapterWhereInput
}

@InputType()
export class ChapterRelationFilter {
  is?: ChapterWhereInput
  isNot?: ChapterWhereInput
}
