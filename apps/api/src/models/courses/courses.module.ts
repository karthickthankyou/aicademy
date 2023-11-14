import { Module } from '@nestjs/common'
import { CoursesService } from './graphql/courses.service'
import { CoursesResolver } from './graphql/courses.resolver'
import { CoursesController } from './rest/courses.controller'
import { AIModule } from 'src/common/ai/ai.module'

@Module({
  imports: [AIModule],
  providers: [CoursesResolver, CoursesService],
  exports: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
