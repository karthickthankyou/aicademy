import { PartialType } from '@nestjs/swagger'
import { CreateStudent } from './create.dto'
import { Student } from '@prisma/client'

export class UpdateStudent extends PartialType(CreateStudent) {
  uid: Student['uid']
}
