import { Injectable } from '@nestjs/common'

import OpenAI from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources'

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
}
