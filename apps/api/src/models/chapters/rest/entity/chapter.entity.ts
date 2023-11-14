import { Chapter } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ChapterEntity
  implements RestrictProperties<ChapterEntity, Chapter>
{
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  content: string
  courseId: number
}
