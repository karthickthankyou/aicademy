import { Injectable } from '@nestjs/common'

import OpenAI from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources'
import { TestResultOutput } from 'src/models/tests/rest/entity/test.entity'

@Injectable()
export class AIService {
  private readonly openAI: OpenAI

  constructor() {
    this.openAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  }

  async question({
    question,
    courseInfo,
  }: {
    question: string
    courseInfo: string
  }) {
    const messages: ChatCompletionMessageParam[] = []
    console.log('question ', question)
    messages.push({
      content: 'You are a teacher. Answer the question of the user.',
      role: 'system',
    })

    messages.push({ content: courseInfo, role: 'system' })

    messages.push({
      content: 'Be informative and precise.',
      role: 'system',
    })

    messages.push({ content: question, role: 'user' })

    const chatCompletion = await this.openAI.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
      max_tokens: 400,
    })

    console.log(`Answer: ${JSON.stringify(chatCompletion)}`)
    return chatCompletion.choices
      .map((choice) => choice.message.content)
      .join(' ')
  }

  async add(a: number, b: number): Promise<number> {
    return a + b
  }

  async submitTest({
    answers,
  }: {
    answers: {
      userAnswer: string
      correctAnswer: string
      question: string
      questionId: number
    }[]
  }): Promise<TestResultOutput[]> {
    const messages: ChatCompletionMessageParam[] = []
    messages.push({
      role: 'system',
      content:
        'You are a teacher. Look at the user answers and give them marks per question',
    })
    // Adding each question and answer pair to the conversation
    answers.forEach((answer, index) => {
      messages.push({
        role: 'system',
        content: `QuestionId: ${answer.questionId}, Question: ${answer.question}`,
      })
      messages.push({
        role: 'user',
        content: `User Answer: ${answer.userAnswer}`,
      })
      messages.push({
        role: 'system',
        content: `Correct Answer: ${answer.correctAnswer}`,
      })
    })

    messages.push({
      role: 'system',
      content:
        'Return in a json format [{questionId:number, feedback: string, marks: number}]',
    })

    messages.push({
      role: 'system',
      content:
        'Make sure the marks are between 0 to 100. 0 for the wrong answer and 100 for the perfect answer.',
    })
    // console.log('submitTest submitesd to ai... ', answers)

    const chatCompletion = await this.openAI.chat.completions.create({
      messages,
      functions: [
        {
          name: 'studentResult',
          description: 'Result of the student exam.',
          parameters: {
            type: 'object',
            properties: {
              testResults: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    questionId: {
                      type: 'number',
                      description: 'The unique id of the question.',
                    },
                    feedback: {
                      type: 'string',
                      description: 'Feedback given on the students answer.',
                    },
                    marks: {
                      type: 'number',
                      description:
                        'Marks given for the answer. Minimum:0 Maximum:100',
                    },
                  },
                },
              },
            },
          },
        },
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 400,
    })

    console.log(
      'chatCompletion.choices[0].message.function_call.arguments',
      chatCompletion.choices[0].message.function_call.arguments,
    )
    const result = JSON.parse(
      chatCompletion.choices[0].message.function_call.arguments,
    )
    console.log('chatCompletion... ', result)
    return result.testResults
  }

  async takeTest({ courseInfo }: { courseInfo: string }) {
    const messages: ChatCompletionMessageParam[] = []

    messages.push({
      role: 'system',
      content:
        'You are a teacher. Ask a question to the user from the below course.',
    })

    messages.push({ content: courseInfo, role: 'system' })

    const chatCompletion = await this.openAI.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
      max_tokens: 400,
    })

    console.log(`Answer: ${JSON.stringify(chatCompletion)}`)
    return chatCompletion.choices
      .map((choice) => choice.message.content)
      .join(' ')
  }

  async verifyAnswer({
    courseInfo,
    question,
    answer,
  }: {
    courseInfo: string
    question: string
    answer: string
  }) {
    const messages: ChatCompletionMessageParam[] = []

    messages.push({
      role: 'system',
      content:
        'You are a teacher. Look at the course information. Look at the question asked and answer.',
    })

    messages.push({ content: courseInfo, role: 'system' })
    messages.push({ content: question, role: 'system' })
    messages.push({ content: answer, role: 'user' })
    messages.push({
      content:
        'Validate the answer and return a mark x out of 100 for the answer. Mention the student as you.',
      role: 'system',
    })

    const chatCompletion = await this.openAI.chat.completions.create({
      messages,
      functions: [
        {
          name: 'student_result',
          description: 'Result of the student exam.',
          parameters: {
            type: 'object',
            properties: {
              feedback: {
                type: 'string',
                description: 'Feedback given on the students answer.',
              },
              marks: {
                type: 'number',
                description: 'Marks given for the answer out of 100',
              },
            },
          },
        },
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 400,
    })

    console.log(`Answer: ${JSON.stringify(chatCompletion)}`)
    return chatCompletion.choices
      .map((choice) => choice.message.content)
      .join(' ')
  }
}
