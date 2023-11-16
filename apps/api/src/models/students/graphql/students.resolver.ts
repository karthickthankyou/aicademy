import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { StudentsService } from './students.service'
import { Student } from './entity/student.entity'
import { FindManyStudentArgs, FindUniqueStudentArgs } from './dtos/find.args'
import { CreateStudentInput } from './dtos/create-student.input'
import { UpdateStudentInput } from './dtos/update-student.input'

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

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

  @Mutation(() => Student)
  updateStudent(@Args('updateStudentInput') args: UpdateStudentInput) {
    return this.studentsService.update(args)
  }

  @Mutation(() => Student)
  removeStudent(@Args() args: FindUniqueStudentArgs) {
    return this.studentsService.remove(args)
  }
}
