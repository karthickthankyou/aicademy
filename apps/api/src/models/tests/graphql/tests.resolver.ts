import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { TestsService } from './tests.service'
import { Test } from './entity/test.entity'
import { FindManyTestArgs, FindUniqueTestArgs } from './dtos/find.args'
import { UpdateTestInput } from './dtos/update-test.input'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Question } from 'src/models/questions/graphql/entity/question.entity'
import { Course } from 'src/models/courses/graphql/entity/course.entity'
import { AIService } from 'src/common/ai/ai.service'
import { SubmitTestInput, TestResultOutput } from '../rest/entity/test.entity'
import { TestQuestion } from 'src/models/test-questions/graphql/entity/test-question.entity'

@Resolver(() => Test)
export class TestsResolver {
  constructor(
    private readonly testsService: TestsService,
    private readonly prisma: PrismaService,
    private readonly ai: AIService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Test, { name: 'createTest' })
  async createTest(
    @Args('courseId') courseId: number,
    @GetUser() user: GetUserType,
  ) {
    const existingTest = await this.prisma.test.findFirst({
      where: { courseId, studentUid: user.uid, aiTotalScore: { equals: null } },
    })

    if (existingTest) {
      return existingTest
    }

    const questions = (await this.prisma
      .$queryRaw`SELECT * FROM "Question" WHERE "chapterId" IN (SELECT id FROM "Chapter" WHERE "courseId" = ${courseId}) ORDER BY RANDOM() LIMIT 5`) as Question[]

    return this.prisma.test.create({
      data: {
        studentUid: user.uid,
        courseId,
        questions: {
          create: questions.map((que) => ({
            questionId: que.id,
            studentAnswer: '',
          })),
        },
      },
    })
  }

  @Mutation(() => [TestResultOutput], { name: 'submitTest' })
  async submitTest(
    @Args({ name: 'submitTestInput', type: () => [SubmitTestInput] })
    submitTestInput: SubmitTestInput[],
    @Args({ name: 'testId', type: () => Number })
    testId: number,
  ) {
    const questionIds = submitTestInput.map((que) => que.id)
    const correctAnswers = await this.prisma.answer.findMany({
      where: { questionId: { in: questionIds } },
    })

    const answers = submitTestInput.map((userAnswer) => {
      const correctAnswer = correctAnswers.find(
        (answer) => answer.questionId === userAnswer.id,
      )
      return {
        userAnswer: userAnswer.userAnswer,
        correctAnswer: correctAnswer.answer,
        question: userAnswer.question,
        questionId: userAnswer.id,
      }
    })
    const aiResults = await this.ai.submitTest({ answers })
    await Promise.all(
      aiResults.map((result) => {
        return this.prisma.testQuestion.updateMany({
          where: {
            testId,
            questionId: +result.questionId,
          },
          data: {
            aiScore: result.marks,
            aiFeedback: result.feedback,
            studentAnswer: submitTestInput.find(
              (que) => que.id === +result.questionId,
            ).userAnswer,
          },
        })
      }),
    )

    const totalMarks = aiResults.reduce((total, res) => total + res.marks, 0)
    await this.prisma.test.update({
      data: {
        aiTotalScore: totalMarks,
      },
      where: {
        id: testId,
      },
    })
    return aiResults
  }

  @Query(() => [Test], { name: 'tests' })
  findAll(@Args() args: FindManyTestArgs) {
    return this.testsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Test], { name: 'myTests' })
  myTests(@Args() args: FindManyTestArgs, @GetUser() user: GetUserType) {
    return this.testsService.findAll({
      ...args,
      where: { ...args.where, studentUid: { equals: user.uid } },
    })
  }

  @Query(() => Test, { name: 'test' })
  findOne(@Args() args: FindUniqueTestArgs) {
    return this.testsService.findOne(args)
  }

  @Mutation(() => Test)
  updateTest(@Args('updateTestInput') args: UpdateTestInput) {
    return this.testsService.update(args)
  }

  @Mutation(() => Test)
  removeTest(@Args() args: FindUniqueTestArgs) {
    return this.testsService.remove(args)
  }

  @ResolveField(() => [Question])
  questions(@Parent() parent: Test) {
    return this.prisma.question.findMany({
      where: { testQuestions: { some: { testId: parent.id } } },
    })
  }

  @ResolveField(() => [TestQuestion])
  results(@Parent() parent: Test) {
    return this.prisma.testQuestion.findMany({
      where: { testId: parent.id },
    })
  }

  @ResolveField(() => Course)
  course(@Parent() parent: Test) {
    return this.prisma.course.findFirst({
      where: { tests: { some: { id: parent.id } } },
    })
  }
}
