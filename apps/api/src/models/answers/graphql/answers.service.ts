import { Injectable } from '@nestjs/common'
import { FindManyAnswerArgs, FindUniqueAnswerArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAnswerInput } from './dtos/create-answer.input'
import { UpdateAnswerInput } from './dtos/update-answer.input'

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAnswerInput: CreateAnswerInput) {
    return this.prisma.answer.create({
      data: createAnswerInput,
    })
  }

  findAll(args: FindManyAnswerArgs) {
    return this.prisma.answer.findMany(args)
  }

  findOne(args: FindUniqueAnswerArgs) {
    return this.prisma.answer.findUnique(args)
  }

  update(updateAnswerInput: UpdateAnswerInput) {
    const { id, ...data } = updateAnswerInput
    return this.prisma.answer.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueAnswerArgs) {
    return this.prisma.answer.delete(args)
  }
}
