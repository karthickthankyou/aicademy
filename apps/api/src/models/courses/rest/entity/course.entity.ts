import { Course } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CourseEntity implements RestrictProperties<CourseEntity, Course> {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  @IsOptional()
  description: string
  adminUid: string
}
