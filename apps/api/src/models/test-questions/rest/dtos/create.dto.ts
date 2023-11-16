import { OmitType } from '@nestjs/swagger'
import { TestQuestionEntity } from '../entity/test-question.entity'

export class CreateTestQuestion extends OmitType(TestQuestionEntity, ['id']) {}
