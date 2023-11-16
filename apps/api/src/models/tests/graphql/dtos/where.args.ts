import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CourseRelationFilter } from 'src/models/courses/graphql/dtos/where.args'
import { StudentRelationFilter } from 'src/models/students/graphql/dtos/where.args'
import { TestQuestionListRelationFilter } from 'src/models/test-questions/graphql/dtos/where.args'

@InputType()
export class TestWhereUniqueInput {
  id: number
}

@InputType()
export class TestWhereInputStrict
  implements RestrictProperties<TestWhereInputStrict, Prisma.TestWhereInput>
{
  Student: StudentRelationFilter
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  courseId: IntFilter
  aiTotalScore: IntFilter
  studentUid: StringFilter
  course: CourseRelationFilter
  questions: TestQuestionListRelationFilter

  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: TestWhereInput[]
  OR: TestWhereInput[]
  NOT: TestWhereInput[]
}

@InputType()
export class TestWhereInput extends PartialType(TestWhereInputStrict) {}

@InputType()
export class TestListRelationFilter {
  every?: TestWhereInput
  some?: TestWhereInput
  none?: TestWhereInput
}

@InputType()
export class TestRelationFilter {
  is?: TestWhereInput
  isNot?: TestWhereInput
}
