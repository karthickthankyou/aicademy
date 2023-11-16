import { Question } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class QuestionEntity
  implements RestrictProperties<QuestionEntity, Question>
{
  id: number
  createdAt: Date
  updatedAt: Date
  question: string
  chapterId: number
}
