import { PartialType } from '@nestjs/swagger'
import { CreateChapter } from './create.dto'
import { Chapter } from '@prisma/client'

export class UpdateChapter extends PartialType(CreateChapter) {
  id: Chapter['id']
}
