import { Module } from '@nestjs/common'
import { TestQuestionsService } from './graphql/test-questions.service'
import { TestQuestionsResolver } from './graphql/test-questions.resolver'
import { TestQuestionsController } from './rest/test-questions.controller'

@Module({
  providers: [TestQuestionsResolver, TestQuestionsService],
  exports: [TestQuestionsService],
  controllers: [TestQuestionsController],
})
export class TestQuestionsModule {}
