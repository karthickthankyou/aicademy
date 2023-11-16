import { ObjectType } from '@nestjs/graphql'
import { Student as StudentType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Student implements RestrictProperties<Student, StudentType> {
  uid: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
