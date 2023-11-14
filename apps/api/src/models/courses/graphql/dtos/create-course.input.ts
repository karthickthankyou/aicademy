import { InputType, PickType } from '@nestjs/graphql'
import { Course } from '../entity/course.entity'

@InputType()
export class CreateCourseInput extends PickType(
  Course,
  ['adminUid', 'description', 'title', 'published'],
  InputType,
) {}
