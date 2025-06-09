import { IsEmail, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nome: string;

  @IsString()
  nomeUsuario: string;

  @IsString()
  senha: string;

  @IsEmail()
  email: string;
}