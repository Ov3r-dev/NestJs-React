import { PartialType } from '@nestjs/mapped-types';
import { CreateEntregadorDatumDto } from './create-entregador_datum.dto';

export class UpdateEntregadorDatumDto extends PartialType(CreateEntregadorDatumDto) {}
