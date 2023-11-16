import { Module } from '@nestjs/common'
import { AnswersService } from './graphql/answers.service'
import { AnswersResolver } from './graphql/answers.resolver'
import { AnswersController } from './rest/answers.controller'

@Module({
  providers: [AnswersResolver, AnswersService],
  exports: [AnswersService],
  controllers: [AnswersController],
})
export class AnswersModule {}
