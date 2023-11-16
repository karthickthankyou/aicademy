import { Module } from '@nestjs/common'
import { QuestionsService } from './graphql/questions.service'
import { QuestionsResolver } from './graphql/questions.resolver'
import { QuestionsController } from './rest/questions.controller'

@Module({
  providers: [QuestionsResolver, QuestionsService],
  exports: [QuestionsService],
  controllers: [QuestionsController],
})
export class QuestionsModule {}
