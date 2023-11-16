import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { StudentsService } from './students.service'
import { Student } from './entity/student.entity'
import { FindManyStudentArgs, FindUniqueStudentArgs } from './dtos/find.args'
import { CreateStudentInput } from './dtos/create-student.input'
import { UpdateStudentInput } from './dtos/update-student.input'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Student)
export class StudentsResolver {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Student)
  createStudent(@Args('createStudentInput') args: CreateStudentInput) {
    return this.studentsService.create(args)
  }

  @Query(() => [Student], { name: 'students' })
  findAll(@Args() args: FindManyStudentArgs) {
    return this.studentsService.findAll(args)
  }

  @Query(() => Student, { name: 'student' })
  findOne(@Args() args: FindUniqueStudentArgs) {
    return this.studentsService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Student, { name: 'studentMe' })
  async studentMe(@GetUser() user: GetUserType) {
    const student = await this.prisma.student.findUnique({
      where: { uid: user.uid },
    })
    if (!student) {
      return this.prisma.student.create({ data: { uid: user.uid } })
    }
    return student
  }

  @Mutation(() => Student)
  updateStudent(@Args('updateStudentInput') args: UpdateStudentInput) {
    return this.studentsService.update(args)
  }

  @Mutation(() => Student)
  removeStudent(@Args() args: FindUniqueStudentArgs) {
    return this.studentsService.remove(args)
  }
}
