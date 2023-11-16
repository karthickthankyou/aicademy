import { Injectable } from '@nestjs/common'
import {
  FindManyTestQuestionArgs,
  FindUniqueTestQuestionArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateTestQuestionInput } from './dtos/create-test-question.input'
import { UpdateTestQuestionInput } from './dtos/update-test-question.input'

@Injectable()
export class TestQuestionsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTestQuestionInput: CreateTestQuestionInput) {
    return this.prisma.testQuestion.create({
      data: createTestQuestionInput,
    })
  }

  findAll(args: FindManyTestQuestionArgs) {
    return this.prisma.testQuestion.findMany(args)
  }

  findOne(args: FindUniqueTestQuestionArgs) {
    return this.prisma.testQuestion.findUnique(args)
  }

  update(updateTestQuestionInput: UpdateTestQuestionInput) {
    const { id, ...data } = updateTestQuestionInput
    return this.prisma.testQuestion.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueTestQuestionArgs) {
    return this.prisma.testQuestion.delete(args)
  }
}
