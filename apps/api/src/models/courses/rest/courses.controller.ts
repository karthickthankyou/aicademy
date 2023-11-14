import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateCourse } from './dtos/create.dto'
import { CourseQueryDto } from './dtos/query.dto'
import { UpdateCourse } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { CourseEntity } from './entity/course.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CourseEntity })
  @Post()
  create(@Body() createCourseDto: CreateCourse) {
    return this.prisma.course.create({ data: createCourseDto })
  }

  @ApiOkResponse({ type: [CourseEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: CourseQueryDto) {
    return this.prisma.course.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: CourseEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.course.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: CourseEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateCourseDto: UpdateCourse,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.course.delete({ where: { id } })
  }
}
