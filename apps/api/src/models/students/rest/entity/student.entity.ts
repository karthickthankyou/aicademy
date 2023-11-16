import { Student } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class StudentEntity
  implements RestrictProperties<StudentEntity, Student>
{
  uid: string
}
