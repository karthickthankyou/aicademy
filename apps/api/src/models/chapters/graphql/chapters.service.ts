import { Injectable } from '@nestjs/common'
import { FindManyChapterArgs, FindUniqueChapterArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateChapterInput } from './dtos/create-chapter.input'
import { UpdateChapterInput } from './dtos/update-chapter.input'

@Injectable()
export class ChaptersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createChapterInput: CreateChapterInput) {
    return this.prisma.chapter.create({
      data: createChapterInput,
    })
  }

  findAll(args: FindManyChapterArgs) {
    return this.prisma.chapter.findMany(args)
  }

  findOne(args: FindUniqueChapterArgs) {
    return this.prisma.chapter.findUnique(args)
  }

  update(updateChapterInput: UpdateChapterInput) {
    const { id, ...data } = updateChapterInput
    return this.prisma.chapter.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueChapterArgs) {
    return this.prisma.chapter.delete(args)
  }
}
