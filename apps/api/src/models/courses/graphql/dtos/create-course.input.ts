import { InputType, PickType } from '@nestjs/graphql'
import { Course } from '../entity/course.entity'
import { CreateChapterInputWithoutCourseId } from 'src/models/chapters/graphql/dtos/create-chapter.input'

@InputType()
export class CreateCourseInput extends PickType(
  Course,
  ['adminUid', 'description', 'title', 'published', 'image'],
  InputType,
) {
  chapters: CreateChapterInputWithoutCourseId[]
}
