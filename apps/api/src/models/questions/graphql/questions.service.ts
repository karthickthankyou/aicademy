import { Injectable } from '@nestjs/common'
import { FindManyQuestionArgs, FindUniqueQuestionArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateQuestionInput } from './dtos/create-question.input'
import { UpdateQuestionInput } from './dtos/update-question.input'

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createQuestionInput: CreateQuestionInput) {
    return this.prisma.question.create({
      data: createQuestionInput,
    })
  }

  findAll(args: FindManyQuestionArgs) {
    return this.prisma.question.findMany(args)
  }

  findOne(args: FindUniqueQuestionArgs) {
    return this.prisma.question.findUnique(args)
  }

  update(updateQuestionInput: UpdateQuestionInput) {
    const { id, ...data } = updateQuestionInput
    return this.prisma.question.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueQuestionArgs) {
    return this.prisma.question.delete(args)
  }
}
