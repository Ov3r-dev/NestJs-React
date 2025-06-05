import { PartialType } from '@nestjs/mapped-types';
import { CreateFornecedorDatumDto } from './create-fornecedor_datum.dto';

export class UpdateFornecedorDatumDto extends PartialType(CreateFornecedorDatumDto) {}
