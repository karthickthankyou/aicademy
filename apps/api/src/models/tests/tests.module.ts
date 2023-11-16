import { Module } from '@nestjs/common'
import { TestsService } from './graphql/tests.service'
import { TestsResolver } from './graphql/tests.resolver'
import { TestsController } from './rest/tests.controller'
import { AIModule } from 'src/common/ai/ai.module'

@Module({
  imports: [AIModule],
  providers: [TestsResolver, TestsService],
  exports: [TestsService],
  controllers: [TestsController],
})
export class TestsModule {}
