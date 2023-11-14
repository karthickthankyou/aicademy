import { InputType, PickType } from '@nestjs/graphql'
import { Chapter } from '../entity/chapter.entity'

@InputType()
export class CreateChapterInput extends PickType(
  Chapter,
  ['content', 'courseId', 'title'],
  InputType,
) {}
