import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ChaptersService } from './chapters.service'
import { Chapter } from './entity/chapter.entity'
import { FindManyChapterArgs, FindUniqueChapterArgs } from './dtos/find.args'
import { CreateChapterInput } from './dtos/create-chapter.input'
import { UpdateChapterInput } from './dtos/update-chapter.input'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { Course } from 'src/models/courses/graphql/entity/course.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Chapter)
export class ChaptersResolver {
  constructor(
    private readonly chaptersService: ChaptersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin')
  @Mutation(() => Chapter)
  createChapter(@Args('createChapterInput') args: CreateChapterInput) {
    return this.chaptersService.create(args)
  }

  @Query(() => [Chapter], { name: 'chapters' })
  findAll(@Args() args: FindManyChapterArgs) {
    return this.chaptersService.findAll(args)
  }

  @Query(() => Chapter, { name: 'chapter' })
  findOne(@Args() args: FindUniqueChapterArgs) {
    return this.chaptersService.findOne(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Chapter)
  updateChapter(@Args('updateChapterInput') args: UpdateChapterInput) {
    return this.chaptersService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Chapter)
  removeChapter(@Args() args: FindUniqueChapterArgs) {
    return this.chaptersService.remove(args)
  }

  @ResolveField(() => Course)
  course(@Parent() parent: Chapter) {
    return this.prisma.course.findUnique({
      where: { id: parent.courseId },
    })
  }
}
