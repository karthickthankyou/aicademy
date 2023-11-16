import { Injectable } from '@nestjs/common'
import { FindManyStudentArgs, FindUniqueStudentArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateStudentInput } from './dtos/create-student.input'
import { UpdateStudentInput } from './dtos/update-student.input'

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createStudentInput: CreateStudentInput) {
    return this.prisma.student.create({
      data: createStudentInput,
    })
  }

  findAll(args: FindManyStudentArgs) {
    return this.prisma.student.findMany(args)
  }

  findOne(args: FindUniqueStudentArgs) {
    return this.prisma.student.findUnique(args)
  }

  update(updateStudentInput: UpdateStudentInput) {
    const { uid, ...data } = updateStudentInput
    return this.prisma.student.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueStudentArgs) {
    return this.prisma.student.delete(args)
  }
}
