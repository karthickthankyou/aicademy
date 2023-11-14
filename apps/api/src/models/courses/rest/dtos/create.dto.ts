import { OmitType } from '@nestjs/swagger'
import { CourseEntity } from '../entity/course.entity'

export class CreateCourse extends OmitType(CourseEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
