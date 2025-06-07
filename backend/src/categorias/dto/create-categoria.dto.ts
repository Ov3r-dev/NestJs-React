import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCategoriaDto {
  @Type(() => String)
  @IsString({ message: 'nome deve ser uma string' })
  nome: string;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean({ message: 'ativa deve ser um valor booleano' })
  ativa?: boolean;
}
