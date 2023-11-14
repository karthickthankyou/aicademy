import { Field, ObjectType } from '@nestjs/graphql'
import { Course as CourseType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Course implements RestrictProperties<Course, CourseType> {
  @Field({ nullable: true })
  published: boolean
  createdAt: Date
  updatedAt: Date
  id: number
  title: string
  @Field({ nullable: true })
  description: string

  adminUid: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
