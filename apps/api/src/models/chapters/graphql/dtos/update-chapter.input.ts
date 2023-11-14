import { CreateChapterInput } from './create-chapter.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Chapter } from '@prisma/client'

@InputType()
export class UpdateChapterInput extends PartialType(CreateChapterInput) {
  id: Chapter['id']
}
