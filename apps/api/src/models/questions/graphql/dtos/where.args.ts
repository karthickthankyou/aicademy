import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AnswerRelationFilter } from 'src/models/answers/graphql/dtos/where.args'
import { ChapterRelationFilter } from 'src/models/chapters/graphql/dtos/where.args'
import { TestQuestionListRelationFilter } from 'src/models/test-questions/graphql/dtos/where.args'

@InputType()
export class QuestionWhereUniqueInput {
  id: number
}

@InputType()
export class QuestionWhereInputStrict
  implements
    RestrictProperties<QuestionWhereInputStrict, Prisma.QuestionWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  question: StringFilter
  chapterId: IntFilter
  answer: AnswerRelationFilter
  chapter: ChapterRelationFilter
  testQuestions: TestQuestionListRelationFilter

  AND: QuestionWhereInput[]
  OR: QuestionWhereInput[]
  NOT: QuestionWhereInput[]
}

@InputType()
export class QuestionWhereInput extends PartialType(QuestionWhereInputStrict) {}

@InputType()
export class QuestionListRelationFilter {
  every?: QuestionWhereInput
  some?: QuestionWhereInput
  none?: QuestionWhereInput
}

@InputType()
export class QuestionRelationFilter {
  is?: QuestionWhereInput
  isNot?: QuestionWhereInput
}
