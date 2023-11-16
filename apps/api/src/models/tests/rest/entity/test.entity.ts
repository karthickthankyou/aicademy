import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { Test } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class TestEntity implements RestrictProperties<TestEntity, Test> {
  id: number
  createdAt: Date
  updatedAt: Date
  courseId: number
  @IsOptional()
  aiTotalScore: number
  studentUid: string
}

@InputType()
export class SubmitTestInput {
  id: number
  question: string
  userAnswer?: string
}

@ObjectType()
export class TestResultOutput {
  questionId: string
  feedback: string
  marks: number
}
