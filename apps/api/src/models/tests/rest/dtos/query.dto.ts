import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class TestQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.TestScalarFieldEnum))
  sortBy?: string
}
