import { ObjectType } from '@nestjs/graphql'
import { Question as QuestionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Question implements RestrictProperties<Question, QuestionType> {
  id: number
  createdAt: Date
  updatedAt: Date
  question: string
  chapterId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
