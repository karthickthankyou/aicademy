import { Field, ObjectType } from '@nestjs/graphql'
import { TestQuestion as TestQuestionType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class TestQuestion
  implements RestrictProperties<TestQuestion, TestQuestionType>
{
  id: number
  studentAnswer: string
  @Field({ nullable: true })
  aiScore: number
  @Field({ nullable: true })
  aiFeedback: string
  testId: number
  questionId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
