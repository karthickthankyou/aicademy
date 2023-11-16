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
import { CreateQuestion } from './dtos/create.dto'
import { QuestionQueryDto } from './dtos/query.dto'
import { UpdateQuestion } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { QuestionEntity } from './entity/question.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: QuestionEntity })
  @Post()
  create(@Body() createQuestionDto: CreateQuestion) {
    return this.prisma.question.create({ data: createQuestionDto })
  }

  @ApiOkResponse({ type: [QuestionEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: QuestionQueryDto) {
    return this.prisma.question.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: QuestionEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.question.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: QuestionEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateQuestionDto: UpdateQuestion,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.question.update({
      where: { id },
      data: updateQuestionDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.question.delete({ where: { id } })
  }
}
