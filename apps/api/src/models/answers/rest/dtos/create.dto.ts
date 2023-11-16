import { OmitType } from '@nestjs/swagger'
import { AnswerEntity } from '../entity/answer.entity'

export class CreateAnswer extends OmitType(AnswerEntity, ['id']) {}
