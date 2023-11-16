import { Injectable } from '@nestjs/common'
import { FindManyTestArgs, FindUniqueTestArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateTestInput } from './dtos/create-test.input'
import { UpdateTestInput } from './dtos/update-test.input'

@Injectable()
export class TestsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTestInput: CreateTestInput) {
    return this.prisma.test.create({
      data: createTestInput,
    })
  }

  findAll(args: FindManyTestArgs) {
    return this.prisma.test.findMany(args)
  }

  findOne(args: FindUniqueTestArgs) {
    return this.prisma.test.findUnique(args)
  }

  update(updateTestInput: UpdateTestInput) {
    const { id, ...data } = updateTestInput
    return this.prisma.test.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueTestArgs) {
    return this.prisma.test.delete(args)
  }
}
