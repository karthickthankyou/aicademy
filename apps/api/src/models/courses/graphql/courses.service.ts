import { Injectable } from '@nestjs/common'
import { FindManyCourseArgs, FindUniqueCourseArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCourseInput } from './dtos/create-course.input'
import { UpdateCourseInput } from './dtos/update-course.input'

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}
  create({ adminUid, ...createCourseInput }: CreateCourseInput) {
    return this.prisma.course.create({
      data: { ...createCourseInput, admin: { connect: { uid: adminUid } } },
    })
  }

  findAll(args: FindManyCourseArgs) {
    return this.prisma.course.findMany(args)
  }

  findOne(args: FindUniqueCourseArgs) {
    return this.prisma.course.findUnique(args)
  }

  update(updateCourseInput: UpdateCourseInput) {
    const { id, ...data } = updateCourseInput
    return this.prisma.course.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueCourseArgs) {
    return this.prisma.course.delete(args)
  }
}
