import { InputType, OmitType } from '@nestjs/graphql'
import { Question } from '../entity/question.entity'

@InputType()
export class CreateQuestionInput extends OmitType(
  Question,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}

@InputType()
export class CreateQuestionInputWithoutChapterId extends OmitType(
  Question,
  ['id', 'createdAt', 'updatedAt', 'chapterId'],
  InputType,
) {
  answer: string
  explanation?: string
}
