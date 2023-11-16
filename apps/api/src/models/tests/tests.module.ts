import { Module } from '@nestjs/common'
import { TestsService } from './graphql/tests.service'
import { TestsResolver } from './graphql/tests.resolver'
import { TestsController } from './rest/tests.controller'

@Module({
  providers: [TestsResolver, TestsService],
  exports: [TestsService],
  controllers: [TestsController],
})
export class TestsModule {}
