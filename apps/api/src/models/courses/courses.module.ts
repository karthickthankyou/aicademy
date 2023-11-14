import { Module } from '@nestjs/common'
import { CoursesService } from './graphql/courses.service'
import { CoursesResolver } from './graphql/courses.resolver'
import { CoursesController } from './rest/courses.controller'

@Module({
  providers: [CoursesResolver, CoursesService],
  exports: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
