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
import { CreateChapter } from './dtos/create.dto'
import { ChapterQueryDto } from './dtos/query.dto'
import { UpdateChapter } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ChapterEntity } from './entity/chapter.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('chapters')
@Controller('chapters')
export class ChaptersController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ChapterEntity })
  @Post()
  create(@Body() createChapterDto: CreateChapter) {
    return this.prisma.chapter.create({ data: createChapterDto })
  }

  @ApiOkResponse({ type: [ChapterEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ChapterQueryDto) {
    return this.prisma.chapter.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ChapterEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.chapter.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ChapterEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateChapterDto: UpdateChapter,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.chapter.update({
      where: { id },
      data: updateChapterDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.chapter.delete({ where: { id } })
  }
}
