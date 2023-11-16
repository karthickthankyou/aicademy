import { Field, ObjectType } from '@nestjs/graphql'
import { Test as TestType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Test implements RestrictProperties<Test, TestType> {
  id: number
  createdAt: Date
  updatedAt: Date
  courseId: number
  @Field({ nullable: true })
  aiTotalScore: number
  studentUid: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
