import { ObjectType } from '@nestjs/graphql'
import { Chapter as ChapterType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Chapter implements RestrictProperties<Chapter, ChapterType> {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  content: string
  courseId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
