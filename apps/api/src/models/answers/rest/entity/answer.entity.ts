import { Answer } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AnswerEntity implements RestrictProperties<AnswerEntity, Answer> {
  id: number
  answer: string
  questionId: number
  @IsOptional()
  explanation: string
}
