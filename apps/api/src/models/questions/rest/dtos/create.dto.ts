import { OmitType } from '@nestjs/swagger'
import { QuestionEntity } from '../entity/question.entity'

export class CreateQuestion extends OmitType(QuestionEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
