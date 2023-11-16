import { PickType } from '@nestjs/swagger'
import { StudentEntity } from '../entity/student.entity'

export class CreateStudent extends PickType(StudentEntity, ['uid']) {}
