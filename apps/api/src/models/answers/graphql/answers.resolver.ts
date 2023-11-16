import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AnswersService } from './answers.service'
import { Answer } from './entity/answer.entity'
import { FindManyAnswerArgs, FindUniqueAnswerArgs } from './dtos/find.args'
import { CreateAnswerInput } from './dtos/create-answer.input'
import { UpdateAnswerInput } from './dtos/update-answer.input'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'

@AllowAuthenticated('admin')
@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}

  @Mutation(() => Answer)
  createAnswer(@Args('createAnswerInput') args: CreateAnswerInput) {
    return this.answersService.create(args)
  }

  @Query(() => [Answer], { name: 'answers' })
  findAll(@Args() args: FindManyAnswerArgs) {
    return this.answersService.findAll(args)
  }

  @Query(() => Answer, { name: 'answer' })
  findOne(@Args() args: FindUniqueAnswerArgs) {
    return this.answersService.findOne(args)
  }

  @Mutation(() => Answer)
  updateAnswer(@Args('updateAnswerInput') args: UpdateAnswerInput) {
    return this.answersService.update(args)
  }

  @Mutation(() => Answer)
  removeAnswer(@Args() args: FindUniqueAnswerArgs) {
    return this.answersService.remove(args)
  }
}
