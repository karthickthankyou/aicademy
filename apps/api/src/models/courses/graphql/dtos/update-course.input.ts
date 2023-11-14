import { CreateCourseInput } from './create-course.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Course } from '@prisma/client'

@InputType()
export class UpdateCourseInput extends PartialType(CreateCourseInput) {
  id: Course['id']
}
