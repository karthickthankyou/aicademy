import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { QuestionsService } from './questions.service'
import { Question } from './entity/question.entity'
import { FindManyQuestionArgs, FindUniqueQuestionArgs } from './dtos/find.args'
import { CreateQuestionInput } from './dtos/create-question.input'
import { UpdateQuestionInput } from './dtos/update-question.input'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'

@AllowAuthenticated('admin')
@Resolver(() => Question)
export class QuestionsResolver {
  constructor(private readonly questionsService: QuestionsService) {}

  @Mutation(() => Question)
  createQuestion(@Args('createQuestionInput') args: CreateQuestionInput) {
    return this.questionsService.create(args)
  }

  @Query(() => [Question], { name: 'questions' })
  findAll(@Args() args: FindManyQuestionArgs) {
    return this.questionsService.findAll(args)
  }

  @Query(() => Question, { name: 'question' })
  findOne(@Args() args: FindUniqueQuestionArgs) {
    return this.questionsService.findOne(args)
  }

  @Mutation(() => Question)
  updateQuestion(@Args('updateQuestionInput') args: UpdateQuestionInput) {
    return this.questionsService.update(args)
  }

  @Mutation(() => Question)
  removeQuestion(@Args() args: FindUniqueQuestionArgs) {
    return this.questionsService.remove(args)
  }
}
