import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TestsService } from './tests.service'
import { Test } from './entity/test.entity'
import { FindManyTestArgs, FindUniqueTestArgs } from './dtos/find.args'
import { CreateTestInput } from './dtos/create-test.input'
import { UpdateTestInput } from './dtos/update-test.input'

@Resolver(() => Test)
export class TestsResolver {
  constructor(private readonly testsService: TestsService) {}

  @Mutation(() => Test)
  createTest(@Args('createTestInput') args: CreateTestInput) {
    return this.testsService.create(args)
  }

  @Query(() => [Test], { name: 'tests' })
  findAll(@Args() args: FindManyTestArgs) {
    return this.testsService.findAll(args)
  }

  @Query(() => Test, { name: 'test' })
  findOne(@Args() args: FindUniqueTestArgs) {
    return this.testsService.findOne(args)
  }

  @Mutation(() => Test)
  updateTest(@Args('updateTestInput') args: UpdateTestInput) {
    return this.testsService.update(args)
  }

  @Mutation(() => Test)
  removeTest(@Args() args: FindUniqueTestArgs) {
    return this.testsService.remove(args)
  }
}
