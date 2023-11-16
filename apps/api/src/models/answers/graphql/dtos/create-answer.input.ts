import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Answer } from '../entity/answer.entity'

@InputType()
export class CreateAnswerInput extends OmitType(Answer, ['id'], InputType) {}
