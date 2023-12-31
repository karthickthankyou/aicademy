import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CoursesService } from './courses.service'
import {
  AnswerOutput,
  Course,
  Mark,
  QuestionOutput,
} from './entity/course.entity'
import { FindManyCourseArgs, FindUniqueCourseArgs } from './dtos/find.args'
import { CreateCourseInput } from './dtos/create-course.input'
import { UpdateCourseInput } from './dtos/update-course.input'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { Chapter } from 'src/models/chapters/graphql/entity/chapter.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AIService } from 'src/common/ai/ai.service'

@Resolver(() => Course)
export class CoursesResolver {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly prisma: PrismaService,
    private readonly ai: AIService,
  ) {}

  @AllowAuthenticated('admin')
  @Mutation(() => Course)
  createCourse(@Args('createCourseInput') args: CreateCourseInput) {
    return this.coursesService.create(args)
  }

  @Query(() => [Course], { name: 'courses' })
  courses(@Args() args: FindManyCourseArgs) {
    return this.coursesService.findAll(args)
  }

  @Query(() => AnswerOutput, { name: 'doubt' })
  async doubt(
    @Args('question') question: string,
    @Args('courseInfo') courseInfo: string,
  ) {
    const answer = await this.ai.question({ courseInfo, question })
    return { answer }
  }

  @Query(() => Mark, { name: 'verifyAnswer' })
  async verifyAnswer(
    @Args('courseInfo') courseInfo: string,
    @Args('question') question: string,
    @Args('answer') answer: string,
  ) {
    const mark = await this.ai.verifyAnswer({ courseInfo, question, answer })
    return { mark }
  }

  @Query(() => Course, { name: 'course' })
  async findOne(@Args() args: FindUniqueCourseArgs) {
    const course = await this.coursesService.findOne(args)
    console.log('course ', course)
    return course
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Course)
  updateCourse(@Args('updateCourseInput') args: UpdateCourseInput) {
    return this.coursesService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Course)
  removeCourse(@Args() args: FindUniqueCourseArgs) {
    return this.coursesService.remove(args)
  }

  @ResolveField(() => [Chapter])
  chapters(@Parent() parent: Course) {
    return this.prisma.chapter.findMany({
      where: { courseId: parent.id },
    })
  }

  @ResolveField(() => Number)
  async chaptersLength(@Parent() parent: Course) {
    const chapAgg = await this.prisma.chapter.aggregate({
      _count: { id: true },
      where: { courseId: parent.id },
    })
    return chapAgg._count.id
  }
}
