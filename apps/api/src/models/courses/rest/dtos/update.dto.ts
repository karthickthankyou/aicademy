import { PartialType } from '@nestjs/swagger'
import { CreateCourse } from './create.dto'
import { Course } from '@prisma/client'

export class UpdateCourse extends PartialType(CreateCourse) {
  id: Course['id']
}
