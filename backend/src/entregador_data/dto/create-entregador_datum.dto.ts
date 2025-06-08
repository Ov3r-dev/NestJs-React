import { IsString, IsEmail } from 'class-validator';

export class CreateEntregadorDto {
  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  telefone: string;

  @IsString()
  veiculo: string;

  @IsString()
  nomeUsuario: string;

  @IsString()
  senha: string;

  @IsEmail()
  email: string;
}