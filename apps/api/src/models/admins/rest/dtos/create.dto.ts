import { PickType } from '@nestjs/swagger'
import { AdminEntity } from '../entity/admin.entity'

export class CreateAdmin extends PickType(AdminEntity, ['uid']) {}
