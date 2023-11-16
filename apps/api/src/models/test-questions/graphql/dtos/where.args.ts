import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { QuestionRelationFilter } from 'src/models/questions/graphql/dtos/where.args'
import { TestRelationFilter } from 'src/models/tests/graphql/dtos/where.args'

@InputType()
export class TestQuestionWhereUniqueInput {
  id: number
}

@InputType()
export class TestQuestionWhereInputStrict
  implements
    RestrictProperties<
      TestQuestionWhereInputStrict,
      Prisma.TestQuestionWhereInput
    >
{
  id: IntFilter
  studentAnswer: StringFilter
  aiScore: IntFilter
  aiFeedback: StringFilter
  testId: IntFilter
  questionId: IntFilter
  Test: TestRelationFilter
  question: QuestionRelationFilter

  AND: TestQuestionWhereInput[]
  OR: TestQuestionWhereInput[]
  NOT: TestQuestionWhereInput[]
}

@InputType()
export class TestQuestionWhereInput extends PartialType(
  TestQuestionWhereInputStrict,
) {}

@InputType()
export class TestQuestionListRelationFilter {
  every?: TestQuestionWhereInput
  some?: TestQuestionWhereInput
  none?: TestQuestionWhereInput
}

@InputType()
export class TestQuestionRelationFilter {
  is?: TestQuestionWhereInput
  isNot?: TestQuestionWhereInput
}
