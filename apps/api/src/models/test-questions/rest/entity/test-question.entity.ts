import { TestQuestion } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class TestQuestionEntity
  implements RestrictProperties<TestQuestionEntity, TestQuestion>
{
  id: number
  studentAnswer: string
  @IsOptional()
  aiScore: number

  @IsOptional()
  aiFeedback: string
  testId: number
  questionId: number
}
