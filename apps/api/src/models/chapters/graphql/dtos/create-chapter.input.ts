import { InputType, PickType } from '@nestjs/graphql'
import { Chapter } from '../entity/chapter.entity'
import { CreateQuestionInputWithoutChapterId } from 'src/models/questions/graphql/dtos/create-question.input'

@InputType()
export class CreateChapterInput extends PickType(
  Chapter,
  ['content', 'courseId', 'title'],
  InputType,
) {}
@InputType()
export class CreateChapterInputWithoutCourseId extends PickType(
  Chapter,
  ['content', 'title'],
  InputType,
) {
  questions: CreateQuestionInputWithoutChapterId[]
}
