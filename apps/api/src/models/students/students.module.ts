import { Module } from '@nestjs/common'
import { StudentsService } from './graphql/students.service'
import { StudentsResolver } from './graphql/students.resolver'
import { StudentsController } from './rest/students.controller'

@Module({
  providers: [StudentsResolver, StudentsService],
  exports: [StudentsService],
  controllers: [StudentsController],
})
export class StudentsModule {}
