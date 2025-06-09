import { PartialType } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';
import { IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {}


export class UpdateClienteSenhaDto {
  @IsString()
  senha: string;
}