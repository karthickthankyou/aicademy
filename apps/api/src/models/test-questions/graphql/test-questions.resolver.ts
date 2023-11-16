import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TestQuestionsService } from './test-questions.service'
import { TestQuestion } from './entity/test-question.entity'
import {
  FindManyTestQuestionArgs,
  FindUniqueTestQuestionArgs,
} from './dtos/find.args'
import { CreateTestQuestionInput } from './dtos/create-test-question.input'
import { UpdateTestQuestionInput } from './dtos/update-test-question.input'

@Resolver(() => TestQuestion)
export class TestQuestionsResolver {
  constructor(private readonly testQuestionsService: TestQuestionsService) {}

  @Mutation(() => TestQuestion)
  createTestQuestion(
    @Args('createTestQuestionInput') args: CreateTestQuestionInput,
  ) {
    return this.testQuestionsService.create(args)
  }

  @Query(() => [TestQuestion], { name: 'testQuestions' })
  findAll(@Args() args: FindManyTestQuestionArgs) {
    return this.testQuestionsService.findAll(args)
  }

  @Query(() => TestQuestion, { name: 'testQuestion' })
  findOne(@Args() args: FindUniqueTestQuestionArgs) {
    return this.testQuestionsService.findOne(args)
  }

  @Mutation(() => TestQuestion)
  updateTestQuestion(
    @Args('updateTestQuestionInput') args: UpdateTestQuestionInput,
  ) {
    return this.testQuestionsService.update(args)
  }

  @Mutation(() => TestQuestion)
  removeTestQuestion(@Args() args: FindUniqueTestQuestionArgs) {
    return this.testQuestionsService.remove(args)
  }
}
