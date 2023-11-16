import { CreateStudentInput } from './create-student.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Student } from '@prisma/client'

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  uid: Student['uid']
}
