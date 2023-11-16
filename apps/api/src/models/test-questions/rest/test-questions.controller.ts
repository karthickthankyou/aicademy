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
import { CreateTestQuestion } from './dtos/create.dto'
import { TestQuestionQueryDto } from './dtos/query.dto'
import { UpdateTestQuestion } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { TestQuestionEntity } from './entity/test-question.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('test-questions')
@Controller('test-questions')
export class TestQuestionsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TestQuestionEntity })
  @Post()
  create(@Body() createTestQuestionDto: CreateTestQuestion) {
    return this.prisma.testQuestion.create({ data: createTestQuestionDto })
  }

  @ApiOkResponse({ type: [TestQuestionEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: TestQuestionQueryDto) {
    return this.prisma.testQuestion.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: TestQuestionEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.testQuestion.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: TestQuestionEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTestQuestionDto: UpdateTestQuestion,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.testQuestion.update({
      where: { id },
      data: updateTestQuestionDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.testQuestion.delete({ where: { id } })
  }
}
