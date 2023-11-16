import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { QuestionRelationFilter } from 'src/models/questions/graphql/dtos/where.args'

@InputType()
export class AnswerWhereUniqueInput {
  id: number
}

@InputType()
export class AnswerWhereInputStrict
  implements
    RestrictProperties<AnswerWhereInputStrict, Prisma.AnswerWhereInput>
{
  id: IntFilter
  answer: StringFilter
  explanation: StringFilter
  questionId: IntFilter
  question: QuestionRelationFilter

  AND: AnswerWhereInput[]
  OR: AnswerWhereInput[]
  NOT: AnswerWhereInput[]
}

@InputType()
export class AnswerWhereInput extends PartialType(AnswerWhereInputStrict) {}

@InputType()
export class AnswerListRelationFilter {
  every?: AnswerWhereInput
  some?: AnswerWhereInput
  none?: AnswerWhereInput
}

@InputType()
export class AnswerRelationFilter {
  is?: AnswerWhereInput
  isNot?: AnswerWhereInput
}
