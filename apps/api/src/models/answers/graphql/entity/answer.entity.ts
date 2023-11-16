import { Field, ObjectType } from '@nestjs/graphql'
import { Answer as AnswerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Answer implements RestrictProperties<Answer, AnswerType> {
  id: number
  answer: string
  @Field({ nullable: true })
  explanation: string
  questionId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
