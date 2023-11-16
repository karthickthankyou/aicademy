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
import { CreateStudent } from './dtos/create.dto'
import { StudentQueryDto } from './dtos/query.dto'
import { UpdateStudent } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { StudentEntity } from './entity/student.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: StudentEntity })
  @Post()
  create(@Body() createStudentDto: CreateStudent) {
    return this.prisma.student.create({ data: createStudentDto })
  }

  @ApiOkResponse({ type: [StudentEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: StudentQueryDto) {
    return this.prisma.student.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: StudentEntity })
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.prisma.student.findUnique({ where: { uid } })
  }

  @ApiOkResponse({ type: StudentEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':uid')
  update(
    @Param('uid') uid: string,
    @Body() updateStudentDto: UpdateStudent,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.student.update({
      where: { uid },
      data: updateStudentDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':uid')
  remove(@Param('uid') uid: string) {
    return this.prisma.student.delete({ where: { uid } })
  }
}
