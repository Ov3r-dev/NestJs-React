import { PartialType } from '@nestjs/swagger';
import { CreateEntregadorDto } from './create-entregador_datum.dto';

export class UpdateEntregadorDto extends PartialType(CreateEntregadorDto) {}