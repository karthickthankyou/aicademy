import { InputType, PickType } from '@nestjs/graphql'
import { Student } from '../entity/student.entity'

@InputType()
export class CreateStudentInput extends PickType(Student, ['uid'], InputType) {}
