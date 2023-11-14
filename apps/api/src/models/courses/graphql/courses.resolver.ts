import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CoursesService } from './courses.service'
import { Course } from './entity/course.entity'
import { FindManyCourseArgs, FindUniqueCourseArgs } from './dtos/find.args'
import { CreateCourseInput } from './dtos/create-course.input'
import { UpdateCourseInput } from './dtos/update-course.input'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'

@AllowAuthenticated('admin')
@Resolver(() => Course)
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService) {}

  @Mutation(() => Course)
  createCourse(@Args('createCourseInput') args: CreateCourseInput) {
    return this.coursesService.create(args)
  }

  @Query(() => [Course], { name: 'courses' })
  findAll(@Args() args: FindManyCourseArgs) {
    return this.coursesService.findAll(args)
  }

  @Query(() => Course, { name: 'course' })
  findOne(@Args() args: FindUniqueCourseArgs) {
    return this.coursesService.findOne(args)
  }

  @Mutation(() => Course)
  updateCourse(@Args('updateCourseInput') args: UpdateCourseInput) {
    return this.coursesService.update(args)
  }

  @Mutation(() => Course)
  removeCourse(@Args() args: FindUniqueCourseArgs) {
    return this.coursesService.remove(args)
  }
}
