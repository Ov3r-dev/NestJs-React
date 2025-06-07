import { IsString, IsEmail, IsDateString, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProdutoDto {
  @IsString({ message: 'Necessário que nome seja String' })
  nome: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'preco must be a number conforming to the specified constraints' })
  @Min(0.01, { message: 'Necessário que valor seja maior que 0' })
  @Max(10, { message: 'Necessário que valor seja até 10.0' })
  preco: number;

  @IsEmail({}, { message: 'E-mail inválido' })
  emailEmpresa: string;

  @IsDateString({}, { message: 'Data inválida' })
  dataValidade: string; // ❗ Use `string`, não `Date`, para funcionar com `IsDateString`

  @Type(() => Number)
  @IsNumber({}, { message: 'categoriaId must be a number conforming to the specified constraints' })
  @IsNotEmpty({ message: 'categoriaId é obrigatório' })
  categoriaId: number;
}
