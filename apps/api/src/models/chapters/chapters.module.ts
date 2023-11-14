import { Module } from '@nestjs/common'
import { ChaptersService } from './graphql/chapters.service'
import { ChaptersResolver } from './graphql/chapters.resolver'
import { ChaptersController } from './rest/chapters.controller'

@Module({
  providers: [ChaptersResolver, ChaptersService],
  exports: [ChaptersService],
  controllers: [ChaptersController],
})
export class ChaptersModule {}
