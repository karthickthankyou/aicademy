import { OmitType } from '@nestjs/swagger'
import { ChapterEntity } from '../entity/chapter.entity'

export class CreateChapter extends OmitType(ChapterEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
