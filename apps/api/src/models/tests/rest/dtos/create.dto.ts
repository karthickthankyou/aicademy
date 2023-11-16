import { OmitType } from '@nestjs/swagger'
import { TestEntity } from '../entity/test.entity'

export class CreateTest extends OmitType(TestEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
