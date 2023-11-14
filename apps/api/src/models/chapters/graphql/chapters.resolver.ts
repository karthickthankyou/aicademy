import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ChaptersService } from './chapters.service'
import { Chapter } from './entity/chapter.entity'
import { FindManyChapterArgs, FindUniqueChapterArgs } from './dtos/find.args'
import { CreateChapterInput } from './dtos/create-chapter.input'
import { UpdateChapterInput } from './dtos/update-chapter.input'

@Resolver(() => Chapter)
export class ChaptersResolver {
  constructor(private readonly chaptersService: ChaptersService) {}

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

  @Mutation(() => Chapter)
  updateChapter(@Args('updateChapterInput') args: UpdateChapterInput) {
    return this.chaptersService.update(args)
  }

  @Mutation(() => Chapter)
  removeChapter(@Args() args: FindUniqueChapterArgs) {
    return this.chaptersService.remove(args)
  }
}
